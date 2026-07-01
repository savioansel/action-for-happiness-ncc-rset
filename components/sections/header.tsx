"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { LogoPair } from "@/components/logo-pair";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/site-content";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled || isOpen
          ? "border-b border-navy/10 bg-white/95 shadow-[0_20px_50px_-36px_rgb(30_42_68_/_0.5)] backdrop-blur-xl"
          : "bg-white/70 backdrop-blur-md",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-5">
        <a href="#top" className="focus-ring rounded-2xl">
          <LogoPair showText />
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-semibold text-navy/76 transition hover:bg-navy/5 hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm">
            <a href="#volunteer">
              Volunteer
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-navy/12 bg-white text-navy shadow-sm lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-navy/10 bg-white transition-[grid-template-rows] duration-300 lg:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <nav aria-label="Mobile navigation" className="container-page flex flex-col py-4">
            {siteContent.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-2xl px-4 py-3 text-base font-semibold text-navy"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-3 w-full">
              <a href="#volunteer" onClick={() => setIsOpen(false)}>
                Volunteer
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
