"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Search, RotateCcw, ChevronLeft, ChevronRight, SlidersHorizontal, Layers } from "lucide-react";
import { CARS_DATA, BODY_TYPES, CONDITION_TABS } from "@/data/cars";
import { CarCard } from "@/components/cards/CarCard";
import { CustomDropdown } from "@/components/ui/CustomDropdown";

const ITEMS_PER_PAGE = 6;

const SORT_OPTIONS = [
  { label: "Featured First", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest Year", value: "year-desc" },
];

export function FeaturedInventory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCondition, setSelectedCondition] = useState<string>("All");
  const [selectedBody, setSelectedBody] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredCars = useMemo(() => {
    return CARS_DATA.filter((car) => {
      if (selectedCondition !== "All" && car.condition !== selectedCondition) {
        return false;
      }
      if (selectedBody !== "All" && car.bodyType !== selectedBody) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matches =
          car.make.toLowerCase().includes(query) ||
          car.model.toLowerCase().includes(query) ||
          car.trim.toLowerCase().includes(query) ||
          car.year.toString().includes(query);
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.priceGHS - b.priceGHS;
      if (sortBy === "price-desc") return b.priceGHS - a.priceGHS;
      if (sortBy === "year-desc") return b.year - a.year;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchQuery, selectedCondition, selectedBody, sortBy]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCondition, selectedBody, sortBy]);

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCars = filteredCars.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    const elem = document.getElementById("inventory");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCondition("All");
    setSelectedBody("All");
    setSortBy("featured");
    setCurrentPage(1);
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCondition !== "All" ||
    selectedBody !== "All" ||
    sortBy !== "featured";

  return (
    <section id="inventory" className="w-full bg-black py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Clean & Spacious */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-neutral-800">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Vehicle Inventory
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Select condition and body style to filter available cars.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-400">
            {filteredCars.length} {filteredCars.length === 1 ? "car" : "cars"} available
          </div>
        </div>

        {/* Primary Condition Tabs: Spacious with Breathing Room */}
        <div className="pt-6 pb-4">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 no-scrollbar">
            {CONDITION_TABS.map((tab) => {
              const isActive = selectedCondition === tab.value;
              const count =
                tab.value === "All"
                  ? CARS_DATA.length
                  : CARS_DATA.filter((c) => c.condition === tab.value).length;

              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setSelectedCondition(tab.value)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-2.5 ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-md"
                      : "bg-neutral-900/80 text-neutral-300 border border-neutral-800 hover:border-neutral-700 hover:text-white"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                      isActive
                        ? "bg-neutral-200 text-black font-bold"
                        : "bg-neutral-800 text-neutral-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Wide Search Bar & Custom Dropdowns (Single Unified Control Bar) */}
        <div className="py-2">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            {/* Wider, Comfortable Search Input */}
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search make, model, or year (e.g. Prado, Land Cruiser, GLE)..."
                className="w-full h-11 pl-10 pr-4 rounded-xl solid-input text-xs placeholder:text-neutral-500"
              />
            </div>

            {/* Custom Dropdown: Body Type */}
            <div className="sm:col-span-3">
              <CustomDropdown
                value={selectedBody}
                options={BODY_TYPES}
                onChange={setSelectedBody}
                icon={<Layers className="w-3.5 h-3.5" />}
                placeholder="All Body Types"
              />
            </div>

            {/* Custom Dropdown: Sort */}
            <div className="sm:col-span-3">
              <CustomDropdown
                value={sortBy}
                options={SORT_OPTIONS}
                onChange={setSortBy}
                icon={<SlidersHorizontal className="w-3.5 h-3.5" />}
                placeholder="Sort By"
              />
            </div>
          </div>

          {/* Reset Filter indicator when filters are active */}
          {hasActiveFilters && (
            <div className="flex items-center justify-between pt-3 text-xs text-neutral-400">
              <span>Filtered by your criteria</span>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors font-mono"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            </div>
          )}
        </div>

        {/* Inventory Cars Grid with Generous Gaps and Breathing Space */}
        {paginatedCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {paginatedCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center border border-neutral-800 rounded-2xl my-8 bg-neutral-950">
            <p className="text-sm text-neutral-300">No vehicles match your search criteria.</p>
            <p className="text-xs text-neutral-500 mt-1">Try resetting the filters or searching for another model.</p>
            <button
              onClick={handleReset}
              className="mt-4 px-5 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Numbered Pagination: Spacious with Comfortable Buttons */}
        {totalPages > 1 && (
          <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-900 mt-12">
            <span className="text-xs font-mono text-neutral-400">
              Showing page {currentPage} of {totalPages} ({filteredCars.length} total cars)
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="h-9 px-3.5 rounded-xl border border-neutral-800 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNum = i + 1;
                const isCurrent = pageNum === currentPage;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-9 h-9 rounded-xl text-xs font-mono font-medium transition-colors ${
                      isCurrent
                        ? "bg-white text-black font-bold shadow-md"
                        : "bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="h-9 px-3.5 rounded-xl border border-neutral-800 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 transition-colors"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
