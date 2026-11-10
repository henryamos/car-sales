import React from "react";
import { CARS_DATA } from "@/data/cars";
import { CarCard } from "@/components/cards/CarCard";

interface SimilarCarsProps {
  currentCarId: string;
  bodyType: string;
}

export function SimilarCars({ currentCarId, bodyType }: SimilarCarsProps) {
  const similarCars = CARS_DATA.filter((c) => c.id !== currentCarId)
    .sort((a, b) => (a.bodyType === bodyType ? -1 : 1))
    .slice(0, 3);

  if (similarCars.length === 0) return null;

  return (
    <div className="pt-16 border-t border-neutral-900 mt-12">
      <div className="pb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
          Related
        </span>
        <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
          Similar Vehicles
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similarCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}