"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, BookOpen, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { siteContent } from "@/data/site-content";
import { cn } from "@/lib/utils";
import type { Founder } from "@/types/site";

export function FoundersSection() {
  const [selectedFounder, setSelectedFounder] = useState<Founder | null>(null);

  // Prevent page scroll when modal is open
  useEffect(() => {
    if (selectedFounder) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedFounder]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedFounder(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const totalFounders = siteContent.founders.length;

  return (
    <SectionShell id="founders" variant="cream">
      <SectionHeading
        eyebrow="Leadership"
        title="Meet Our Founders"
        description="The visionary team behind the Action for Happiness community outreach initiative."
      />

      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {siteContent.founders.map((founder, index) => {
          const isLast = index === totalFounders - 1;
          const isSingleInThreeCol = isLast && totalFounders % 3 === 1;
          const isSingleInTwoCol = isLast && totalFounders % 2 === 1;

          return (
            <StaggerItem
              key={founder.name}
              className={cn(
                isSingleInTwoCol && "sm:col-span-2 sm:max-w-md sm:mx-auto w-full",
                isSingleInThreeCol && "lg:col-span-1 lg:col-start-2 lg:max-w-none"
              )}
            >
              <button
                onClick={() => setSelectedFounder(founder)}
                className="focus-ring group w-full text-left flex items-stretch rounded-[1.25rem] bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft cursor-pointer overflow-hidden"
              >
              {/* Left-side Image with Gradient Transition */}
              <div className="relative w-24 sm:w-28 shrink-0 overflow-hidden">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="(min-width: 640px) 112px, 96px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Smooth transition gradient to blend image into the white card */}
                <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-r from-transparent to-white" />
              </div>

              {/* Content area */}
              <div className="min-w-0 flex-1 flex flex-col justify-center py-4 pr-5 pl-2 sm:pl-3">
                <h3 className="text-lg font-bold text-navy line-clamp-1 group-hover:text-orange transition-colors duration-200">
                  {founder.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-ink/64 line-clamp-2 leading-snug mt-1">
                  {founder.role}
                </p>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-orange uppercase tracking-wider mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <BookOpen className="size-3" />
                  View Bio
                </span>
              </div>
            </button>
          </StaggerItem>
        );
      })}
      </Stagger>

      {/* Link to Governing Body Page */}
      <div className="mt-12 rounded-2xl border border-navy/10 bg-white p-6 sm:p-8 shadow-card flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-orange">
            Organizational Structure
          </span>
          <h3 className="mt-1 text-xl sm:text-2xl font-bold text-navy">
            View the Governing Body
          </h3>
          <p className="mt-1 text-sm text-ink/70 max-w-xl">
            Explore the official designations and administrative leadership council of our initiative.
          </p>
        </div>
        <Link
          href="/governing-body"
          className="focus-ring shrink-0 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-navy/90 hover:text-white transition-all"
        >
          View Governing Body
          <ArrowRight className="size-4" />
        </Link>

      </div>

      <AnimatePresence>
        {selectedFounder && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFounder(null)}
              className="fixed inset-0 z-[200] bg-navy/60 backdrop-blur-xs"
              aria-hidden="true"
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-[201] flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                className="pointer-events-auto relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-[2rem] bg-white p-6 shadow-soft sm:p-8 md:p-10 flex flex-col md:flex-row gap-8 lg:gap-10 focus-ring"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedFounder(null)}
                  className="focus-ring absolute top-4 right-4 sm:top-6 sm:right-6 size-10 rounded-full bg-cream hover:bg-orange-soft text-navy hover:text-orange flex items-center justify-center transition-colors duration-200 cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="size-5" />
                </button>

                {/* Profile Photo (Left Side on Desktop) */}
                <div className="relative w-full md:w-[280px] shrink-0 aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-card bg-cream">
                  <Image
                    src={selectedFounder.image}
                    alt={selectedFounder.name}
                    fill
                    sizes="(min-width: 768px) 280px, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Details (Right Side on Desktop) */}
                <div className="flex-1 flex flex-col min-w-0 pr-2">
                  <h2
                    id="modal-title"
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-2 leading-tight pr-8"
                  >
                    {selectedFounder.name}
                  </h2>
                  <p className="text-sm sm:text-base font-bold text-orange uppercase tracking-wider mb-6">
                    {selectedFounder.role}
                  </p>

                  <div className="text-ink/80 text-base sm:text-lg leading-relaxed whitespace-pre-line overflow-y-visible">
                    {selectedFounder.bio}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </SectionShell>
  );
}
