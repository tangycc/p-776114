import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "w-full h-28 flex items-center justify-between px-[88px] max-md:px-10 max-sm:px-5",
        className,
      )}
    >
      <div className="text-[#426B1F] text-[32px] font-medium leading-8 tracking-[-0.32px]">
        EcoFarm
      </div>

      {/* Desktop Navigation */}
      <nav className="flex items-center gap-[27px] max-md:hidden">
        <a
          href="#"
          className="text-black text-center text-base font-normal leading-[20.8px]"
        >
          Simple Tips
        </a>
        <a
          href="#"
          className="text-black text-center text-base font-normal leading-[20.8px]"
        >
          Resource Management Tools
        </a>
        <a
          href="#"
          className="text-black text-center text-base font-normal leading-[20.8px]"
        >
          Weather Estimates
        </a>
        <a
          href="#"
          className="text-black text-center text-base font-normal leading-[20.8px]"
        >
          Community Collaboration
        </a>
        <a
          href="#"
          className="text-black text-center text-base font-normal leading-[20.8px]"
        >
          BaskMarket Connectivity
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="hidden max-md:block">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[24px] h-[24px]"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-5 flex flex-col md:hidden">
          <div className="flex justify-between items-center mb-8">
            <div className="text-[#426B1F] text-[32px] font-medium leading-8 tracking-[-0.32px]">
              EcoFarm
            </div>
            <button onClick={toggleMenu} aria-label="Close menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[24px] h-[24px]"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18 6l-12 12"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            <a
              href="#"
              className="text-black text-xl font-normal py-2 border-b border-gray-100"
            >
              Simple Tips
            </a>
            <a
              href="#"
              className="text-black text-xl font-normal py-2 border-b border-gray-100"
            >
              Resource Management Tools
            </a>
            <a
              href="#"
              className="text-black text-xl font-normal py-2 border-b border-gray-100"
            >
              Weather Estimates
            </a>
            <a
              href="#"
              className="text-black text-xl font-normal py-2 border-b border-gray-100"
            >
              Community Collaboration
            </a>
            <a
              href="#"
              className="text-black text-xl font-normal py-2 border-b border-gray-100"
            >
              BaskMarket Connectivity
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
