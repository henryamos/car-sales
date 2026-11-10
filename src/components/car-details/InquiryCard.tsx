"use client";

import React, { useState } from "react";
import { Phone, MessageSquare } from "lucide-react";
import { Car } from "@/types/car";
import { formatGHS, formatNumber } from "@/lib/utils";

interface InquiryCardProps {
  car: Car;
}

export function InquiryCard({ car }: InquiryCardProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${car.sellerWhatsApp}?text=Hello,%20inquiring%20about%20the%20${encodeURIComponent(
    `${car.year} ${car.make} ${car.model} (${formatGHS(car.priceGHS)})`
  )}%20listed%20on%20AutoGhana.`;

  return (
    <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col gap-4 sticky top-20">
      {/* Price Header */}
      <div className="pb-3 border-b border-neutral-800">
        <span className="text-[10px] uppercase tracking-wider font-mono text-neutral-400">
          Asking Price
        </span>
        <div className="text-2xl font-bold font-mono text-white mt-0.5">
          {formatGHS(car.priceGHS)}
        </div>
        {car.priceUSD && (
          <span className="text-xs text-neutral-400 font-mono">
            ~${formatNumber(car.priceUSD)} USD
          </span>
        )}
      </div>

      {/* Primary WhatsApp Action */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
      >
        <MessageSquare className="w-4 h-4" />
        <span>Chat on WhatsApp</span>
      </a>

      {/* Direct Phone Call */}
      <a
        href={`tel:${car.sellerPhone.replace(/\s+/g, "")}`}
        className="w-full py-2 rounded-lg border border-neutral-800 hover:border-neutral-700 text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-neutral-400" />
        <span>Call: {car.sellerPhone}</span>
      </a>

      {submitted ? (
        <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-700 text-center text-xs text-neutral-300">
          Inspection request received. We will contact you directly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 pt-2 border-t border-neutral-800">
          <span className="text-[11px] font-mono text-neutral-400 uppercase">
            Book Inspection
          </span>

          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
            className="px-2.5 py-1.5 rounded-lg solid-input text-xs"
          />

          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Phone number (e.g. 0244 123 456)"
            className="px-2.5 py-1.5 rounded-lg solid-input text-xs"
          />

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-white text-black hover:bg-neutral-200 text-xs font-medium transition-colors"
          >
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
}
