import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format, addDays, isSunday, isFuture } from 'date-fns';
import { Calendar as CalendarIcon, Clock, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { TIME_SLOTS, getAvailableSlots, isSlotAvailable } from '@/lib/timeSlots';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const formSchema = z.object({
  customer_name: z.string().min(2, 'Name must be at least 2 characters'),
  customer_email: z.string().email('Invalid email address'),
  customer_phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  product_of_interest: z.string().optional(),
  appointment_date: z.date({
    required_error: "Please select a date",
  }),
  time_slot: z.string({
    required_error: "Please select a time slot",
  }),
  notes: z.string().max(300, 'Notes must be less than 300 characters').optional(),
});

interface VideoCallBookingFormProps {
  productId?: string;
  productName?: string;
  onSuccess?: () => void;
}

const VideoCallBookingForm: React.FC<VideoCallBookingFormProps> = ({ productId, productName, onSuccess }) => {
  const [availableSlots, setAvailableSlots] = useState<{ slot: string; available: boolean }[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState<any>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customer_name: '',
      customer_email: '',
      customer_phone: '',
      product_of_interest: productName || '',
      notes: '',
    },
  });

  const selectedDate = form.watch('appointment_date');

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        
        if (profile) {
          form.reset({
            ...form.getValues(),
            customer_name: profile.full_name || '',
            customer_email: user.email || '',
            customer_phone: profile.phone || '',
          });
        }
      }
    };
    fetchUser();
  }, [form]);

  useEffect(() => {
    if (selectedDate) {
      const dateStr = format(selectedDate, 'yyyy-MM-dd');
      getAvailableSlots(supabase, dateStr).then(setAvailableSlots);
    }
  }, [selectedDate]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      const dateStr = format(values.appointment_date, 'yyyy-MM-dd');
      
      // 1. Race condition guard
      const available = await isSlotAvailable(supabase, dateStr, values.time_slot);
      if (!available) {
        toast.error("This slot was just booked. Please choose another time.");
        // Refresh slots
        getAvailableSlots(supabase, dateStr).then(setAvailableSlots);
        setLoading(false);
        return;
      }

      // 2. INSERT into appointments
      const { data: appointment, error: apptError } = await supabase
        .from('appointments')
        .insert({
          customer_id: user?.id || null,
          customer_name: values.customer_name,
          customer_email: values.customer_email,
          customer_phone: values.customer_phone,
          appointment_date: dateStr,
          time_slot: values.time_slot,
          visit_type: 'video-call',
          status: 'pending',
          notes: values.notes,
          product_id: productId || null,
        })
        .select()
        .single();

      if (apptError) throw apptError;

      // 3. Insert owner notification
      await supabase.from('notifications').insert({
        title: 'New Video Call Request',
        message: `${values.customer_name} wants a video call on ${dateStr} at ${values.time_slot}`,
        type: 'video-call',
        link: '/owner/appointments'
      });

      // 4. If logged in: insert customer notification
      if (user) {
        await supabase.from('notifications').insert({
          user_id: user.id,
          title: 'Request Received',
          message: 'Your video call request is pending confirmation.',
          type: 'appointment'
        });
      }

      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (error: any) {
      console.error('Booking error:', error);
      toast.error(error.message || "Failed to book appointment");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg luxury-shadow">
        <CheckCircle2 className="w-16 h-16 text-[#C8860A] mb-4 animate-bounce" />
        <h2 className="text-2xl font-serif font-semibold text-[#1A1A1A] mb-2">Request Submitted</h2>
        <p className="text-muted-foreground mb-6">
          Your video call request has been submitted for {format(form.getValues('appointment_date'), 'MMM dd, yyyy')} at {form.getValues('time_slot')}. 
          You'll receive a confirmation notification.
        </p>
        <Button 
          onClick={() => setSubmitted(false)}
          className="bg-[#1A1A1A] text-white hover:bg-black/90"
        >
          Book Another
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto p-4 md:p-6 bg-white rounded-xl luxury-shadow border border-[#E8E4DF]">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="customer_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#1A1A1A]">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} className="h-12 border-[#E8E4DF] focus:ring-[#C8860A]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="customer_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#1A1A1A]">Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} className="h-12 border-[#E8E4DF] focus:ring-[#C8860A]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="customer_phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#1A1A1A]">Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+91 98765 43210" {...field} className="h-12 border-[#E8E4DF] focus:ring-[#C8860A]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="product_of_interest"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#1A1A1A]">Product of Interest</FormLabel>
                <FormControl>
                  <Input placeholder="E.g. Marble Finish Tiles" {...field} className="h-12 border-[#E8E4DF] focus:ring-[#C8860A]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="appointment_date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-[#1A1A1A]">Preferred Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full h-12 pl-3 text-left font-normal border-[#E8E4DF] hover:bg-secondary",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        return date < today || isSunday(date);
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="time_slot"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#1A1A1A]">Available Time Slots</FormLabel>
                <div className="grid grid-cols-3 gap-2">
                  {TIME_SLOTS.map((slot) => {
                    const isBooked = availableSlots.find(s => s.slot === slot)?.available === false;
                    const isSelected = field.value === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        disabled={isBooked || !selectedDate}
                        onClick={() => field.onChange(slot)}
                        className={cn(
                          "py-2 px-1 text-[10px] sm:text-xs rounded border transition-all duration-200",
                          isSelected 
                            ? "bg-[#C8860A] text-white border-[#C8860A]" 
                            : isBooked 
                              ? "bg-gray-100 text-gray-400 border-gray-100 cursor-not-allowed" 
                              : "border-[#C8860A] text-[#C8860A] hover:bg-[#C8860A]/10",
                          !selectedDate && "opacity-50 cursor-not-allowed"
                        )}
                      >
                        {slot}
                        {isBooked && <div className="text-[8px] uppercase font-bold">Booked</div>}
                      </button>
                    );
                  })}
                </div>
                {!selectedDate && <p className="text-[10px] text-[#C8860A] mt-1">Please select a date first</p>}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#1A1A1A]">Notes / Special Requests (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us what you're looking for..." 
                  className="resize-none border-[#E8E4DF] focus:ring-[#C8860A]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={loading}
          className="w-full h-14 bg-[#C8860A] hover:bg-[#A36D07] text-white text-lg font-semibold tracking-wide transition-all luxury-shadow group"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
              Processing...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Request Video Call
              <Clock className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default VideoCallBookingForm;
