import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FoundersSection } from "@/components/sections/founders-section";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { MissionSection } from "@/components/sections/mission-section";
import { ServiceAreasSection } from "@/components/sections/service-areas-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { UpcomingActivitiesSection } from "@/components/sections/upcoming-activities-section";
import { VolunteerSection } from "@/components/sections/volunteer-section";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="focus-ring fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <ServiceAreasSection />
        <TimelineSection />
        <UpcomingActivitiesSection />
        <VolunteerSection />
        <ImpactSection />
        <TestimonialsSection />
        <FAQSection />
        <FoundersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
