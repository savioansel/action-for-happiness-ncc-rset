import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/site-content";

export function AboutSection() {
  return (
    <SectionShell id="about" variant="white">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="About"
            title={siteContent.organization.name}
            description={siteContent.about.copy}
          />
          <div className="mt-7 flex items-start gap-3 rounded-[1.35rem] bg-cream p-5 text-navy shadow-card">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green" aria-hidden="true" />
            <p className="text-lg font-semibold">{siteContent.about.welcome}</p>
          </div>
          <Button asChild className="mt-8">
            <a href="#volunteer">
              {siteContent.hero.buttons[0]}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[1.5rem] shadow-soft">
            <Image
              src={siteContent.images.about.src}
              alt={siteContent.images.about.alt}
              width={1400}
              height={1000}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/76 to-transparent p-6 text-white">
              <p className="max-w-md text-lg font-semibold leading-7">
                {siteContent.organization.affiliation}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
