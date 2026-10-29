"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Report {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
}

const REPORTS: Report[] = [
  {
    id: "jewar-airport-impact",
    date: "2026-04-13",
    category: "Infrastructure Intelligence",
    title: "Noida International Airport (Jewar): Capital Growth & Timeline",
    excerpt:
      "Commercial test flights and high-speed expressway links are accelerating demand across the Jewar corridor. How early land acquisitions set neighborhood wealth records.",
    image: "/images/real-site/real_grand_entrance_gate.jpg",
  },
  {
    id: "theme-based-living",
    date: "2026-04-01",
    category: "Architectural Trends",
    title: "The Rise of Theme-Based Townships: Private Pools & 50ft Roads",
    excerpt:
      "Why buyers are leaving congested urban apartments for self-contained sanctuaries with 10,000 sq.yd clubhouses, private meditation centres, and open pool decks.",
    image: "/images/real-site/real_pool_villa.jpg",
  },
  {
    id: "land-banking-roi",
    date: "2026-03-09",
    category: "Valuation Report",
    title: "Freehold Land Banking: The ₹52,500/Sq.yd Advantage",
    excerpt:
      "An in-depth analysis of 100 to 250 sq.yd demarcated plots, title registry security, and projected 3-year valuation appreciation along Yamuna Expressway.",
    image: "/images/real-site/real_park_garden.jpg",
  },
];

export default function MarketReportsSection() {
  const [activeReport, setActiveReport] = useState<Report>(REPORTS[0]);

  return (
    <section className="bg-[#faf8f5] py-24 md:py-32 px-6 border-t border-[#141414]/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9e7a44]" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#6e6b66] font-medium">
                Research & Advisory
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#141414]">
              Market Intelligence
            </h2>
          </div>
          <Link
            href="/properties"
            className="text-xs uppercase tracking-[0.2em] font-medium text-[#141414] hover:text-[#9e7a44] transition-colors pb-1 border-b border-[#141414]/20 hover:border-[#9e7a44]"
          >
            All Publications →
          </Link>
        </div>

        {/* 2-Column Reports and Live Image Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Report Items List */}
          <div className="lg:col-span-7 divide-y divide-[#141414]/[0.08]">
            {REPORTS.map((r) => {
              const isSelected = activeReport.id === r.id;
              return (
                <div
                  key={r.id}
                  onMouseEnter={() => setActiveReport(r)}
                  className={`py-8 group cursor-pointer transition-all duration-300 ${
                    isSelected ? "opacity-100" : "opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-xs font-mono text-[#6e6b66]">
                      {r.date}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#9e7a44] font-medium">
                      {r.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-normal text-[#141414] group-hover:text-[#9e7a44] transition-colors mb-3 leading-snug">
                    {r.title}
                  </h3>

                  <p className="text-[#6e6b66] text-sm leading-relaxed mb-4 max-w-xl">
                    {r.excerpt}
                  </p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium text-[#141414] group-hover:text-[#9e7a44] transition-colors"
                  >
                    <span>Read Report</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right Column: Architectural Photography Preview */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#141414]/10 shadow-lg bg-stone-100">
              <Image
                key={activeReport.id}
                src={activeReport.image}
                alt={activeReport.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-all duration-700 ease-out animate-in fade-in zoom-in-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#f4efe8]/80 block mb-1">
                  Preview Issue
                </span>
                <p className="text-sm font-medium leading-snug line-clamp-2">
                  {activeReport.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
