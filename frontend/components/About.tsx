import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="order-2 space-y-5 lg:order-1">
            <Badge
              variant="outline"
              className="border-[#d9cbb0] text-[#5b4a2f]"
            >
              Ben Tre, Vietnam
            </Badge>
            <h2 className="font-heading text-3xl font-semibold text-[#2d2416]">
              A countryside home with family warmth
            </h2>
            <p className="text-sm leading-6 text-zinc-600 sm:text-base">
              MAISON is a small homestay set among coconut trees and quiet
              canals. We focus on simple comforts, gentle service, and the kind
              of calm that makes you slow down.
            </p>
            <p className="text-sm leading-6 text-zinc-600 sm:text-base">
              Wake up to birdsong, enjoy homemade breakfasts, and borrow a bike
              for a slow ride through the village. Every corner is designed to
              feel personal, cozy, and welcoming.
            </p>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <img
                src="images/about.jpg"
                alt="Countryside homestay surroundings"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
