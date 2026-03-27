"use client";

import RoomCard from "@/components/RoomCard";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { rooms } from "@/data/rooms";
import { cn } from "@/lib/utils";

export default function Rooms() {
  return (
    <section id="rooms" className="scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className="space-y-3">
          <Badge variant="secondary" className="bg-[#f1eadb] text-[#5b4a2f]">
            Rooms and services
          </Badge>
          <h2 className="font-heading text-3xl font-semibold text-[#2d2416]">
            Stay softly in MAISON
          </h2>
          <p className="max-w-2xl text-sm text-zinc-600 sm:text-base">
            Five room styles with gentle colors, natural textures, and
            thoughtful details. Tap any room for a quick view.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-6">
          {rooms.map((room, index) => {
            const spanClass = index < 3 ? "md:col-span-2" : "md:col-span-3";

            return (
              <Reveal
                key={room.id}
                delay={index * 90}
                className={cn(spanClass)}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <RoomCard room={room} className="w-full" />
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl overflow-hidden p-0 sm:max-w-5xl">
                    <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
                      <div className="relative bg-black/5 p-6">
                        <Carousel opts={{ loop: true }} className="relative">
                          <CarouselContent>
                            {room.images.map((image, imageIndex) => (
                              <CarouselItem key={image}>
                                <div className="overflow-hidden rounded-2xl">
                                  <img
                                    src={image}
                                    alt={`${room.name} ${imageIndex + 1}`}
                                    className="h-72 w-full object-cover sm:h-80"
                                    loading="lazy"
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </div>
                      <div className="flex h-full flex-col gap-4 p-6">
                        <DialogHeader>
                          <DialogTitle className="text-xl">
                            {room.name}
                          </DialogTitle>
                          <DialogDescription className="text-sm text-zinc-600">
                            {room.description}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-[#3f4f2c] text-white">
                            {room.price}
                          </Badge>
                          <Badge variant="outline" className="border-[#d9cbb0]">
                            Sleeps {room.capacity}
                          </Badge>
                        </div>
                        <Separator />
                        <div>
                          <p className="text-sm font-semibold text-zinc-900">
                            Amenities
                          </p>
                          <ul className="mt-3 grid gap-2 text-sm text-zinc-600 sm:grid-cols-2">
                            {room.amenities.map((amenity) => (
                              <li
                                key={amenity}
                                className="flex items-center gap-2"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-[#6f8f3d]" />
                                {amenity}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-auto flex items-center justify-end">
                          <Button
                            asChild
                            className="bg-[#3f4f2c] text-white hover:bg-[#324126]"
                          >
                            <a href="#contact">Book Now</a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
