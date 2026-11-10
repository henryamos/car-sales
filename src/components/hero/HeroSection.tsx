"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDE_DURATION = 6500;
const WHATSAPP_NUMBER = "233559888003";

// Art-directed slide configuration with custom focal positioning per vehicle
const HERO_SLIDES = [
  {
    id: "toyota-land-cruiser-300-2024",
    name: "2024 Toyota Land Cruiser 300 VXR",
    image: "/images/cars/land-cruiser-1.jpg",
    position: "object-[70%_center] sm:object-[75%_center] lg:object-[80%_center]",
  },
  {
    id: "toyota-prado-250-2024",
    name: "2024 Toyota Land Cruiser Prado 250",
    image: "/images/cars/prado-1.jpg",
    position: "object-[68%_center] sm:object-[72%_center] lg:object-[78%_center]",
  },
  {
    id: "mercedes-benz-gle-450-2022",
    name: "2022 Mercedes-Benz GLE 450 4MATIC",
    image: "/images/cars/mercedes-gle-1.jpg",
    position: "object-[65%_center] sm:object-[70%_center] lg:object-[75%_center]",
  },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section className="relative w-full min-h-[560px] sm:min-h-[600px] lg:min-h-[660px] flex items-center bg-black border-b border-neutral-800 overflow-hidden pt-16">
      {/* Background Carousel with Cinematic Framing */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.name}
              fill
              unoptimized
              priority={idx === 0}
              className={`object-cover ${slide.position} transition-transform duration-1000 ease-out`}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Cinematic Gradient: Clean negative space for text on left, full vehicle visibility on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/20 sm:via-black/60 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      </div>

      {/* Main Content: Left-Aligned Editorial Hierarchy */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl flex flex-col items-start gap-5">
          {/* 1. Large Cinematic Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Buy Verified Cars in Ghana
          </h1>

          {/* 2. Concise Supporting Message (1-2 lines) */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-lg font-normal">
            Discover quality vehicles with transparent pricing in Ghana Cedis and a verified buying experience.
          </p>

          {/* 3. Action Hierarchy: Green Primary CTA + Outlined Secondary */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
            {/* Primary Action: Solid Green */}
            <a
              href="#inventory"
              className="h-12 px-7 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors w-full sm:w-auto shadow-lg shadow-emerald-950/40"
            >
              <span>Explore Cars</span>
              <ArrowDown className="w-4 h-4 text-white/80" />
            </a>

            {/* Secondary Action: Outlined Dark */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20AutoGhana,%20inquiring%20about%20available%20cars.`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 rounded-xl bg-neutral-900/90 border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800 text-neutral-200 hover:text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4 text-neutral-400" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* 4. Compact Quick Discovery Filter Dock */}
          <div className="pt-2 flex items-center gap-2 flex-wrap text-xs">
            <span className="text-neutral-400 text-xs font-mono mr-1">Browse:</span>
            <Link
              href="/?condition=Brand+New#inventory"
              className="px-3 py-1.5 rounded-lg bg-black/60 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors text-xs font-medium"
            >
              Brand New (0 km)
            </Link>
            <Link
              href="/?condition=Foreign+Used#inventory"
              className="px-3 py-1.5 rounded-lg bg-black/60 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors text-xs font-medium"
            >
              Foreign Used
            </Link>
            <Link
              href="/?condition=Ghana+Used#inventory"
              className="px-3 py-1.5 rounded-lg bg-black/60 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors text-xs font-medium"
            >
              Ghana Used
            </Link>
          </div>
        </div>

        {/* Slide Controls & Active Vehicle Tag */}
        <div className="pt-12 flex items-center justify-between max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-8 bg-white" : "w-2.5 bg-neutral-700 hover:bg-neutral-500"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1 text-neutral-400 pl-2">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-lg hover:text-white hover:bg-neutral-900 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-lg hover:text-white hover:bg-neutral-900 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {currentSlide && (
            <span className="hidden sm:inline-block text-xs font-mono text-neutral-400">
              Featured: <strong className="text-neutral-200 font-semibold">{currentSlide.name}</strong>
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
