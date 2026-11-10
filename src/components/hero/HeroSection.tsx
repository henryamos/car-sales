"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowDown, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { CARS_DATA } from "@/data/cars";

const SLIDE_DURATION = 6000;

export function HeroSection() {
  const heroCars = CARS_DATA.filter((c) => c.heroSlide);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroCars.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [heroCars.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroCars.length) % heroCars.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroCars.length);
  };

  return (
    <section className="relative w-full min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex items-center bg-black border-b border-neutral-800 overflow-hidden pt-20">
      {/* Full-width Background Carousel */}
      <div className="absolute inset-0 z-0">
        {heroCars.map((car, idx) => (
          <div
            key={car.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={car.images[0] || "/images/cars/land-cruiser-1.jpg"}
              alt={`${car.year} ${car.make} ${car.model}`}
              fill
              unoptimized
              priority={idx === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}
        {/* Full-width Solid Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
      </div>

      {/* Main Content (Aligned with standard 7xl Grid) with generous breathing space */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-2xl flex flex-col items-start gap-5">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
            Buy Verified Cars in Ghana
          </h1>

          {/* Clean One-liner */}
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
            Browse verified Brand New, Foreign Used, and Ghana Used vehicles with direct Ghana Cedi (GH₵) pricing and direct seller WhatsApp inquiries.
          </p>

          {/* Action Buttons: Spacious and clearly positioned */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#inventory"
              className="h-11 px-5 rounded-xl bg-white text-black hover:bg-neutral-200 font-semibold text-xs flex items-center gap-2 transition-colors"
            >
              <span>Explore Inventory</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://wa.me/233244550192?text=Hello%20AutoGhana,%20inquiring%20about%20available%20cars."
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-2 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>

        {/* Minimal Bottom Slide Indicators */}
        <div className="pt-14 flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {heroCars.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? "w-8 bg-white" : "w-2 bg-neutral-700 hover:bg-neutral-500"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1 text-neutral-400 pl-2">
            <button
              onClick={handlePrev}
              className="p-1 hover:text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-1 hover:text-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
