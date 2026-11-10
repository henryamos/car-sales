"use client";

import React from "react";
import { Search, ShieldCheck, KeyRound, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <Search className="w-5 h-5 text-emerald-400" />,
      title: "Discover Verified Cars",
      desc: "Browse our inventory with authentic vehicle photographs, exact mileage, and transparent Ghana Cedis (GH₵) pricing.",
    },
    {
      num: "02",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "Physical Inspection",
      desc: "Schedule a physical viewing and diagnostic mechanical inspection at our verified locations across Accra and Kumasi.",
    },
    {
      num: "03",
      icon: <KeyRound className="w-5 h-5 text-emerald-400" />,
      title: "Secure Purchase & Handover",
      desc: "Complete direct payment with verified DVLA registration papers, customs duty receipts, and full ownership documentation.",
    },
  ];

  return (
    <section id="how-it-works" className="w-full bg-neutral-950 border-t border-b border-neutral-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            Simple &amp; Transparent
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            How AutoGhana Works
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
            We eliminate deceptive photos, hidden fees, and phantom listings. Experience a safe, verified car-buying journey from initial discovery to final handover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-colors flex flex-col justify-between gap-6"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  {step.icon}
                </div>
                <span className="text-2xl font-black font-mono text-neutral-700">
                  {step.num}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mt-2">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
