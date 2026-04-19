# PROJECT CONTEXT — AI AGENT REFERENCE

## PROJECT NAME

Smart Bathroom Fixtures & Interior Platform (E-commerce + AR + AI)

---

## CORE PURPOSE

Help users:

* Visualize bathroom products in their own space (AR)
* Get AI-based design suggestions
* Purchase products with confidence

---

## PROBLEM BEING SOLVED

Users cannot:

* Visualize products in real space
* Understand dimensions properly
* Choose matching fixtures
* Get personalized design help

Owners cannot:

* Manage large product catalogs efficiently
* Provide immersive experience

---

## SYSTEM ARCHITECTURE

### FRONTEND

* React.js
* Tailwind CSS
* Handles UI, forms, AR interaction

### BACKEND

* Supabase (Auth + DB + APIs)
* Optional Node.js for custom logic

### DATABASE

* PostgreSQL (relational schema)

### AR + AI

* Three.js → AR rendering
* Camera API → live placement
* Gemini API → AI design generation

---

## CORE FEATURES

### 1. E-COMMERCE

* Product listing
* Filtering/search
* Cart + checkout
* Orders

### 2. AR VISUALIZATION

* “View in Room”
* Camera-based placement
* Scale using product dimensions
* Move / rotate object

### 3. AI MAKEOVER

* Upload room image
* Select style + budget
* Generate redesigned outputs

### 4. ROLE-BASED SYSTEM

#### Customer

* Browse products
* Add to cart
* Place orders

#### Owner

* Manage products
* Manage inventory

#### Admin

* Full control
* Manage users

---

## CRITICAL PRODUCT LOGIC (IMPORTANT)

### PRODUCT CREATION FLOW

* Must include dimensions
* Supports multiple images
* Supports optional AR model
* Must not fail silently

### IMAGE SYSTEM

* Multiple images per product
* Stored in product_images table
* One can be primary

### AR SYSTEM

* Controlled by ar_enabled flag
* If true → must allow model upload
* Stored in ar_assets

---

## UI/UX EXPECTATIONS

* Form should be structured:

  * Basic Info
  * Pricing
  * Dimensions
  * Images
  * AR Settings

* Must support:

  * Dynamic fields (add/remove images)
  * Toggle-based UI (AR enable)
  * Clean layout (no clutter)

---

## KNOWN ISSUES (MUST FIX)

* Product save stuck on "Saving..."
* No error feedback from Supabase
* Image input only supports URL (bad UX)
* No multi-image support
* AR field not dynamic
* Missing validation for dimensions

---

## PERFORMANCE REQUIREMENTS

* Fast inserts
* Indexed queries
* No duplicate submissions
* Proper loading states

---

## SECURITY

* Supabase Auth
* RLS policies enforced
* Role-based access

---

## FUTURE SCOPE (IGNORE FOR NOW)

* WebXR real-time AR
* Recommendation engine
* Mobile app

---

## FINAL INSTRUCTION

Agent must:

* Follow DB strictly
* Never assume fields
* Never allow silent failures
* Always validate before insert

If anything breaks → debug using actual Supabase error, not guesses.
