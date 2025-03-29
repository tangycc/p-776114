import React from "react";
import { EcoButton } from "@/components/ui/eco-button";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center mt-[150px] max-sm:mt-[100px]">
      <div className="w-[342px] h-[353px] bg-gray-200 flex items-center justify-center">
        {/* Placeholder for the image */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae649c6bb77a1297b13d7b1d88b85fc5cf8f157f"
          alt="EcoFarm Logo"
          className="w-full h-full object-contain"
        />
      </div>

      <h1 className="text-[#426B1F] text-[64px] font-medium leading-[64px] tracking-[-0.64px] mt-[101px] max-sm:text-5xl">
        EcoFarm
      </h1>

      <div className="flex flex-col items-end gap-[29px] mt-[78px] max-sm:items-center">
        <EcoButton variant="danger" className="px-[51px]">
          New to EcoFarm? Click here for guidance
        </EcoButton>

        <EcoButton className="px-[26px]">Contact Development Team</EcoButton>
      </div>
    </div>
  );
}
