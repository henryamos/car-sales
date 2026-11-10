"use client";

import React from "react";
import Link from "next/link";
import { Car, Phone, MessageSquare } from "lucide-react";

const WHATSAPP_NUMBER = "233559888003";
const PHONE_DISPLAY = "055 988 8003";

export function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 pb-10 border-b border-neutral-900">
          {/* Brand */}
          <div className="flex flex-col gap-2.5 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white">
                <Car className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-sm font-bold font-mono tracking-tight text-white">
                AUTOGHANA
              </span>
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Verified automobile marketplace in Ghana. Discover Brand New, Foreign Used, and Ghana Used vehicles with authentic photos and direct pricing.
            </p>
          </div>

          {/* Quick Links: Vehicles */}
          <div className="flex flex-col gap-2 text-xs text-neutral-400">
            <span className="text-white font-semibold uppercase text-[10px] font-mono tracking-wider">
              Vehicles
            </span>
            <Link href="/#inventory" className="hover:text-white transition-colors">
              All Inventory
            </Link>
            <Link href="/?condition=Brand+New#inventory" className="hover:text-white transition-colors">
              Brand New (0 km)
            </Link>
            <Link href="/?condition=Foreign+Used#inventory" className="hover:text-white transition-colors">
              Foreign Used
            </Link>
            <Link href="/?condition=Ghana+Used#inventory" className="hover:text-white transition-colors">
              Ghana Used
            </Link>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-2 text-xs text-neutral-400">
            <span className="text-white font-semibold uppercase text-[10px] font-mono tracking-wider">
              Company
            </span>
            <Link href="/#about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/#how-it-works" className="hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="/#contact" className="hover:text-white transition-colors">
              Contact &amp; Sourcing
            </Link>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-2.5 text-xs text-neutral-400">
            <span className="text-white font-semibold uppercase text-[10px] font-mono tracking-wider">
              Direct Contact
            </span>
            <a
              href={`tel:${PHONE_DISPLAY.replace(/\s+/g, "")}`}
              className="text-neutral-300 hover:text-white flex items-center gap-1.5 font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-neutral-400" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20AutoGhana,%20inquiring%20about%20available%20cars.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 font-mono">
          <span>&copy; {new Date().getFullYear()} AutoGhana. All rights reserved.</span>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Verified Automobile Sales &bull; Ghana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
