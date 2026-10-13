import React from "react";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow && (
        <div className={`mb-3 ${align === "center" ? "flex justify-center" : ""}`}>
          <Badge variant="yellow" size="sm">
            {eyebrow}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`h-1 w-12 bg-amber-500 rounded-full mt-4 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
};
