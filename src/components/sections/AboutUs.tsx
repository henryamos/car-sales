"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

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
    <section id="about" className="w-full bg-black py-16 sm:py-20 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Showroom Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
              <Image
                src="/images/editorial/why-autoghana.jpg"
                alt="AutoGhana dealership showroom"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* 3 Natural, Practical Points */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Why AutoGhana
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                We make finding and buying cars straightforward with upfront details, local pricing and direct support.
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full">
              {reasons.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 flex items-start gap-3.5"
                >
                  <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#inventory"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Explore available cars</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
