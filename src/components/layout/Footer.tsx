"use client";

import React from "react";
import Link from "next/link";

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

          {/* Quick Links */}
          <div className="flex flex-col gap-1 text-xs text-neutral-400">
            <span className="text-white font-semibold uppercase text-[10px] font-mono mb-0.5">
              Vehicles
            </span>
            <Link href="/#inventory" className="hover:text-white transition-colors">All Cars</Link>
            <Link href="/#inventory" className="hover:text-white transition-colors">Brand New</Link>
            <Link href="/#inventory" className="hover:text-white transition-colors">Foreign Used</Link>
            <Link href="/#inventory" className="hover:text-white transition-colors">Ghana Used</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-1 text-xs text-neutral-400">
            <span className="text-white font-semibold uppercase text-[10px] font-mono mb-0.5">
              Contact
            </span>
            <a href="tel:+233244550192" className="text-white hover:underline font-mono">
              +233 24 455 0192
            </a>
            <a
              href="https://wa.me/233244550192"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
            >
              WhatsApp Support
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