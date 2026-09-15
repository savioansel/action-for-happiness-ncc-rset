import Image from "next/image";
import { ArrowRight, CheckCircle2, Eye, HeartHandshake, Target } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/site-content";

export function AboutSection() {
  return (
    <SectionShell id="about" variant="white">
      {/* Section Heading */}
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="About Us"
          title="Action for Happiness"
          description={siteContent.about.copy}
        />
      </Reveal>

      {/* Vision & Mission Cards - TOP PRIORITY */}
      <Stagger className="mt-10 grid gap-6 md:grid-cols-2">
        <StaggerItem>
          <div className="h-full rounded-[1.5rem] bg-cream p-7 shadow-card ring-1 ring-navy/5 border-t-4 border-orange transition duration-300 hover:shadow-soft">
            <div className="mb-4 inline-flex items-center gap-2.5">
              <div className="flex size-10 items-center justify-center rounded-xl bg-orange text-white shadow-sm">
                <Eye className="size-5" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange">
                Our Vision
              </span>
            </div>
            <h3 className="text-2xl font-bold leading-snug text-navy italic">
              &ldquo;{siteContent.about.vision}&rdquo;
            </h3>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="h-full rounded-[1.5rem] bg-cream p-7 shadow-card ring-1 ring-navy/5 border-t-4 border-navy transition duration-300 hover:shadow-soft">
            <div className="mb-4 inline-flex items-center gap-2.5">
              <div className="flex size-10 items-center justify-center rounded-xl bg-navy text-white shadow-sm">
                <Target className="size-5" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-navy">
                Our Mission
              </span>
            </div>
            <p className="text-base sm:text-lg font-medium leading-relaxed text-ink/85">
              {siteContent.about.mission}
            </p>
          </div>
        </StaggerItem>
      </Stagger>

      {/* Distinctive Feature Callout */}
      <Reveal delay={0.15} className="mt-6">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-navy p-7 text-white shadow-soft sm:p-8 ring-1 ring-white/10">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-6">
            <div className="inline-flex size-13 shrink-0 items-center justify-center rounded-2xl bg-orange text-white shadow-lg">
              <HeartHandshake className="size-6" aria-hidden="true" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange">
                Distinctive Feature
              </span>
              <h3 className="mt-0.5 text-2xl font-bold text-white">
                Culture of Mutual Care
              </h3>
              <p className="mt-2.5 text-base leading-relaxed text-white/88 sm:text-lg sm:leading-8">
                {siteContent.about.distinctiveFeature}
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Story & Image Section */}
      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <Reveal>
          <div className="flex items-start gap-3 rounded-[1.35rem] bg-cream p-5 text-navy shadow-card">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green" aria-hidden="true" />
            <p className="text-lg font-semibold">{siteContent.about.welcome}</p>
          </div>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink/75">
            Join students, professionals, and community members working hand-in-hand to foster kindness, support neighbourhood families, and build sustainable happiness together.
          </p>
          <Button asChild size="lg" className="mt-7">
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
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 via-navy/50 to-transparent p-6 text-white">
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
