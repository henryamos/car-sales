"use client";

import React from "react";
import { MessageSquare, ArrowUpRight, Phone, Car } from "lucide-react";

const WHATSAPP_NUMBER = "233559888003";
const PHONE_DISPLAY = "055 988 8003";

export function FinalCTA() {
  return (
    <section id="contact" className="w-full bg-neutral-950 py-16 sm:py-20 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-neutral-900/90 to-black border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5" />
              <span>Ready for your next vehicle?</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Looking for a Specific Model or Custom Import?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              If your desired car is not currently listed in our inventory, our sourcing specialists in Accra will locate and inspect it for you directly.
            </p>
          </div>

          {/* Action Buttons: Strict Button Hierarchy
              - Primary: Green "Find My Car"
              - Secondary: Outlined "Contact Us"
          */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            {/* Primary Action: Solid Green */}
            <a
              href="#inventory"
              className="h-11 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <span>Find My Car</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Secondary Action: Outlined */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20AutoGhana,%20I%20am%20looking%20for%20a%20specific%20vehicle.`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-5 rounded-xl bg-neutral-900 border border-neutral-700/80 hover:border-neutral-500 hover:bg-neutral-800 text-neutral-200 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-neutral-400" />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
