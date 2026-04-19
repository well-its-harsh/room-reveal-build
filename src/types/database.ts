export interface Profile {
  id: string;
  full_name: string | null;
  phone: string | null;
  role: 'customer' | 'admin' | 'owner' | 'staff';
  avatar_url?: string | null;
  preferences?: {
    enquiryReply?: boolean;
    appointmentConfirm?: boolean;
    newArrivals?: boolean;
    [key: string]: any;
  } | null;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Product {
  id: string;
  category_id: string;
  name: string;
  description: string | null;
  price: number;
  brand: string | null;
  width: number | null;
  height: number | null;
  depth: number | null;
  ar_enabled: boolean;
  rating_avg: number | null;
  rating_count: number | null;
  is_featured: boolean;
  is_on_sale?: boolean;
  is_new_arrival?: boolean;
  original_price?: number | null;
  discounted_price?: number | null;
  discount_percentage?: number | null;
  sale_label?: string | null;
  sale_ends_at?: string | null;
  sort_order?: number;
  status: 'active' | 'draft' | 'archived';
  features?: string | null;
  specifications?: string | null;
  additional_info?: string | null;
  care_maintenance?: string | null;
  bulk_discount_info?: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProductMedia {
  id: string;
  product_id: string;
  media_url: string;
  media_type: 'image' | '3d_model';
  created_at: string;
}

export interface Inventory {
  id: string;
  product_id: string;
  quantity: number;
  last_updated: string;
}

export interface Order {
  id: string;
  user_id: string;
  status: string;
  total_amount: number;
  created_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price: number;
}

export interface Transaction {
  id: string;
  order_id: string;
  payment_method: string;
  payment_status: string;
  amount: number;
  created_at: string;
}

export interface Review {
  id: string;
  product_id: string;
  user_id: string;
  rating: number;
  comment: string | null;
  created_at: string;
}

export interface AdminLog {
  id: string;
  admin_id: string;
  action: string;
  target_table: string;
  target_id: string;
  created_at: string;
}

export interface Shipment {
  id: string;
  order_id: string;
  tracking_number: string | null;
  courier: string | null;
  status: string;
  estimated_delivery: string | null;
  created_at: string;
}

export interface Address {
  id: string;
  user_id: string;
  full_address: string;
  city: string;
  state: string;
  pincode: string;
  created_at: string;
}

export interface Wishlist {
  id: string;
  user_id: string;
  product_id: string;
  created_at: string;
}

export interface ARAsset {
  id: string;
  product_id: string;
  asset_url: string;
  asset_type: string;
  status: string;
  created_at: string;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  name: string;
  sku?: string | null;
  color?: string | null;
  finish?: string | null;
  size?: string | null;
  material?: string | null;
  original_price?: number | null;
  discounted_price?: number | null;
  stock_quantity: number;
  is_default: boolean;
  sort_order: number;
  created_at: string;
}

export interface CartItemDB {
  id: string;
  cart_id: string;
  product_id: string;
  quantity: number;
}

export interface CartDB {
  id: string;
  user_id: string;
  created_at: string;
}

export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  message: string | null;
  product_id?: string | null;
  channel: string | null;
  status: 'new' | 'in-progress' | 'resolved' | 'spam';
  replied_at?: string | null;
  reply_message?: string | null;
  created_at: string;
}

export interface Appointment {
  id: string;
  customer_id: string | null;
  customer_name: string | null;
  customer_email: string | null;
  customer_phone: string | null;
  appointment_date: string | null;
  time_slot: string | null;
  status: 'pending' | 'confirmed' | 'rejected' | 'rescheduled' | 'completed';
  visit_type: 'store-visit' | 'video-call' | 'home-visit';
  notes: string | null;
  rejection_reason?: string | null;
  reschedule_note?: string | null;
  owner_id?: string | null;
  product_id?: string | null;
  created_at: string;
}

export interface Notification {
  id: string;
  user_id: string | null;
  title: string | null;
  message: string;
  is_read: boolean;
  type: 'enquiry' | 'appointment' | 'video-call' | 'general' | 'review' | 'chat';
  link?: string | null;
  created_at: string;
}

// Extended types with joins
export interface ProductWithDetails extends Product {
  category?: Category;
  categories?: Category;
  product_media?: ProductMedia[];
  inventory?: Inventory[];
  reviews?: Review[];
  ar_assets?: ARAsset[];
  variants?: ProductVariant[];
}
