"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { Filter, Search, RotateCcw } from "lucide-react";

const PROPERTY_TYPES = [
  "All Types",
  "Apartment",
  "Villa",
  "Studio",
  "Penthouse",
  "Plot",
  "Row House",
  "Condo",
  "Farm House",
  "Office Space",
  "Retail Shop",
  "Warehouse",
  "Industrial Plot",
  "Commercial Space",
  "Land Bank",
];

const LOCALITIES = [
  "All Locations",
  "Delhi",
  "Gurugram",
  "Noida",
  "Greater Noida",
  "Vrindavan",
  "Shimla",
];

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "sqft_desc", label: "Area: Largest First" },
];

export default function PropertyFilters({
  activeType,
  activeLocation,
  activeSort,
  searchTerm: initialSearch,
}: {
  activeType?: string;
  activeLocation?: string;
  activeSort?: string;
  searchTerm?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [type, setType] = useState(activeType || "All Types");
  const [location, setLocation] = useState(activeLocation || "All Locations");
  const [sort, setSort] = useState(activeSort || "featured");
  const [search, setSearch] = useState(initialSearch || "");

  const updateFilters = (newParams: Record<string, string | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());

    // Reset pagination on filter change
    params.delete("page");

    Object.entries(newParams).forEach(([key, val]) => {
      if (!val || val === "All Types" || val === "All Locations" || val === "featured") {
        params.delete(key);
      } else {
        params.set(key, val);
      }
    });

    const queryString = params.toString();
    const url = queryString ? `/properties?${queryString}` : "/properties";

    startTransition(() => {
      router.push(url);
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters({ search: search.trim() || undefined });
  };

  const handleReset = () => {
    setType("All Types");
    setLocation("All Locations");
    setSort("featured");
    setSearch("");
    startTransition(() => {
      router.push("/properties");
    });
  };

  const hasActiveFilters = Boolean(
    (type && type !== "All Types") ||
    (location && location !== "All Locations") ||
    (sort && sort !== "featured") ||
    search
  );

  return (
    <div className="bg-white p-6 md:p-8 border border-[#141414]/[0.08] mb-12">
      <form onSubmit={handleSearchSubmit} className="space-y-5">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9c978f]" size={18} />
          <input
            type="text"
            placeholder="Search by property title, area, or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-32 py-3.5 bg-[#faf8f5] border border-[#141414]/15 rounded-sm text-[#141414] placeholder-[#9c978f] focus:outline-none focus:border-[#141414] text-sm font-normal transition"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#141414] text-[#faf8f5] font-medium px-6 py-2 rounded-sm text-[11px] uppercase tracking-[0.2em] hover:bg-[#2c2c2c] transition"
          >
            Search
          </button>
        </div>

        {/* Filter Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-1">
          {/* Property Type */}
          <div>
            <label htmlFor="filter-type" className="block text-[10px] font-medium uppercase tracking-[0.25em] text-[#6e6b66] mb-2">
              Typology
            </label>
            <select
              id="filter-type"
              value={type}
              onChange={(e) => {
                const val = e.target.value;
                setType(val);
                updateFilters({ type: val });
              }}
              className="w-full p-3 bg-[#faf8f5] border border-[#141414]/15 rounded-sm text-[#141414] text-xs uppercase tracking-[0.1em] font-medium focus:outline-none focus:border-[#141414]"
            >
              {PROPERTY_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="filter-location" className="block text-[10px] font-medium uppercase tracking-[0.25em] text-[#6e6b66] mb-2">
              Locality / State
            </label>
            <select
              id="filter-location"
              value={location}
              onChange={(e) => {
                const val = e.target.value;
                setLocation(val);
                updateFilters({ location: val });
              }}
              className="w-full p-3 bg-[#faf8f5] border border-[#141414]/15 rounded-sm text-[#141414] text-xs uppercase tracking-[0.1em] font-medium focus:outline-none focus:border-[#141414]"
            >
              {LOCALITIES.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label htmlFor="filter-sort" className="block text-[10px] font-medium uppercase tracking-[0.25em] text-[#6e6b66] mb-2">
              Arrangement
            </label>
            <select
              id="filter-sort"
              value={sort}
              onChange={(e) => {
                const val = e.target.value;
                setSort(val);
                updateFilters({ sort: val });
              }}
              className="w-full p-3 bg-[#faf8f5] border border-[#141414]/15 rounded-sm text-[#141414] text-xs uppercase tracking-[0.1em] font-medium focus:outline-none focus:border-[#141414]"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Reset Filters & Status */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between pt-4 border-t border-[#141414]/[0.06]">
            <span className="text-xs uppercase tracking-[0.15em] text-[#6e6b66] flex items-center gap-1.5 font-medium">
              <Filter size={13} className="text-[#9e7a44]" /> Active criteria applied
            </span>
            <button
              type="button"
              onClick={handleReset}
              className="text-xs uppercase tracking-[0.18em] text-[#141414] hover:text-[#9e7a44] font-medium flex items-center gap-1.5 transition"
            >
              <RotateCcw size={12} /> Clear Criteria
            </button>
          </div>
        )}
      </form>
      {isPending && (
        <div className="mt-3 text-center text-xs uppercase tracking-[0.2em] text-[#9e7a44] font-medium animate-pulse">
          Refreshing portfolio...
        </div>
      )}
    </div>
  );
}
