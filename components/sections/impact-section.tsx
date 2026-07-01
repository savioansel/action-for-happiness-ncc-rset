"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { siteContent } from "@/data/site-content";

export function ImpactSection() {
  return (
    <SectionShell id="impact" variant="navy">
      <Reveal>
        <SectionHeading
          eyebrow="Impact"
          title="Community Service in Motion"
          className="[&>h2]:text-white"
        />
      </Reveal>
      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {siteContent.impact.map((metric) => (
          <StaggerItem key={metric.label}>
            <article className="rounded-[1.5rem] border border-white/12 bg-white/8 p-6 text-center shadow-[0_24px_60px_-42px_rgb(0_0_0_/_0.9)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/12">
              <CountUp value={metric.value} suffix={metric.suffix} />
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/68">
                {metric.label}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView || reduceMotion) {
      if (reduceMotion) {
        setDisplay(value);
      }
      return;
    }

    const controls = animate(0, value, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref} className="font-serif text-5xl font-bold leading-none text-white">
      {new Intl.NumberFormat("en-IN").format(display)}
      {suffix}
    </span>
  );
}
