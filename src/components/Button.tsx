import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  fullWidth?: boolean;
  disabled?: boolean;
}

interface ButtonElementProps
  extends BaseProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

interface LinkElementProps
  extends BaseProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  onClick?: never;
}

type ButtonProps = ButtonElementProps | LinkElementProps;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-soft hover:bg-brand-700 focus-visible:outline-brand-300",
  secondary:
    "bg-white text-brand-800 ring-1 ring-brand-200 hover:bg-brand-50 focus-visible:outline-brand-200",
  ghost:
    "bg-transparent text-brand-800 hover:bg-white/70 focus-visible:outline-brand-100"
};

function getClassName(variant: Variant, fullWidth?: boolean, disabled?: boolean) {
  return [
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variantStyles[variant],
    fullWidth ? "w-full" : "",
    disabled ? "cursor-not-allowed opacity-60" : ""
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  children,
  href,
  variant = "primary",
  fullWidth,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  const mergedClassName = `${getClassName(variant, fullWidth, disabled)} ${className}`.trim();

  if (href) {
    const linkProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;

    if (disabled) {
      return (
        <span className={mergedClassName} aria-disabled="true">
          {children}
        </span>
      );
    }

    return (
      <Link
        href={href}
        className={mergedClassName}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={mergedClassName} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
