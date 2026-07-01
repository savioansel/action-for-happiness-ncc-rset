import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = PropsWithChildren<{
  id: string;
  className?: string;
  variant?: "white" | "cream" | "navy";
}>;

export function SectionShell({
  id,
  children,
  className,
  variant = "white",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-24 sm:py-28 lg:py-32",
        variant === "cream" && "bg-cream",
        variant === "navy" && "bg-navy text-white",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}
