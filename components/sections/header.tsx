"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LogoPair } from "@/components/logo-pair";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/site-content";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
      <div className="container-page flex h-20 items-center justify-between gap-3 xl:gap-6">
        <Link href="/" className="focus-ring shrink-0 rounded-2xl">
          <LogoPair showText />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-0.5 xl:gap-1 lg:flex">
          {siteContent.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] font-semibold transition xl:px-3.5 xl:py-2 xl:text-sm",
                  isActive
                    ? "bg-orange-soft text-orange font-bold"
                    : "text-navy/76 hover:bg-navy/5 hover:text-navy",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Button asChild size="sm">
            <Link href="/#volunteer" className="whitespace-nowrap">
              Volunteer
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
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
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-2xl px-4 py-3 text-base font-semibold",
                  pathname === item.href ? "bg-orange-soft text-orange" : "text-navy",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-3 w-full">
              <Link href="/#volunteer" onClick={() => setIsOpen(false)}>
                Volunteer
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

