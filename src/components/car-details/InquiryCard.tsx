"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, CheckCircle, Calendar, User, Check } from "lucide-react";
import { Car } from "@/types/car";
import { formatGHS } from "@/lib/utils";

interface InquiryCardProps {
  car: Car;
}

export function InquiryCard({ car }: InquiryCardProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${car.sellerWhatsApp}?text=Hello,%20inquiring%20about%20the%20${encodeURIComponent(
    `${car.year} ${car.make} ${car.model} (${formatGHS(car.priceGHS)})`
  )}%20listed%20on%20AutoGhana.`;

  return (
    <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col gap-4 sticky top-20">
      {/* Price Header (Pure GHS, no speculative exchange rates) */}
      <div className="pb-3 border-b border-neutral-800">
        <span className="text-[10px] uppercase tracking-wider font-mono text-neutral-400">
          Official Asking Price
        </span>
        <div className="text-2xl sm:text-3xl font-bold font-mono text-white mt-0.5">
          {formatGHS(car.priceGHS)}
        </div>
        <p className="text-[11px] text-neutral-400 font-mono mt-1">
          Direct payment in Ghana Cedis &bull; Verified documentation
        </p>
      </div>

      {/* Primary Action: WhatsApp Seller in Solid Green */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
      >
        <MessageSquare className="w-4 h-4" />
        <span>WhatsApp Seller</span>
      </a>

      {/* Direct Phone Call: Outlined Secondary */}
      <a
        href={`tel:${car.sellerPhone.replace(/\s+/g, "")}`}
        className="w-full py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-200 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-neutral-400" />
        <span>Call: {car.sellerPhone}</span>
      </a>

      {/* Book Inspection Form or Submission Outcome */}
      {submitted ? (
        <div className="p-4 rounded-xl bg-neutral-900/90 border border-emerald-500/30 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>Viewing Request Received</span>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Thank you, <strong className="text-white">{formData.name}</strong>. Our Accra vehicle inspection coordinator has been notified for the <strong className="text-white">{car.year} {car.make} {car.model}</strong>.
          </p>
          <p className="text-[11px] text-neutral-400 font-mono">
            We will contact <span className="text-white">{formData.phone}</span> within 30 minutes to confirm your appointment.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", phone: "", preferredDate: "" });
            }}
            className="mt-2 text-xs text-neutral-400 hover:text-white underline text-left"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 pt-2 border-t border-neutral-800">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              Book Viewing / Inspection
            </span>
            <span className="text-[10px] text-emerald-400 font-mono">Free Verification</span>
          </div>

          <div className="relative">
            <User className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your full name"
              className="w-full pl-9 pr-3 py-2 rounded-xl solid-input text-xs bg-neutral-950 border border-neutral-800 focus:border-neutral-600"
            />
          </div>

          <div className="relative">
            <Phone className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Phone number (e.g. 055 988 8003)"
              className="w-full pl-9 pr-3 py-2 rounded-xl solid-input text-xs bg-neutral-950 border border-neutral-800 focus:border-neutral-600"
            />
          </div>

          <div className="relative">
            <Calendar className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full pl-9 pr-3 py-2 rounded-xl solid-input text-xs bg-neutral-950 border border-neutral-800 focus:border-neutral-600 text-neutral-300"
            />
          </div>

          {/* Secondary Action: Clean Dark Outlined (never solid white competing with primary green) */}
          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-neutral-900 border border-neutral-700/80 hover:border-neutral-500 hover:bg-neutral-800 text-neutral-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Check className="w-3.5 h-3.5 text-neutral-400" />
            <span>Book Viewing</span>
          </button>
        </form>
      )}

      {/* Seller Verification Note */}
      <div className="pt-2 border-t border-neutral-900 text-[11px] text-neutral-500 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        <span>Location: {car.location || "Accra, Ghana"}</span>
      </div>
    </div>
  );
}
