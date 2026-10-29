"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

export default function FindHero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#f9f3ea] via-[#fcf7ef] to-[#faf8f5] pt-12 md:pt-16 pb-10 px-6">
      {/* Top Ambient Golden Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[450px] bg-gradient-to-b from-amber-100/50 via-orange-50/25 to-transparent blur-3xl pointer-events-none" />

      {/* --- HERO TOP CONTENT: Headline, Real Project Subtitle, Price Badge --- */}
      <div className="relative z-20 max-w-4xl mx-auto text-center pt-4 md:pt-8">
        {/* Project Location & Price Badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-md border border-[#141414]/10 rounded-full px-5 py-2 mb-6 shadow-xs">
          <Sparkles size={14} className="text-[#9e7a44]" />
          <span className="text-[#141414] font-medium text-xs tracking-wider uppercase">
            Near Noida International Airport • Starting ₹52,500/Sq.yd
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-[#141414] leading-[1.06] mb-5">
          Find What Moves You
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#524f4b] max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Theme-based residential villas & plots by <span className="font-semibold text-[#141414]">Bold India Group</span>. A sanctuary of private pools, wide boulevards, and architectural distinction.
        </p>

        {/* Action Buttons: Site Visit & Direct Call */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#141414] hover:bg-[#262626] text-white px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-xl shadow-black/10 active:scale-95 group"
          >
            <span>Book Private Site Visit</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:+919311696477"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/90 hover:bg-white text-[#141414] border border-[#141414]/15 px-7 py-4 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all shadow-xs"
          >
            <Phone size={14} className="text-[#9e7a44]" />
            <span>+91 93116 96477</span>
          </a>
        </div>
      </div>

      {/* --- HERO CENTERPIECE: REAL LUXURY POOL VILLA WITH GIANT WATERMARK --- */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mt-8 md:mt-12 flex flex-col items-center justify-center">
        {/* Giant Stroked Outline Watermark behind/across the real photo (Video Frame 05 aesthetic) */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none select-none z-0">
          <span className="text-stroke-thick text-5xl sm:text-7xl md:text-9xl lg:text-[11.5rem] font-black uppercase tracking-tight text-center leading-none opacity-35">
            BOLD INDIA
          </span>
          <span className="text-stroke-thick text-xl sm:text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-[0.28em] text-center -mt-2 md:-mt-5 opacity-30">
            Theme Residential
          </span>
        </div>

        {/* Real Site Photo: Luxury Pool Villa (from brochure) */}
        <div className="relative z-10 w-full aspect-[16/10] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-white/80 bg-stone-900 group">
          <Image
            src="/images/real-site/real_pool_villa.jpg"
            alt="Bold India Group - Real Site Photo: Theme-Based Luxury Pool Villa"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
          />

          {/* Soft vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/80 via-transparent to-transparent pointer-events-none" />

          {/* Bottom Live Site Badges */}
          <div className="absolute bottom-5 left-6 z-20 flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 bg-[#141414]/85 backdrop-blur-md text-white px-4 py-2 rounded-full text-[11px] font-medium border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Real Site Photograph</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-3.5 py-2 rounded-full text-[11px] font-light border border-white/20">
              <span>100, 150, 200, 250 Sq.yd Available</span>
            </div>
          </div>

          <div className="absolute bottom-5 right-6 z-20 hidden md:flex items-center gap-2 text-white/95 text-xs font-medium bg-[#9e7a44]/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md">
            <span>Starting ₹52,000 – ₹52,500/sq.yd</span>
          </div>
        </div>
      </div>

      {/* Subtle bottom scroll indicator */}
      <div className="relative z-20 flex justify-center mt-6">
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#9c978f] font-medium animate-bounce">
          Scroll for Site Highlights & Masterplan ↓
        </span>
      </div>
    </section>
  );
}
