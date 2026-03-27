export type Feature = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const features: Feature[] = [
  {
    id: 1,
    title: "Vietnamese breakfast",
    description:
      "Start the day with warm soups, fresh fruit, and coconut treats made at home.",
    image:
      "images/breakfast.jpg",
  },
  {
    id: 2,
    title: "Cycling experience",
    description:
      "Borrow a bicycle and explore canals, coconut groves, and village markets.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 3,
    title: "Peaceful countryside",
    description:
      "Slow afternoons, soft breezes, and the sound of birds over the paddies.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 4,
    title: "Family-hosted care",
    description:
      "Stay with welcoming hosts who share local stories and gentle guidance.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba102b2fcb?auto=format&fit=crop&w=1400&q=80",
  },
];
