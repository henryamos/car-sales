"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  MessageSquare,
  Car,
  ChevronDown,
  Sparkles,
  Globe,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  Info,
  Mail,
} from "lucide-react";

const WHATSAPP_NUMBER = "233559888003";
const PHONE_DISPLAY = "055 988 8003";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [buyDropdownOpen, setBuyDropdownOpen] = useState(false);

  const conditionSubmenu = [
    { label: "All Vehicles", href: "/#inventory", icon: <Car className="w-3.5 h-3.5 text-neutral-400" /> },
    { label: "Brand New (0 km)", href: "/?condition=Brand+New#inventory", icon: <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> },
    { label: "Foreign Used", href: "/?condition=Foreign+Used#inventory", icon: <Globe className="w-3.5 h-3.5 text-blue-400" /> },
    { label: "Ghana Used", href: "/?condition=Ghana+Used#inventory", icon: <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-neutral-800 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* 1. Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white">
                <Car className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-base font-bold font-mono tracking-tight text-white">
                AUTOGHANA
              </span>
            </Link>

            {/* 2. Structured Desktop Navigation:
                Logo | Buy Cars | About Us | How It Works | Contact | WhatsApp CTA
            */}
            <nav className="hidden md:flex items-center gap-7">
              {/* Buy Cars with hover/click dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setBuyDropdownOpen(true)}
                onMouseLeave={() => setBuyDropdownOpen(false)}
              >
                <Link
                  href="/#inventory"
                  className="text-xs text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 font-medium py-1"
                >
                  <span>Buy Cars</span>
                  <ChevronDown className="w-3 h-3 text-neutral-500" />
                </Link>

                {buyDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-52 p-2 bg-neutral-950 border border-neutral-800 rounded-xl shadow-2xl flex flex-col gap-1 z-50">
                    {conditionSubmenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setBuyDropdownOpen(false)}
                        className="px-3 py-2 rounded-lg text-xs text-neutral-300 hover:text-white hover:bg-neutral-900 flex items-center gap-2.5 transition-colors"
                      >
                        {sub.icon}
                        <span>{sub.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/#about"
                className="text-xs text-neutral-300 hover:text-white transition-colors font-medium flex items-center gap-1.5"
              >
                <span>About Us</span>
              </Link>

              <Link
                href="/#how-it-works"
                className="text-xs text-neutral-300 hover:text-white transition-colors font-medium flex items-center gap-1.5"
              >
                <span>How It Works</span>
              </Link>

              <Link
                href="/#contact"
                className="text-xs text-neutral-300 hover:text-white transition-colors font-medium flex items-center gap-1.5"
              >
                <span>Contact</span>
              </Link>
            </nav>

            {/* 3. Right Controls: Phone + WhatsApp CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${PHONE_DISPLAY.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white font-mono px-2.5 py-1.5 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors"
                title="Call our support team"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                <span>{PHONE_DISPLAY}</span>
              </a>

              {/* Primary Green CTA */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20AutoGhana,%20inquiring%20about%20available%20cars.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
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
                className="p-2 rounded-lg bg-emerald-600 text-white shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white rounded-lg bg-neutral-900 border border-neutral-800"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-14 right-3 left-3 p-4 bg-neutral-950 border border-neutral-800 rounded-2xl flex flex-col gap-3 shadow-2xl">
            <div className="flex flex-col gap-1 pb-2 border-b border-neutral-800">
              <span className="text-[10px] uppercase font-mono text-neutral-400">Inventory</span>
              {conditionSubmenu.map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs text-neutral-200 py-2 flex items-center gap-2 hover:text-white"
                >
                  {sub.icon}
                  <span>{sub.label}</span>
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-1 pb-2 border-b border-neutral-800">
              <span className="text-[10px] uppercase font-mono text-neutral-400">Navigation</span>
              <Link
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-neutral-200 py-2 flex items-center gap-2 hover:text-white"
              >
                <Info className="w-3.5 h-3.5 text-neutral-400" />
                <span>About Us</span>
              </Link>
              <Link
                href="/#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-neutral-200 py-2 flex items-center gap-2 hover:text-white"
              >
                <HelpCircle className="w-3.5 h-3.5 text-neutral-400" />
                <span>How It Works</span>
              </Link>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-neutral-200 py-2 flex items-center gap-2 hover:text-white"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                <span>Contact</span>
              </Link>
            </div>

            <div className="pt-1 flex flex-col gap-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-center text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Inquiries</span>
              </a>
              <a
                href={`tel:${PHONE_DISPLAY.replace(/\s+/g, "")}`}
                className="w-full py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-center text-xs text-neutral-300 flex items-center justify-center gap-1.5"
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
