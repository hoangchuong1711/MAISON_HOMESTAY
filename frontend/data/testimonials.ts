export type Testimonial = {
  id: number;
  name: string;
  location: string;
  rating: number;
  content: string;
  avatar: string;
  span: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Linh Tran",
    location: "Ho Chi Minh City",
    rating: 5,
    content:
      "Morning tea by the garden was my favorite. The hosts made everything feel easy and warm.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    span: "md:col-span-7",
  },
  {
    id: 2,
    name: "Minh Nguyen",
    location: "Da Nang",
    rating: 4,
    content:
      "Quiet nights, clean rooms, and the breakfast was simple but perfect. I will be back.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    span: "md:col-span-5",
  },
  {
    id: 3,
    name: "Sara Lim",
    location: "Singapore",
    rating: 5,
    content:
      "The cycling route along the canals was stunning. MAISON feels like a real home.",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80",
    span: "md:col-span-4",
  },
  {
    id: 4,
    name: "Huy Pham",
    location: "Can Tho",
    rating: 5,
    content:
      "The soft colors, wooden details, and friendly hosts gave us a calm weekend away.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    span: "md:col-span-8",
  },
  {
    id: 5,
    name: "Emily Brown",
    location: "Melbourne",
    rating: 5,
    content:
      "Loved the balance of modern comfort and countryside charm. The coconut groves are dreamy.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    span: "md:col-span-6",
  },
  {
    id: 6,
    name: "Quang Vo",
    location: "Ha Noi",
    rating: 4,
    content:
      "Everything felt thoughtful, from the linens to the gentle welcome. Perfect for slow travel.",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
    span: "md:col-span-6",
  },
];
