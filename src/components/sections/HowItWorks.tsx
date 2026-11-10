"use client";

import React from "react";
import Image from "next/image";
import { Search, ShieldCheck, KeyRound, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      tag: "DISCOVER",
      title: "Discover Verified Cars",
      desc: "Explore authentic showroom inventory with genuine photographs of the actual automobile, exact mileage, and transparent Ghana Cedis (GH₵) asking prices.",
      image: "/images/editorial/step-discover.jpg",
      highlight: "Authentic Photography • No Phantom Listings",
      icon: <Search className="w-4 h-4 text-emerald-400" />,
    },
    {
      num: "02",
      tag: "INSPECT",
      title: "Physical Diagnostic Inspection",
      desc: "Arrange a private viewing at verified locations across Accra and Kumasi. Bring your trusted mechanic for complete computer diagnostics and road testing.",
      image: "/images/editorial/step-inspect.jpg",
      highlight: "Accra & Kumasi Viewings • Diagnostics Welcome",
      icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
    },
    {
      num: "03",
      tag: "PURCHASE",
      title: "Secure Purchase & Handover",
      desc: "Complete direct transaction with verified DVLA registration papers, customs clearance documentation, and lawful ownership transfer.",
      image: "/images/editorial/step-purchase.jpg",
      highlight: "DVLA Verified • Customs Clearance In Hand",
      icon: <KeyRound className="w-4 h-4 text-emerald-400" />,
    },
  ];

  return (
    <section id="how-it-works" className="w-full bg-neutral-950/80 border-t border-b border-neutral-900 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>The Buyer Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            How AutoGhana Works
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2.5 leading-relaxed font-normal">
            A structured, transparent vehicle purchasing process designed to protect your investment from initial discovery through final ownership handover.
          </p>
        </div>

        {/* 3 Editorial Story Cards with Authentic Photography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group rounded-2xl bg-black border border-neutral-800/90 hover:border-neutral-700 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Photographic Stage */}
                <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    unoptimized
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />

                  {/* Step Pill */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-md bg-black/85 border border-neutral-700 text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-400 backdrop-blur-md shadow-sm">
                      {step.num} / {step.tag}
                    </span>
                  </div>
                </div>

                {/* Narrative Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Trust Highlight */}
              <div className="px-6 pb-6 pt-2 border-t border-neutral-900/80">
                <div className="flex items-center gap-1.5 text-xs text-neutral-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-[11px] sm:text-xs text-neutral-300">{step.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
