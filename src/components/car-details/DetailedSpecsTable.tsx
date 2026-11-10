import React from "react";
import { Car } from "@/types/car";
import { formatNumber } from "@/lib/utils";

interface DetailedSpecsTableProps {
  car: Car;
}

export function DetailedSpecsTable({ car }: DetailedSpecsTableProps) {
  const specs = [
    { label: "Make", value: car.make },
    { label: "Model", value: car.model },
    { label: "Year", value: car.year.toString() },
    { label: "Trim / Edition", value: car.trim },
    { label: "Body Type", value: car.bodyType },
    { label: "Mileage", value: car.mileageKm === 0 ? "0 km" : `${formatNumber(car.mileageKm)} km` },
    { label: "Engine Capacity", value: car.engineSize },
    { label: "Transmission", value: car.transmission },
    { label: "Drivetrain", value: car.drivetrain },
    { label: "Fuel Type", value: car.fuelType },
    { label: "Exterior Color", value: car.exteriorColor },
    { label: "Interior Color", value: car.interiorColor },
    { label: "Condition", value: car.condition },
    { label: "Chassis / VIN", value: car.vin },
    { label: "Stock Ref", value: car.stockNumber },
    { label: "Inspection Status", value: car.history.inspectionStatus },
    { label: "Warranty", value: car.history.warranty },
  ];

  return (
    <div className="border border-neutral-800 rounded-xl bg-neutral-950 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800">
        <div className="divide-y divide-neutral-800">
          {specs.slice(0, Math.ceil(specs.length / 2)).map((s) => (
            <div key={s.label} className="p-3 flex items-center justify-between text-xs">
              <span className="text-neutral-400">{s.label}</span>
              <span className="text-white font-mono font-medium text-right truncate max-w-[180px]">
                {s.value}
              </span>
            </div>
          ))}
        </div>

        <div className="divide-y divide-neutral-800">
          {specs.slice(Math.ceil(specs.length / 2)).map((s) => (
            <div key={s.label} className="p-3 flex items-center justify-between text-xs">
              <span className="text-neutral-400">{s.label}</span>
              <span className="text-white font-mono font-medium text-right truncate max-w-[180px]">
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
