import React from "react";
import { cn } from "@/lib/utils";

interface EcoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "danger";
  className?: string;
  children: React.ReactNode;
}

export function EcoButton({
  variant = "default",
  className,
  children,
  ...props
}: EcoButtonProps) {
  return (
    <button
      className={cn(
        "text-center text-base font-semibold leading-[20.8px] bg-white px-4 py-[9.5px] rounded-[20px] border-[3px] border-[#C2C2C2] hover:bg-gray-50 transition-colors",
        variant === "danger" && "text-[#F71212]",
        variant === "default" && "text-black",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
