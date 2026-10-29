import Link from "next/link";
import Image from "next/image";
import { Property } from "./data";
import { Bed, Bath, Maximize2, MapPin, ArrowUpRight } from "lucide-react";

export const PropertyCard = ({
  property,
  priority = false,
}: {
  property: Property;
  priority?: boolean;
}) => (
  <article className="h-full">
    <Link
      href={`/properties/${property.id}`}
      aria-label={`View details for ${property.title} in ${property.location}`}
      className="flex flex-col h-full bg-white border border-[#141414]/[0.08] hover:border-[#141414]/30 hover:shadow-xl hover:shadow-black/[0.03] transition-all duration-500 group overflow-hidden"
    >
      {/* Cinematic Architectural Framing */}
      <div className="relative w-full aspect-[16/11] overflow-hidden bg-[#faf8f5]">
        <Image
          src={property.image}
          alt={`${property.title} - ${property.type} for sale in ${property.location}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
        />
        {/* Restrained Architectural Badges */}
        <div className="absolute top-3.5 left-3.5 flex gap-2">
          <span className="bg-[#faf8f5]/90 backdrop-blur-md text-[#141414] text-[10px] font-medium uppercase tracking-[0.2em] px-3 py-1 border border-[#141414]/10">
            {property.type}
          </span>
          {property.status && (
            <span className="bg-[#141414]/90 backdrop-blur-md text-[#faf8f5] text-[10px] font-medium uppercase tracking-[0.2em] px-2.5 py-1">
              {property.status}
            </span>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between bg-white">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#6e6b66] font-medium flex items-center gap-1.5 mb-2">
            <MapPin size={12} className="text-[#9e7a44]" />
            {property.location}
          </p>
          <h3 className="font-serif text-xl font-normal text-[#141414] group-hover:text-[#9e7a44] transition-colors line-clamp-1 leading-snug">
            {property.title}
          </h3>
        </div>

        <div className="mt-5 pt-4 border-t border-[#141414]/[0.06]">
          {/* Subtle architectural metrics */}
          <div className="flex items-center gap-4 text-xs text-[#6e6b66] mb-4">
            {property.beds !== undefined && property.beds > 0 && (
              <span className="flex items-center gap-1.5">
                <Bed size={13} className="text-[#9e7a44]" />
                <span className="text-[#141414] font-medium">{property.beds}</span> Beds
              </span>
            )}
            {property.baths !== undefined && property.baths > 0 && (
              <span className="flex items-center gap-1.5">
                <Bath size={13} className="text-[#9e7a44]" />
                <span className="text-[#141414] font-medium">{property.baths}</span> Baths
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Maximize2 size={13} className="text-[#9e7a44]" />
              <span className="text-[#141414] font-medium">{property.sqft}</span> Sq.Ft
            </span>
          </div>

          <div className="flex justify-between items-baseline pt-1">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9c978f] block mb-0.5">
                Guide Price
              </span>
              <span className="text-xl md:text-2xl font-serif font-normal text-[#141414] tracking-tight">
                ₹{property.price}
              </span>
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#141414] group-hover:text-[#9e7a44] transition-colors inline-flex items-center gap-1">
              Explore <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  </article>
);