import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Calendar, Clock, Send, CheckCircle, User, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { createNotification, OWNER_USER_ID } from "@/utils/notifications";
import { useAuth } from "@/contexts/AuthContext";

interface AppointmentFormProps {
  visitType: 'store-visit' | 'video-call' | 'home-visit';
  productId?: string;
  productName?: string;
  onSuccess?: () => void;
  showSuccessMessage?: boolean;
}

export default function AppointmentForm({
  visitType,
  productId,
  productName,
  onSuccess,
  showSuccessMessage = true
}: AppointmentFormProps) {
  const { user } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
    platform: "whatsapp"
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const visitLabel = visitType === 'store-visit' ? 'Store Visit' : visitType === 'video-call' ? 'Video Call' : 'Home Visit';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.date || !form.time) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const { data, error: dbErr } = await supabase.from("appointments").insert({
        customer_id: user?.id || null,
        customer_name: form.name.trim(),
        customer_email: form.email.trim() || null,
        customer_phone: form.phone.trim(),
        appointment_date: form.date,
        time_slot: form.time,
        visit_type: visitType,
        notes: visitType === 'video-call' ? `Platform: ${form.platform}. ${form.notes.trim()}` : (form.notes.trim() || null),
        product_id: productId || null,
        status: "pending"
      }).select().single();

      if (dbErr) throw dbErr;

      // Owner notification
      await createNotification({
        user_id: OWNER_USER_ID,
        title: `New ${visitLabel} Request`,
        message: `${form.name} requested a ${visitLabel} for ${form.date} at ${form.time}`,
        type: visitType === 'video-call' ? 'video-call' : 'appointment',
        link: '/owner/appointments'
      });

      // Customer notification
      if (user?.id) {
        await createNotification({
          user_id: user.id,
          title: 'Visit Request Received',
          message: `Your ${visitLabel} request for ${form.date} is pending confirmation.`,
          type: 'appointment'
        });
      }

      toast.success(`Your ${visitLabel} request has been submitted.`);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err: any) {
      console.error("Appointment submission error:", err);
      toast.error(err.message || "Failed to schedule. Please try again.");
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted && showSuccessMessage) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-[17px] font-semibold text-[#1A1A1A] mb-2">{visitLabel} Requested!</h3>
        <p className="text-[14px] text-[#6B6B6B] leading-relaxed mb-6">
          We've received your request for {new Date(form.date).toLocaleDateString()} at {form.time}. 
          Our team will confirm your slot shortly via SMS/Email.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-[13px] text-[#C8860A] font-semibold hover:underline"
        >
          Book another slot
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-medium text-[#1A1A1A] mb-1.5 flex items-center gap-2">
            <User className="w-3.5 h-3.5 text-[#C8860A]" /> Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Enter your name"
            required
            className="w-full px-3 py-2.5 text-[14px] border border-[#E8E4DF] outline-none focus:border-[#C8860A] transition-colors"
          />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-[#1A1A1A] mb-1.5 flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#C8860A]" /> Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            placeholder="10-digit number"
            required
            className="w-full px-3 py-2.5 text-[14px] border border-[#E8E4DF] outline-none focus:border-[#C8860A] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-[13px] font-medium text-[#1A1A1A] mb-1.5 flex items-center gap-2">
          <Mail className="w-3.5 h-3.5 text-[#C8860A]" /> Email Address
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          placeholder="For confirmation details"
          className="w-full px-3 py-2.5 text-[14px] border border-[#E8E4DF] outline-none focus:border-[#C8860A] transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-medium text-[#1A1A1A] mb-1.5 flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#C8860A]" /> Preferred Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
            min={new Date().toISOString().split('T')[0]}
            required
            className="w-full px-3 py-2.5 text-[14px] border border-[#E8E4DF] outline-none focus:border-[#C8860A] transition-colors"
          />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-[#1A1A1A] mb-1.5 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#C8860A]" /> Preferred Time <span className="text-red-500">*</span>
          </label>
          <select
            value={form.time}
            onChange={(e) => setForm((f) => ({ ...f, time: e.target.value }))}
            required
            className="w-full px-3 py-2.5 text-[14px] border border-[#E8E4DF] outline-none focus:border-[#C8860A] transition-colors bg-white"
          >
            <option value="">Select a slot</option>
            <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
            <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
            <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
            <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
            <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM</option>
          </select>
        </div>
      </div>

      {visitType === 'video-call' && (
        <div className="bg-[#F7F5F2] p-4 border border-[#E8E4DF]">
           <label className="block text-[12px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-3">Preferred Platform</label>
           <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer text-[13px] font-medium text-[#1A1A1A]">
                <input type="radio" value="whatsapp" checked={form.platform === 'whatsapp'} onChange={() => setForm(f => ({...f, platform: 'whatsapp'}))} className="accent-[#C8860A] w-4 h-4" /> WhatsApp Video
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-[13px] font-medium text-[#1A1A1A]">
                <input type="radio" value="gmeet" checked={form.platform === 'gmeet'} onChange={() => setForm(f => ({...f, platform: 'gmeet'}))} className="accent-[#C8860A] w-4 h-4" /> Google Meet
              </label>
           </div>
        </div>
      )}

      <div>
        <label className="block text-[13px] font-medium text-[#1A1A1A] mb-1.5">
          Special Requests / Notes
        </label>
        <textarea
          value={form.notes}
          onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
          placeholder="Anything else we should know?"
          rows={3}
          className="w-full px-3 py-2.5 text-[14px] border border-[#E8E4DF] outline-none focus:border-[#C8860A] transition-colors resize-none"
        />
      </div>

      {error && (
        <p className="text-red-500 text-[13px] bg-red-50 px-3 py-2 border border-red-100 italic">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 h-12 bg-[#1A1A1A] text-white text-[14px] font-bold uppercase tracking-wider hover:bg-[#C8860A] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Scheduling...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> Schedule {visitLabel}
          </>
        )}
      </button>
    </form>
  );
}
