"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Phone, MessageSquare, Car, Navigation, ShieldCheck } from "lucide-react";

export default function VideoPropertyShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setHasVideoError(true));
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Structured Data Schema for Google Video Indexing & Local Real Estate SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        "@id": "https://boldindiagroup.com/#video-mahavir-enclave-100gaj",
        "name": "100 Gaj Flat Video Walkthrough - Mahavir Enclave, Palam, New Delhi",
        "description": "Virtual video tour of 100 Gaj First Floor flat with 1 car and 1 bike parking in Gali No. 4, Mahavir Enclave, Palam, New Delhi 110045. Just 700m from Palam and Dashrath Puri Metro.",
        "thumbnailUrl": [
          "https://boldindiagroup.com/images/real-site/video_thumbnail_real.jpg",
          "https://boldindiagroup.com/images/real-site/real_living_area.jpg"
        ],
        "uploadDate": "2026-10-29T12:00:00+05:30",
        "contentUrl": "https://boldindiagroup.com/videos/Mahavir_Enclave_Flat.mp4",
        "embedUrl": "https://boldindiagroup.com/videos/Mahavir_Enclave_Flat.mp4",
        "duration": "PT6M25S"
      },
      {
        "@type": "SingleFamilyResidence",
        "@id": "https://boldindiagroup.com/#flat-mahavir-enclave-100gaj",
        "name": "100 Gaj First Floor Builder Floor Flat in Mahavir Enclave Palam",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gali No. 4, First Floor, Mahavir Enclave",
          "addressLocality": "Palam",
          "addressRegion": "New Delhi",
          "postalCode": "110045",
          "addressCountry": "IN"
        },
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": 100,
          "unitText": "SQYD"
        },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "1 Car & 1 Bike Dedicated Parking" },
          { "@type": "LocationFeatureSpecification", "name": "700m to Palam and Dashrath Puri Metro Stations" },
          { "@type": "LocationFeatureSpecification", "name": "100m to Palam-Dabri Main Road" }
        ]
      }
    ]
  };

  return (
    <section id="featured-video-tour" className="py-24 md:py-32 px-6 bg-[#faf8f5] border-t border-[#141414]/[0.08]">
      {/* Embed Structured Data for Google Search Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header with High-Intent Local Keywords */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#141414] text-white px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9e7a44] animate-pulse" />
              <span>Verified Video Walkthrough</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#141414]">
              100 Gaj Luxury First Floor Flat
            </h2>
            <p className="text-[#6e6b66] text-base font-light leading-relaxed">
              Gali No. 4, First Floor (F/F), Mahavir Enclave, Palam, New Delhi - 110045. Equipped with dedicated 1 Car & 1 Bike Parking, walking distance to Metro & Main Road.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919311696477"
              className="inline-flex items-center gap-2 bg-[#141414] hover:bg-[#2c2c2c] text-white px-6 py-3 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all shadow-xs"
            >
              <Phone size={14} className="text-[#9e7a44]" />
              <span>+91 93116 96477</span>
            </a>
            <a
              href="https://wa.me/919311696477?text=Hi%20Bold%20India%20Group,%20I%20am%20interested%20in%20the%20100%20Gaj%20First%20Floor%20flat%20in%20Mahavir%20Enclave%20Palam."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all shadow-xs"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>

        {/* 2-Column Main Layout: Cinematic Video Player + Location & Landmark Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Cinematic Video Player */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative w-full aspect-[4/5] sm:aspect-[16/11] lg:aspect-[16/12] max-h-[640px] rounded-3xl overflow-hidden shadow-2xl border border-[#141414]/10 bg-[#0d0d0d] group flex items-center justify-center">
              {/* Ambient Blurred Background from the real video frame */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image
                  src="/images/real-site/video_thumbnail_real.jpg"
                  alt="Ambient Glow"
                  fill
                  className="object-cover blur-2xl opacity-35 scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60" />
              </div>

              {/* HTML5 Video Element */}
              <video
                ref={videoRef}
                poster="/images/real-site/video_thumbnail_real.jpg"
                playsInline
                muted={isMuted}
                loop
                preload="metadata"
                onError={() => setHasVideoError(true)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="relative z-10 w-full h-full object-contain mx-auto"
              >
                <source src="/videos/Mahavir_Enclave_Flat.mp4" type="video/mp4" />
                <source src="/videos/mahavir-enclave-100gaj.mp4" type="video/mp4" />
              </video>

              {/* Ambient gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Top Video Status Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs z-20 pointer-events-none">
                <span className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 font-medium tracking-wide">
                  100 Gaj (900 Sq.ft) • 1st Floor
                </span>
                <span className="bg-[#9e7a44] text-[#141414] font-semibold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider">
                  Ready to Move
                </span>
              </div>

              {/* Play / Pause Center Button */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause Video Walkthrough" : "Play Video Walkthrough"}
                className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-white/90 hover:bg-white text-[#141414] flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 z-20 cursor-pointer"
              >
                {isPlaying ? <Pause size={28} /> : <Play size={28} className="translate-x-0.5 text-[#141414]" />}
              </button>

              {/* Bottom Video Controls & Sound Toggle */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs z-20">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span className="text-[11px] font-medium tracking-wider uppercase">On-Site Walkthrough</span>
                </div>

                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  className="bg-black/60 hover:bg-black/90 backdrop-blur-md text-white p-2.5 rounded-full border border-white/10 transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>

              {/* Helpful fallback prompt if video is not yet placed in public/videos */}
              {hasVideoError && (
                <div className="absolute inset-0 bg-black/75 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center text-white z-30 space-y-3">
                  <Play size={36} className="text-[#9e7a44] animate-bounce" />
                  <h4 className="text-lg font-semibold tracking-tight">Video File Ready to Showcase</h4>
                  <p className="text-xs text-white/70 max-w-md leading-relaxed">
                    Place your video file in <code className="bg-white/10 px-2 py-0.5 rounded text-amber-300">public/videos/mahavir-enclave-100gaj.mp4</code>. The player is already pre-configured with SEO video tags, poster fallbacks, and mobile playback.
                  </p>
                  <button
                    onClick={() => setHasVideoError(false)}
                    className="text-xs underline text-[#9e7a44] hover:text-white pt-2"
                  >
                    Dismiss & View Poster
                  </button>
                </div>
              )}
            </div>

            <p className="text-[11px] text-[#6e6b66] mt-3 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#9e7a44]" />
              <span>100% verified site footage • Gali No. 4, Mahavir Enclave, Palam</span>
            </p>
          </div>

          {/* Right Column: Landmarks, Connectivity & Parking Highlights */}
          <div className="lg:col-span-5 bg-white p-8 md:p-10 rounded-3xl border border-[#141414]/[0.08] shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#9e7a44] block mb-1">
                  Property Highlights
                </span>
                <h3 className="text-2xl font-semibold tracking-tight text-[#141414]">
                  Key Specifications & Proximity
                </h3>
              </div>

              {/* Parking Advantage */}
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#141414] text-white flex items-center justify-center shrink-0">
                  <Car size={20} className="text-[#9e7a44]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#141414]">
                    1 Car & 1 Bike Dedicated Parking
                  </h4>
                  <p className="text-xs text-[#6e6b66] mt-0.5">
                    Rare designated secure parking space included with this first floor flat.
                  </p>
                </div>
              </div>

              {/* Transit Distances */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#141414] uppercase tracking-wider block">
                  Transit & Road Proximity
                </span>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-[#faf8f5] rounded-xl border border-[#141414]/[0.06]">
                    <span className="text-lg font-bold text-[#141414] block">100m</span>
                    <span className="text-[10px] text-[#6e6b66] uppercase tracking-wider">Main Road</span>
                  </div>
                  <div className="p-3 bg-[#faf8f5] rounded-xl border border-[#141414]/[0.06]">
                    <span className="text-lg font-bold text-[#141414] block">200m</span>
                    <span className="text-[10px] text-[#6e6b66] uppercase tracking-wider">Bus Stop</span>
                  </div>
                  <div className="p-3 bg-[#faf8f5] rounded-xl border border-[#141414]/[0.06]">
                    <span className="text-lg font-bold text-[#9e7a44] block">700m</span>
                    <span className="text-[10px] text-[#6e6b66] uppercase tracking-wider">Metro</span>
                  </div>
                </div>
                <p className="text-[11px] text-[#6e6b66] text-center">
                  Direct connectivity to Palam & Dashrath Puri Metro Stations (Magenta Line).
                </p>
              </div>

              {/* Landmark Navigation Guide */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-semibold text-[#141414] uppercase tracking-wider block">
                  Navigation Landmarks
                </span>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#faf8f5] border border-[#141414]/[0.06]">
                    <Navigation size={15} className="text-[#9e7a44] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#141414]">From Gali No. 4:</span>
                      <p className="text-[#524f4b] mt-0.5">Sulabh International School / Aman Bakery</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#faf8f5] border border-[#141414]/[0.06]">
                    <Navigation size={15} className="text-[#9e7a44] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#141414]">From Gali No. 3:</span>
                      <p className="text-[#524f4b] mt-0.5">Shiv Vani Public School / Bajaj Showroom Wali Gali</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action */}
            <div className="pt-4 border-t border-[#141414]/[0.08] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#9c978f] block">Address</span>
                <span className="text-xs font-medium text-[#141414]">Gali No. 4, F/F, Mahavir Enclave, Palam</span>
              </div>
              <a
                href="tel:+919311696477"
                className="bg-[#141414] hover:bg-[#2c2c2c] text-white px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-colors"
              >
                Inquire Price
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
