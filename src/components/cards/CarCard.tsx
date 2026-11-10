"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageSquare,
  Eye,
  ChevronLeft,
  ChevronRight,
  Gauge,
  Fuel,
  Cog,
  MapPin,
  Camera,
} from "lucide-react";
import { Car } from "@/types/car";
import { formatGHS, formatNumber } from "@/lib/utils";

const DEFAULT_SELLER_WHATSAPP = "233559888003";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const images = car.images && car.images.length > 0 ? car.images : ["/images/cars/land-cruiser-1.jpg"];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % images.length);
  };

  const sellerWhatsApp = car.sellerWhatsApp || DEFAULT_SELLER_WHATSAPP;
  const whatsappLink = `https://wa.me/${sellerWhatsApp}?text=Hello,%20inquiring%20about%20the%20${encodeURIComponent(
    `${car.year} ${car.make} ${car.model} (${formatGHS(car.priceGHS)})`
  )}.`;

  const locationText = car.location ? `${car.location}, Ghana` : "Accra, Ghana";

  return (
    <div className="rounded-[12px] overflow-hidden flex flex-col justify-between bg-[#111111] border border-[#262626] hover:border-[#383838] transition-colors duration-200 group h-full">
      {/* 1. Vehicle Photograph Container */}
      <div className="relative aspect-[16/10] w-full bg-[#161616] overflow-hidden">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-200 ease-in-out ${
              idx === activeIdx ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={img}
              alt={`${car.year} ${car.make} ${car.model}`}
              fill
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Top-Left: Subtle Condition Badge (No icons, solid dark surface, medium font) */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="px-2.5 py-1 rounded-md bg-black/80 border border-neutral-700/60 text-[11px] font-medium text-neutral-200 backdrop-blur-sm">
            {car.condition}
          </span>
        </div>

        {/* Top-Right: Intentionally empty for clean look (reserved strictly for special statuses like Reserved / Sold) */}

        {/* Photo Counter (Bottom Right, discrete) */}
        {images.length > 1 && (
          <div className="absolute bottom-2.5 right-2.5 z-10 pointer-events-none">
            <span className="px-2 py-0.5 rounded bg-black/75 text-[10px] font-medium text-neutral-300 border border-neutral-700/50 flex items-center gap-1 backdrop-blur-sm">
              <Camera className="w-3 h-3 text-neutral-400" />
              <span>
                {activeIdx + 1}/{images.length}
              </span>
            </span>
          </div>
        )}

        {/* Desktop Hover Navigation Chevrons */}
        {images.length > 1 && (
          <div className="absolute inset-y-0 left-1.5 right-1.5 flex items-center justify-between pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
            <button
              type="button"
              onClick={handlePrevImage}
              className="pointer-events-auto p-1.5 rounded-full bg-black/70 hover:bg-black text-white border border-neutral-700/60 transition-colors shadow-sm"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleNextImage}
              className="pointer-events-auto p-1.5 rounded-full bg-black/70 hover:bg-black text-white border border-neutral-700/60 transition-colors shadow-sm"
              aria-label="Next photo"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* 2. Structured Card Information */}
      <div className="p-5 flex flex-col justify-between flex-1 gap-4">
        {/* Name, Trim, & Location */}
        <div className="flex flex-col gap-1">
          {/* Location */}
          <div className="flex items-center gap-1 text-[11px] text-neutral-400 font-normal">
            <MapPin className="w-3 h-3 text-neutral-500 shrink-0" />
            <span>{locationText}</span>
          </div>

          {/* Vehicle Name */}
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug truncate">
            {car.year} {car.make} {car.model}
          </h3>

          {/* Variant / Trim */}
          <p className="text-xs text-neutral-400 truncate">
            {car.trim}
          </p>

          {/* 3. Key Specifications: Single horizontal row with subtle separators */}
          <div className="flex items-center gap-2 pt-1.5 text-xs text-neutral-300 font-medium">
            <span>{car.mileageKm === 0 ? "0 km" : `${formatNumber(car.mileageKm)} km`}</span>
            <span className="text-neutral-600">&bull;</span>
            <span>{car.fuelType}</span>
            <span className="text-neutral-600">&bull;</span>
            <span>{car.transmission}</span>
          </div>
        </div>

        {/* 4. Price & Actions */}
        <div className="pt-3 border-t border-[#262626] flex flex-col gap-3">
          {/* Direct Clean Price (No unnecessary "ASKING PRICE" label) */}
          <div className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
            GH₵ {formatNumber(car.priceGHS)}
          </div>

          {/* Action Hierarchy: One Primary Green + One Understated Outline */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/cars/${car.id}`}
              className="h-10 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Details</span>
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-3 rounded-lg bg-transparent hover:bg-neutral-900 border border-[#262626] text-neutral-300 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
              title="Inquire via WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-neutral-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
