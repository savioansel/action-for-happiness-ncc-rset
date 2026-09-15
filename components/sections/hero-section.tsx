import Image from "next/image";
import { ArrowRight, HeartHandshake } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/site-content";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] overflow-hidden bg-navy pt-20 text-white"
      aria-label="Community outreach introduction"
    >
      <Image
        src={siteContent.images.hero.src}
        alt={siteContent.images.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-contain object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,42,68,0.1),rgba(30,42,68,0.6))] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="container-page relative z-10 flex items-center py-20 sm:py-24">
        <Reveal className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/22 bg-white/12 px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_48px_-30px_rgb(0_0_0_/_0.65)] backdrop-blur">
            <HeartHandshake className="size-4 text-orange" aria-hidden="true" />
            {siteContent.hero.badge}
          </div>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl text-white">
            {siteContent.hero.mainHeading}
          </h1>

          <div className="mt-4 flex items-center gap-2.5">
            <span className="h-0.5 w-6 rounded-full bg-orange shrink-0" />
            <p className="font-sans text-lg font-semibold tracking-wide text-orange sm:text-xl uppercase">
              {siteContent.hero.subHeading}
            </p>
          </div>

          <p className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-white/95 sm:text-3xl leading-snug">
            {siteContent.hero.headline}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg sm:leading-8">
            {siteContent.hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
