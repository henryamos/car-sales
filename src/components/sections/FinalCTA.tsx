"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  ArrowRight,
  Car,
  X,
  CheckCircle,
  Sparkles,
  Calendar,
  Wallet,
  User,
  Phone,
} from "lucide-react";

const WHATSAPP_NUMBER = "233559888003";

export function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    makeModel: "",
    condition: "Foreign Used",
    preferredYear: "2022 - 2024",
    budgetGHS: "",
    fullName: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.makeModel || !formData.fullName || !formData.phone) return;

    const message = `Hello AutoGhana, I would like to request vehicle sourcing:
• Model: ${formData.makeModel}
• Condition: ${formData.condition}
• Preferred Year: ${formData.preferredYear}
• Target Budget: GH₵ ${formData.budgetGHS || "Negotiable"}
• Customer: ${formData.fullName}
• Phone: ${formData.phone}`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <section id="contact" className="w-full bg-neutral-950 py-16 sm:py-20 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-neutral-900/90 to-black border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5" />
                <span>Custom Vehicle Sourcing</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Looking for a Specific Model or Custom Import?
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                If your desired car is not listed in our current showroom inventory, submit a sourcing request. Our Accra specialists will track, inspect, and source it directly for you.
              </p>
            </div>

            {/* Action Buttons: Strict Button Hierarchy
                - Primary: Green "Find My Car" opens the sourcing request flow
                - Secondary: Outlined "Contact Us" opens general chat
            */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
              {/* Primary Action: Solid Green */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="h-11 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
              >
                <span>Find My Car</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Secondary Action: Outlined Dark */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20AutoGhana,%20inquiring%20about%20vehicle%20sourcing.`}
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

      {/* Sourcing Request Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative w-full max-w-lg bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-neutral-800">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                  Vehicle Sourcing Desk
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mt-0.5">
                  Request Your Desired Car
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Tell us what you are looking for. We will search verified imports and dealers across Ghana.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 flex flex-col items-center text-center gap-3">
                <div className="p-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-white">Sourcing Request Sent!</h4>
                <p className="text-xs text-neutral-300 max-w-sm leading-relaxed">
                  Your request for <strong className="text-white">{formData.makeModel}</strong> has been prepared and opened in WhatsApp. Our sourcing specialist will review availability and contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setIsModalOpen(false);
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-xs font-semibold text-white hover:bg-neutral-800 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-4">
                {/* Make & Model */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-neutral-300 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Make &amp; Model</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.makeModel}
                    onChange={(e) => setFormData({ ...formData, makeModel: e.target.value })}
                    placeholder="e.g. 2023 Toyota Prado TX-L or Mercedes GLE 450"
                    className="w-full h-10 px-3.5 rounded-xl solid-input text-xs bg-neutral-900 border border-neutral-800 focus:border-neutral-600 text-white"
                  />
                </div>

                {/* Condition Selector */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-neutral-300">
                    Preferred Condition
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Brand New", "Foreign Used", "Ghana Used"].map((cond) => (
                      <button
                        key={cond}
                        type="button"
                        onClick={() => setFormData({ ...formData, condition: cond })}
                        className={`h-9 px-2 rounded-xl text-xs font-medium transition-colors border ${
                          formData.condition === cond
                            ? "bg-white text-black font-semibold border-white"
                            : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white"
                        }`}
                      >
                        {cond}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Year & Budget Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-neutral-300 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Preferred Year</span>
                    </label>
                    <input
                      type="text"
                      value={formData.preferredYear}
                      onChange={(e) => setFormData({ ...formData, preferredYear: e.target.value })}
                      placeholder="e.g. 2021 - 2024"
                      className="w-full h-10 px-3.5 rounded-xl solid-input text-xs bg-neutral-900 border border-neutral-800 focus:border-neutral-600 text-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-neutral-300 flex items-center gap-1.5">
                      <Wallet className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Target Budget (GH₵)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.budgetGHS}
                      onChange={(e) => setFormData({ ...formData, budgetGHS: e.target.value })}
                      placeholder="e.g. 450,000"
                      className="w-full h-10 px-3.5 rounded-xl solid-input text-xs bg-neutral-900 border border-neutral-800 focus:border-neutral-600 text-white"
                    />
                  </div>
                </div>

                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-neutral-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Your Full Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Kwame Mensah"
                      className="w-full h-10 px-3.5 rounded-xl solid-input text-xs bg-neutral-900 border border-neutral-800 focus:border-neutral-600 text-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-neutral-300 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-neutral-400" />
                      <span>WhatsApp Number</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 055 988 8003"
                      className="w-full h-10 px-3.5 rounded-xl solid-input text-xs bg-neutral-900 border border-neutral-800 focus:border-neutral-600 text-white"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full h-11 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Sourcing Request via WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-neutral-500 text-center mt-2">
                    Direct connection to our Accra vehicle sourcing desk &bull; No middleman fees
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
