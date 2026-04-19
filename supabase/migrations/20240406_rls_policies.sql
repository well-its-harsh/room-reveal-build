-- ROW LEVEL SECURITY (RLS) POLICIES FOR Shree Radhe Tiles & Hardware E-COMMERCE

-- Enable RLS on all relevant tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE ar_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE carts ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE wishlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- 1. PROFILES
CREATE POLICY "Public profiles are viewable by everyone." ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile." ON profiles FOR UPDATE USING (auth.uid() = id);

-- 2. PRODUCTS / CATEGORIES / MEDIA (Public Read)
CREATE POLICY "Products are viewable by everyone." ON products FOR SELECT USING (true);
CREATE POLICY "Categories are viewable by everyone." ON categories FOR SELECT USING (true);
CREATE POLICY "Product media is viewable by everyone." ON product_media FOR SELECT USING (true);
CREATE POLICY "AR assets are viewable by everyone." ON ar_assets FOR SELECT USING (true);
CREATE POLICY "Inventory is viewable by everyone." ON inventory FOR SELECT USING (true);

-- Admin-only write access (assuming role check in profiles)
-- Note: Simplified for migration, usually checks a service-role or a custom function
CREATE POLICY "Admins can do everything on products" ON products FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND (role = 'admin' OR role = 'owner'))
);

-- 3. ADDRESSES
CREATE POLICY "Users can view own addresses." ON addresses FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own addresses." ON addresses FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own addresses." ON addresses FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own addresses." ON addresses FOR DELETE USING (auth.uid() = user_id);

-- 4. CARTS & ITEMS
CREATE POLICY "Users can view own cart." ON carts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own cart." ON carts FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own cart items." ON cart_items FOR SELECT USING (
  EXISTS (SELECT 1 FROM carts WHERE id = cart_items.cart_id AND user_id = auth.uid())
);
CREATE POLICY "Users can insert own cart items." ON cart_items FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM carts WHERE id = cart_items.cart_id AND user_id = auth.uid())
);
CREATE POLICY "Users can update own cart items." ON cart_items FOR UPDATE USING (
  EXISTS (SELECT 1 FROM carts WHERE id = cart_items.cart_id AND user_id = auth.uid())
);
CREATE POLICY "Users can delete own cart items." ON cart_items FOR DELETE USING (
  EXISTS (SELECT 1 FROM carts WHERE id = cart_items.cart_id AND user_id = auth.uid())
);

-- 5. ORDERS & ITEMS
CREATE POLICY "Users can view own orders." ON orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own orders." ON orders FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own order items." ON order_items FOR SELECT USING (
  EXISTS (SELECT 1 FROM orders WHERE id = order_items.order_id AND user_id = auth.uid())
);
CREATE POLICY "Users can insert own order items." ON order_items FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM orders WHERE id = order_items.order_id AND user_id = auth.uid())
);

-- 6. WISHLISTS
CREATE POLICY "Users can view own wishlist." ON wishlists FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own wishlist." ON wishlists FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own wishlist." ON wishlists FOR DELETE USING (auth.uid() = user_id);

-- 7. REVIEWS (Public Read, Authenticated Write)
CREATE POLICY "Reviews are viewable by everyone." ON reviews FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert reviews." ON reviews FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own reviews." ON reviews FOR UPDATE USING (auth.uid() = user_id);

-- 8. APPOINTMENTS
CREATE POLICY "Users can view own appointments." ON appointments FOR SELECT USING (auth.uid() = owner_id);
CREATE POLICY "Users can insert own appointments." ON appointments FOR INSERT WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "Users can update own appointments (cancel)." ON appointments FOR UPDATE USING (auth.uid() = owner_id);
