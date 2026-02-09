import type React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline" | "secondary";
}

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition";
  const variants = {
    primary: "bg-primary text-primary-foreground shadow hover:opacity-90",
    secondary: "bg-secondary text-secondary-foreground shadow hover:opacity-90",
    outline: "border border-muted-foreground/40 text-foreground hover:bg-muted",
    ghost: "text-foreground hover:bg-muted"
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props} />
  );
}
