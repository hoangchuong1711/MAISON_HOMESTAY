import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { gallery } from "@/data/gallery";

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className="space-y-3">
          <Badge variant="secondary" className="bg-[#e9f0df] text-[#3f4f2c]">
            Gallery
          </Badge>
          <h2 className="font-heading text-3xl font-semibold text-[#2d2416]">
            Gentle spaces, warm light
          </h2>
          <p className="max-w-2xl text-sm text-zinc-600 sm:text-base">
            A quick look at the rooms, shared spaces, and countryside details
            that make MAISON feel personal.
          </p>
        </Reveal>

        <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4">
          {gallery.map((image, index) => (
            <Reveal
              key={image.id}
              delay={index * 80}
              className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover"
                loading="lazy"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
