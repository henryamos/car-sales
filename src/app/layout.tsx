import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WishlistProvider } from "@/context/WishlistContext";

export const metadata: Metadata = {
  title: "AutoGhana | Buy & Sell Verified Cars in Accra & Kumasi",
  description:
    "Ghana's verified car marketplace. Inspect and buy Foreign Used and registered vehicles in Accra, Kumasi, and Tema with authentic GRA customs duty documentation.",
  keywords: [
    "cars for sale in Ghana",
    "foreign used cars in Accra",
    "buy Toyota Land Cruiser Ghana",
    "Mercedes Benz Ghana",
    "Tema port cleared cars",
    "DVLA registered cars Kumasi",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-black text-white antialiased">
        <WishlistProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </WishlistProvider>
      </body>
    </html>
  );
}