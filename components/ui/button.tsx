import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-navy text-white shadow-[0_16px_36px_-22px_rgb(30_42_68_/_0.7)] hover:-translate-y-0.5 hover:bg-navy-soft",
        secondary:
          "border border-navy/18 bg-white text-navy shadow-[0_16px_34px_-28px_rgb(30_42_68_/_0.55)] hover:-translate-y-0.5 hover:border-navy hover:bg-navy hover:text-white",
        orange:
          "bg-orange text-white shadow-[0_16px_36px_-22px_rgb(242_107_74_/_0.75)] hover:-translate-y-0.5 hover:bg-[#df5e40]",
        ghost: "bg-transparent text-navy hover:bg-navy/6",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-7 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      data-slot="button"
      {...props}
    />
  );
}

export { Button, buttonVariants };
