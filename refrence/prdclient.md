## 1\. Product Overview

**Shree Radhe Tiles & Hardware** is a full-stack digital platform for a physical tiles and hardware store. Unlike standard e-commerce, the platform is *enquiry-first* — there is no cart, checkout, or payment gateway. Instead, customers browse a rich product catalog, visualize products in their space using AR, get AI-powered room makeover suggestions, and convert via enquiry forms, store visit appointments, or video/WhatsApp calls. The owner receives real-time notifications for every enquiry or appointment.

0

Payment flows (intentional)  
7

Enquiry channels  
3

User roles (Admin/Owner/Customer)  
5

AI \+ AR features

## 2\. Target Users

| Persona | Description | Primary Goal |
| :---- | :---- | :---- |
| **Homeowner / Renovator** | 30–55 yr, renovating kitchen/bathroom/floor; overwhelmed by tile/hardware choices | Visualize products in their space, get a recommendation, visit store confidently |
| **Interior Designer** | Professional specifying tiles/hardware for client projects | Browse full catalog, shortlist items, schedule enquiry call |
| **Builder / Contractor** | Bulk procurement for residential/commercial projects | View catalog, check availability, send bulk enquiry |
| **Casual Browser** | Researching ideas, no immediate purchase intent | Explore trends, watch videos, use AI makeover for inspiration |
| **Store Owner (Admin)** | Owner/manager of Shree Radhe store | Manage catalog, get enquiry notifications, track appointments |

## 3\. Problem Statement

Customers visiting a physical tiles and hardware store face a classic set of problems: they cannot visualize how a 60×60cm floor tile will actually look in their bathroom, they don't know which fittings complement a chosen tile, and there are often 50+ variants per category — an overwhelming in-store experience. For the store owner, there is no digital presence to capture pre-visit intent, no way to accept enquiries outside business hours, and no catalog management system.

This platform solves all these problems by creating a **digital showroom** with AR visualization, AI design assistance, and structured enquiry routing — without requiring any online payment infrastructure.

## 4\. Feature Breakdown

Core Features — From Project Report

#### E-catalog (No Cart)

Browse products by area, category, brand. Catalog-only — no Add to Cart. "Enquire Now" replaces Buy.

#### AR — View in My Space

Camera-based product placement using Three.js \+ Web Camera API. Place tiles/fixtures in real room.

#### AI Bathroom Makeover

Upload room photo, select style preferences, Gemini API generates redesigned room visual with product suggestions.

#### 3D Model Viewer

Interactive Three.js 3D model viewer on product pages. Rotate, zoom, inspect all angles.

#### Role-Based Dashboards

Admin (full control), Owner (catalog \+ enquiries \+ analytics), Customer (history \+ saved items).

#### Auth — Google Login

Supabase Auth with Google OAuth provider. Email/password fallback. Role assigned on first login.  
New Features — Added for Shree Radhe

#### Enquiry System New

Per-product and per-category "Enquire Now" button. Form captures name, phone, message, preferred contact method. Owner notified in real-time.

#### Similar Products Catalog New

50+ similar variants per category shown as scrollable catalog grid with "Enquire for This" per item. No pricing needed.

#### Store Visit Appointment New

Calendar-based slot booking for in-store visits. Customer selects date/time/product category of interest. Owner sees appointment dashboard.

#### Video Call Enquiry New

Customer requests a video call for a specific product. Owner accepts/proposes time. Link generated (Google Meet / Jitsi). Notification sent both ways.

#### AI Chatbot New

Persistent floating chatbot (bottom-right). Powered by Gemini API. Answers product queries, suggests categories, routes to enquiry/appointment.

#### WhatsApp Quick Contact New

Floating WhatsApp button (bottom-left, always visible). Pre-filled message with current product/page context. Direct link to store WhatsApp.

#### Video Gallery Section New

Homepage section \+ dedicated Video page. Product demonstrations, installation guides, showroom tours. YouTube embed or hosted videos.

#### Wishlist / Save From Ruhe

Heart icon on product cards. Saved items visible in customer dashboard. No cart — wishlist is purely for reference and sharing.

#### Shop by Area From Ruhe

Homepage area tiles: Bathroom, Kitchen, Living Room, Outdoor. Each links to curated product set for that room context.

#### Trust Badge Strip From Ruhe

4-column strip: Wide Range, Best Brands, Expert Advice, Free Consultation. Links to respective pages.

#### Hero Carousel From Ruhe

Full-width hero slideshow with promotional and inspirational banners. Auto-advance with pause/play controls.

#### Best Sellers / Trending From Ruhe

Tabbed carousel by category. 7 tabs. Horizontal scroll with prev/next. Enquire button inline.

## 5\. Enquiry System — Business Logic (Critical)

This is the core conversion mechanism replacing cart \+ checkout. All purchase intent is routed through enquiry channels.

| Channel | Trigger | Fields Captured | Owner Notification |
| :---- | :---- | :---- | :---- |
| **Product Enquiry Form** | "Enquire Now" on product card or PDP | Name, Phone, Email (optional), Message, Product reference (auto), Preferred contact (WhatsApp/Call/Email) | Real-time push \+ email notification |
| **Category Bulk Enquiry** | "Enquire for this Category" on collection page | Name, Phone, Category, Quantity/area (sq ft), Project type (residential/commercial) | Real-time push \+ email |
| **Store Appointment** | "Book Store Visit" — navbar CTA \+ product page | Name, Phone, Date, Time slot, Category of interest, Notes | Calendar notification \+ confirmation SMS/WhatsApp |
| **Video Call Request** | "Request Video Call" on product page | Name, Phone, Product, Preferred date/time, Video platform preference | Push notification \+ scheduling confirmation |
| **AI Chatbot Lead** | Chatbot collects intent → routes to enquiry | Captured from conversation context | Logged as chatbot enquiry lead |
| **WhatsApp Quick** | Floating WhatsApp button | Pre-filled message with product/page name | Directly on WhatsApp |
| **Catalog "Enquire for This"** | On similar-product catalog items | Product reference \+ contact details | Real-time push |

## 6\. Functional Requirements

| ID | Requirement | Priority |
| :---- | :---- | :---- |
| FR-01 | Product catalog with category/area/brand browsing — no cart, no checkout | Critical |
| FR-02 | Google OAuth login via Supabase \+ email/password fallback. Role assignment on first login. | Critical |
| FR-03 | Enquiry form on every product card and PDP with owner real-time notification | Critical |
| FR-04 | Similar products catalog: 50+ items per category as scrollable grid, each with "Enquire for This" | Critical |
| FR-05 | Store visit appointment booking: date/time/category selection, owner dashboard view | Critical |
| FR-06 | Video call enquiry request flow with scheduling and notification | High |
| FR-07 | AR "View in My Space" — camera access, product overlay, drag/rotate/scale (Three.js \+ Web Camera API) | High |
| FR-08 | 3D product model viewer — rotate, zoom, inspect on product detail page (Three.js) | High |
| FR-09 | AI Bathroom/Room Makeover — upload room image, select preferences, Gemini generates redesign | High |
| FR-10 | Persistent AI chatbot (floating, bottom-right) — Gemini-powered, product Q\&A \+ enquiry routing | High |
| FR-11 | Persistent WhatsApp floating button (bottom-left) with pre-filled product context message | Critical |
| FR-12 | Video gallery section on homepage \+ dedicated video page (YouTube embed / hosted) | High |
| FR-13 | Hero banner carousel — 4+ slides, autoplay, responsive mobile/desktop images | Critical |
| FR-14 | Shop by Area — 4 area tiles (Bathroom, Kitchen, Living Room, Outdoor) → curated collections | High |
| FR-15 | Trending/Best Sellers tabbed carousel (7 categories, horizontal scroll, prev/next) | High |
| FR-16 | Trust badge strip — 4 columns: Wide Range, Best Brands, Expert Advice, Free Consultation | High |
| FR-17 | Wishlist / Save product feature with count in header | Medium |
| FR-18 | Search with product type filter dropdown (all categories) | High |
| FR-19 | Role-based dashboards: Admin (full), Owner (catalog \+ enquiries \+ appointments \+ analytics), Customer (saved \+ enquiry history) | Critical |
| FR-20 | Owner enquiry notification: real-time push \+ sound \+ badge count in owner dashboard | Critical |
| FR-21 | Product management: CRUD for products, categories, media (images, 3D models, AR assets) | Critical |
| FR-22 | Inventory / availability flag (In Stock / Limited / Out of Stock) — display only, no cart logic | Medium |
| FR-23 | Breadcrumb navigation on all interior pages | Medium |
| FR-24 | Product review / rating system (customer-submitted after store visit) | Medium |
| FR-25 | Store locator / map (Leaflet.js) with address, hours, directions | Medium |

## 7\. Non-Functional Requirements

* **Performance:** Images served via Supabase Storage CDN with responsive srcset. Lazy loading with SVG/blur placeholder (LQIP). 3D models loaded on demand (not on page load).  
* **Security:** Supabase RLS policies on all tables. Google OAuth via Supabase — no password stored for OAuth users. AR/camera permissions handled with explicit user consent prompt.  
* **Scalability:** Supabase PostgreSQL scales to millions of rows. 50+ products per category is well within range. Realtime notification via Supabase Realtime channels.  
* **Accessibility:** WCAG 2.1 AA target. "Skip to content" link. Alt text on all product images. Keyboard-navigable modals and forms.  
* **Mobile-first responsive:** Separate mobile/desktop hero images. Touch-friendly carousel, AR, and 3D viewer. WhatsApp/chatbot buttons sized ≥44px touch target.  
* **Offline graceful degradation:** AR and AI features show error state with WhatsApp/call fallback if no connection.  
* **SEO:** Descriptive page titles, meta descriptions, ALT text, breadcrumb schema markup. Server-side rendering or pre-rendering for collection/category pages recommended.  
* **Real-time:** Supabase Realtime for owner enquiry/appointment notifications. No polling — WebSocket-based.

## 8\. Edge Cases

* Customer submits enquiry without logging in → form still works (guest enquiry), phone number used as identifier  
* 50+ products in a category → catalog grid uses virtual scrolling or pagination (not all rendered at once)  
* AR camera permission denied → graceful fallback: "Please allow camera access or contact us on WhatsApp"  
* Gemini API quota exceeded → AI Makeover and chatbot show "Service temporarily unavailable, please WhatsApp us" with direct link  
* 3D model not available for a product → 3D tab hidden; product gallery with regular images shown  
* Owner misses appointment notification → appointment appears in pending list; reminder sent 1 hour before slot  
* Video call link expired → system auto-generates new link on reschedule  
* Customer requests appointment during closed hours → slots outside business hours disabled in calendar picker  
* First-time Google login → role selection modal shown (Customer / I'm a Trade Professional)  
* Product marked "Out of Stock" → enquiry still allowed; form pre-fills "Interested in restocking timeline"  
* Duplicate enquiry for same product by same user within 24 hours → system warns "You already enquired about this product" with previous enquiry details

## 9\. Trust Mechanisms

**Expert Advice**

Free consultation — video call or store visit. Human expert engagement as key differentiator.  
**Wide Range**

50+ variants per category. Full catalog visible even for items not prominently featured.  
**Best Brands**

Brand names shown on product cards and filterable. Builds confidence in quality.  
**Free Consultation**

Book a free store visit or video call. No commitment. Removes barrier to engagement.  
Social proof: Customer reviews (post-visit), Google Maps rating integration, video testimonials in Video Gallery section.

