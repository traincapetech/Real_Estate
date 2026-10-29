import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { allProperties } from "./components/data";
import { PropertyCard } from "./components/PropertyCard";
import FindHero from "./components/FindHero";
import RealSiteGallery from "./components/RealSiteGallery";
import VideoPropertyShowcase from "./components/VideoPropertyShowcase";
import FindServicesSection from "./components/FindServicesSection";
import FindTestimonial from "./components/FindTestimonial";
import MarketReportsSection from "./components/MarketReportsSection";

export const metadata: Metadata = {
  title: "Bold India Group | Theme-Based Residential Villas & Plots Near Noida International Airport",
  description:
    "Discover theme-based luxury residential villas & plots starting from ₹52,500/sq.yd near Noida International Airport (Jewar). 10,000 sq.yd clubhouse, private pools, and 30-50ft wide roads.",
  alternates: {
    canonical: "https://boldindiagroup.com",
  },
  openGraph: {
    title: "Bold India Group | Theme-Based Residential Living Near Jewar Airport",
    description:
      "Villas & Plots starting from ₹52,500/sq.yd. 10,000 sq.yd Clubhouse, Swimming Pool, Temple, and 30-50ft Wide Roads.",
    url: "https://boldindiagroup.com",
    type: "website",
    images: [
      {
        url: "/images/real-site/real_pool_villa.jpg",
        width: 1200,
        height: 630,
        alt: "Bold India Group — Theme-Based Pool Villa Real Site Photo",
      },
    ],
  },
};

const featuredProperties = allProperties.slice(0, 3);

export default function Home() {
  return (
    <div className="bg-[#faf8f5] min-h-screen text-[#141414]">
      {/* ============================================================== */}
      {/* 1. HERO SECTION: "Find What Moves You" & Real Pool Villa (Video Frames 04-05) */}
      {/* ============================================================== */}
      <FindHero />

      {/* ============================================================== */}
      {/* 2. REAL SITE ENTRANCE & BOULEVARD TRANSITION (Video Frame 06) */}
      {/* ============================================================== */}
      <section className="py-20 md:py-28 px-6 bg-[#faf8f5] border-t border-[#141414]/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Transition Headline */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9e7a44]" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#9e7a44] font-medium">
                Prime Gateway
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#141414] leading-tight">
              A place — find what&apos;s next.{" "}
              <span className="text-[#6e6b66] font-light">
                Grand illuminated boulevards, 30 to 50 ft wide avenues, and a secure gated sanctuary near Noida International Airport.
              </span>
            </h2>
          </div>

          {/* Full-width Real Grand Entrance Gate Visual */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-[#141414]/10 group bg-stone-900">
            <Image
              src="/images/real-site/real_grand_entrance_gate.jpg"
              alt="Bold India Group - Grand Illuminated Entrance Gate & 30-50ft Wide Boulevard"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Bottom info pills */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between text-white text-xs font-light gap-3">
              <span className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
                Real Site Photography • Grand Manned Entrance Gate
              </span>
              <span className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 text-[#f4efe8]">
                30-50 ft Wide Tree-Lined Boulevards
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. PROCESS: "Real Estate, Rewired." 01/02/03 Steps (Video Frame 07) */}
      {/* ============================================================== */}
      <section className="py-24 md:py-32 px-6 bg-white border-t border-[#141414]/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            {/* Left Column: Headline, Pill Button, Real Plot Sizes */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-[0.28em] text-[#9e7a44] font-medium block">
                  The Bold Methodology
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141414] leading-[1.05]">
                  Real Estate, <br />
                  <span className="italic font-normal text-[#6e6b66]">Rewired.</span>
                </h2>
                <p className="text-[#6e6b66] text-base leading-relaxed font-light max-w-md">
                  We eliminated opaque broker markups and unverified land titles. Direct developer acquisitions with complete freehold ownership and theme-based architectural delivery.
                </p>
              </div>

              <div>
                <Link
                  href="/properties"
                  className="inline-flex items-center gap-3 bg-[#141414] hover:bg-[#262626] text-white px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md group"
                >
                  <span>Explore Available Plots & Villas</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="pt-6 border-t border-[#141414]/[0.08] flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#9c978f] font-medium">
                <span>100 Sq.yd</span>
                <span>•</span>
                <span>150 Sq.yd</span>
                <span>•</span>
                <span>200 Sq.yd</span>
                <span>•</span>
                <span>250 Sq.yd</span>
              </div>
            </div>

            {/* Right Column: Numbered Steps 01, 02, 03 */}
            <div className="lg:col-span-7 space-y-12">
              <span className="text-xs uppercase tracking-[0.26em] text-[#9c978f] font-medium block">
                Steps:
              </span>

              <div className="space-y-10 divide-y divide-[#141414]/[0.08]">
                {/* Step 01 */}
                <div className="pt-8 first:pt-0 flex gap-6 sm:gap-8 items-start group">
                  <span className="font-mono text-xl sm:text-2xl text-[#9e7a44] font-medium shrink-0 mt-1">
                    01
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-[#141414] tracking-tight group-hover:text-[#9e7a44] transition-colors">
                      Talk to a Real Advisor.
                    </h3>
                    <p className="text-[#524f4b] text-base sm:text-lg leading-relaxed font-light">
                      Connect with our dedicated in-house property advisors who walk you through exact plot coordinates, layout plans, and infrastructure timelines.
                    </p>
                  </div>
                </div>

                {/* Step 02 */}
                <div className="pt-10 flex gap-6 sm:gap-8 items-start group">
                  <span className="font-mono text-xl sm:text-2xl text-[#9e7a44] font-medium shrink-0 mt-1">
                    02
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-[#141414] tracking-tight group-hover:text-[#9e7a44] transition-colors">
                      Get Legal Clarity & Fixed Pricing.
                    </h3>
                    <p className="text-[#524f4b] text-base sm:text-lg leading-relaxed font-light">
                      Transparent pricing starting at ₹52,000 – ₹52,500/sq.yd. Guaranteed freehold title verification, prompt registry, and zero hidden escalation costs.
                    </p>
                  </div>
                </div>

                {/* Step 03 */}
                <div className="pt-10 flex gap-6 sm:gap-8 items-start group">
                  <span className="font-mono text-xl sm:text-2xl text-[#9e7a44] font-medium shrink-0 mt-1">
                    03
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-[#141414] tracking-tight group-hover:text-[#9e7a44] transition-colors">
                      Move Forward & Build.
                    </h3>
                    <p className="text-[#524f4b] text-base sm:text-lg leading-relaxed font-light">
                      Choose between taking immediate plot possession to build your custom residence or having our architectural team deliver a turnkey pool villa.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Agent / Channel Partner Callout (Frame 07) */}
              <div className="pt-10 border-t border-[#141414]/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#141414]">
                    Don&apos;t Rent Your Career. Own It.
                  </h4>
                  <p className="text-xs text-[#6e6b66] mt-1">
                    Join Bold India Group as a verified channel partner or sales associate.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#141414] hover:text-[#9e7a44] transition-colors"
                >
                  <span>Channel Partner Portal</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. REAL SITE GALLERY & AMENITIES (Brochure Photography) */}
      {/* ============================================================== */}
      <RealSiteGallery />

      {/* ============================================================== */}
      {/* 4B. 100 GAJ FLAT ON-SITE VIDEO WALKTHROUGH & TRANSIT DASHBOARD */}
      {/* ============================================================== */}
      <VideoPropertyShowcase />

      {/* ============================================================== */}
      {/* 5. EDITORIAL TESTIMONIAL: Candid Client & Quote (Video Frame 08) */}
      {/* ============================================================== */}
      <FindTestimonial />

      {/* ============================================================== */}
      {/* 6. INTERACTIVE DARK SERVICES: Plots / Villas / Invest (Video Frame 09) */}
      {/* ============================================================== */}
      <div id="services">
        <FindServicesSection />
      </div>

      {/* ============================================================== */}
      {/* 7. FEATURED ARCHITECTURAL COLLECTION */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto py-24 md:py-32 px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#9e7a44] block mb-2">
              Signature Releases
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#141414]">
              Theme-Based Residences
            </h2>
          </div>
          <Link
            href="/properties"
            className="text-xs uppercase tracking-[0.2em] font-medium text-[#141414] hover:text-[#9e7a44] transition-colors pb-1 border-b border-[#141414]/20 hover:border-[#9e7a44]"
          >
            Explore Complete Portfolio ({allProperties.length} Properties) →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProperties.map((prop, idx) => (
            <PropertyCard key={prop.id} property={prop} priority={idx < 3} />
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. MARKET INTELLIGENCE & RESEARCH: Jewar Airport Corridor (Video Frame 10) */}
      {/* ============================================================== */}
      <div id="intelligence">
        <MarketReportsSection />
      </div>

      {/* ============================================================== */}
      {/* 9. CLOSING LIFESTYLE BANNER: "Find You. We'll Help You Get There" (Video Frame 11) */}
      {/* ============================================================== */}
      <section className="relative py-28 md:py-36 px-6 overflow-hidden bg-[#141414] text-white">
        {/* Background real pool villa image with dark atmospheric vignette */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/real-site/real_pool_villa.jpg"
            alt="Bold India Group - Theme-Based Residential Living"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/70 to-[#141414]/90" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            <Sparkles size={14} className="text-[#9e7a44]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#faf8f5] font-medium">
              Site Visits Arranged 7 Days A Week
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Find You. <br />
            <span className="font-light italic text-stone-300">
              We&apos;ll Help You Get There.
            </span>
          </h2>

          <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Step onto the tree-lined boulevards, tour our designer pool villas, and select your freehold plot near Noida International Airport.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-[#141414] hover:bg-stone-100 px-9 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-xl active:scale-95 group"
            >
              <span>Schedule Site Tour</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919311696477"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all"
            >
              <Phone size={14} className="text-[#9e7a44]" />
              <span>Call +91 93116 96477</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}