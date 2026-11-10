"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, Menu, X, Phone, MessageSquare } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

export function Navbar() {
  const { wishlistCount } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "All Cars", href: "/#inventory" },
    { label: "Brand New (0 km)", href: "/#inventory" },
    { label: "Foreign Used", href: "/#inventory" },
    { label: "Ghana Used", href: "/#inventory" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-neutral-800 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-base font-bold font-mono tracking-tight text-white">
                AUTOGHANA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-neutral-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:+233559888003"
                className="flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white font-mono px-2.5 py-1.5 rounded-md border border-neutral-800 hover:border-neutral-700"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                <span>055 988 8003</span>
              </a>

              <Link
                href="/#inventory"
                className="relative p-2 rounded-md text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700"
                title="Saved vehicles"
              >
                <Heart className="w-4 h-4" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-white text-black text-[9px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <a
                href="https://wa.me/233559888003?text=Hello%20AutoGhana,%20inquiring%20about%20available%20cars."
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium flex items-center gap-1 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex sm:hidden items-center gap-2">
              <Link href="/#inventory" className="relative p-1.5 text-neutral-300">
                <Heart className="w-4 h-4" />
                {wishlistCount > 0 && (
                  <span className="absolute top-0 right-0 w-3 h-3 bg-white text-black text-[8px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

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
                className="text-xs text-neutral-200 py-1.5 border-b border-neutral-900"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/233559888003"
                className="w-full py-2.5 rounded-lg bg-emerald-600 text-white text-center text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+233559888003"
                className="w-full py-2.5 rounded-lg border border-neutral-800 text-center text-xs text-neutral-300"
              >
                Call: 055 988 8003
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}