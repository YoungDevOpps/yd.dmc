import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  variant?: "default" | "lightBg" | "darkBg";
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  variant = "default",
  children,
  className,
}: SectionWrapperProps) {
  const variantClass = {
    default: "bg-white",
    lightBg: "bg-gray-50",
    darkBg: "bg-gray-100",
  }[variant];

  return (
    <section
      id={id}
      className={cn(
        "py-20 mx-auto px-6 min-h-[50vh] flex items-center flex-col justify-center gap-4 transition-all duration-300",
        variantClass,
        className
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
}
