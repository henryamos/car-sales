"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function AboutUs() {
  const reasons = [
    {
      title: "Clear vehicle details",
      desc: "See the price, mileage, specifications and available photos before making an enquiry.",
    },
    {
      title: "Prices in Ghana Cedis",
      desc: "Browse vehicles with prices displayed in GH₵.",
    },
    {
      title: "Arrange a viewing",
      desc: "Speak with our team and schedule a time to see a vehicle in person.",
    },
  ];

  return (
    <section id="about" className="w-full bg-black py-16 sm:py-24 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Authentic Dealership Photograph */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-[12px] overflow-hidden border border-[#262626] bg-[#111111]">
              <Image
                src="/images/editorial/why-autoghana.jpg"
                alt="AutoGhana dealership showroom and forecourt"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right: Editorial Narrative & Divided Benefits */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Why AutoGhana
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 mt-2.5 leading-relaxed font-normal">
                We make finding and buying cars straightforward with upfront details, local pricing and direct support.
              </p>
            </div>

            {/* Three Benefits Separated by Thin Horizontal Dividers (No Boxes) */}
            <div className="w-full divide-y divide-[#262626] border-t border-b border-[#262626]">
              {reasons.map((item, idx) => (
                <div key={idx} className="py-4 sm:py-5 flex flex-col gap-1">
                  <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Understated Inventory Link */}
            <div className="pt-1">
              <a
                href="#inventory"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white transition-colors group"
              >
                <span>Explore available cars</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
