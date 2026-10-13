import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  className = "",
  asLink = false,
  href,
  target,
  rel,
  download,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-amber-500 hover:bg-amber-400 text-black font-semibold shadow-sm hover:shadow-md hover:shadow-amber-500/10 active:translate-y-0.5",
    secondary:
      "bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-100 dark:text-black border border-transparent shadow-sm active:translate-y-0.5",
    outline:
      "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800/60 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700/80 active:translate-y-0.5",
    ghost:
      "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (asLink && href) {
    return (
      <a
        href={href}
        download={download}
        className={combinedStyles}
        target={target}
        rel={rel}
      >
        {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
};
