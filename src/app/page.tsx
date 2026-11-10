import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeaturedInventory } from "@/components/sections/FeaturedInventory";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AboutUs } from "@/components/sections/AboutUs";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* 1. Full-width Hero Banner with Balanced Height & Primary Discovery Hierarchy */}
      <HeroSection />

      {/* 2. Categorized Paginated Inventory with Working Brand/Body/Condition Filters */}
      <FeaturedInventory />

      {/* 3. How It Works - 3 Step Verification Journey */}
      <HowItWorks />

      {/* 4. About Us - Brand Trust & Verified Inspections */}
      <AboutUs />

      {/* 5. Final CTA - Sourcing & Support */}
      <FinalCTA />
    </div>
  );
}
