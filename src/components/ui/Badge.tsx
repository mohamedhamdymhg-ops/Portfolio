import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "yellow" | "neutral" | "emerald" | "outline";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
  size = "md",
  className = "",
  icon,
}) => {
  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 gap-1 font-medium",
    md: "text-xs px-3 py-1 gap-1.5 font-medium",
  };

  const variantStyles = {
    yellow:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30",
    neutral:
      "bg-neutral-100 text-neutral-800 dark:bg-neutral-800/80 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/60",
    emerald:
      "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25",
    outline:
      "bg-transparent text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
