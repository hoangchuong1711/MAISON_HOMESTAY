export type Room = {
  id: number;
  name: string;
  price: string;
  capacity: number;
  shortDescription: string;
  description: string;
  images: string[];
  amenities: string[];
};

export const rooms: Room[] = [
  {
    id: 1,
    name: "Coconut Garden Suite",
    price: "$78/night",
    capacity: 2,
    shortDescription: "Morning light, garden views, and handwoven details.",
    description:
      "A calm room tucked by the coconut grove. Soft linens, gentle light, and a small desk for slow mornings.",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1400&q=80",
    ],
    amenities: [
      "Garden view",
      "Air conditioning",
      "Private bath",
      "Tea and coffee",
      "Work desk",
      "Mosquito net",
    ],
  },
  {
    id: 2,
    name: "Family Loft",
    price: "$118/night",
    capacity: 4,
    shortDescription: "Open space for families with warm wood tones.",
    description:
      "A wide loft with two sleeping zones and a shared lounge. Perfect for families who want space to unwind.",
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1400&q=80",
    ],
    amenities: [
      "Two beds",
      "Family lounge",
      "Private bath",
      "Ceiling fan",
      "Filtered water",
      "Wardrobe",
    ],
  },
  {
    id: 3,
    name: "River Breeze Room",
    price: "$64/night",
    capacity: 2,
    shortDescription: "Soft breeze, bamboo accents, and a reading nook.",
    description:
      "A simple, airy room with bamboo textures and a quiet corner for tea. Ideal for couples or solo travelers.",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    ],
    amenities: [
      "Bamboo accents",
      "Ceiling fan",
      "Private bath",
      "Reading lamp",
      "Tea set",
      "Fresh towels",
    ],
  },
  {
    id: 4,
    name: "Rice Field Studio",
    price: "$72/night",
    capacity: 2,
    shortDescription: "Golden field views with a calm workspace.",
    description:
      "A studio with rice field views and a soft seating area. Designed for slow, quiet stays.",
    images: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1400&q=80",
    ],
    amenities: [
      "Rice field view",
      "Air conditioning",
      "Work table",
      "Natural cotton linens",
      "Mini fridge",
      "Shower",
    ],
  },
  {
    id: 5,
    name: "Garden Patio Room",
    price: "$69/night",
    capacity: 2,
    shortDescription: "Private patio with tropical greenery.",
    description:
      "Step onto a small patio surrounded by tropical plants. A cozy stay for sunset tea.",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    ],
    amenities: [
      "Private patio",
      "Garden seating",
      "Tea and coffee",
      "Ensuite bath",
      "Ceiling fan",
      "Local snacks",
    ],
  },
];
