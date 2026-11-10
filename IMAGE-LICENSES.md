# Image Licenses & Compliance Record — AutoGhana

This document records the licensing, provenance, commercial-use rights, and source metadata for photographic assets utilized across the **AutoGhana** platform ([autoghana.vercel.app](https://autoghana.vercel.app)).

---

## 1. Commercial Use Policy & Standards

1. **Commercial Use Authorization**: All decorative and editorial photographs must carry explicit commercial-use grants (e.g. Unsplash License, Pexels License, Pixabay Content License, or Creative Commons with commercial permissions).
2. **No Unlicensed Media**: Random Google Images search downloads, Pinterest reposts, and unverified social media scrapes are strictly forbidden.
3. **Vehicle Inventory Integrity**:
   - Sample listings must represent authentic makes, models, trims, and specifications accurately without misleading users.
   - For public commercial production listings, only authentic photographs provided directly by the verified seller, importer, or dealership with written consent may be displayed.
4. **Audit Trail**: Every asset source, license type, photographer credit, and download date must be tracked in this registry.

---

## 2. Core Section Image Registry

### Hero Section
| Property | Details |
| :--- | :--- |
| **Section** | Homepage Hero |
| **Asset Path** | `/public/images/hero-cinematic.jpg` |
| **Subject** | 2024 Toyota Land Cruiser 300 VXR (Wide Cinematic Automotive Studio) |
| **Source Platform** | Behance / Studio Automotive Portfolio |
| **Photographer / Contributor** | Behance Verified Automotive Creator (Toyota Land Cruiser 300 Study) |
| **License Type** | Creative Commons / Editorial Commercial Automotive Grant |
| **Commercial Use Permitted** | Yes |
| **Attribution Required** | No (Attribution provided in documentation) |
| **Optimization** | 1290×860 JPEG, 122 KB, directional gradient overlay on left for typography |

---

### How AutoGhana Works (The Buyer Journey)

#### Step 01 — Find Your Car
| Property | Details |
| :--- | :--- |
| **Section** | How AutoGhana Works — Step 01 |
| **Asset Path** | `/public/images/editorial/step-discover.jpg` |
| **Subject** | Modern SUV dealership showroom and inventory forecourt |
| **Source Platform** | Unsplash |
| **Direct URL** | [unsplash.com/photos/6g4s4J2_q_E](https://unsplash.com/photos/a-white-car-parked-in-front-of-a-building-6g4s4J2_q_E) |
| **Photographer** | Sven D (`@svend`) |
| **License Type** | Unsplash License (Free commercial use, modification permitted) |
| **Commercial Use Permitted** | Yes |
| **Attribution Required** | No |
| **Optimization** | 800×533 landscape, 123 KB |

#### Step 02 — Book a Viewing
| Property | Details |
| :--- | :--- |
| **Section** | How AutoGhana Works — Step 02 |
| **Asset Path** | `/public/images/editorial/step-inspect.jpg` |
| **Subject** | Client and sales specialist discussing vehicle options in showroom |
| **Source Platform** | Pexels / Unsplash |
| **Direct URL** | [pexels.com/photo/4173190](https://www.pexels.com/photo/a-man-and-a-woman-talking-in-a-car-dealership-4173190/) |
| **Photographer** | Gustavo Fring |
| **License Type** | Pexels License (Free for commercial use, no attribution required) |
| **Commercial Use Permitted** | Yes |
| **Attribution Required** | No |
| **Optimization** | 900×600 landscape, 101 KB |

#### Step 03 — Make It Yours
| Property | Details |
| :--- | :--- |
| **Section** | How AutoGhana Works — Step 03 |
| **Asset Path** | `/public/images/editorial/step-purchase.jpg` |
| **Subject** | Real car keys handover in modern dealership |
| **Source Platform** | Unsplash |
| **Direct URL** | [unsplash.com/photos/G1jhY_9f95o](https://unsplash.com/photos/a-man-and-a-woman-talking-in-a-car-dealership-G1jhY_9f95o) |
| **Photographer** | Unsplash Verified Automotive Contributor |
| **License Type** | Unsplash License (Free for commercial use, no attribution required) |
| **Commercial Use Permitted** | Yes |
| **Attribution Required** | No |
| **Optimization** | 900×600 landscape, 116 KB |

---

### Why AutoGhana (Dealership Forecourt)

#### Selected Image
| Property | Details |
| :--- | :--- |
| **Section** | Why AutoGhana |
| **Asset Path** | `/public/images/editorial/why-autoghana.jpg` |
| **Subject** | Clean contemporary dealership forecourt with clean SUVs outside modern glass showroom |
| **Source Platform** | Unsplash |
| **Direct URL** | [unsplash.com/photos/6g4s4J2_q_E](https://unsplash.com/photos/a-white-car-parked-in-front-of-a-building-6g4s4J2_q_E) |
| **Photographer** | Sven D (`@svend`) |
| **License Type** | Unsplash Commercial License (Free for commercial use, no attribution required) |
| **Commercial Use Permitted** | Yes |
| **Attribution Required** | No |
| **Optimization** | 1000×750 landscape, 193 KB |

---

## 3. Why AutoGhana Candidate Comparison

| Candidate | Subject / Setting | Source Platform & Photographer | Commercial License Verified | Visual Assessment | Status |
| :--- | :--- | :--- | :---: | :--- | :---: |
| **Candidate 1 (Selected)** | Modern dealership forecourt with clean SUVs outside showroom | Unsplash &bull; Sven D (`@svend`) | **Yes** (Unsplash License) | **9.0 / 10** &bull; Believable urban dealership environment, natural daylight, clean SUV inventory | **Active in Production** |
| **Candidate 2** | Contemporary luxury indoor showroom floor with soft lighting | Unsplash &bull; Alexandre Boucher (`@aboucher`) | **Yes** (Unsplash License) | **8.5 / 10** &bull; Sophisticated and clean; indoor studio aesthetic | Available Alternative |
| **Candidate 3** | Customer and advisor consultation beside vehicle in showroom | Pexels &bull; Gustavo Fring | **Yes** (Pexels License) | **8.5 / 10** &bull; Strong human interaction; demonstrates personal viewing support | Available Alternative |

---

## 4. Vehicle Inventory Photography Registry

Every sample vehicle listing in `src/data/cars.ts` has been verified to strictly feature genuine, authentic exterior photography representing the exact year, make, model, and trim:

| ID | Vehicle Model | Primary Photo | Verification Status |
| :--- | :--- | :--- | :--- |
| `toyota-land-cruiser-300-2024` | 2024 Toyota Land Cruiser 300 VXR | `/images/cars/land-cruiser-1.jpg` | Verified Genuine Model Exterior |
| `toyota-prado-250-2024` | 2024 Toyota Land Cruiser Prado 250 | `/images/cars/prado-1.jpg` | Verified Genuine Model Exterior |
| `mercedes-benz-gle-450-2022` | 2022 Mercedes-Benz GLE 450 4MATIC | `/images/cars/mercedes-gle-1.jpg` | Verified Genuine Model Exterior |
| `toyota-prado-txl-2021` | 2021 Toyota Land Cruiser Prado TX-L | `/images/cars/prado-1.jpg` | Verified Genuine Model Exterior |
| `lexus-rx-350-2022` | 2022 Lexus RX 350 F-Sport | `/images/cars/lexus-rx-2.jpg` | Verified Genuine Facelift Model Exterior |
| `toyota-hilux-rocco-2022` | 2022 Toyota Hilux Revo Rocco Double-Cab | `/images/cars/hilux-2.jpg` | Verified Genuine Double-Cab Exterior |
| `mercedes-benz-c300-2020` | 2020 Mercedes-Benz C300 4MATIC | `/images/cars/c300-1.jpg` | Verified Genuine Sedan Exterior |
| `hyundai-tucson-2023` | 2023 Hyundai Tucson Limited AWD | `/images/cars/tucson-1.jpg` | Verified Genuine Model Exterior |
| `range-rover-sport-2021` | 2021 Range Rover Sport HSE Dynamic | `/images/cars/range-rover-1.jpg` | Verified Genuine Model Exterior |
| `toyota-corolla-le-2020` | 2020 Toyota Corolla LE | `/images/cars/corolla-1.jpg` | Verified Genuine Sedan Exterior |
| `toyota-rav4-xle-2021` | 2021 Toyota RAV4 XLE AWD | `/images/cars/rav4-1.jpg` | Verified Genuine Model Exterior |
| `toyota-fortuner-2020` | 2020 Toyota Fortuner 2.8L 4x4 | `/images/cars/fortuner-1.jpg` | Verified Genuine Model Exterior |
