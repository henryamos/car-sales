"use client";

import React from "react";
import Link from "next/link";

const WHATSAPP_NUMBER = "233559888003";
const PHONE_DISPLAY = "+233 55 988 8003";

export function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-8 border-b border-neutral-900">
          {/* Brand */}
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-bold font-mono text-white">AUTOGHANA</span>
            <p className="text-xs text-neutral-400">
              Verified car marketplace in Ghana.
            </p>
          </div>

          {/* Quick Links with real working filters */}
          <div className="flex flex-col gap-1 text-xs text-neutral-400">
            <span className="text-white font-semibold uppercase text-[10px] font-mono mb-0.5">
              Vehicles
            </span>
            <Link href="/#inventory" className="hover:text-white transition-colors">All Cars</Link>
            <Link href="/?condition=Brand+New#inventory" className="hover:text-white transition-colors">Brand New (0 km)</Link>
            <Link href="/?condition=Foreign+Used#inventory" className="hover:text-white transition-colors">Foreign Used</Link>
            <Link href="/?condition=Ghana+Used#inventory" className="hover:text-white transition-colors">Ghana Used</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-1 text-xs text-neutral-400">
            <span className="text-white font-semibold uppercase text-[10px] font-mono mb-0.5">
              Contact
            </span>
            <a href={`tel:${PHONE_DISPLAY.replace(/\s+/g, "")}`} className="text-white hover:underline font-mono">
              {PHONE_DISPLAY}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20AutoGhana,%20inquiring%20about%20available%20cars.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
            >
              WhatsApp: {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500">
          <span>&copy; {new Date().getFullYear()} AutoGhana. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
