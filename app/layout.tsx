import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { MobileFloatingActions } from "@/components/MobileFloatingActions";

const poppins = Poppins({
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Farmer Cindy | Heirloom Farming Community & Stories of Living Soil",
  description:
    "Building an heirloom farming community dedicated to growing wholesome organic food from living soil and sharing harvest abundance for free. Supported by Cindy's picture books and 501(c)(3) mission.",
  keywords: [
    "Farmer Cindy",
    "FarmerCindy Finds a Farm",
    "What's Happening to Our Farming Community",
    "heirloom farming",
    "living soil",
    "free community food",
    "children's picture books",
    "501c3 non-profit",
  ],
  authors: [{ name: "Farmer Cindy" }],
  openGraph: {
    title: "Farmer Cindy | Heirloom Farming Community & Living Soil",
    description:
      "Join Farmer Cindy's heirloom farming mission: growing real food from living soil and sharing abundance for free. Supported by Book 1 & Book 2.",
    url: "https://farmercindy.vercel.app",
    siteName: "Farmer Cindy Flagship",
    images: [
      {
        url: "https://farmercindy.vercel.app/images/generated/open_sky_heirloom_farm.jpg",
        width: 1200,
        height: 630,
        alt: "Farmer Cindy Community Farm with Sunflowers and Heirloom Crops",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NGO",
        "@id": "https://farmercindy.vercel.app/#organization",
        name: "FarmerCindy, Inc.",
        legalName: "FarmerCindy, Inc.",
        nonprofitStatus: "Nonprofit501c3",
        url: "https://farmercindy.vercel.app",
        description:
          "501(c)(3) non-profit organization dedicated to teaching children about heirloom farming, healthy nutrition, and growing free food.",
      },
      {
        "@type": "Person",
        "@id": "https://farmercindy.vercel.app/#author",
        name: "Farmer Cindy",
        jobTitle: "Children's Book Author & Non-Profit Founder",
        worksFor: { "@id": "https://farmercindy.vercel.app/#organization" },
      },
      {
        "@type": "Book",
        "@id": "https://farmercindy.vercel.app/#book1",
        name: "The Adventures of FarmerCindy: FarmerCindy Finds a Farm",
        author: { "@id": "https://farmercindy.vercel.app/#author" },
        publisher: { "@id": "https://farmercindy.vercel.app/#organization" },
        inLanguage: "en-US",
        bookFormat: "https://schema.org/Hardcover",
        typicalAgeRange: "3-9",
        numberOfPages: 76,
        genre: ["Children's Picture Book", "Farming", "Urban Gardening", "Nutrition"],
        offers: {
          "@type": "Offer",
          price: "14.99",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: "https://www.amazon.com/Adventures-FarmerCindy-Finds-Farm/dp/B0HL5F734J",
        },
      },
      {
        "@type": "Book",
        "@id": "https://farmercindy.vercel.app/#book2",
        name: "The Adventures of FarmerCindy: What's Happening to Our Farming Community?",
        author: { "@id": "https://farmercindy.vercel.app/#author" },
        publisher: { "@id": "https://farmercindy.vercel.app/#organization" },
        inLanguage: "en-US",
        typicalAgeRange: "3-9",
        genre: ["Children's Picture Book", "Community Gardening", "Pollinators", "Soil Health"],
        offers: {
          "@type": "Offer",
          price: "14.99",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: "https://www.amazon.com/Adventures-FarmerCindy-Happening-Farming-Community/dp/B0HL53WTS8",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${poppins.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#264653]">
        <CartProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileFloatingActions />
        </CartProvider>
      </body>
    </html>
  );
}
