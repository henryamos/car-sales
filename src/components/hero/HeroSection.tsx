"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MessageSquare } from "lucide-react";

const WHATSAPP_NUMBER = "233559888003";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center bg-black border-b border-neutral-800 overflow-hidden pt-16 pb-12 sm:pb-0">
      {/* Full-Width Cinematic Automotive Background (Concept A) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero-cinematic.jpg"
          alt="2024 Toyota Land Cruiser 300 VXR at AutoGhana"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-[75%_center] lg:object-[80%_center]"
        />

        {/* Cinematic Gradient Vignettes:
            - Left: Deep, opaque negative space ensuring 100% typography contrast
            - Right: Gradual transition revealing the full Land Cruiser 300
            - Top & Bottom: Soft architectural vignettes to blend into navbar and inventory
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 via-40% to-transparent sm:via-black/80 sm:via-48% sm:to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent opacity-80" />
      </div>

      {/* Main Content: Left-Aligned Editorial Hierarchy */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-xl lg:max-w-2xl flex flex-col items-start">
          {/* 1. Small Brand Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px] font-mono tracking-widest uppercase mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>PREMIUM AUTOMOTIVE MARKETPLACE</span>
          </div>

          {/* 2. Bold Cinematic Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Buy Verified Cars in Ghana
          </h1>

          {/* 3. Short Supporting Statement */}
          <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-normal mt-4 max-w-lg">
            Discover quality vehicles with transparent pricing in Ghana Cedis, documented history, and private viewing inspections.
          </p>

          {/* 4. Action Hierarchy: Green Primary CTA + Outlined Secondary */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 w-full sm:w-auto">
            {/* Primary Action: Solid Green */}
            <a
              href="#inventory"
              className="h-12 px-7 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-950/50"
            >
              <span>Explore Cars</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            {/* Secondary Action: Outlined Dark */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20AutoGhana,%20inquiring%20about%20available%20cars.`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 rounded-xl bg-black/60 hover:bg-neutral-900 text-white font-medium text-xs sm:text-sm border border-neutral-700/80 hover:border-neutral-500 flex items-center justify-center gap-2 transition-colors backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4 text-neutral-400" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* 5. Quick Condition Links */}
          <div className="pt-8 flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs">
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mr-1">
              Browse:
            </span>
            <Link
              href="/?condition=Brand+New#inventory"
              className="px-3 py-1.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700 text-[11px] font-medium transition-colors backdrop-blur-sm"
            >
              Brand New (0 km)
            </Link>
            <Link
              href="/?condition=Foreign+Used#inventory"
              className="px-3 py-1.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700 text-[11px] font-medium transition-colors backdrop-blur-sm"
            >
              Foreign Used
            </Link>
            <Link
              href="/?condition=Ghana+Used#inventory"
              className="px-3 py-1.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700 text-[11px] font-medium transition-colors backdrop-blur-sm"
            >
              Ghana Used
            </Link>
          </div>
        </div>
      </div>

      {/* Minimal Editorial Vehicle Label (Bottom Right) */}
      <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-10 z-10 pointer-events-none hidden sm:flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-black/70 border border-neutral-800/80 backdrop-blur-md shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span className="text-[11px] font-mono text-neutral-400">Featured:</span>
        <span className="text-xs font-semibold text-white">2024 Toyota Land Cruiser 300 VXR</span>
      </div>
    </section>
  );
}
