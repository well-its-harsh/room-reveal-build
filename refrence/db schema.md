All tables use UUID primary keys, created\_at / updated\_at timestamps. RLS (Row Level Security) policies applied per role. Supabase Storage used for images, 3D models, AR assets.

### Core Tables

| Table | Key Columns | Notes |
| :---- | :---- | :---- |
| `profiles` | id (UUID, FK → auth.users), full\_name, phone, role (admin/owner/customer), avatar\_url, created\_at | Extended Supabase auth. Role assigned on first login. |
| `categories` | id, name, slug, parent\_id (self-ref FK), image\_url, area\_tag (bathroom/kitchen/living/outdoor), sort\_order | Hierarchical: parent \= Floor Tiles, child \= Matte Floor Tiles |
| `brands` | id, name, slug, logo\_url, description | Filterable on collection pages |
| `products` | id, name, slug, description, category\_id (FK), brand\_id (FK), dimensions, finish, color, material, availability (in\_stock/limited/out\_of\_stock), is\_featured, sort\_order, created\_at | No price column — enquiry-based. Availability is display-only. |
| `product_media` | id, product\_id (FK), url, type (image/3d\_model/ar\_asset/video), sort\_order, alt\_text | Multiple media per product. 3D \= .glb/.gltf. AR \= image or model. Stored in Supabase Storage. |
| `product_variants` | id, product\_id (FK), variant\_name (e.g., "60×60 Matte Black"), finish, color, size, availability | For similar-products catalog. Each variant can have its own media. |
| `wishlists` | id, user\_id (FK), product\_id (FK), created\_at | Unique constraint: user\_id \+ product\_id |
| `reviews` | id, user\_id (FK), product\_id (FK), rating (1–5), comment, visit\_date, approved, created\_at | Moderated by admin before display |

### Enquiry Tables

| Table | Key Columns | Notes |
| :---- | :---- | :---- |
| `enquiries` | id, name, phone, email, message, product\_id (FK, nullable), category\_id (FK, nullable), channel (product/category/chatbot/whatsapp/general), preferred\_contact (whatsapp/call/email), status (new/in\_progress/resolved), user\_id (FK, nullable for guest), owner\_notified\_at, created\_at | Central enquiry log. Works for both logged-in and guest users. |
| `appointments` | id, user\_id (FK, nullable), name, phone, appointment\_date, time\_slot, categories\_of\_interest (text\[\]), notes, status (pending/confirmed/completed/cancelled), confirmed\_by (owner user\_id), created\_at | Store visit booking. Owner confirms from dashboard. |
| `video_call_requests` | id, user\_id (FK, nullable), name, phone, product\_id (FK, nullable), preferred\_date, preferred\_time, platform (google\_meet/whatsapp\_video), notes, status (requested/scheduled/completed), meeting\_link, created\_at | Video call scheduling. Owner adds meeting\_link on confirmation. |
| `chatbot_leads` | id, session\_id, user\_id (FK, nullable), conversation\_summary, intent\_detected, product\_ids\_discussed (UUID\[\]), routed\_to (whatsapp/enquiry/appointment), created\_at | Chatbot interaction logging for owner analytics |

### Content Tables

| Table | Key Columns | Notes |
| :---- | :---- | :---- |
| `videos` | id, title, description, youtube\_url (or storage\_url), thumbnail\_url, category (demo/showroom/installation/testimonial), duration\_seconds, is\_published, sort\_order, created\_at | Owner-managed video gallery |
| `hero_banners` | id, desktop\_image\_url, mobile\_image\_url, headline, subtext, cta\_text, cta\_link, sort\_order, is\_active | Owner-managed carousel slides |
| `trust_badges` | id, icon\_url, heading, description, link, sort\_order | Configurable trust strip |
| `area_tiles` | id, area\_name (bathroom/kitchen/living/outdoor), image\_url, collection\_link, sort\_order | "Shop By Area" section config |
| `store_settings` | id, store\_name, phone, whatsapp\_number, email, address, business\_hours (JSONB), holiday\_dates (date\[\]), google\_maps\_embed\_url | Single row. Used across site and appointment booking. |
| `notifications` | id, owner\_id (FK), type (enquiry/appointment/video\_call), reference\_id (UUID), message, is\_read, created\_at | Supabase Realtime on this table. Owner dashboard subscribes to INSERT events. |

### Auth Strategy

**Supabase Auth providers enabled:** Google OAuth (primary), Email \+ Password (fallback)

**Role assignment flow:**  
1\. User signs in for the first time (Google or email)  
2\. Trigger: `after_user_created` Supabase function checks if email matches pre-configured owner/admin emails → assigns role automatically  
3\. All other new users → default role: `customer`  
4\. Admin can manually change roles from admin dashboard

**RLS policies (key rules):**  
\- `products`: SELECT public; INSERT/UPDATE/DELETE owner+admin only  
\- `enquiries`: INSERT public (including anonymous); SELECT owner+admin; UPDATE own row (customer)  
\- `appointments`: INSERT public; SELECT own (customer) \+ all (owner/admin); UPDATE owner+admin  
\- `wishlists`: SELECT/INSERT/DELETE own row only (customer)  
\- `notifications`: SELECT/UPDATE own (owner). No customer access.

### Supabase Realtime Subscriptions

* `notifications` table: owner dashboard subscribes to INSERT → triggers notification bell \+ sound \+ toast  
* `appointments` table: owner subscribes to INSERT of status='pending' → appointment alert  
* `video_call_requests`: owner subscribes to INSERT → video call request alert

