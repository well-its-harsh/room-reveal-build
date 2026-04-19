## 1\. Design Philosophy

The visual design mirrors **Ruhe India**'s clean, minimal, high-photography aesthetic: white background, dark text, minimal borders, generous whitespace, product-photography-forward. The key differences are: (1) tiles/hardware have a warmer, more earthy palette than plumbing; (2) no price-centric UI (no strikethrough MRP), replaced by enquiry-centric CTAs; (3) the floating AI chatbot and WhatsApp button are always visible.

## 2\. Color System

| Token | Value | Usage |
| :---- | :---- | :---- |
| Primary background | \#FFFFFF | Page bg, cards, navbar, modals |
| Surface / secondary bg | \#F7F5F2 (warm off-white) | Section backgrounds, trust strip, tabs |
| Primary text | \#1A1A1A | Headings, product names, nav items |
| Secondary text | \#6B6B6B | Subtitles, review counts, breadcrumbs |
| Brand accent | \#C8860A (warm amber/gold) | Enquire Now CTA buttons, active tab underline, badge highlights. Tile/hardware warmth. |
| Brand accent hover | \#A36D07 | Hover state on amber CTA buttons |
| Promo bar bg | \#1A1A1A | Top sticky banner |
| Promo bar text | \#FFFFFF | Promo banner text |
| Availability: In Stock | \#1A8C4A green | "In Stock" label |
| Availability: Limited | \#D97706 amber | "Limited Stock" label |
| Availability: Out of Stock | \#DC2626 red | "Out of Stock" label |
| WhatsApp green | \#25D366 | Floating WhatsApp FAB button |
| Chatbot accent | \#C8860A (brand amber) | Chatbot FAB \+ header |
| Card border | \#E8E4DF | Product card, modal borders (0.5px) |

## 3\. Typography Scale

| Element | Size | Weight | Usage |
| :---- | :---- | :---- | :---- |
| Hero headline | 36–48px | 500 | Hero banner overlay text |
| Section heading (H2) | 24–28px | 500 | "Trending Now", "Shop By Area", "Videos" |
| Card product name | 14–15px | 400 | Product card title |
| Card brand name | 12–13px | 400 | Brand label under product name |
| Availability badge | 11–12px | 500 | "In Stock" / "Limited" labels |
| Category label | 12–13px | 500 | Sub-category chip on card |
| CTA button text | 14px | 500 | "Enquire Now", "Book Visit", "View in My Space" |
| Nav items | 14–15px | 400–500 | Primary navigation |
| Promo bar | 13px | 400 | Top banner message |
| Breadcrumb | 12px | 400 | Navigation trail |
| Trust badge heading | 13–14px | 500 | Icon strip label |
| Trust badge body | 12–13px | 400 | Icon strip description |

Font family: Clean sans-serif — Inter or system-ui recommended. No decorative fonts. Warm off-white backgrounds pair well with slightly warm gray text rather than pure black.

## 4\. Page-by-Page Breakdown

### 4.1 Homepage

#### Section 1 — Sticky Promotional Bar

* Full-width dark (\#1A1A1A) background, white text, 40px height  
* Message: e.g., "Visit our showroom — open Mon–Sat 10am–7pm  |  Free consultation available"  
* Appears on all pages (position: sticky, top: 0, z-index: 100\)  
* Optionally: scrolling marquee text for multiple announcements

#### Section 2 — Navigation Header

* **Left:** Logo (image \+ "Shree Radhe Tiles & Hardware" wordmark)  
* **Center:** Search bar with product-type filter dropdown (same pattern as Ruhe)  
* **Right:** Store Locator | Login/Account | Wishlist \[count\] | "Book Visit" CTA button (amber, prominent)  
* **Below:** Mega menu — Tiles (Floor Tiles, Wall Tiles, Outdoor Tiles, Mosaic, Designer Tiles) | Hardware (Door Hardware, Window Hardware, Bathroom Fittings, Kitchen Hardware) | Sanitaryware | Brands | Videos | Contact  
* Mega menu: 2-level flyout identical to Ruhe pattern. Mobile: hamburger → slide-in panel with "Back" links  
* Sticky on scroll (header shrinks slightly)

#### Section 3 — Hero Banner Carousel

* Full-width slideshow, 4–6 slides. Each: high-quality room photography (tiles in situ)  
* Overlay text: headline \+ sub-text \+ dual CTA ("Browse Catalog" \+ "Book Free Consultation")  
* Responsive: separate 980px (mobile) and 1400px (desktop) images per slide  
* Controls: prev/next arrows, slide counter (1/4), pause/play button  
* Animation: slide or cross-fade transition, \~5s autoplay interval

#### Section 4 — Trust Badge Strip

* 4 columns on warm off-white (\#F7F5F2) background  
* Each: Icon (SVG, 48px) \+ Bold heading \+ 1-line description  
* Columns: 🏠 Wide Range | ✓ Best Brands | 💬 Expert Advice | 📅 Free Consultation  
* Each links to relevant page (range → catalog, brands → brand filter, advice → contact, consultation → appointment page)

#### Section 5 — Shop By Area

* Section heading: "Shop By Area"  
* 4-tile grid (2×2 on mobile, 4-column on desktop)  
* Each tile: full-bleed lifestyle room photograph \+ area name overlay (bottom-left, semi-transparent gradient)  
* Areas: Bathroom | Kitchen | Living Room | Outdoor  
* Hover effect: subtle scale (1.03) \+ overlay darkens slightly  
* Image count: 4 lifestyle images (NOT product-isolated)

#### Section 6 — Trending Now (Tabbed Carousel)

* Section heading: "Trending Now" (same structure as Ruhe Best Sellers)  
* 7 category tabs: Floor Tiles | Wall Tiles | Bathroom Fittings | Door Hardware | Sanitaryware | Kitchen Hardware | Designer Tiles  
* Each tab: horizontal scrollable product card carousel, \~4 cards visible on desktop  
* Product card: multi-image, brand chip, product name, availability badge, "Enquire Now" \+ "Save" buttons, AR icon shortcut  
* Prev/Next scroll arrows on carousel

#### Section 7 — Video Gallery (Homepage Preview)

* Section heading: "Explore Our Showroom & Products"  
* 3-column grid of video thumbnails on desktop (1 column mobile)  
* Each: YouTube iframe embed or custom player with play-on-click, video title below, category chip  
* Video types: Showroom walkthrough, product demos (tile laying, fitting installation), design inspiration, customer testimonials  
* "View All Videos →" link to dedicated /videos page  
* Animation: thumbnail hover → play icon scales (1.1), slight shadow

#### Section 8 — AI Makeover Teaser

* Full-width section (warm surface background)  
* Left: before/after slider image of AI-redesigned bathroom  
* Right: headline "Transform Your Space with AI" \+ description \+ "Try AI Makeover →" CTA button (amber)  
* Links to /ai-makeover page

#### Section 9 — Enquiry CTAs Strip

* 3-column strip: "📞 Call Us", "📅 Book Store Visit", "🎥 Request Video Call"  
* Each column: icon \+ heading \+ phone/button \+ availability info  
* Dark background (\#1A1A1A) with white text — visually anchors the page before footer

#### Section 10 — Footer

* 4-column: Logo \+ about | Quick links | Categories | Contact \+ social icons  
* Bottom bar: copyright, policy links (Privacy Policy, Terms)  
* Warm off-white background (\#F7F5F2)

### 4.2 Product Catalog / Collection Page

* H1 page title: e.g., "Floor Tiles"  
* Breadcrumb: Home → Tiles → Floor Tiles  
* Left sidebar: filter panel (Category, Brand, Size, Finish, Color, Availability) — sticky on scroll  
* Right: product grid (3 columns desktop, 2 tablet, 1 mobile)  
* Sort by: Newest, Most Enquired, Brand A–Z  
* Below grid heading: Sub-collection tiles (e.g., Matte / Glossy / Textured / Anti-skid) — same pattern as Ruhe collection sub-tiles  
* Product count displayed: "Showing 24 of 80+ products"  
* Infinite scroll or "Load More" pagination

### 4.3 Product Detail Page (PDP)

* Breadcrumb: Home → \[Category\] → \[Product Name\]  
* Layout: 2-column (gallery left 55%, info right 45%)  
* **Gallery:** thumbnail strip (left) \+ main view; tabs: Photos | 3D Model | AR View  
* 3D Model tab: Three.js viewer embedded inline — rotate/zoom/inspect  
* AR View tab: launches camera overlay for "View in My Space"  
* Image count: 5–8 product images \+ 1 3D model asset \+ 1 AR asset  
* **Right panel:** Product name (H1), Brand chip, Category breadcrumb chip, Availability badge, Dimensions, Finish/Colour chips, Description  
* **CTA cluster (right panel, prominent):**

**Primary CTA:** "Enquire Now" button (amber, full-width) → opens modal with pre-filled product reference  
**Secondary CTAs:** "Book Store Visit" (outline button) | "Request Video Call" (outline button) | "Save to Wishlist" (heart icon)  
**Quick contact:** WhatsApp chat icon with pre-filled message about this product  
**Sharing:** Share product link

* Below fold: Product specifications table, Similar Products catalog (horizontal scroll of 50+ related items), Reviews section

### 4.4 Similar Products Catalog (Critical New Pattern)

* Section heading on PDP: "Similar Products in This Category" or "More in \[Category\]"  
* Layout: horizontal scrollable row of compact cards (same category, different size/color/brand/finish)  
* Each compact card: thumbnail image, product name (truncated), brand, finish/color chip, availability badge, "Enquire for This" micro-button  
* Card width: \~220px on desktop  
* Scroll: touch-scrollable on mobile, drag-scrollable on desktop  
* "View Full Catalog →" link to collection page with pre-applied category filter  
* On collection page: toggle between "Grid View" and "Catalog View" (dense list for bulk browsing)

### 4.5 AR — View in My Space

* Full-screen overlay modal or dedicated route (/ar/:productId)  
* Camera feed as background (WebRTC via Web Camera API)  
* Product image/3D model overlaid using Three.js  
* Controls: drag to reposition, pinch/scroll to scale, rotate handles  
* Capture screenshot button → save to gallery or share  
* Permission prompt before camera access: friendly explanation of why camera is needed  
* Desktop: webcam feed. Mobile: rear camera preferred.

### 4.6 AI Makeover Page (/ai-makeover)

* 3-step flow: (1) Upload room photo → (2) Select style (Modern, Traditional, Minimal, Luxe, Industrial) \+ colour preferences → (3) View generated redesign  
* Generated output: Gemini API returns redesigned room image \+ list of suggested products (with "Enquire Now" per suggestion)  
* Before/after comparison slider  
* Save / share redesign  
* Loading state: animated progress indicator with message "Our AI is designing your dream space…"

### 4.7 Appointment Booking Page (/book-visit)

* Step 1: Select category of interest (checklist: Floor Tiles, Wall Tiles, Bathroom, etc.)  
* Step 2: Choose date (calendar, disabled: Sundays \+ holidays)  
* Step 3: Choose time slot (e.g., 10am, 11am, … 5pm — grayed out if full)  
* Step 4: Enter name, phone, optional notes  
* Confirmation screen: date/time/store address \+ "Add to Google Calendar" button  
* Owner dashboard: list of upcoming appointments with status (Pending/Confirmed/Completed)

### 4.8 Video Page (/videos)

* Grid of video cards (3 columns desktop, 2 tablet, 1 mobile)  
* Filter by category: All | Product Demo | Showroom | Installation Guide | Customer Stories  
* Each card: embedded thumbnail with play overlay, title, category chip, duration  
* Click → inline expand player or navigate to video detail page

### 4.9 Floating Elements (Always Visible)

| Element | Position | Behavior |
| :---- | :---- | :---- |
| WhatsApp FAB | Bottom-left, fixed | Green circle (\#25D366), WhatsApp icon. Click → opens WhatsApp with pre-filled message including current page/product URL. On mobile: direct app deep-link. |
| AI Chatbot FAB | Bottom-right, fixed | Amber circle (brand color). Click → expands chatbot window (300×450px). Powered by Gemini API. Answers product questions, suggests categories, routes to enquiry/appointment. Has "Talk to Human" button that opens WhatsApp. |
| Scroll-to-top | Bottom-right above chatbot, appears after 400px scroll | Appears/disappears with opacity transition |

### 4.10 Owner Dashboard (/dashboard/owner)

* Overview: metrics cards — Today's Enquiries, Pending Appointments, New This Week, Total Products  
* Enquiry feed: real-time list (Supabase Realtime), badge count, mark as read/responded  
* Appointment calendar: weekly/monthly view of booked slots  
* Product management: add/edit/delete products, upload images \+ 3D assets  
* Video management: add/remove video links  
* Analytics: most enquired products, top categories, enquiry channel breakdown

## 5\. Component Inventory

| Component | Variants | Key Properties |
| :---- | :---- | :---- |
| Product card | Standard (grid), Compact (similar products), Wide (featured) | Multi-image, brand chip, availability badge, Enquire \+ Save CTAs, AR shortcut icon |
| Hero banner carousel | Full-width slideshow | 4–6 slides, dual responsive images, dual CTA, autoplay, pause/play, slide counter |
| Area tile | Homepage 4-tile grid | Lifestyle image, gradient overlay, label, hover scale |
| Trust badge strip | 4-column, warm bg | SVG icon \+ heading \+ description \+ link |
| Tabbed carousel | Trending/Best Sellers | 7 tabs, horizontal scroll, prev/next arrows |
| Video card | Grid card, Homepage preview | YouTube thumbnail, play overlay, title, category chip, duration |
| AI Makeover teaser | Homepage section | Before/after slider, CTA |
| Enquiry modal | Product, Category, General | Pre-filled product ref, name/phone/message/contact-pref fields, submit → owner notification |
| Appointment picker | Full-page, modal | Category checklist, date calendar, time slots, confirmation |
| Video call request | Modal | Product ref, name/phone, preferred date/time, platform |
| WhatsApp FAB | Fixed floating | Green circle, pre-filled message, bottom-left |
| Chatbot FAB | Fixed floating, expandable | Amber circle, Gemini-powered, 300×450 panel, bottom-right |
| 3D model viewer | PDP tab | Three.js canvas, rotate/zoom/inspect controls |
| AR viewer | Full-screen overlay | Camera feed, product overlay, drag/scale/rotate, screenshot |
| Mega menu | Tiles, Hardware, Sanitaryware | 2-level flyout, mobile back-link navigation |
| Search bar | Header | Text input \+ product-type dropdown filter |
| Breadcrumb | Collection \+ PDP | Home → Category → Sub-category → Product |
| Availability badge | In Stock / Limited / Out of Stock | Colored dot \+ label, on cards and PDP |
| Filter sidebar | Collection page | Category, Brand, Size, Finish, Color, Availability — sticky, collapsible on mobile |
| Similar products rail | PDP horizontal scroll | Compact cards (\~220px), category-filtered, "Enquire for This" per card, "View Full Catalog" link |
| Review card | PDP reviews section | Star rating, comment, visit date, product purchased |
| Owner notification toast | Dashboard | Real-time Supabase push, sound alert, badge count |

## 6\. Layout System

| Section / Page | Grid Type | Columns (Desktop) | Spacing |
| :---- | :---- | :---- | :---- |
| Hero banner | Full-bleed | 1 | Zero margin |
| Trust badge strip | Flex row | 4 | Wide even distribution |
| Shop by Area | CSS Grid | 4 | 8–12px gap |
| Trending carousel | Horizontal scroll | \~4 visible (220px cards) | 12px card gap |
| Video gallery (homepage) | CSS Grid | 3 | 16px gap |
| Collection product grid | CSS Grid | 3 \+ left filter sidebar (240px) | 16px gap |
| Similar products rail (PDP) | Horizontal scroll | \~5 compact cards visible | 10px gap |
| PDP main layout | 2-column | Gallery 55% \+ Info 45% | 32px gap |
| AI Makeover page | Full-width steps | Centered content max 720px | Wide vertical spacing |
| Appointment page | Stepper full-width | Centered max 640px | Wide vertical spacing |
| Owner dashboard | Sidebar \+ content | 240px sidebar \+ flex content | 16–24px gap |

## 7\. UX Strengths of This Design

Enquiry-first architecture removes purchase anxiety — customers can explore freely without committing financially, lowering bounce rate on a high-consideration product category.  
Dual floating FABs (WhatsApp \+ Chatbot) ensure there is always a zero-friction exit to human contact. The AI chatbot fields routine queries, WhatsApp escalates complex ones.  
AR "View in My Space" directly addresses the \#1 purchase barrier for tiles/hardware — "will this look right in my room?" — at the exact moment a customer is considering a product.  
The similar products catalog pattern (50+ items as horizontal scroll on PDP) elegantly solves the variant-overload problem: it doesn't try to surface all variants prominently, but makes them accessible in one place.  
Video gallery as a homepage section is a trust-builder — showroom walkthrough videos and product demos convert passive browsers into confident enquiry senders.

## 8\. Known UX Risks to Address

No prices shown means customers cannot self-qualify by budget. Mitigate: show a "Price range: Contact for quote" or "Starting from ₹XX/sqft" indicator to reduce low-intent enquiries.  
7 tabs in Trending carousel is the maximum — adding more will make tab labels truncate on mobile. Consider 5 primary tabs \+ "More" overflow dropdown.  
Appointment booking as a separate full page may have lower conversion than an inline modal. Consider a floating "Book Visit" panel anchored to the right side on collection pages.  
3D model and AR require significant asset creation effort per product. Plan a phased rollout: launch with image-only, add 3D/AR for top 20 SKUs first.  
