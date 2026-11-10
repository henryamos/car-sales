"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MessageSquare, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const SLIDE_DURATION = 6500;
const WHATSAPP_NUMBER = "233559888003";

// Art-directed hero vehicles with accurate pricing and conditions
const HERO_SLIDES = [
  {
    id: "toyota-land-cruiser-300-2024",
    name: "2024 Toyota Land Cruiser 300 VXR",
    image: "/images/cars/land-cruiser-1.jpg",
    condition: "Brand New (0 km)",
    price: "GH₵ 2,100,000",
  },
  {
    id: "toyota-prado-250-2024",
    name: "2024 Toyota Land Cruiser Prado 250",
    image: "/images/cars/prado-1.jpg",
    condition: "Brand New (0 km)",
    price: "GH₵ 1,450,000",
  },
  {
    id: "mercedes-benz-gle-450-2022",
    name: "2022 Mercedes-Benz GLE 450 4MATIC",
    image: "/images/cars/mercedes-gle-1.jpg",
    condition: "Foreign Used",
    price: "GH₵ 820,000",
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
    <section className="relative w-full bg-black border-b border-neutral-800 overflow-hidden pt-20 pb-12 sm:pb-16 lg:pt-24 lg:pb-20">
      {/* Ambient Lighting Studio Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-8 w-[450px] h-[450px] bg-emerald-950/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-neutral-900/40 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Split Architecture: Left 42% (Typography & CTAs), Right 58% (Dedicated Vehicle Stage) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[500px] lg:min-h-[540px]">
          {/* Left Column: Heading & Value Proposition (Max width 580px, No overlap with car) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-5 max-w-[580px]">
            {/* Subtle Brand Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-[11px] font-medium text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Verified Automobile Marketplace</span>
            </div>

            {/* 1. Large Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.14]">
              Buy Verified Cars in Ghana
            </h1>

            {/* 2. Concise Supporting Copy */}
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Discover quality vehicles with transparent pricing in Ghana Cedis and a verified buying experience.
            </p>

            {/* 3. Action Buttons: Green Primary + Outlined Secondary */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              {/* Primary Action: Solid Green */}
              <a
                href="#inventory"
                className="h-11 sm:h-12 px-6 sm:px-7 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-950/40"
              >
                <span>Explore Cars</span>
                <ArrowDown className="w-4 h-4 text-white/80" />
              </a>

              {/* Secondary Action: Outlined Dark */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20AutoGhana,%20inquiring%20about%20available%20cars.`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 sm:h-12 px-5 sm:px-6 rounded-xl bg-neutral-900 border border-neutral-700/80 hover:border-neutral-500 hover:bg-neutral-800 text-neutral-200 hover:text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-neutral-400" />
                <span>Contact Us</span>
              </a>
            </div>

            {/* 4. Quick Discovery Condition Filter Dock */}
            <div className="pt-2 flex items-center gap-2 flex-wrap text-xs">
              <span className="text-neutral-500 text-[11px] font-mono mr-1">Browse:</span>
              <Link
                href="/?condition=Brand+New#inventory"
                className="px-2.5 py-1 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors text-xs font-medium"
              >
                Brand New (0 km)
              </Link>
              <Link
                href="/?condition=Foreign+Used#inventory"
                className="px-2.5 py-1 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors text-xs font-medium"
              >
                Foreign Used
              </Link>
              <Link
                href="/?condition=Ghana+Used#inventory"
                className="px-2.5 py-1 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors text-xs font-medium"
              >
                Ghana Used
              </Link>
            </div>
          </div>

          {/* Right Column: Dedicated Vehicle Showcase Stage (Zero Cropping, Full Car Visible) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Showcase Stage Frame with Natural Vehicle Proportions */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-to-tr from-neutral-950 via-neutral-900/50 to-neutral-950 border border-neutral-800/80 p-3 sm:p-5 shadow-2xl">
              
              {/* Radial Lighting Highlight behind Vehicle */}
              <div className="absolute inset-0 bg-radial from-neutral-800/25 via-transparent to-transparent pointer-events-none" />

              {/* Vehicle Image Slides: 100% Contained & Centered with Ample Breathing Room */}
              {HERO_SLIDES.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-4 sm:inset-6 transition-all duration-700 ease-in-out ${
                    idx === currentIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.name}
                    fill
                    unoptimized
                    priority={idx === 0}
                    className="object-contain object-center drop-shadow-2xl"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
              ))}

              {/* Top-Left Condition Pill on Stage */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-lg bg-black/85 border border-neutral-700/80 text-[10px] font-semibold uppercase tracking-wider text-neutral-200 backdrop-blur-md shadow-sm">
                  {currentSlide.condition}
                </span>
              </div>

              {/* Top-Right Price Pill on Stage */}
              <div className="absolute top-4 right-4 z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-lg bg-black/85 border border-neutral-700/80 text-xs sm:text-sm font-sans font-extrabold text-white backdrop-blur-md shadow-sm">
                  {currentSlide.price}
                </span>
              </div>
            </div>

            {/* Unified Control Bar: Navigation Controls & Featured Vehicle Label Aligned as ONE Intentional Component */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                {/* Slide Pills */}
                <div className="flex items-center gap-1.5">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentIndex
                          ? "w-8 bg-emerald-500"
                          : "w-2.5 bg-neutral-700 hover:bg-neutral-500"
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Prev / Next Arrows */}
                <div className="flex items-center gap-1 text-neutral-400 pl-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="p-1.5 rounded-lg hover:text-white hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-colors cursor-pointer"
                    aria-label="Previous vehicle"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="p-1.5 rounded-lg hover:text-white hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-colors cursor-pointer"
                    aria-label="Next vehicle"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Aligned Vehicle Name & Index Component */}
              <div className="flex items-center gap-2 font-medium">
                <span className="text-neutral-500 text-xs font-mono">Featured:</span>
                <strong className="text-white text-xs sm:text-sm font-semibold truncate max-w-[240px] sm:max-w-none">
                  {currentSlide.name}
                </strong>
                <span className="text-neutral-500 text-[11px] font-mono">
                  ({currentIndex + 1} / {HERO_SLIDES.length})
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
