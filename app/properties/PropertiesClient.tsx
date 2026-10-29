"use client";

import Image from "next/image";
import Link from "next/link";
import { Property } from "../components/data";
import { Bed, Bath, Maximize2, MapPin, CheckCircle2, Shield, PhoneCall } from "lucide-react";

type Props = {
  property: Property;
};

export default function PropertyDetailsClient({ property }: Props) {
  return (
    <div className="bg-[#faf8f5] min-h-screen py-10 md:py-16 px-4 md:px-6 text-[#141414]">
      <div className="max-w-6xl mx-auto">
        {/* Visible Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-[#6e6b66] font-medium">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-[#141414] transition">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/properties" className="hover:text-[#141414] transition">
                Properties
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href={`/properties?type=${encodeURIComponent(property.type)}`}
                className="hover:text-[#141414] transition"
              >
                {property.type}
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#141414] font-medium truncate max-w-xs md:max-w-md">
              {property.title}
            </li>
          </ol>
        </nav>

        {/* Hero Image - Cinematic Architectural Framing */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-[#141414] border border-[#141414]/[0.08] shadow-lg">
          <Image
            src={property.image}
            alt={`${property.title} - ${property.type} in ${property.location}`}
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-[#faf8f5]/90 backdrop-blur-md text-[#141414] text-xs font-medium uppercase tracking-[0.2em] px-3.5 py-1.5 border border-[#141414]/10 shadow-xs">
              {property.type}
            </span>
            {property.status && (
              <span className="bg-[#141414]/90 backdrop-blur-md text-[#faf8f5] text-xs font-medium uppercase tracking-[0.2em] px-3.5 py-1.5 shadow-xs">
                {property.status}
              </span>
            )}
          </div>
        </div>

        {/* Property Header & Pricing */}
        <div className="mt-8 bg-white p-8 md:p-12 border border-[#141414]/[0.08]">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-8 border-b border-[#141414]/[0.06]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#6e6b66] font-medium flex items-center gap-1.5 mb-2">
                <MapPin size={14} className="text-[#9e7a44] shrink-0" />
                {property.location}
              </p>
              <h1 className="font-serif text-3xl md:text-5xl font-normal text-[#141414] tracking-tight">
                {property.title}
              </h1>
            </div>

            <div className="lg:text-right shrink-0">
              <span className="text-[10px] uppercase font-medium text-[#9c978f] tracking-[0.2em] block">
                Guide Price
              </span>
              <p className="font-serif text-3xl md:text-4xl font-normal text-[#141414] mt-1">
                ₹{property.price}
              </p>
              <div className="mt-4 flex gap-3">
                <Link
                  href="/contact"
                  className="bg-[#141414] text-[#faf8f5] font-medium px-7 py-3.5 hover:bg-[#2c2c2c] transition text-xs uppercase tracking-[0.2em] flex items-center gap-2"
                >
                  <PhoneCall size={14} /> Schedule Private Tour
                </Link>
              </div>
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-b border-[#141414]/[0.06]">
            <div className="bg-[#faf8f5] p-5 border border-[#141414]/[0.06]">
              <span className="text-[10px] text-[#9c978f] font-medium uppercase tracking-[0.2em] block mb-1">
                Carpet Area
              </span>
              <p className="text-base font-medium text-[#141414] flex items-center gap-2">
                <Maximize2 size={15} className="text-[#9e7a44]" />
                {property.sqft} sq.ft.
              </p>
            </div>

            {property.beds !== undefined && property.beds > 0 && (
              <div className="bg-[#faf8f5] p-5 border border-[#141414]/[0.06]">
                <span className="text-[10px] text-[#9c978f] font-medium uppercase tracking-[0.2em] block mb-1">
                  Bedrooms
                </span>
                <p className="text-base font-medium text-[#141414] flex items-center gap-2">
                  <Bed size={15} className="text-[#9e7a44]" />
                  {property.beds} BHK
                </p>
              </div>
            )}

            {property.baths !== undefined && property.baths > 0 && (
              <div className="bg-[#faf8f5] p-5 border border-[#141414]/[0.06]">
                <span className="text-[10px] text-[#9c978f] font-medium uppercase tracking-[0.2em] block mb-1">
                  Bathrooms
                </span>
                <p className="text-base font-medium text-[#141414] flex items-center gap-2">
                  <Bath size={15} className="text-[#9e7a44]" />
                  {property.baths} Baths
                </p>
              </div>
            )}

            {property.furnishing && (
              <div className="bg-[#faf8f5] p-5 border border-[#141414]/[0.06]">
                <span className="text-[10px] text-[#9c978f] font-medium uppercase tracking-[0.2em] block mb-1">
                  Furnishing
                </span>
                <p className="text-base font-medium text-[#141414] flex items-center gap-2">
                  <Shield size={15} className="text-[#9e7a44]" />
                  {property.furnishing}
                </p>
              </div>
            )}
          </div>

          {/* Description Section */}
          <div className="py-8 border-b border-[#141414]/[0.06]">
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#9e7a44] block mb-2">
              Architectural Overview
            </span>
            <h2 className="font-serif text-2xl font-normal text-[#141414] mb-4 tracking-tight">
              Design & Living Experience
            </h2>
            <p className="text-[#6e6b66] leading-8 text-base">
              {property.description}
            </p>
          </div>

          {/* Property Specifications Details */}
          <div className="py-8 border-b border-[#141414]/[0.06]">
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#9e7a44] block mb-2">
              Specifications
            </span>
            <h2 className="font-serif text-2xl font-normal text-[#141414] mb-6 tracking-tight">
              Technical Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#9c978f]">
                  Typology
                </h3>
                <p className="text-base font-serif text-[#141414] mt-1">
                  {property.type}
                </p>
              </div>
              <div>
                <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#9c978f]">
                  Location
                </h3>
                <p className="text-base font-serif text-[#141414] mt-1">
                  {property.location}
                </p>
              </div>
              {property.parking && (
                <div>
                  <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#9c978f]">
                    Parking Allocation
                  </h3>
                  <p className="text-base font-serif text-[#141414] mt-1">
                    {property.parking}
                  </p>
                </div>
              )}
              {property.status && (
                <div>
                  <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#9c978f]">
                    Possession Status
                  </h3>
                  <p className="text-base font-serif text-[#141414] mt-1">
                    {property.status}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Amenities */}
          {property.amenities && property.amenities.length > 0 && (
            <div className="pt-8">
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#9e7a44] block mb-2">
                Features
              </span>
              <h2 className="font-serif text-2xl font-normal text-[#141414] mb-6 tracking-tight">
                Curated Amenities
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {property.amenities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 p-4 bg-[#faf8f5] border border-[#141414]/[0.06] text-[#141414] text-xs uppercase tracking-[0.1em] font-medium"
                  >
                    <CheckCircle2 size={14} className="text-[#9e7a44] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}