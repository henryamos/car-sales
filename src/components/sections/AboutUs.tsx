"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export function AboutUs() {
  const pillars = [
    {
      title: "Clear vehicle information",
      desc: "Authentic photographs of the exact vehicle in Ghana, matching mileage, documented VIN chassis references, and transparent specification sheets.",
    },
    {
      title: "Transparent pricing in Ghana Cedis",
      desc: "Direct, honest prices quoted openly in GH₵ with zero hidden exchange-rate volatility or speculative middleman inflation.",
    },
    {
      title: "Convenient viewing enquiries",
      desc: "Private scheduled viewings at verified hubs in Accra and Kumasi. We actively encourage computer diagnostics and independent mechanic assessments.",
    },
    {
      title: "Complete documentation standards",
      desc: "Verified DVLA registration compliance, authentic customs duty clearance receipts, and legally backed title transfer documentation.",
    },
  ];

  return (
    <section id="about" className="w-full bg-black py-20 sm:py-24 border-b border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Atmospheric Photography Showcase */}
          <div className="lg:col-span-6 relative">
            {/* Ambient Backlight */}
            <div className="absolute -inset-4 bg-emerald-950/20 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 group">
              <Image
                src="/images/editorial/why-autoghana.jpg"
                alt="AutoGhana Dealership Showroom Experience"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70" />

              {/* Floating Trust Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10">
                <div className="p-4 rounded-2xl bg-black/85 border border-neutral-700/80 backdrop-blur-md shadow-xl flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        Verified On-The-Ground Inventory
                      </h4>
                      <p className="text-[11px] text-neutral-400">
                        Physical presence in Accra &bull; Transparent inspection process
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative & Pillars */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                WHY AUTOGHANA
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mt-2">
                A more confident way to buy your next car.
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal mt-3.5">
                We believe buying a car should begin with clear information, honest communication, and a straightforward customer experience. AutoGhana eliminates phantom listings and speculative middleman markups.
              </p>
            </div>

            {/* Value Points List */}
            <div className="flex flex-col gap-4 w-full pt-2">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 transition-colors flex items-start gap-3.5"
                >
                  <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mt-1">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Link */}
            <div className="pt-2">
              <a
                href="#inventory"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Browse our verified cars</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
