"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

interface ServiceData {
  id: "plots" | "villas" | "invest";
  num: string;
  name: string;
  title: string;
  desc: string;
  highlights: string[];
  cta: string;
}

const SERVICES: ServiceData[] = [
  {
    id: "plots",
    num: "01",
    name: "Plots",
    title: "100, 150, 200, 250 Sq.yd Freehold Residential Plots.",
    desc: "Positioned directly in the high-growth Noida International Airport (Jewar) corridor. Wide 30 to 50 ft tree-lined boulevards, demarcated boundaries, and immediate registry.",
    highlights: [
      "100, 150, 200, 250 Sq.yd prime plot cuts",
      "Immediate registry & mutation with 100% legal title clearance",
      "30-50 ft wide internal roads with underground utility connections",
    ],
    cta: "Inquire About Available Plots",
  },
  {
    id: "villas",
    num: "02",
    name: "Villas",
    title: "Theme-Based Luxury Architectural Pool Residences.",
    desc: "Individually crafted modern villas complete with private swimming pools, hardwood decks, double-height dining spaces, and access to the 10,000 sq.yd clubhouse.",
    highlights: [
      "Custom 3 & 4 BHK architectural layouts with private pool",
      "Spacious interiors, stylish finishes, and open living areas",
      "10,000 sq.yd clubhouse with gym, badminton court & kids zone",
    ],
    cta: "Explore Theme Villa Layouts",
  },
  {
    id: "invest",
    num: "03",
    name: "Invest",
    title: "High-Yield Appreciation Next to Noida International Airport.",
    desc: "Starting at ₹52,500/sq.yd, this township offers unprecedented capital appreciation driven by the upcoming Jewar Airport, Yamuna Expressway, and the proposed Film City.",
    highlights: [
      "Starting at an attractive ₹52,000 – ₹52,500 per sq. yard",
      "Strategic proximity to Jewar International Airport & Expressways",
      "Dedicated temple, meditation centre, and expansive central parks",
    ],
    cta: "Download Investment Deck",
  },
];

export default function FindServicesSection() {
  const [activeTab, setActiveTab] = useState<"plots" | "villas" | "invest">("plots");
  const current = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];

  return (
    <section className="bg-[#0f0f11] text-[#faf8f5] py-24 md:py-32 px-6 relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#9e7a44]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9e7a44]" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#9c978f] font-medium">
                Township Opportunities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Options Tailored For You
            </h2>
          </div>

          {/* Interactive Mode Pills */}
          <div className="flex items-center bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-md">
            {SERVICES.map((s) => {
              const isActive = activeTab === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  className={`px-6 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white text-[#141414] shadow-md scale-100"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <span className="text-[10px] opacity-60 mr-1.5">{s.num}</span>
                  {s.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Main Service Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Details & Bullet Points */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.24em] text-[#9e7a44] font-medium block">
                {current.num} / Bold India Group • {current.name}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-snug tracking-tight text-white">
                {current.title}
              </h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl font-light">
                {current.desc}
              </p>
            </div>

            {/* Feature highlights */}
            <div className="space-y-3 pt-2">
              {current.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[#9e7a44] shrink-0 mt-0.5 border border-white/15">
                    <Check size={12} strokeWidth={2.5} />
                  </div>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-[#141414] border border-white/20 px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 group"
              >
                <span>{current.cta}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+919311696477"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/70 hover:text-white px-5 py-4 transition-colors"
              >
                <span>Call +91 93116 96477</span>
              </a>
            </div>
          </div>

          {/* Right Column: Giant Kinetic 3D Typography */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[260px] md:min-h-[340px]">
            {/* Ambient glow behind text */}
            <div className="absolute inset-0 bg-radial from-white/5 to-transparent rounded-full blur-2xl pointer-events-none" />

            {/* Layered Kinetic Typography */}
            <div className="relative text-center select-none">
              {/* Back shadow layer */}
              <span
                key={`shadow-${current.id}`}
                className="block text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-bold uppercase tracking-tighter text-white/[0.04] absolute inset-0 translate-y-3 blur-xs transition-all duration-500"
              >
                {current.name}
              </span>

              {/* Middle stroked layer */}
              <span
                key={`stroke-${current.id}`}
                className="block text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-bold uppercase tracking-tighter text-stroke-white opacity-40 absolute inset-0 -translate-y-1 transition-all duration-500"
              >
                {current.name}
              </span>

              {/* Front solid gradient typography */}
              <span
                key={`front-${current.id}`}
                className="relative block text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-bold uppercase tracking-tighter bg-gradient-to-b from-white via-stone-200 to-stone-500 bg-clip-text text-transparent drop-shadow-2xl animate-in fade-in zoom-in-95 duration-500"
              >
                {current.name}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Callout inside Dark Canvas */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9e7a44] font-medium block mb-1">
              Guaranteed Security
            </span>
            <h4 className="text-xl font-normal text-white tracking-tight">
              Fiduciary Transparency & Clear Registry
            </h4>
          </div>
          <div className="md:col-span-8">
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              Every plot and villa under Bold India Group comes with verified freehold registry, approved layout plans, pre-installed underground water and electricity conduits, and direct road connectivity to the Jewar Airport arterial corridor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
