"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Crown,
  GraduationCap,
  HeartHandshake,
  KeyRound,
  Scale,
  Shield,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { siteContent } from "@/data/site-content";
import { cn } from "@/lib/utils";
import type { GoverningBodyMember } from "@/types/site";

const designationIcons: Record<string, typeof Crown> = {
  President: Crown,
  "Vice President": Sparkles,
  "Chief Mentor": GraduationCap,
  Secretary: KeyRound,
  "Joint Secretary": Scale,
  Treasurer: Shield,
  "Executive Member": Users,
};

const designationColors: Record<
  string,
  { bg: string; text: string; border: string; glow: string }
> = {
  President: {
    bg: "bg-amber-500/10",
    text: "text-amber-700",
    border: "border-amber-500/30",
    glow: "shadow-amber-500/10",
  },
  "Vice President": {
    bg: "bg-orange-500/10",
    text: "text-orange",
    border: "border-orange-500/30",
    glow: "shadow-orange-500/10",
  },
  "Chief Mentor": {
    bg: "bg-emerald-500/10",
    text: "text-emerald-700",
    border: "border-emerald-500/30",
    glow: "shadow-emerald-500/10",
  },
  Secretary: {
    bg: "bg-blue-500/10",
    text: "text-blue-700",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/10",
  },
  "Joint Secretary": {
    bg: "bg-indigo-500/10",
    text: "text-indigo-700",
    border: "border-indigo-500/30",
    glow: "shadow-indigo-500/10",
  },
  Treasurer: {
    bg: "bg-teal-500/10",
    text: "text-teal-700",
    border: "border-teal-500/30",
    glow: "shadow-teal-500/10",
  },
  "Executive Member": {
    bg: "bg-navy/5",
    text: "text-navy/80",
    border: "border-navy/15",
    glow: "shadow-navy/5",
  },
};

export function GoverningBodyView() {
  const [selectedMember, setSelectedMember] = useState<GoverningBodyMember | null>(null);

  // Prevent background scroll on modal open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedMember]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMember(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const members = siteContent.governingBody;

  const officeBearers = useMemo(
    () => members.filter((m) => m.category === "office-bearer"),
    [members],
  );

  const executiveMembers = useMemo(
    () => members.filter((m) => m.category === "executive-member"),
    [members],
  );

  return (
    <div className="min-h-screen bg-cream/50 pt-28 pb-20">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden pt-8 pb-14 sm:pb-20">
        {/* Background decorative blurs */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] overflow-hidden opacity-60">
          <div className="absolute top-[-20%] left-1/4 size-[400px] rounded-full bg-orange/10 blur-[100px]" />
          <div className="absolute top-[10%] right-1/4 size-[350px] rounded-full bg-navy/10 blur-[90px]" />
        </div>

        <div className="container-page relative z-10">
          {/* Breadcrumb navigation */}
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-ink/60">
              <Link
                href="/"
                className="focus-ring inline-flex items-center gap-1 font-medium hover:text-orange transition-colors"
              >
                <ArrowLeft className="size-3.5" />
                Home
              </Link>
              <ChevronRight className="size-3.5 text-ink/40" />
              <span className="font-semibold text-navy">Governing Body</span>
            </nav>
          </Reveal>

          {/* Title and Eyebrow */}
          <Reveal delay={0.05}>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange-soft px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-orange shadow-xs">
                <HeartHandshake className="size-4" />
                Leadership & Governance
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy">
                Governing Body
              </h1>
              <p className="mt-5 text-lg sm:text-xl leading-relaxed text-ink/75">
                The governing body steering the Happiness Promoters initiative. Bringing together academic leaders, healthcare professionals, social pioneers, and educators to guide our mission of compassionate community transformation.
              </p>
            </div>
          </Reveal>

          {/* Quick Metrics Bar */}
          <Reveal delay={0.1}>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              <div className="rounded-2xl border border-navy/10 bg-white/80 p-4 shadow-sm backdrop-blur-xs sm:p-5">
                <p className="text-2xl sm:text-3xl font-bold text-navy">
                  {members.length}
                </p>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-ink/60">
                  Total Council Members
                </p>
              </div>
              <div className="rounded-2xl border border-navy/10 bg-white/80 p-4 shadow-sm backdrop-blur-xs sm:p-5">
                <p className="text-2xl sm:text-3xl font-bold text-orange">
                  {officeBearers.length}
                </p>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-ink/60">
                  Office Bearers
                </p>
              </div>
              <div className="rounded-2xl border border-navy/10 bg-white/80 p-4 shadow-sm backdrop-blur-xs sm:p-5">
                <p className="text-2xl sm:text-3xl font-bold text-navy">
                  {executiveMembers.length}
                </p>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-ink/60">
                  Executive Members
                </p>
              </div>
              <div className="rounded-2xl border border-navy/10 bg-white/80 p-4 shadow-sm backdrop-blur-xs sm:p-5">
                <p className="text-2xl sm:text-3xl font-bold text-green">100%</p>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-ink/60">
                  Honorary Service
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container-page space-y-16">
        {/* Office Bearers */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-orange-soft text-orange shadow-xs">
              <Crown className="size-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy">
                Office Bearers
              </h2>
              <p className="text-xs sm:text-sm text-ink/60">
                Core office bearers responsible for governance and organizational administration
              </p>
            </div>
          </div>

          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {officeBearers.map((member) => (
              <MemberCard
                key={member.name}
                member={member}
                onSelect={() => setSelectedMember(member)}
              />
            ))}
          </Stagger>
        </div>

        {/* Executive Members */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-navy/5 text-navy shadow-xs">
              <Users className="size-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy">
                Executive Members
              </h2>
              <p className="text-xs sm:text-sm text-ink/60">
                Distinguished members supporting execution, community outreach, and project initiatives
              </p>
            </div>
          </div>

          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {executiveMembers.map((member) => (
              <MemberCard
                key={member.name}
                member={member}
                onSelect={() => setSelectedMember(member)}
              />
            ))}
          </Stagger>
        </div>

        {/* Bottom Callout: Join / Contact */}
        <Reveal delay={0.2} className="mt-16">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy to-navy-soft p-8 sm:p-12 text-white shadow-soft">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 size-64 rounded-full bg-orange/20 blur-3xl" />
            <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-orange-soft backdrop-blur-xs">
                  <CheckCircle2 className="size-3.5" />
                  Collaborative Impact
                </div>
                <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
                  Join Hands with Our Initiative
                </h3>
                <p className="mt-2 text-sm sm:text-base text-white/75">
                  Connect with our team to volunteer for upcoming drives, support community outreach, or partner with us.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/#volunteer"
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-orange/90 transition-colors"
                >
                  Volunteer Now
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/#contact"
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-xs hover:bg-white/20 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Member Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
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
                aria-labelledby="governing-modal-title"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="focus-ring absolute top-4 right-4 sm:top-6 sm:right-6 size-10 rounded-full bg-cream hover:bg-orange-soft text-navy hover:text-orange flex items-center justify-center transition-colors duration-200 cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="size-5" />
                </button>

                {/* Profile Photo (Left Side on Desktop) */}
                <div className="relative w-full md:w-[280px] shrink-0 aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-card bg-cream">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    sizes="(min-width: 768px) 280px, 100vw"
                    className="object-cover"
                    priority
                  />
                  {/* Designation badge positioned inside image card bottom */}
                  <div className="absolute inset-x-3 bottom-3 rounded-xl bg-navy/85 backdrop-blur-md px-3 py-2 text-center shadow-lg border border-white/20">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange">
                      {selectedMember.designation}
                    </span>
                  </div>
                </div>

                {/* Details (Right Side on Desktop) */}
                <div className="flex-1 flex flex-col min-w-0 pr-2">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <DesignationBadge
                      designation={selectedMember.designation}
                      category={selectedMember.category}
                    />
                  </div>

                  <h2
                    id="governing-modal-title"
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-2 leading-tight pr-8"
                  >
                    {selectedMember.name}
                  </h2>
                  <p className="text-sm sm:text-base font-semibold text-ink/70 mb-6">
                    {selectedMember.role}
                  </p>

                  <div className="text-ink/85 text-base sm:text-lg leading-relaxed whitespace-pre-line overflow-y-visible border-t border-navy/10 pt-5">
                    {selectedMember.bio}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function DesignationBadge({
  designation,
  category,
}: {
  designation: string;
  category: "office-bearer" | "executive-member";
}) {
  const Icon = designationIcons[designation] || Users;
  const colors = designationColors[designation] || designationColors["Executive Member"];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-2xs",
        colors.bg,
        colors.text,
        colors.border,
      )}
    >
      <Icon className="size-3.5" />
      {designation}
    </span>
  );
}

function MemberCard({
  member,
  onSelect,
}: {
  member: GoverningBodyMember;
  onSelect: () => void;
}) {
  const Icon = designationIcons[member.designation] || Users;
  const isOfficeBearer = member.category === "office-bearer";
  const colors = designationColors[member.designation] || designationColors["Executive Member"];

  return (
    <StaggerItem>
      <button
        onClick={onSelect}
        className={cn(
          "focus-ring group w-full text-left flex flex-col rounded-[1.5rem] bg-white border transition-all duration-300 hover:-translate-y-1.5 cursor-pointer overflow-hidden shadow-card hover:shadow-soft",
          isOfficeBearer ? "border-navy/12 hover:border-orange/30" : "border-navy/8 hover:border-navy/20",
        )}
      >
        <div className="flex items-stretch min-h-[140px] sm:min-h-[150px]">
          {/* Photo on left side */}
          <div className="relative w-28 sm:w-32 shrink-0 overflow-hidden bg-cream">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(min-width: 640px) 128px, 112px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-r from-transparent to-white" />
          </div>

          {/* Details on right side */}
          <div className="min-w-0 flex-1 flex flex-col justify-between p-4 sm:p-5">
            <div>
              {/* Designation pill */}
              <div className="mb-2">
                <span
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider",
                    colors.bg,
                    colors.text,
                    colors.border,
                    "border",
                  )}
                >
                  <Icon className="size-3" />
                  {member.designation}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-base sm:text-lg font-bold text-navy line-clamp-1 group-hover:text-orange transition-colors duration-200">
                {member.name}
              </h3>

              {/* Professional title */}
              <p className="text-xs sm:text-sm font-medium text-ink/65 line-clamp-2 leading-snug mt-1">
                {member.role}
              </p>
            </div>

            {/* View Bio link button indicator */}
            <div className="mt-3 flex items-center justify-between border-t border-navy/6 pt-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-orange uppercase tracking-wider group-hover:underline">
                <BookOpen className="size-3" />
                View Full Bio
              </span>
              <ArrowRight className="size-3.5 text-navy/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-orange" />
            </div>
          </div>
        </div>
      </button>
    </StaggerItem>
  );
}
