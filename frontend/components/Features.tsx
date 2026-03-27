import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data/features";

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className="space-y-3">
          <Badge variant="secondary" className="bg-[#e7eed9] text-[#3f4f2c]">
            Highlights
          </Badge>
          <h2 className="font-heading text-3xl font-semibold text-[#2d2416]">
            Small moments that feel like home
          </h2>
          <p className="max-w-2xl text-sm text-zinc-600 sm:text-base">
            Every detail is rooted in the Ben Tre countryside: fresh food,
            friendly hosts, and slow experiences that bring you closer to daily
            life.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={feature.id} delay={index * 120}>
              <Card className="group relative h-full overflow-hidden border-0 bg-white/90 p-0 shadow-sm ring-1 ring-black/5">
                <div className="relative h-56">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <CardContent className="absolute inset-x-0 bottom-0 space-y-2 px-5 pb-5 pt-12 text-white">
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-white/85">
                      {feature.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
