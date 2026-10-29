"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const HERO_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920",
    alt: "Luxury Villa with Swimming Pool in India",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920",
    alt: "Modern Architectural Luxury Residence",
  },
  {
    url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920",
    alt: "Exclusive High-Rise Sea Facing Apartment",
  },
  {
    url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200",
    alt: "Contemporary Urban Penthouse Living Room",
  },
  {
    url: "https://images.unsplash.com/photo-1722062767419-ff110d4e7db7?auto=format&fit=crop&w=1200",
    alt: "Luxury Terrace Row House Estate",
  },
];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // 6-second interval provides a premium, calm experience and minimizes mobile CPU wakeups (improves INP)
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, i) => (
          <div
            key={img.url}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              priority={i === 0}
              fetchPriority={i === 0 ? "high" : "auto"}
              sizes="100vw"
              className="object-cover brightness-[0.55]"
            />
          </div>
        ))}
        {/* Cinematic Architectural Vignette */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#141414]/90 via-[#141414]/40 to-[#141414]/50 pointer-events-none" />
      </div>

      {/* Editorial Pagination Indicators */}
      <div className="absolute bottom-10 flex gap-2.5 z-30 pointer-events-auto" aria-label="Hero carousel pagination">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-[2px] transition-all duration-500 ${
              i === index ? "w-12 bg-white" : "w-5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </>
  );
}
