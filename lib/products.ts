export interface ProductFormat {
  id: "paperback" | "hardcover" | "signed";
  name: string;
  price: number;
  description: string;
}

export interface Product {
  id: string;
  asin: string;
  title: string;
  subtitle: string;
  volume: string;
  ageRange: string;
  pages: number;
  coverImage: string;
  badge: string;
  formats: ProductFormat[];
  includesGift: boolean;
  giftText: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "farmer-cindy-finds-a-farm",
    asin: "B0HL5F734J",
    title: "FarmerCindy Finds a Farm",
    subtitle: "A Journey of Heirloom Seeds & Apartment Magic",
    volume: "Volume 1",
    ageRange: "Ages 3–9",
    pages: 76,
    coverImage: "/images/book1_cover.jpg",
    badge: "Series Debut",
    includesGift: true,
    giftText: "Includes Free Organic Heirloom Strawberry Seed Starter Pack",
    formats: [
      {
        id: "paperback",
        name: "Paperback Edition",
        price: 14.99,
        description: "8.5\" × 8.5\" Full Color, Glossy Softcover",
      },
      {
        id: "hardcover",
        name: "Collector's Hardcover",
        price: 24.99,
        description: "Case-Laminate Premium Hardcover, Archival Quality",
      },
      {
        id: "signed",
        name: "Author-Signed Copy",
        price: 29.99,
        description: "Hand-signed by Farmer Cindy with personalized student inscription",
      },
    ],
  },
  {
    id: "whats-happening-to-our-farming-community",
    asin: "B0HL53WTS8",
    title: "What's Happening to Our Farming Community?",
    subtitle: "Soil Health, Pollinators & Teamwork",
    volume: "Volume 2",
    ageRange: "Ages 3–9",
    pages: 76,
    coverImage: "/images/book2_cover.jpg",
    badge: "Series Sequel",
    includesGift: true,
    giftText: "Includes Free Pollinator Wildflower & Strawberry Seed Pack",
    formats: [
      {
        id: "paperback",
        name: "Paperback Edition",
        price: 14.99,
        description: "8.5\" × 8.5\" Full Color, Glossy Softcover",
      },
      {
        id: "hardcover",
        name: "Collector's Hardcover",
        price: 24.99,
        description: "Case-Laminate Premium Hardcover, Archival Quality",
      },
      {
        id: "signed",
        name: "Author-Signed Copy",
        price: 29.99,
        description: "Hand-signed by Farmer Cindy with personalized student inscription",
      },
    ],
  },
  {
    id: "adventure-bundle-both-books",
    asin: "BUNDLE-1-2",
    title: "The Complete 2-Book Adventure Bundle",
    subtitle: "Volumes 1 & 2 + Heirloom Seed Pack + Activity Kit",
    volume: "Complete Series Box Set",
    ageRange: "Ages 3–9",
    pages: 152,
    coverImage: "/images/book1_cover.jpg",
    badge: "Save 15% • Best Value",
    includesGift: true,
    giftText: "Includes 2 Books, Heirloom Seeds & 12-Page Activity Booklet",
    formats: [
      {
        id: "paperback",
        name: "2-Book Paperback Set",
        price: 26.99,
        description: "Both Volumes in Softcover (Save $3 vs individual)",
      },
      {
        id: "hardcover",
        name: "2-Book Hardcover Box Set",
        price: 44.99,
        description: "Both Volumes in Archival Hardcover (Save $5)",
      },
      {
        id: "signed",
        name: "Double Signed Collector's Set",
        price: 54.99,
        description: "Both volumes hand-signed by Cindy with custom gift wrapping",
      },
    ],
  },
  {
    id: "classroom-library-10-pack",
    asin: "CLASS-10PK",
    title: "Elementary Classroom 10-Book Reading Set",
    subtitle: "5 of each title + Classroom Seed Kit + Teacher Guide",
    volume: "School & Library Edition",
    ageRange: "Pre-K to 3rd Grade",
    pages: 760,
    coverImage: "/images/book2_cover.jpg",
    badge: "Educator Pack",
    includesGift: true,
    giftText: "Includes 25 Student Seed Packets & Curriculum Lesson Plan",
    formats: [
      {
        id: "paperback",
        name: "10-Book Paperback Classroom Set",
        price: 119.99,
        description: "5x Volume 1 + 5x Volume 2 with Wholesale Discount",
      },
      {
        id: "hardcover",
        name: "10-Book Hardcover Library Set",
        price: 189.99,
        description: "Reinforced library bindings for public & school libraries",
      },
    ],
  },
];
