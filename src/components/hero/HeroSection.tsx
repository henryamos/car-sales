"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MessageSquare, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { CARS_DATA } from "@/data/cars";

const SLIDE_DURATION = 6000;
const WHATSAPP_NUMBER = "233559888003";

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

  const currentCar = heroCars[currentIndex] || heroCars[0];

  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] flex items-center bg-black border-b border-neutral-800 overflow-hidden pt-16">
      {/* Background Carousel with visually impressive, lighter dark overlay */}
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
              className="object-cover object-center lg:object-[center_right_25%]"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Lighter balanced overlay: keeps text readable on left while letting car shine on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      </div>

      {/* Main Content: Strict Visual Hierarchy */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
        <div className="max-w-2xl flex flex-col items-start gap-4">
          {/* 1. Primary Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Buy Verified Cars in Ghana
          </h1>

          {/* 2. Supporting Value Message */}
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-lg font-normal">
            Explore quality vehicles from trusted sellers across Ghana. Direct pricing in Ghana Cedis (GH₵) with authentic physical inspections and verified documentation.
          </p>

          {/* 3 & 4. Primary & Secondary Action Hierarchy (Zero Color Competition) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3 w-full sm:w-auto">
            {/* Primary Action: Solid Green */}
            <a
              href="#inventory"
              className="h-11 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors w-full sm:w-auto shadow-sm"
            >
              <span>Explore Cars</span>
              <ArrowDown className="w-3.5 h-3.5 text-white/80" />
            </a>

            {/* Secondary Action: Subtle Dark Outline */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20AutoGhana,%20inquiring%20about%20available%20cars.`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-5 rounded-xl bg-neutral-900/90 border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800 text-neutral-200 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors w-full sm:w-auto"
            >
              <MessageSquare className="w-3.5 h-3.5 text-neutral-400" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Featured Car Indicator Pill */}
          {currentCar && (
            <div className="pt-2 text-xs text-neutral-400 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Featured: {currentCar.year} {currentCar.make} {currentCar.model}</span>
            </div>
          )}
        </div>

        {/* Slide Indicators */}
        <div className="pt-10 flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {heroCars.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? "w-7 bg-white" : "w-2 bg-neutral-700 hover:bg-neutral-500"
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
