"use client";

import React, { useState, useEffect } from "react";
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
  Sparkles,
  Globe,
  ShieldCheck,
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
  const [isHovered, setIsHovered] = useState(false);

  const images = car.images && car.images.length > 0 ? car.images : ["/images/cars/land-cruiser-1.jpg"];

  // Animate multi-image car cards on hover
  useEffect(() => {
    if (!isHovered || images.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [isHovered, images.length]);

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

  const conditionIcon =
    car.condition === "Brand New" ? (
      <Sparkles className="w-3 h-3 text-emerald-400" />
    ) : car.condition === "Foreign Used" ? (
      <Globe className="w-3 h-3 text-blue-400" />
    ) : (
      <ShieldCheck className="w-3 h-3 text-amber-400" />
    );

  const locationText = car.location ? `${car.location}, Ghana` : "Accra, Ghana";

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col justify-between bg-neutral-950/90 border border-neutral-800/90 hover:border-neutral-700 hover:shadow-2xl transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveIdx(0);
      }}
    >
      {/* 1. Vehicle Photography Container (Fixed 16:10 Ratio, Authentic Exterior First) */}
      <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
              idx === activeIdx ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={img}
              alt={`${car.year} ${car.make} ${car.model} - Photo ${idx + 1}`}
              fill
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        ))}

        {/* Top Badges: Condition (Left) & Availability Status (Right) */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-md bg-black/90 border border-neutral-700 text-[10px] font-semibold uppercase tracking-wider text-neutral-200 flex items-center gap-1.5 backdrop-blur-sm shadow-sm">
            {conditionIcon}
            <span>{car.condition}</span>
          </span>

          <span className="px-2.5 py-1 rounded-md bg-black/90 border border-neutral-700 text-[10px] font-medium text-emerald-400 flex items-center gap-1.5 backdrop-blur-sm shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available</span>
          </span>
        </div>

        {/* Photo Counter Badge (Bottom Right) */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
            <span className="px-2 py-0.5 rounded bg-black/85 text-[10px] font-medium text-neutral-300 border border-neutral-700/80 flex items-center gap-1 backdrop-blur-sm">
              <Camera className="w-3 h-3 text-neutral-400" />
              <span>
                {activeIdx + 1} / {images.length}
              </span>
            </span>
          </div>
        )}

        {/* Manual Arrow Controls (Desktop Hover) */}
        {images.length > 1 && (
          <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              type="button"
              onClick={handlePrevImage}
              className="pointer-events-auto p-1.5 rounded-full bg-black/75 hover:bg-black text-white border border-neutral-700 transition-colors shadow-md"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleNextImage}
              className="pointer-events-auto p-1.5 rounded-full bg-black/75 hover:bg-black text-white border border-neutral-700 transition-colors shadow-md"
              aria-label="Next photo"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Multi-photo Progress Line */}
        {images.length > 1 && (
          <div className="absolute bottom-2.5 left-3 right-16 flex items-center gap-1 z-10 pointer-events-none">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`h-0.5 flex-1 rounded-full transition-all duration-300 ${
                  idx === activeIdx ? "bg-white" : "bg-black/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* 2. Structured Card Content: Visual Sequence */}
      <div className="p-5 flex flex-col justify-between flex-1 gap-4">
        {/* Title, Trim, & Location */}
        <div className="flex flex-col gap-1.5">
          {/* Location Meta */}
          <div className="flex items-center gap-1 text-[11px] text-neutral-400 font-medium">
            <MapPin className="w-3 h-3 text-neutral-500 shrink-0" />
            <span>{locationText}</span>
          </div>

          {/* Vehicle Name (Primary Heading) */}
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug truncate group-hover:text-emerald-400 transition-colors">
            {car.year} {car.make} {car.model}
          </h3>

          {/* Trim / Variant */}
          <p className="text-xs text-neutral-400 truncate font-medium">
            {car.trim}
          </p>

          {/* 3. Upgraded Specifications Row: Larger, More Legible Typography & Clean Spacing */}
          <div className="grid grid-cols-3 gap-2 pt-2.5">
            <div className="px-2.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800/90 flex items-center gap-1.5 truncate">
              <Gauge className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              <span className="text-xs font-medium text-neutral-200 truncate">
                {car.mileageKm === 0 ? "0 km" : `${formatNumber(car.mileageKm)} km`}
              </span>
            </div>

            <div className="px-2.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800/90 flex items-center gap-1.5 truncate">
              <Fuel className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              <span className="text-xs font-medium text-neutral-200 truncate">
                {car.fuelType}
              </span>
            </div>

            <div className="px-2.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800/90 flex items-center gap-1.5 truncate">
              <Cog className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              <span className="text-xs font-medium text-neutral-200 truncate">
                {car.transmission}
              </span>
            </div>
          </div>
        </div>

        {/* 4. Elegant Price Block: Modern Sans-Serif Tabular Numbers (No Technical Monospace) */}
        <div className="pt-3.5 border-t border-neutral-800/80 flex flex-col gap-3">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-semibold text-neutral-400 tracking-wider">
              Asking Price
            </span>
            <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-sans mt-0.5">
              GH₵ {formatNumber(car.priceGHS)}
            </span>
          </div>

          {/* 5. Standardized Action Hierarchy:
              - Primary Action (Green): View Details
              - Secondary Action (Outlined Dark): WhatsApp
          */}
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2">
            <Link
              href={`/cars/${car.id}`}
              className="h-11 sm:h-10 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors order-1 shadow-sm"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Details</span>
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 sm:h-10 px-3 rounded-xl bg-neutral-900 border border-neutral-700/80 hover:border-neutral-500 hover:bg-neutral-800 text-neutral-200 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors order-2"
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
