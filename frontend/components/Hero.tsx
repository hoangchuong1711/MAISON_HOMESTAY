"use client";

import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
    title: "MAISON Homestay",
    subtitle: "Warm rooms, coconut breezes, and a family welcome in Ben Tre.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1600&q=80",
    title: "Slow countryside mornings",
    subtitle: "Wake up to birdsong and breakfast prepared with local flavors.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    title: "Coconut grove adventures",
    subtitle: "Ride along the canals and enjoy the calm pace of the delta.",
  },
];

export default function Hero() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = window.setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [api]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <Carousel
        opts={{ loop: true }}
        setApi={setApi}
        className="relative h-screen min-h-screen"
      >
        <CarouselContent className="ml-0">
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.title} className="pl-0">
              <div className="relative flex h-screen items-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/45" />
                <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-20 text-center text-white sm:text-left">
                  <Badge className="w-fit bg-white/20 text-white">
                    Ben Tre, Vietnam
                  </Badge>
                  <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="max-w-xl text-base text-white/90 sm:text-lg">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-white text-[#2d2416] hover:bg-white/90"
                    >
                      <a href="#contact">Book Now</a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-white/50 bg-transparent text-white hover:bg-white/10"
                    >
                      <a href="#rooms">View Rooms</a>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-6" />
        <CarouselNext className="right-6" />
      </Carousel>
    </section>
  );
}
