"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Michael was a great realtor. Such a hard worker, dedicated to helping us find the perfect neighborhood, price point and home. He's a workaholic so he was available morning, noon and night. Tireless and dedicated. Would recommend him 100%!",
    author: "BERNADETTE HOGAN",
    role: "Private Homeowner Acquisition",
    rating: 5,
    image: "/images/client_agent.jpg",
  },
  {
    id: 2,
    quote:
      "Working with FIND was completely unlike any traditional brokerage. Transparent market intelligence, zero unsolicited pressure, and they negotiated an off-market penthouse that wasn't even listed publicly. Absolute excellence.",
    author: "JULIAN & CLAIRE VANCE",
    role: "Penthouse Residence",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    quote:
      "Their fifty-point legal audit caught two critical easement complications on an estate that saved us months of litigation. If you value your time and capital, this is the only team you should consult.",
    author: "MARCUS STERLING",
    role: "Estate Portfolio Investor",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
  },
];

export default function FindTestimonial() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const active = TESTIMONIALS[currentIdx];

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-24 md:py-32 px-6 border-t border-[#141414]/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Candid Lifestyle Photography (Frame 08) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-[#141414]/10 shadow-lg bg-[#faf8f5]">
              <Image
                key={active.image}
                src={active.image}
                alt={active.author}
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover transition-all duration-700 animate-in fade-in"
              />
            </div>
          </div>

          {/* Right Column: Editorial Quote, Index Switchers, Stars (Frame 08) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            {/* Top Carousel Navigation & Large Quotation Mark */}
            <div className="flex items-center justify-between">
              {/* Numbered indicators (1) (2) (3) and arrows */}
              <div className="flex items-center gap-3">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setCurrentIdx(i)}
                    className={`w-7 h-7 rounded-full text-xs font-mono transition-all flex items-center justify-center ${
                      currentIdx === i
                        ? "bg-[#141414] text-white"
                        : "bg-[#faf8f5] text-[#6e6b66] hover:text-[#141414] border border-[#141414]/10"
                    }`}
                  >
                    {t.id}
                  </button>
                ))}

                <div className="flex items-center gap-1 ml-3 border-l border-[#141414]/10 pl-3">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous quote"
                    className="p-1.5 rounded-full hover:bg-stone-100 text-[#141414] transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next quote"
                    className="p-1.5 rounded-full hover:bg-stone-100 text-[#141414] transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Quotation Glyph */}
              <span className="font-serif text-5xl md:text-6xl text-[#9e7a44]/50 leading-none select-none">
                ”
              </span>
            </div>

            {/* Main Quote Text */}
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-[#141414] font-normal leading-relaxed tracking-tight italic">
              “{active.quote}”
            </blockquote>

            {/* Author Attribution & Star Rating */}
            <div className="pt-4 border-t border-[#141414]/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#141414]">
                  {active.author}
                </p>
                <p className="text-[11px] text-[#6e6b66] uppercase tracking-[0.16em] mt-0.5">
                  {active.role}
                </p>
              </div>

              <div className="flex items-center gap-1 text-[#9e7a44]">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
