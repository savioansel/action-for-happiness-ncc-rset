import Image from "next/image";
import { ArrowRight, HeartHandshake } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/site-content";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90svh] items-center overflow-hidden bg-navy pt-24 pb-16 sm:pt-28 sm:pb-24 text-white"
      aria-label="Community outreach introduction"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src={siteContent.images.hero.src}
          alt={siteContent.images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_center] opacity-65 sm:opacity-75 md:opacity-100 md:object-contain md:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/70 to-navy/90 md:bg-gradient-to-r md:from-navy md:via-navy/80 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container-page relative z-10 flex items-center">
        <Reveal className="max-w-3xl">
          <div className="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white shadow-sm backdrop-blur">
            <HeartHandshake className="size-3.5 sm:size-4 text-orange" aria-hidden="true" />
            <span>{siteContent.hero.badge}</span>
          </div>

          <div>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl text-white font-display">
              {siteContent.hero.mainHeading}
            </h1>
            {siteContent.organization.tagline ? (
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-white/70">
                {siteContent.organization.tagline}
              </p>
            ) : null}
          </div>

          <div className="mt-5 sm:mt-7 border-l-2 border-orange pl-3.5 sm:pl-4.5 py-0.5">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-orange">
              {siteContent.hero.subHeading}
            </p>
            <p className="mt-1 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white/95 leading-snug">
              {siteContent.hero.headline}
            </p>
          </div>

          <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-white/80">
            {siteContent.hero.subtitle}
          </p>
          <div className="mt-7 sm:mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="orange" className="w-full sm:w-auto">
              <a href="#volunteer">
                {siteContent.hero.buttons[0]}
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <a href="#service-areas">{siteContent.hero.buttons[1]}</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
