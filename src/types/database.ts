export interface Profile {
  id: string;
  full_name: string | null;
  phone: string | null;
  role: 'customer' | 'admin' | 'staff';
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
  width: number | null;
  height: number | null;
  depth: number | null;
  ar_enabled: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductMedia {
  id: string;
  product_id: string;
  media_url: string;
  media_type: 'image' | '3d_model' | 'scan';
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

// Extended types with joins
export interface ProductWithDetails extends Product {
  category?: Category;
  product_media?: ProductMedia[];
  inventory?: Inventory[];
  reviews?: Review[];
}
