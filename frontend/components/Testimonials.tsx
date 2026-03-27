import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className="space-y-3">
          <Badge variant="secondary" className="bg-[#f6f0e2] text-[#5b4a2f]">
            Testimonials
          </Badge>
          <h2 className="font-heading text-3xl font-semibold text-[#2d2416]">
            Guests who felt at home
          </h2>
          <p className="max-w-2xl text-sm text-zinc-600 sm:text-base">
            A few words from travelers who enjoyed slow mornings and warm
            hospitality at MAISON.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-12">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.id}
              delay={index * 90}
              className={cn("md:col-span-6", testimonial.span)}
            >
              <Card className="h-full border-0 bg-white/90 p-0 shadow-sm ring-1 ring-black/5">
                <CardContent className="flex h-full flex-col gap-4 px-6 pb-6 pt-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-11 w-11 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-zinc-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, ratingIndex) => (
                      <Star
                        key={`${testimonial.id}-star-${ratingIndex}`}
                        className={cn(
                          "h-4 w-4",
                          ratingIndex < testimonial.rating
                            ? "fill-amber-400"
                            : "text-zinc-300",
                        )}
                      />
                    ))}
                  </div>
                  <p className="text-sm leading-6 text-zinc-600">
                    {testimonial.content}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
