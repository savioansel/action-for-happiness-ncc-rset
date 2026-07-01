import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-orange">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-4xl font-bold leading-[1.08] text-navy sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-ink/70">{description}</p>
      ) : null}
    </div>
  );
}
