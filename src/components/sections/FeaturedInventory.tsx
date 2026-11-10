"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Search,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Layers,
  Car,
  Sparkles,
  Globe,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { CARS_DATA, BODY_TYPES, CONDITION_TABS, BRAND_LIST } from "@/data/cars";
import { CarCard } from "@/components/cards/CarCard";
import { CustomDropdown } from "@/components/ui/CustomDropdown";

const ITEMS_PER_PAGE = 6;

const SORT_OPTIONS = [
  { label: "Featured First", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest Year", value: "year-desc" },
];

const BRAND_OPTIONS = BRAND_LIST.map((b) => ({ label: b, value: b }));

function InventoryContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read initial values from URL query parameters
  const initialCondition = searchParams.get("condition") || "All";
  const initialMake = searchParams.get("make") || "All Makes";
  const initialBody = searchParams.get("body") || "All";
  const initialQuery = searchParams.get("q") || "";
  const initialSort = searchParams.get("sort") || "featured";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCondition, setSelectedCondition] = useState<string>(initialCondition);
  const [selectedMake, setSelectedMake] = useState<string>(initialMake);
  const [selectedBody, setSelectedBody] = useState<string>(initialBody);
  const [sortBy, setSortBy] = useState<string>(initialSort);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Sync state if URL query params change (e.g. from navbar or footer navigation)
  useEffect(() => {
    const cond = searchParams.get("condition") || "All";
    const mk = searchParams.get("make") || "All Makes";
    const bd = searchParams.get("body") || "All";
    const q = searchParams.get("q") || "";
    const srt = searchParams.get("sort") || "featured";

    setSelectedCondition(cond);
    setSelectedMake(mk);
    setSelectedBody(bd);
    setSearchQuery(q);
    setSortBy(srt);
  }, [searchParams]);

  // Synchronize URL with active filters
  const updateUrl = (newCond: string, newMake: string, newBody: string, newQ: string, newSort: string) => {
    const params = new URLSearchParams();
    if (newCond && newCond !== "All") params.set("condition", newCond);
    if (newMake && newMake !== "All Makes") params.set("make", newMake);
    if (newBody && newBody !== "All") params.set("body", newBody);
    if (newQ && newQ.trim() !== "") params.set("q", newQ.trim());
    if (newSort && newSort !== "featured") params.set("sort", newSort);

    const queryString = params.toString();
    const newPath = queryString ? `/?${queryString}#inventory` : "/#inventory";
    router.replace(newPath, { scroll: false });
  };

  const handleConditionChange = (condition: string) => {
    setSelectedCondition(condition);
    setCurrentPage(1);
    updateUrl(condition, selectedMake, selectedBody, searchQuery, sortBy);
  };

  const handleMakeChange = (make: string) => {
    setSelectedMake(make);
    setCurrentPage(1);
    updateUrl(selectedCondition, make, selectedBody, searchQuery, sortBy);
  };

  const handleBodyChange = (body: string) => {
    setSelectedBody(body);
    setCurrentPage(1);
    updateUrl(selectedCondition, selectedMake, body, searchQuery, sortBy);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    updateUrl(selectedCondition, selectedMake, selectedBody, searchQuery, sort);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setCurrentPage(1);
    updateUrl(selectedCondition, selectedMake, selectedBody, q, sortBy);
  };

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCondition("All");
    setSelectedMake("All Makes");
    setSelectedBody("All");
    setSortBy("featured");
    setCurrentPage(1);
    router.replace("/#inventory", { scroll: false });
  };

  // Filter & sort logic
  const filteredCars = useMemo(() => {
    return CARS_DATA.filter((car) => {
      // Condition filter
      if (selectedCondition !== "All" && car.condition !== selectedCondition) {
        return false;
      }
      // Make filter
      if (selectedMake !== "All Makes" && car.make !== selectedMake) {
        return false;
      }
      // Body type filter
      if (selectedBody !== "All" && car.bodyType !== selectedBody) {
        return false;
      }
      // Search query filter (matches make, model, trim, year)
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
  }, [searchQuery, selectedCondition, selectedMake, selectedBody, sortBy]);

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCars = filteredCars.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    const elem = document.getElementById("inventory");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCondition !== "All" ||
    selectedMake !== "All Makes" ||
    selectedBody !== "All" ||
    sortBy !== "featured";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="pb-6 border-b border-neutral-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Vehicle Inventory
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400 mt-1">
          Select condition, brand, and body style to filter available cars.
        </p>
      </div>

      {/* Primary Condition Tabs with Rich Icons */}
      <div className="pt-6 pb-4">
        <div className="flex items-center gap-2.5 overflow-x-auto pb-1 no-scrollbar">
          {CONDITION_TABS.map((tab) => {
            const isActive = selectedCondition === tab.value;
            const count =
              tab.value === "All"
                ? CARS_DATA.length
                : CARS_DATA.filter((c) => c.condition === tab.value).length;

            const tabIcon =
              tab.value === "Brand New" ? (
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              ) : tab.value === "Foreign Used" ? (
                <Globe className="w-3.5 h-3.5 text-blue-400" />
              ) : tab.value === "Ghana Used" ? (
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Car className="w-3.5 h-3.5 text-neutral-400" />
              );

            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => handleConditionChange(tab.value)}
                className={`px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${
                  isActive
                    ? "bg-white text-black font-semibold shadow-md"
                    : "bg-neutral-900/80 text-neutral-300 border border-neutral-800 hover:border-neutral-700 hover:text-white"
                }`}
              >
                {tabIcon}
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

      {/* Control Bar: Search + Brand + Body Type + Sort */}
      <div className="py-2 relative z-30">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          {/* Search Input */}
          <div className="sm:col-span-4 relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search make, model, or year..."
              className="w-full h-11 pl-10 pr-4 rounded-xl solid-input text-xs placeholder:text-neutral-500 bg-neutral-950 border border-neutral-800"
            />
          </div>

          {/* Custom Dropdown: Make / Brand */}
          <div className="sm:col-span-3">
            <CustomDropdown
              value={selectedMake}
              options={BRAND_OPTIONS}
              onChange={handleMakeChange}
              icon={<Building2 className="w-3.5 h-3.5" />}
              placeholder="All Makes"
            />
          </div>

          {/* Custom Dropdown: Body Type */}
          <div className="sm:col-span-3">
            <CustomDropdown
              value={selectedBody}
              options={BODY_TYPES}
              onChange={handleBodyChange}
              icon={<Layers className="w-3.5 h-3.5" />}
              placeholder="All Body Types"
            />
          </div>

          {/* Custom Dropdown: Sort */}
          <div className="sm:col-span-2">
            <CustomDropdown
              value={sortBy}
              options={SORT_OPTIONS}
              onChange={handleSortChange}
              icon={<SlidersHorizontal className="w-3.5 h-3.5" />}
              placeholder="Sort By"
            />
          </div>
        </div>

        {/* Active Filter Indicators & Reset Action */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between pt-3 text-xs text-neutral-400">
            <span>
              Showing {filteredCars.length} of {CARS_DATA.length} vehicles
            </span>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors font-mono cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}
      </div>

      {/* Inventory Cars Grid */}
      {paginatedCars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 relative z-10">
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
            className="mt-4 px-5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700/80 hover:border-neutral-500 text-neutral-200 hover:text-white text-xs font-medium transition-colors cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Numbered Pagination */}
      {totalPages > 1 && (
        <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-900 mt-12">
          <span className="text-xs font-mono text-neutral-400">
            Page {currentPage} of {totalPages}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-9 px-3.5 rounded-xl border border-neutral-800 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 transition-colors cursor-pointer"
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
                  className={`w-9 h-9 rounded-xl text-xs font-mono font-medium transition-colors cursor-pointer ${
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
              className="h-9 px-3.5 rounded-xl border border-neutral-800 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function FeaturedInventory() {
  return (
    <section id="inventory" className="w-full bg-black py-16 sm:py-20">
      <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-12 text-center text-xs text-neutral-500">Loading inventory...</div>}>
        <InventoryContent />
      </Suspense>
    </section>
  );
}
