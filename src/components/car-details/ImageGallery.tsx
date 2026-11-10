"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  vehicleTitle: string;
}

export function ImageGallery({ images, vehicleTitle }: ImageGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(images[0] || "/images/cars/land-cruiser-1.jpg");

  useEffect(() => {
    setCurrentImg(images[activeIdx] || "/images/cars/land-cruiser-1.jpg");
  }, [activeIdx, images]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowLeft") setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setActiveIdx((prev) => (prev + 1) % images.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, images.length]);

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* Main Photo Container with Breathing Room */}
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 group">
          <Image
            src={currentImg}
            alt={`${vehicleTitle} - Image ${activeIdx + 1}`}
            fill
            unoptimized
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 65vw"
            onError={() => setCurrentImg("/images/cars/land-cruiser-1.jpg")}
          />

          <button
            onClick={() => setIsLightboxOpen(true)}
            className="absolute top-3 right-3 p-2 rounded-lg bg-black/75 hover:bg-black text-white border border-neutral-700 transition-colors"
            aria-label="Expand image"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/75 text-[11px] font-mono text-neutral-300 border border-neutral-800">
            {activeIdx + 1} / {images.length} Photos
          </span>

          <button
            onClick={() => setActiveIdx((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black/70 hover:bg-black text-white border border-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setActiveIdx((prev) => (prev + 1) % images.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black/70 hover:bg-black text-white border border-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-1 no-scrollbar">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`relative w-24 aspect-[16/10] rounded-xl overflow-hidden shrink-0 border transition-colors ${
                idx === activeIdx ? "border-white" : "border-neutral-800 opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumb ${idx + 1}`}
                fill
                unoptimized
                className="object-cover"
                sizes="96px"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/cars/land-cruiser-1.jpg";
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6">
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
            <span>{vehicleTitle} &bull; {activeIdx + 1} / {images.length}</span>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 text-white hover:text-neutral-300"
              aria-label="Close fullscreen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative flex-1 max-h-[82vh] my-auto flex items-center justify-center">
            <div className="relative w-full h-full max-w-5xl aspect-[16/10]">
              <Image
                src={images[activeIdx] || "/images/cars/land-cruiser-1.jpg"}
                alt={`${vehicleTitle} Fullscreen`}
                fill
                unoptimized
                className="object-contain"
                sizes="95vw"
              />
            </div>
            <button
              onClick={() => setActiveIdx((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-2 sm:left-4 p-3 rounded-full bg-neutral-900 border border-neutral-700 text-white hover:bg-black"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveIdx((prev) => (prev + 1) % images.length)}
              className="absolute right-2 sm:right-4 p-3 rounded-full bg-neutral-900 border border-neutral-700 text-white hover:bg-black"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
