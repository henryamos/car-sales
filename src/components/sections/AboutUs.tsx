"use client";

import React from "react";
import { ShieldCheck, Award, FileCheck2, Users } from "lucide-react";

export function AboutUs() {
  const highlights = [
    {
      icon: <Award className="w-5 h-5 text-emerald-400" />,
      title: "Authentic Inventory Only",
      desc: "Every listing on AutoGhana features authentic photographs of the actual vehicle. What you see online is exactly what you inspect in person.",
    },
    {
      icon: <FileCheck2 className="w-5 h-5 text-emerald-400" />,
      title: "Direct Ghana Cedis Pricing",
      desc: "Zero speculative exchange rates or unstated broker markups. All vehicle prices are quoted in clear Ghana Cedis (GH₵).",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "Verified Documentation",
      desc: "We verify chassis numbers (VIN), DVLA registration status, and customs import duty clearance before listing.",
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      title: "Dedicated Local Support",
      desc: "Our automotive advisors in Accra and Kumasi guide buyers through scheduling test drives, mechanical inspections, and vehicle transfers.",
    },
  ];

  return (
    <section id="about" className="w-full bg-black py-16 sm:py-20 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            About AutoGhana
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Setting the Standard for Car Sales in Ghana
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
            Founded to solve the frustrations of deceptive listings and inaccurate photos in Ghana&apos;s auto market, AutoGhana connects buyers with verified Brand New, Foreign Used, and Ghana Used vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 transition-colors flex flex-col justify-between gap-4"
            >
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 w-fit">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mt-1.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
