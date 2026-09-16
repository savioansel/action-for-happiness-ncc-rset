import Image from "next/image";
import { ArrowRight, CheckCircle2, Compass, Eye, HeartHandshake, ListChecks, Target } from "lucide-react";

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
          title="Happiness Promoters"
          description={siteContent.about.copy}
        />
      </Reveal>

      {/* Vision & Mission Cards */}
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

      {/* Area of Operation & Distinctive Feature Cards */}
      <Stagger className="mt-6 grid gap-6 md:grid-cols-2">
        <StaggerItem>
          <div className="h-full rounded-[1.5rem] bg-cream p-7 shadow-card ring-1 ring-navy/5 border-t-4 border-emerald-600 transition duration-300 hover:shadow-soft flex flex-col justify-start">
            <div className="mb-4 inline-flex items-center gap-2.5">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
                <Compass className="size-5" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Area of Operation
              </span>
            </div>
            <p className="text-base sm:text-lg font-medium leading-relaxed text-ink/85">
              {siteContent.about.areaOfOperation}
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="h-full rounded-[1.5rem] bg-navy p-7 text-white shadow-soft ring-1 ring-white/10 border-t-4 border-orange transition duration-300 hover:shadow-lg flex flex-col justify-start">
            <div className="mb-4 inline-flex items-center gap-2.5">
              <div className="flex size-10 items-center justify-center rounded-xl bg-orange text-white shadow-sm">
                <HeartHandshake className="size-5" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange">
                Distinctive Feature
              </span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Culture of Mutual Care</h4>
            <p className="text-sm sm:text-base leading-relaxed text-white/88">
              {siteContent.about.distinctiveFeature}
            </p>
          </div>
        </StaggerItem>
      </Stagger>

      {/* Objectives of the Society */}
      <div className="mt-14 sm:mt-16">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-cream px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy">
              <ListChecks className="size-3.5 text-orange" aria-hidden="true" />
              <span>Aims & Mandates</span>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-navy font-display">
              Objectives of the Society
            </h3>
            <p className="mt-2 text-sm sm:text-base text-ink/75">
              The Society is established solely for charitable, educational, social welfare and public benefit purposes without any profit motive.
            </p>
          </div>
        </Reveal>

        <Stagger className="grid gap-3.5 sm:grid-cols-2">
          {siteContent.about.objectives.map((objective, idx) => (
            <StaggerItem key={idx}>
              <div className="group flex h-full items-start gap-4 rounded-2xl bg-cream/70 p-4.5 sm:p-5 ring-1 ring-navy/5 transition-all duration-200 hover:bg-white hover:shadow-card hover:ring-navy/15">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-navy/10 text-xs font-bold text-navy transition-colors duration-200 group-hover:bg-navy group-hover:text-white">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-sm sm:text-base font-medium leading-snug sm:leading-relaxed text-ink/85 pt-0.5">
                  {objective}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

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
