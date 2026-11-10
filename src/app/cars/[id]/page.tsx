import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CARS_DATA } from "@/data/cars";
import { ImageGallery } from "@/components/car-details/ImageGallery";
import { QuickSpecsBar } from "@/components/car-details/QuickSpecsBar";
import { DetailedSpecsTable } from "@/components/car-details/DetailedSpecsTable";
import { InquiryCard } from "@/components/car-details/InquiryCard";
import { SimilarCars } from "@/components/car-details/SimilarCars";
import { formatGHS, formatNumber } from "@/lib/utils";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return CARS_DATA.map((car) => ({
    id: car.id,
  }));
}

export default async function CarDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const car = CARS_DATA.find((c) => c.id === id);

  if (!car) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="pb-4">
          <Link
            href="/#inventory"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Inventory</span>
          </Link>
        </div>

        {/* Heading Block */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-6 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-700 text-[10px] font-mono text-neutral-300">
                {car.condition}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              {car.year} {car.make} {car.model}
            </h1>
            <p className="text-xs text-neutral-400 mt-0.5 font-mono">
              {car.trim} &bull; {car.transmission} &bull; {car.fuelType}
            </p>
          </div>

          <div className="flex flex-col sm:items-end">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-white">
              {formatGHS(car.priceGHS)}
            </span>
            {car.priceUSD && (
              <span className="text-xs font-mono text-neutral-400">
                ~${formatNumber(car.priceUSD)} USD
              </span>
            )}
          </div>
        </div>

        {/* Quick Specs */}
        <div className="py-5">
          <QuickSpecsBar car={car} />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
          {/* Main 8 Cols */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <ImageGallery images={car.images} vehicleTitle={`${car.year} ${car.make} ${car.model}`} />

            {/* Description */}
            <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-mono mb-2">
                Vehicle Details
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {car.description}
              </p>

              {/* Highlights */}
              <div className="pt-4 mt-4 border-t border-neutral-800">
                <h4 className="text-[11px] font-mono uppercase text-neutral-400 mb-2">
                  Key Specifications &amp; Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                  {car.keyFeatures.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Specs Table */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-mono mb-2">
                Full Technical Specifications
              </h3>
              <DetailedSpecsTable car={car} />
            </div>
          </div>

          {/* Sidebar 4 Cols */}
          <div className="lg:col-span-4">
            <InquiryCard car={car} />
          </div>
        </div>

        {/* Similar Cars */}
        <SimilarCars currentCarId={car.id} bodyType={car.bodyType} />
      </div>
    </div>
  );
}
