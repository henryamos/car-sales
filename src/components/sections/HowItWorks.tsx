"use client";

import React from "react";
import Image from "next/image";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Find Your Car",
      desc: "Browse available vehicles and compare their prices, features and condition.",
      image: "/images/editorial/step-discover.jpg",
    },
    {
      num: "02",
      title: "Book a Viewing",
      desc: "Contact our team to arrange a viewing and inspect the vehicle before making a decision.",
      image: "/images/editorial/step-inspect.jpg",
    },
    {
      num: "03",
      title: "Make It Yours",
      desc: "Confirm the vehicle details, agree on the purchase and complete the necessary paperwork.",
      image: "/images/editorial/step-purchase.jpg",
    },
  ];

  return (
    <section id="how-it-works" className="w-full bg-neutral-950 border-t border-b border-neutral-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Buying a car, made straightforward.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 sm:pt-10">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-[12px] bg-[#111111] border border-[#262626] overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    unoptimized
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-black/80 border border-neutral-700/80 text-[11px] font-mono font-semibold text-white backdrop-blur-sm">
                      {step.num}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mt-2 font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
