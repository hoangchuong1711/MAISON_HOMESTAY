"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#features" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#home"
          className="text-lg font-semibold tracking-[0.35em] text-[#2d2416]"
        >
          MAISON
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#2d2416]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex">
          <Button
            asChild
            size="sm"
            className="bg-[#3f4f2c] text-white hover:bg-[#324126]"
          >
            <a href="#contact">Book Now</a>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:max-w-sm">
            <div className="flex flex-col gap-6">
              <div className="text-base font-semibold tracking-[0.35em] text-[#2d2416]">
                MAISON
              </div>
              <nav className="flex flex-col gap-3 text-sm font-medium text-zinc-700">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="rounded-lg px-2 py-1 transition-colors hover:bg-black/5 hover:text-[#2d2416]"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <Button
                  asChild
                  className="bg-[#3f4f2c] text-white hover:bg-[#324126]"
                >
                  <a href="#contact">Book Now</a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
