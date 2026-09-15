import type { Metadata } from "next";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { GoverningBodyView } from "@/components/sections/governing-body-view";

export const metadata: Metadata = {
  title: "Governing Body | Action for Happiness",
  description:
    "Meet the Governing Body and leadership council of the Action for Happiness initiative, Rajagiri School of Engineering & Technology.",
};

export default function GoverningBodyPage() {
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
        <GoverningBodyView />
      </main>
      <Footer />
    </>
  );
}
