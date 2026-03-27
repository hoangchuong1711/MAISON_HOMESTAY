import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section id="cta" className="scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#3f4f2c,#5d7a39,#b39a4b)] px-6 py-12 text-white shadow-lg sm:px-10">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-white/80">
                Ready to visit Ben Tre?
              </p>
              <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
                Book a warm stay at MAISON
              </h2>
              <p className="text-sm text-white/90 sm:text-base">
                Message us directly to plan your dates, family meals, and
                countryside experiences.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-2 bg-white text-[#3f4f2c] hover:bg-white/90"
              >
                <a
                  href="https://www.facebook.com/nguyen.le.hoang.chuong"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Now
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
