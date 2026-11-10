import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "AutoGhana | Buy & Sell Verified Cars in Ghana",
  description:
    "Ghana's verified car marketplace. Inspect and buy Brand New, Foreign Used, and Ghana Used vehicles with transparent Ghana Cedi pricing.",
  keywords: [
    "cars for sale in Ghana",
    "foreign used cars in Accra",
    "buy Toyota Land Cruiser Ghana",
    "Mercedes Benz Ghana",
    "used cars Kumasi",
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
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
