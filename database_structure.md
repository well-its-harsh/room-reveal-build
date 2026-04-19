# DATABASE STRUCTURE — SUPABASE (POSTGRESQL)

## OVERVIEW
Relational schema for e-commerce + AR + AI platform. All IDs are UUID, timestamps are ISO (`timestamp without time zone`), and PKs default to `gen_random_uuid()`.

---

## 1. CORE TABLES 

### profiles
* `id` (uuid, PK, FK → `auth.users.id` cascade)
* `full_name` (text, null)
* `phone` (text, null)
* `role` (text, default 'customer')
* `created_at` (timestamp, default now())

### categories
* `id` (uuid, PK)
* `name` (text, NOT NULL)
* `slug` (text, NOT NULL, UNIQUE)
* `created_at` (timestamp, default now())

### products
* `id` (uuid, PK)
* `category_id` (uuid, null, FK → `categories.id`)
* `name` (text, NOT NULL)
* `description` (text, null)
* `price` (numeric(10,2), NOT NULL)
* `width` (numeric, null)
* `height` (numeric, null)
* `depth` (numeric, null)
* `ar_enabled` (boolean, default false)
* `brand` (text, null)
* `sku` (text, null, UNIQUE)
* `is_featured` (boolean, default false)
* `status` (text, default 'active')
* `rating_avg` (numeric, default 0)
* `rating_count` (integer, default 0)
* `created_at` / `updated_at` (timestamp)

### product_media (Images)
* `id` (uuid, PK)
* `product_id` (uuid, null, FK → `products.id` cascade)
* `media_url` (text, NOT NULL)
* `media_type` (text, default 'image')
* `created_at` (timestamp)

### ar_assets (AR Models)
* `id` (uuid, PK)
* `product_id` (uuid, null, FK → `products.id`)
* `asset_url` (text, null)
* `asset_type` (text, null)
* `status` (text, default 'ready')
* `created_at` (timestamp)

### product_variants
* `id` (uuid, PK)
* `product_id` (uuid, null, FK → `products.id` cascade)
* `name` (text, null)
* `price` (numeric(10,2), null)
* `sku` (text, null, UNIQUE)
* `attributes` (jsonb, null)
* `created_at` (timestamp)

### inventory
* `id` (uuid, PK)
* `product_id` (uuid, null, FK → `products.id`)
* `quantity` (integer, default 0)
* `last_updated` (timestamp)

---

## 2. E-COMMERCE & USER TABLES

### carts & cart_items
* **carts**: `id`, `user_id`
* **cart_items**: `id`, `cart_id` (cascade), `product_id`, `quantity` (default 1)

### orders & order_items
* **orders**: `id`, `user_id`, `status` (default 'pending'), `total_amount`, `created_at`
* **order_items**: `id`, `order_id` (cascade), `product_id`, `quantity`, `price`
* **transactions**: `id`, `order_id`, `payment_method`, `payment_status`, `amount`, `created_at`

### shipments & shipment_events
* **shipments**: `id`, `order_id`, `tracking_number`, `courier`, `status`, `estimated_delivery`
* **shipment_events**: `id`, `shipment_id` (cascade), `status`, `description`, `created_at`

### addresses
* `id`, `user_id`, `full_address`, `city`, `state`, `pincode`, `is_default`, `created_at`

### reviews
* `id`, `user_id`, `product_id`, `rating` (1-5 constraint), `comment`, `created_at`

### wishlists
* `id`, `user_id`, `product_id`, `created_at`

### appointments
* `id`, `user_id`, `date`, `time`, `status` (default 'pending'), `notes`, `created_at`

### makeover_projects
* `id`, `user_id`, `input_image_url`, `generated_images` (jsonb), `selected_products` (jsonb), `created_at`

### admin_logs & email_logs
* **admin_logs**: `id`, `admin_id`, `action`, `target_table`, `target_id`, `created_at`
* **email_logs**: `id`, `user_id`, `type`, `status`, `metadata` (jsonb), `created_at`

---

## 3. GLOBAL CONFIGURATION

### BUCKETS
* `product-models`: `.GLB` or `.OBJ` AR Models (Used by `ar_assets`)
* `product-images`: Standard JPG/PNGs (Used by `product_media`)
* `user-uploads`: Room images (Used by `makeover_projects`)

### INSERT FLOW FOR PRODUCTS (REQUIREMENTS)
1. Generate / insert `products` row (Validation: width, height, depth required).
2. Grab returning `product_id`.
3. Insert into `product_media` (`media_type: 'image'`)
4. If AR Enabled: Insert into `ar_assets` (`asset_url`, `asset_type`).
