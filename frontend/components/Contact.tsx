import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className="space-y-3">
          <Badge variant="secondary" className="bg-[#e7eed9] text-[#3f4f2c]">
            Contact and location
          </Badge>
          <h2 className="font-heading text-3xl font-semibold text-[#2d2416]">
            Plan your countryside escape
          </h2>
          <p className="max-w-2xl text-sm text-zinc-600 sm:text-base">
            Reach out for availability, directions, or special requests. We are
            happy to help you build a calm stay in Ben Tre.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <Reveal className="rounded-3xl border border-black/10 bg-white/90 p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-semibold text-[#2d2416]">
                  <Phone className="h-4 w-4" />
                  Call or text
                </div>
                <a
                  href="tel:0379192647"
                  className="text-lg font-semibold text-[#3f4f2c]"
                >
                  0379192647
                </a>
                <Separator className="my-4" />
                <div className="grid gap-4 text-sm text-zinc-600 sm:grid-cols-2">
                  <div className="space-y-1">
                    <p className="flex items-center gap-2 font-semibold text-zinc-900">
                      <MapPin className="h-4 w-4" />
                      Location
                    </p>
                    <p>Ben Tre countryside, Vietnam</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-zinc-900">Check-in</p>
                    <p>After 2:00 PM daily</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-zinc-900">Check-out</p>
                    <p>Before 11:00 AM</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-zinc-900">Breakfast</p>
                    <p>Homemade Vietnamese dishes</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="rounded-3xl border border-black/10 bg-white/90 p-6 shadow-sm">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dates">Preferred dates</Label>
                  <Input id="dates" placeholder="Jun 12 - Jun 16" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your trip, guests, and any special requests."
                  />
                </div>
                <Button className="bg-[#3f4f2c] text-white hover:bg-[#324126]">
                  Send Message
                </Button>
              </form>
            </Reveal>
          </div>

          <Reveal className="overflow-hidden rounded-3xl border border-black/10 bg-white/90 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d304.513613951055!2d106.36762675572685!3d10.228940536938055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1svi!2s!4v1774635384004!5m2!1svi!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              title="MAISON homestay map"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
