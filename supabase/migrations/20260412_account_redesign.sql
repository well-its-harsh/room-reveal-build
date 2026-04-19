-- 1. Migration for new appointment columns
ALTER TABLE public.appointments 
  ADD COLUMN IF NOT EXISTS cancellation_reason text,
  ADD COLUMN IF NOT EXISTS cancelled_by text;

-- 2. RLS Policies for Customer Security

-- Enquiries: Only self
DROP POLICY IF EXISTS "Customers read own enquiries" ON public.enquiries;
CREATE POLICY "Customers read own enquiries" ON public.enquiries 
  FOR SELECT USING (auth.uid() = user_id);

-- Appointments: Only self
DROP POLICY IF EXISTS "Customers read own appointments" ON public.appointments;
CREATE POLICY "Customers read own appointments" ON public.appointments 
  FOR SELECT USING (auth.uid() = customer_id);

-- Appointments: Update only self (for cancel/reschedule)
DROP POLICY IF EXISTS "Customers update own appointments" ON public.appointments;
CREATE POLICY "Customers update own appointments" ON public.appointments 
  FOR UPDATE USING (auth.uid() = customer_id);

-- Wishlist: Only self
DROP POLICY IF EXISTS "Customers read own wishlist" ON public.wishlists;
CREATE POLICY "Customers read own wishlist" ON public.wishlists 
  FOR SELECT USING (auth.uid() = user_id);

-- Wishlist: Full management for self
DROP POLICY IF EXISTS "Customers manage own wishlist" ON public.wishlists;
CREATE POLICY "Customers manage own wishlist" ON public.wishlists 
  FOR ALL USING (auth.uid() = user_id);
