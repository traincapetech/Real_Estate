"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Waves, Dumbbell, Sparkles } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  tag: string;
  desc: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "pool-villa",
    title: "Theme-Based Luxury Pool Villa",
    category: "Architecture & Pool Deck",
    image: "/images/real-site/real_pool_villa.jpg",
    tag: "Real Site Photo",
    desc: "Two-story contemporary architecture with illuminated private swimming pool, wooden sun terrace, and tropical landscaping.",
  },
  {
    id: "entrance-gate",
    title: "Grand Illuminated Entrance Gate",
    category: "Boulevard & Security",
    image: "/images/real-site/real_grand_entrance_gate.jpg",
    tag: "Real Site Photo",
    desc: "Gated entry monument with ambient architectural downlighting, 24/7 manned security checkpoint, and 30-50ft wide paved roads.",
  },
  {
    id: "park-garden",
    title: "Landscaped Central Park & Gazebo",
    category: "Greenery & Recreation",
    image: "/images/real-site/real_park_garden.jpg",
    tag: "Real Site Photo",
    desc: "Lush green central park featuring an elegant gazebo pavilion, national flagpole, ornamental stone landscaping, and flowering trees.",
  },
  {
    id: "dining-room",
    title: "Double-Height Designer Dining",
    category: "Villa Interiors",
    image: "/images/real-site/real_dining_room.jpg",
    tag: "Villa Showroom",
    desc: "Spacious double-height dining hall with marble finishes, floating timber staircase, and floor-to-ceiling glass fenestration.",
  },
  {
    id: "lounge-room",
    title: "Contemporary Living Lounge",
    category: "Villa Interiors",
    image: "/images/real-site/real_lounge_room.jpg",
    tag: "Villa Showroom",
    desc: "Elegantly styled living salon with low-profile modular seating, organic wooden tables, and soft designer illumination.",
  },
  {
    id: "master-suite",
    title: "Comfortable Master Suite",
    category: "Villa Interiors",
    image: "/images/real-site/real_master_suite.jpg",
    tag: "Villa Showroom",
    desc: "Warm acoustic wood panelling, ambient drop lighting, and tinted glass wardrobe systems for understated master bedroom luxury.",
  },
];

const AMENITIES = [
  { icon: Dumbbell, title: "10,000 Sq.yd Club House", desc: "State-of-the-art community hub with indoor games, gym, and banquet hall" },
  { icon: Waves, title: "Swimming Pool & Deck", desc: "Resort-style pool with wooden sun loungers and dedicated kids pool" },
  { icon: Sparkles, title: "Temple & Meditation Centre", desc: "Tranquil spiritual sanctuary nestled in lush green surroundings" },
  { icon: ShieldCheck, title: "30 to 50ft Wide Roads", desc: "Broad tree-lined internal roads with underground utility conduits" },
];

export default function RealSiteGallery() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filtered =
    activeTab === "all"
      ? GALLERY_ITEMS
      : activeTab === "villas"
      ? GALLERY_ITEMS.filter((i) => i.category.includes("Architecture") || i.category.includes("Interiors"))
      : GALLERY_ITEMS.filter((i) => i.category.includes("Boulevard") || i.category.includes("Greenery"));

  return (
    <section className="bg-white py-24 md:py-32 px-6 border-t border-[#141414]/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9e7a44]" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#9e7a44] font-medium">
                Actual Ground Reality
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#141414]">
              Real Site Photography & Amenities
            </h2>
            <p className="text-[#6e6b66] text-base font-light mt-3 max-w-xl">
              Authentic on-site photographs of the gated entrance, landscaped parks, and finished theme-based pool villas near Noida International Airport.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center bg-[#faf8f5] border border-[#141414]/10 p-1.5 rounded-full">
            {[
              { id: "all", label: "All Photos" },
              { id: "villas", label: "Villas & Interiors" },
              { id: "township", label: "Township & Parks" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#141414] text-white shadow-xs"
                    : "text-[#6e6b66] hover:text-[#141414]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-[#faf8f5] border border-[#141414]/[0.08] rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#141414]/20 transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-10 bg-[#141414]/80 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-white/10 font-medium">
                  {item.tag}
                </div>
              </div>

              <div className="p-6 space-y-2">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#9e7a44] font-medium block">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold text-[#141414] tracking-tight group-hover:text-[#9e7a44] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#524f4b] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Township Amenities Strip */}
        <div className="mt-20 pt-16 border-t border-[#141414]/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {AMENITIES.map((amenity, i) => {
            const Icon = amenity.icon;
            return (
              <div key={i} className="space-y-3 p-6 bg-[#faf8f5] rounded-2xl border border-[#141414]/[0.06]">
                <div className="w-10 h-10 rounded-full bg-[#141414] text-white flex items-center justify-center">
                  <Icon size={18} className="text-[#9e7a44]" />
                </div>
                <h4 className="text-base font-semibold text-[#141414] tracking-tight">
                  {amenity.title}
                </h4>
                <p className="text-xs text-[#6e6b66] leading-relaxed font-light">
                  {amenity.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlights Checklist from Brochure */}
        <div className="mt-12 p-8 rounded-2xl bg-[#0f0f11] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-semibold tracking-tight text-white">
              Township Specifications
            </h4>
            <p className="text-xs text-white/60 font-light">
              100, 150, 200, 250 Sq.yd • Kids Play Zone • Meditation Centre • Flower Park • Jogging Track
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9e7a44] font-medium">
              Price: ₹52,000 – ₹52,500/Sq.yd
            </span>
            <a
              href="tel:+919311696477"
              className="bg-white text-[#141414] hover:bg-stone-200 px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all"
            >
              Call +91 93116 96477
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
