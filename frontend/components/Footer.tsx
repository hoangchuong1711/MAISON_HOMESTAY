import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white/90">
      <div className="mx-auto w-full max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-6 text-sm text-zinc-600 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <div className="text-base font-semibold tracking-[0.35em] text-[#2d2416]">
              MAISON
            </div>
            <p className="max-w-xs">
              Cozy family homestay in Ben Tre with warm breakfasts and coconut
              breezes.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-zinc-900">Contact</p>
            <a href="tel:0379192647" className="block">
              0379192647
            </a>
            <p>Ben Tre, Vietnam</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-zinc-900">Social</p>
            <a
              href="https://www.facebook.com/nguyen.le.hoang.chuong"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              Facebook
            </a>
            <a href="#contact" className="block">
              Book a stay
            </a>
          </div>
        </div>
        <Separator className="my-6" />
        <p className="text-xs text-zinc-500">© 2026 MAISON Homestay</p>
      </div>
    </footer>
  );
}
