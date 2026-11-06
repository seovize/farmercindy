# Farmer Cindy Flagship Platform (FarmerCindy, Inc. 501(c)(3))

An award-winning, production-grade children's literature and non-profit digital experience built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, and **Framer Motion**.

Educating children (Ages 3–9) and families about heirloom produce, organic nutrition, and growing free food. 100% of book proceeds directly fund youth gardening kits and agricultural literacy in elementary schools.

---

## 🌟 Live Book Catalog

* **Book 1:** *The Adventures of FarmerCindy: FarmerCindy Finds a Farm* (ASIN: `B0HL5F734J`)  
  [Order on Amazon Prime](https://www.amazon.com/Adventures-FarmerCindy-Finds-Farm/dp/B0HL5F734J)
* **Book 2:** *The Adventures of FarmerCindy: What's Happening to Our Farming Community?* (ASIN: `B0HL53WTS8`)  
  [Order on Amazon](https://www.amazon.com/Adventures-FarmerCindy-Happening-Farming-Community/dp/B0HL53WTS8)

---

## 🚀 Key Features

* **Visual Storybook Aesthetic:** Soft tactile paper cream canvases (`#FDFBF7`), fresh strawberry reds (`#E63946`), and farm greens (`#2A9D8F`) meeting WCAG 2.2 AAA contrast standards.
* **Framer Motion Micro-Interactions:** 3D perspective mouse-tracking book covers, floating strawberries/cherries, and smooth page transitions.
* **COPPA Child Safety "Grown-Up Gate":** Arithmetic parent challenge protecting all external bookstore links (Amazon, Barnes & Noble, Lulu, IngramSpark) and donation buttons.
* **First-Party Brevo CRM Lead Magnet:** Free 12-page printable farm activity & coloring kit email capture with double-opt-in sync.
* **School & Library Reading Inquiries:** Direct assembly booking system for Title I schools and public libraries.
* **Free Vercel Deployment:** Built for perpetual $0 hosting on Vercel's Hobby tier with static generation (SSG) and sub-second global edge response times.

---

## 🛠️ Tech Stack

* **Framework:** Next.js 15.1.6 (App Router)
* **UI & Styling:** Tailwind CSS v3.4 + Custom Design Tokens
* **Animations:** Framer Motion v12.4
* **Icons:** Lucide React
* **Email CRM:** Brevo API v3 (REST)
* **Celebration Effects:** Canvas-Confetti
* **Type Safety:** Strict TypeScript

---

## 📦 Getting Started (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.example .env.local

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🌐 Deploy to Vercel (Free Hobby Account)

1. Push this repository to your **GitHub** account:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/farmer-cindy-platform.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in to your free account.
3. Click **"Add New Project"** and import `farmer-cindy-platform`.
4. In Environment Variables, add:
   * `BREVO_API_KEY`: Your live Brevo v3 API key (starts with `xkeysib-...`)
   * `BREVO_LIST_ID`: `2` (or your preferred contact list ID)
   * `NEXT_PUBLIC_SITE_URL`: `https://farmercindy.vercel.app`
5. Click **Deploy**. Your site will be live worldwide in under 60 seconds with automatic SSL!

---

## 📜 501(c)(3) Legal Disclosures
FarmerCindy, Inc. is a registered 501(c)(3) tax-exempt non-profit organization. All contributions are tax-deductible to the fullest extent permitted by U.S. law.
