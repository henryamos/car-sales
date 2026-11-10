"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface WishlistContextType {
  wishlist: string[];
  toggleWishlist: (carId: string) => void;
  isInWishlist: (carId: string) => boolean;
  wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem("apex_cars_wishlist");
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    } catch {
      // Local storage not accessible
    }
  }, []);

  const toggleWishlist = (carId: string) => {
    setWishlist((prev) => {
      const updated = prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId];
      try {
        localStorage.setItem("apex_cars_wishlist", JSON.stringify(updated));
      } catch {
        // Local storage not accessible
      }
      return updated;
    });
  };

  const isInWishlist = (carId: string) => wishlist.includes(carId);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount: isMounted ? wishlist.length : 0,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
