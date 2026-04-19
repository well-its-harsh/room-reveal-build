# Shree Radhe Tiles & Hardware - Luxury eCommerce Platform

![Project Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61dafb.svg?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646cff.svg?logo=vite)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ecf8e.svg?logo=supabase)

A fully-featured, premium e-commerce platform built specifically for **Shree Radhe Tiles & Hardware**. This application provides a high-end browsing and purchasing experience, offering state-of-the-art features like AI Room Makeovers, 3D Product Previews, AR visualization, integrated video consultations, and real-time chat.

---

## 🌟 Key Features

* **Premium UI/UX:** Built with Tailwind CSS, Framer Motion, and shadcn/ui to deliver an aesthetically pleasing, responsive luxury shopping experience.
* **Intelligent Discovery:** Advanced filtering, category management, and keyword-based fuzzy search powered by Fuse.js and Supabase.
* **AI Room Makeovers:** Users can upload photos of their rooms and generate AI-powered redesigns using Hugging Face/Gemini APIs.
* **AR & 3D Visualization:** Experience products in Augmented Reality before buying.
* **Real-time Consultations:** Integrated with Daily.co to support video calls and store-visit appointments.
* **Robust E-Commerce Flows:** Fully functional Cart, Wishlist, secure checkout, order tracking, and history management.
* **Admin Dashboard:** Role-based access control (Admin, Customer, Owner, Staff) managing products, customers, leads, reviews, and analytics.
* **Secure Backend System:** Powered by Supabase for PostgreSQL database, secure Authentication (Email, Magic Links, OAuth), and Row Level Security (RLS).

---

## 💻 Technology Stack

**Frontend Frameworks & Libraries**
- [React (v18)](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- UI Components: [shadcn-ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- Styling: [Tailwind CSS](https://tailwindcss.com/) + Custom Animations.
- State/Data Management: [TanStack React Query](https://tanstack.com/query/v5) + React Hook Form

**Backend & Integration Services**
- Database & Auth: [Supabase](https://supabase.com/)
- Real-time Video: [@daily-co](https://www.daily.co/)
- Generative AI Integration: Google GenAI (`@google/genai`) / HuggingFace
- 3D Rendering: [Three.js](https://threejs.org/) & React Three Fiber

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Requirements
* Node.js (v18 or higher recommended)
* npm (v9+) or Bun
* A Supabase Account

### 2. Clone and Install
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/shree-radhe-tiles.git
cd room-reveal-build
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory. You will need to populate it with keys from your Supabase Dashboard and integrated API providers:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Video Call Configuration
VITE_DAILY_API_KEY=your_daily_co_api_key

# AI Agents
VITE_GEMINI_API_KEY=your_google_gemini_api_key
VITE_HUGGINGFACE_API_KEY=your_hugging_face_api_key
```

*(Note: Never commit your `.env` file to version control).*

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.

---

## 🛠 Database Setup

The backend schema relies heavily on Supabase Postgres. The `/supabase/migrations` directory contains all SQL needed for schema validation and initial table creation (e.g. `products`, `profiles`, `orders`, `appointments`).

To apply the database remotely or locally, you can use the Supabase CLI:
```bash
npx supabase link --project-ref your_project_ref
npx supabase db push
```

For seed data (Dummy products, tiles, and hardware testing units), check out the `seed-database.sql` and `seed_catalog.sql` files found in the root partition.

---

## 📦 Deployment Guide

For optimal speed and continuous deployment, deploying to **Vercel** is highly recommended.

1. Create a [Vercel](https://vercel.com/) Account linked to your GitHub.
2. Click **Add New -> Project** and import this repository.
3. Vercel automatically detects the framework as Vite. Keep the Default Settings (`npm run build`).
4. In the **Environment Variables** section, copy the contents of your local `.env` line by line.
5. Click **Deploy**.

**Configure Domain Name (GoDaddy):**
- In Vercel, navigate to Settings > Domains. Add your domain (`radhetilesandhardware.in`).
- Go to your GoDaddy DNS settings and add the Vercel-provided `A` record (Value: `76.76.21.21`) and `CNAME` record (`cname.vercel-dns.com`).
- *(Important)* Go to your Supabase Dashboard -> Authentication -> URL Configuration and update the Site URL and Redirect URIs to point to your new live domain.

---

## 📝 License

Proprietary Software. Internal use only or per custom client agreement.
