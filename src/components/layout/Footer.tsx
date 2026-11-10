"use client";

import React from "react";
import Link from "next/link";
import { Car, Phone, MessageSquare, MapPin, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "233559888003";
const PHONE_DISPLAY = "055 988 8003";

export function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Column Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          {/* Col 1: Distinctive Brand Description (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white">
                <Car className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-base font-bold font-mono tracking-tight text-white">
                AUTOGHANA
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Discover brand-new, foreign-used and Ghana-used cars with clear prices in Ghana Cedis. Schedule a viewing or speak directly with our team.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20AutoGhana,%20inquiring%20about%20a%20car.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-800/50 text-emerald-400 hover:text-emerald-300 text-xs font-medium transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat with our team</span>
              </a>
            </div>
          </div>

          {/* Col 2: Vehicle Categories (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-2.5 text-xs text-neutral-400">
            <span className="text-white font-semibold uppercase text-[11px] font-mono tracking-wider mb-1">
              Vehicle Inventory
            </span>
            <Link href="/#inventory" className="hover:text-white transition-colors">
              All Available Vehicles
            </Link>
            <Link href="/?condition=Brand+New#inventory" className="hover:text-white transition-colors">
              Brand New (0 km)
            </Link>
            <Link href="/?condition=Foreign+Used#inventory" className="hover:text-white transition-colors">
              Foreign Used Imports
            </Link>
            <Link href="/?condition=Ghana+Used#inventory" className="hover:text-white transition-colors">
              Ghana Used Certified
            </Link>
            <Link href="/?body=SUV#inventory" className="hover:text-white transition-colors">
              Luxury &amp; Family SUVs
            </Link>
            <Link href="/?body=Pickup#inventory" className="hover:text-white transition-colors">
              Commercial &amp; Double-Cab Pickups
            </Link>
          </div>

          {/* Col 3: Company & Experience (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-2.5 text-xs text-neutral-400">
            <span className="text-white font-semibold uppercase text-[11px] font-mono tracking-wider mb-1">
              Company
            </span>
            <Link href="/#about" className="hover:text-white transition-colors">
              Why AutoGhana
            </Link>
            <Link href="/#how-it-works" className="hover:text-white transition-colors">
              The Buyer Journey
            </Link>
            <Link href="/#contact" className="hover:text-white transition-colors">
              Custom Vehicle Sourcing
            </Link>
            <Link href="/#inventory" className="hover:text-white transition-colors">
              Schedule an Inspection
            </Link>
          </div>

          {/* Col 4: Business Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3 text-xs text-neutral-400">
            <span className="text-white font-semibold uppercase text-[11px] font-mono tracking-wider mb-1">
              Direct Contact
            </span>

            <div className="flex items-start gap-2 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Accra, Ghana &bull; Network in Kumasi &amp; Tema</span>
            </div>

            <div className="flex items-center gap-2 text-neutral-300">
              <Clock className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
              <span>Mon – Sat: 8:00 AM – 6:00 PM GMT</span>
            </div>

            <div className="pt-1 flex flex-col gap-1.5">
              <a
                href={`tel:${PHONE_DISPLAY.replace(/\s+/g, "")}`}
                className="text-neutral-200 hover:text-white flex items-center gap-2 font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                <span>+233 {PHONE_DISPLAY}</span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20AutoGhana,%20inquiring%20about%20available%20cars.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 font-medium"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: +233 {PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Currency Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} AutoGhana. All rights reserved.</span>
            <span className="hidden sm:inline text-neutral-700">&bull;</span>
            <span className="text-neutral-400">Prices quoted in Ghana Cedis (GH₵)</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-neutral-400">
            <span>Verified Automobile Sales &bull; Ghana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
