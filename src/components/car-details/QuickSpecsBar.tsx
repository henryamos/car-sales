import React from "react";
import { Car } from "@/types/car";
import { formatNumber } from "@/lib/utils";

interface QuickSpecsBarProps {
  car: Car;
}

export function QuickSpecsBar({ car }: QuickSpecsBarProps) {
  const specs = [
    { label: "Odometer", value: `${formatNumber(car.mileageKm)} km` },
    { label: "Engine", value: car.engineSize.split(" ")[0] },
    { label: "Transmission", value: car.transmission },
    { label: "Drivetrain", value: car.drivetrain },
    { label: "Condition", value: car.condition },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 w-full">
      {specs.map((item) => (
        <div
          key={item.label}
          className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 flex flex-col justify-between"
        >
          <span className="text-[10px] font-mono uppercase text-neutral-400">
            {item.label}
          </span>
          <span className="text-base font-bold font-mono text-white mt-1 truncate">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}