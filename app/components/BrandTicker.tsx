"use client";


export default function BrandTicker() {
  return (
    <section aria-label="Brand highlights" className="relative overflow-hidden bg-[#141414] py-8 border-y border-white/10">
      {/* Fade Edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 md:w-36 bg-gradient-to-r from-[#141414] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 md:w-36 bg-gradient-to-l from-[#141414] to-transparent" />

      <div className="relative z-10 flex w-max items-center gap-12 animate-[marquee_45s_linear_infinite]">
        {[...Array(2)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex items-center gap-12">
            {[...Array(4)].map((_, i) => (
              <div
                key={`${groupIndex}-${i}`}
                className="flex items-center gap-6 px-4"
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#9c978f]">
                  Curated Portfolios
                </span>
                <span className="font-serif text-lg md:text-xl font-normal tracking-[0.15em] uppercase text-[#faf8f5]">
                  Bold India Group
                </span>
                <span className="text-sm text-[#9e7a44]">✦</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#9c978f]">
                  Delhi NCR · Mumbai · Bangalore
                </span>
                <span className="text-sm text-[#9e7a44]">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
