"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageSquare, Car, Sparkles, Globe, ShieldCheck } from "lucide-react";

const WHATSAPP_NUMBER = "233559888003";
const PHONE_DISPLAY = "055 988 8003";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "All Cars", href: "/#inventory", icon: <Car className="w-3.5 h-3.5" /> },
    { label: "Brand New (0 km)", href: "/?condition=Brand+New#inventory", icon: <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> },
    { label: "Foreign Used", href: "/?condition=Foreign+Used#inventory", icon: <Globe className="w-3.5 h-3.5 text-blue-400" /> },
    { label: "Ghana Used", href: "/?condition=Ghana+Used#inventory", icon: <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-neutral-800 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with Icon */}
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white">
                <Car className="w-4 h-4" />
              </div>
              <span className="text-base font-bold font-mono tracking-tight text-white">
                AUTOGHANA
              </span>
            </Link>

            {/* Desktop Navigation with Icons & Working Filter Links */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${PHONE_DISPLAY.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white font-mono px-2.5 py-1.5 rounded-md border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                <span>{PHONE_DISPLAY}</span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20AutoGhana,%20inquiring%20about%20available%20cars.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-emerald-600 text-white"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-white"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <div
            className="fixed inset-0 bg-black/80"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-14 right-3 left-3 p-4 bg-neutral-950 border border-neutral-800 rounded-xl flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-neutral-200 py-2 border-b border-neutral-900 flex items-center gap-2"
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="w-full py-2.5 rounded-lg bg-emerald-600 text-white text-center text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Inquiries</span>
              </a>
              <a
                href={`tel:${PHONE_DISPLAY.replace(/\s+/g, "")}`}
                className="w-full py-2.5 rounded-lg border border-neutral-800 text-center text-xs text-neutral-300 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                <span>Call: {PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
