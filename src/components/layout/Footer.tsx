import React from "react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn("w-full py-8 mt-20 border-t border-gray-200", className)}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-[#426B1F] text-xl font-medium mb-4 md:mb-0">
            EcoFarm
          </div>
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} EcoFarm. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
