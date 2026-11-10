"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, MessageSquare, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Car } from "@/types/car";
import { useWishlist } from "@/context/WishlistContext";
import { formatGHS, formatNumber } from "@/lib/utils";

const DEFAULT_SELLER_WHATSAPP = "233559888003";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const saved = isInWishlist(car.id);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = car.images && car.images.length > 0 ? car.images : ["/images/cars/land-cruiser-1.jpg"];

  // Automated image cycling (not fixed)
  useEffect(() => {
    if (images.length <= 1) return;

    // Cycle faster when user is hovering (1.8s), otherwise automated gentle cycle (4.5s)
    const intervalTime = isHovered ? 1800 : 4500;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, intervalTime);

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

  return (
    <div
      className="solid-card rounded-2xl overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all duration-200 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Automated Photo Container */}
      <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              idx === activeIdx ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={img}
              alt={`${car.year} ${car.make} ${car.model} - Photo ${idx + 1}`}
              fill
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="px-2.5 py-1 rounded-md bg-black/90 border border-neutral-700 text-[10px] font-mono uppercase tracking-wider text-neutral-200">
            {car.condition}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(car.id);
            }}
            className={`pointer-events-auto p-2 rounded-md bg-black/90 border transition-colors ${
              saved
                ? "bg-white text-black border-white"
                : "text-white border-neutral-700 hover:border-white"
            }`}
            aria-label={saved ? "Saved" : "Save"}
          >
            <Heart className={`w-3.5 h-3.5 ${saved ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* Manual Arrow Controls on Card */}
        {images.length > 1 && (
          <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              type="button"
              onClick={handlePrevImage}
              className="pointer-events-auto p-1.5 rounded-full bg-black/70 hover:bg-black text-white border border-neutral-700 transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleNextImage}
              className="pointer-events-auto p-1.5 rounded-full bg-black/70 hover:bg-black text-white border border-neutral-700 transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Multi-photo Progress Line at Bottom */}
        {images.length > 1 && (
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center gap-1.5 z-10 pointer-events-none">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  idx === activeIdx ? "bg-white" : "bg-black/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* 2. Structured Content with Clear Typographic Hierarchy */}
      <div className="p-5 flex flex-col justify-between flex-1 gap-4">
        {/* Title & Trim */}
        <div className="flex flex-col gap-1">
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug truncate">
            {car.year} {car.make} {car.model}
          </h3>
          <p className="text-xs text-neutral-400 truncate font-medium">
            {car.trim}
          </p>

          {/* Key Specs Row */}
          <div className="flex items-center gap-2 text-[11px] text-neutral-300 font-mono pt-2">
            <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">
              {car.mileageKm === 0 ? "0 km" : `${formatNumber(car.mileageKm)} km`}
            </span>
            <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">
              {car.fuelType}
            </span>
            <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">
              {car.transmission}
            </span>
          </div>
        </div>

        {/* 3. Price & Action Block */}
        <div className="pt-3.5 border-t border-neutral-800/80 flex flex-col gap-3">
          {/* Price */}
          <div className="flex flex-col">
            <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">
              Asking Price
            </span>
            <span className="text-xl sm:text-2xl font-extrabold font-mono text-white tracking-tight">
              {formatGHS(car.priceGHS)}
            </span>
          </div>

          {/* Action Buttons: Vertical arrangement on mobile screens, 2-cols on sm+ */}
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 sm:h-10 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors order-1 sm:order-2"
              title="Inquire via WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <Link
              href={`/cars/${car.id}`}
              className="h-11 sm:h-10 px-3 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors order-2 sm:order-1"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
