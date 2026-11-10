export type BodyType =
  | "All"
  | "SUVs & 4x4"
  | "Sedans"
  | "Pickups & Trucks"
  | "Luxury & Prestige";

export type CarCondition = "Foreign Used" | "Ghana Used" | "Brand New";

export interface CarHistory {
  owners: number;
  dutyStatus?: string;
  dvlaPlate?: string;
  inspectionStatus: string;
  warranty: string;
}

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  trim: string;
  bodyType: BodyType;
  priceGHS: number;
  priceUSD?: number;
  mileageKm: number;
  fuelType: "Petrol" | "Diesel" | "Hybrid" | "Electric";
  transmission: "Automatic" | "Manual";
  drivetrain: "4WD" | "AWD" | "FWD" | "RWD";
  exteriorColor: string;
  interiorColor: string;
  engineSize: string;
  condition: CarCondition;
  featured: boolean;
  heroSlide?: boolean;
  heroTagline?: string;
  images: string[];
  vin: string;
  stockNumber: string;
  description: string;
  keyFeatures: string[];
  history: CarHistory;
  location?: string;
  sellerPhone: string;
  sellerWhatsApp: string;
}
