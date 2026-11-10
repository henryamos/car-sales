import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeaturedInventory } from "@/components/sections/FeaturedInventory";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* 1. Full-width Hero Banner for Brand & Marketing (No Frame, No Interference) */}
      <HeroSection />

      {/* 2. Full-width Categorized (Used & New) Paginated Inventory */}
      <FeaturedInventory />
    </div>
  );
}
