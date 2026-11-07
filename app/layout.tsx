import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

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
  title: "Farmer Cindy | Wholesome Children's Books & 501(c)(3) Farm Literacy",
  description:
    "Inspiring children (Ages 3-9) to love heirloom farming, nature, and fresh nutrition. Official author platform of Farmer Cindy and FarmerCindy, Inc. 501(c)(3).",
  keywords: [
    "Farmer Cindy",
    "FarmerCindy Finds a Farm",
    "What's Happening to Our Farming Community",
    "children's picture books",
    "heirloom seeds",
    "farm books for kids",
    "agricultural literacy",
    "501c3 non-profit",
  ],
  authors: [{ name: "Farmer Cindy" }],
  openGraph: {
    title: "Farmer Cindy | Farm-Fresh Adventures for Growing Imaginations",
    description:
      "Join Farmer Cindy on sweet strawberry adventures and farm community mysteries! 100% of book proceeds support youth farming literacy and free food.",
    url: "https://farmercindy.vercel.app",
    siteName: "Farmer Cindy Flagship",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Farmer Cindy Children's Books and Farm Adventures",
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
        </CartProvider>
      </body>
    </html>
  );
}
