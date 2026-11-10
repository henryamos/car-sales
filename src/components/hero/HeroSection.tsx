"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, MessageSquare } from "lucide-react";

const WHATSAPP_NUMBER = "233559888003";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center bg-black border-b border-neutral-800 overflow-hidden pt-16">
      {/* Full-Width Automotive Photography (Clean Lighting, High Vehicle Visibility) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero-cinematic.jpg"
          alt="Featured automobile at AutoGhana"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[70%_center] sm:object-[75%_center] lg:object-[78%_center]"
        />

        {/* Subtle directional gradient on left for text legibility, leaving the SUV completely unobscured and bright on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 via-35% to-transparent sm:via-black/75 sm:via-42% to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Main Content: Confident, Natural & Restrained */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-xl lg:max-w-2xl flex flex-col items-start gap-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Find your next car in Ghana.
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal max-w-lg">
            Explore brand-new, foreign-used and Ghana-used cars. Compare prices, view details and arrange a viewing.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3 w-full sm:w-auto">
            {/* Primary Action: Green */}
            <a
              href="#inventory"
              className="h-12 px-7 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <span>Explore Cars</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            {/* Secondary Action: White High-Contrast */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20AutoGhana,%20inquiring%20about%20available%20cars.`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 rounded-xl bg-white hover:bg-neutral-100 text-black font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-black" />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
