"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, MessageSquare, ArrowRight } from "lucide-react";
import { Car } from "@/types/car";
import { useWishlist } from "@/context/WishlistContext";
import { formatGHS, formatNumber } from "@/lib/utils";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const saved = isInWishlist(car.id);
  const [imgSrc, setImgSrc] = useState(car.images[0] || "/images/cars/land-cruiser-1.jpg");

  const whatsappLink = `https://wa.me/${car.sellerWhatsApp}?text=Hello,%20inquiring%20about%20the%20${encodeURIComponent(
    `${car.year} ${car.make} ${car.model} (${formatGHS(car.priceGHS)})`
  )}.`;

  return (
    <div className="solid-card rounded-2xl overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all duration-200">
      {/* Photo Container */}
      <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden">
        <Image
          src={imgSrc}
          alt={`${car.year} ${car.make} ${car.model}`}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-300 hover:scale-105"
          onError={() => setImgSrc("/images/cars/land-cruiser-1.jpg")}
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="px-2.5 py-1 rounded-md bg-black/85 border border-neutral-700 text-[11px] font-mono text-neutral-200">
            {car.condition}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(car.id);
            }}
            className={`pointer-events-auto p-2 rounded-md bg-black/85 border transition-colors ${
              saved
                ? "bg-white text-black border-white"
                : "text-white border-neutral-700 hover:border-white"
            }`}
            aria-label={saved ? "Saved" : "Save"}
          >
            <Heart className={`w-3.5 h-3.5 ${saved ? "fill-current" : ""}`} />
          </button>
        </div>
      </div>

      {/* Content Container with Generous Breathing Space */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4">
        {/* Title & Specs */}
        <div className="flex flex-col gap-1.5">
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
            {car.year} {car.make} {car.model}
          </h3>

          <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono pt-0.5">
            <span>{car.mileageKm === 0 ? "0 km" : `${formatNumber(car.mileageKm)} km`}</span>
            <span className="w-1 h-1 rounded-full bg-neutral-700" />
            <span>{car.fuelType}</span>
            <span className="w-1 h-1 rounded-full bg-neutral-700" />
            <span>{car.transmission}</span>
          </div>
        </div>

        {/* Price & Action Block */}
        <div className="pt-4 border-t border-neutral-800/80 flex flex-col gap-3.5">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">
              Price
            </span>
            <span className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
              {formatGHS(car.priceGHS)}
            </span>
          </div>

          {/* Action Buttons: Well-proportioned, distinct with breathing space */}
          <div className="grid grid-cols-2 gap-2.5">
            <Link
              href={`/cars/${car.id}`}
              className="py-2.5 px-3 rounded-xl border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 text-neutral-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              title="Chat with seller on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
