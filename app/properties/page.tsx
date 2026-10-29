import type { Metadata } from "next";
import Link from "next/link";
import { allProperties, Property } from "../components/data";
import { PropertyCard } from "../components/PropertyCard";
import PropertyFilters from "../components/PropertyFilters";

type PageProps = {
  searchParams: Promise<{
    type?: string;
    location?: string;
    sort?: string;
    search?: string;
    page?: string;
  }>;
};

// Helper function to parse Indian currency strings (e.g., "2.2 Cr", "85 L", "40L - 2.5 Cr") into numeric values (in lakhs)
function parsePriceToLakhs(priceStr: string): number {
  if (!priceStr) return 0;
  // If price has a range like "40L - 2.5 Cr", take the lower bound
  const firstPart = priceStr.split("-")[0].trim();
  const matchCr = firstPart.match(/([\d.]+)\s*Cr/i);
  if (matchCr) return parseFloat(matchCr[1]) * 100;
  const matchL = firstPart.match(/([\d.]+)\s*L/i);
  if (matchL) return parseFloat(matchL[1]);
  const num = parseFloat(firstPart);
  return isNaN(num) ? 0 : num;
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const { type, location, sort, search, page } = await searchParams;

  let title = "Luxury Properties for Sale in India | Bold India Group";
  let description =
    "Explore India's most exclusive luxury properties. Verified villas, apartments, farmhouses, and plots across Delhi NCR, Gurugram, Noida, and Mumbai.";

  if (type && location) {
    title = `Luxury ${type}s in ${location} | Bold India Group`;
    description = `Discover premium verified ${type.toLowerCase()} properties in ${location}. Contact Bold India Group for private viewings and direct owner pricing.`;
  } else if (type) {
    title = `Luxury ${type}s for Sale in India | Bold India Group`;
    description = `Explore curated luxury ${type.toLowerCase()} listings across Delhi NCR and India. Modern amenities, prime locations, and transparent pricing.`;
  } else if (location) {
    title = `Luxury Real Estate in ${location} | Bold India Group`;
    description = `Discover handpicked residential and commercial properties for sale in ${location}. Verified listings with complete legal checks.`;
  }

  // Canonical URL logic:
  // Base canonical URL targets clean category or root properties URL
  const baseUrl = "https://boldindiagroup.com/properties";
  let canonicalUrl = baseUrl;

  if (type && !location && !sort && !search && (!page || page === "1")) {
    canonicalUrl = `${baseUrl}?type=${encodeURIComponent(type)}`;
  } else if (location && !type && !sort && !search && (!page || page === "1")) {
    canonicalUrl = `${baseUrl}?location=${encodeURIComponent(location)}`;
  }

  // Prevent faceted/sort/pagination duplicate URLs from competing in search rankings
  const hasFilterFacets = Boolean(sort || search || (page && Number(page) > 1));

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !hasFilterFacets,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function PropertiesPage({ searchParams }: PageProps) {
  const { type, location, sort, search, page } = await searchParams;

  // 1. Filter
  let filtered: Property[] = [...allProperties];

  if (type && type !== "All Types") {
    filtered = filtered.filter(
      (p) => p.type.toLowerCase() === type.toLowerCase()
    );
  }

  if (location && location !== "All Locations") {
    filtered = filtered.filter((p) =>
      p.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q))
    );
  }

  // 2. Sort
  if (sort === "price_asc") {
    filtered.sort((a, b) => parsePriceToLakhs(a.price) - parsePriceToLakhs(b.price));
  } else if (sort === "price_desc") {
    filtered.sort((a, b) => parsePriceToLakhs(b.price) - parsePriceToLakhs(a.price));
  } else if (sort === "sqft_desc") {
    filtered.sort((a, b) => b.sqft - a.sqft);
  }

  // 3. Pagination
  const ITEMS_PER_PAGE = 9;
  const currentPage = Math.max(1, parseInt(page || "1", 10) || 1);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProperties = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Helper to build pagination links preserving filters
  const buildPageUrl = (pageNum: number) => {
    const params = new URLSearchParams();
    if (type && type !== "All Types") params.set("type", type);
    if (location && location !== "All Locations") params.set("location", location);
    if (sort && sort !== "featured") params.set("sort", sort);
    if (search) params.set("search", search);
    if (pageNum > 1) params.set("page", pageNum.toString());
    const qs = params.toString();
    return qs ? `/properties?${qs}` : "/properties";
  };

  // Structured Data: BreadcrumbList and ItemList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://boldindiagroup.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Properties",
        item: "https://boldindiagroup.com/properties",
      },
      ...(type && type !== "All Types"
        ? [
            {
              "@type": "ListItem",
              position: 3,
              name: type,
              item: `https://boldindiagroup.com/properties?type=${encodeURIComponent(type)}`,
            },
          ]
        : []),
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: filtered.length,
    itemListElement: paginatedProperties.map((p, index) => ({
      "@type": "ListItem",
      position: startIndex + index + 1,
      name: p.title,
      url: `https://boldindiagroup.com/properties/${p.id}`,
    })),
  };

  // Dynamic Page Title
  let displayTitle = "All Properties";
  if (type && location) {
    displayTitle = `Luxury ${type}s in ${location}`;
  } else if (type) {
    displayTitle = `Luxury ${type}s`;
  } else if (location) {
    displayTitle = `Properties in ${location}`;
  }

  return (
    <div className="bg-[#faf8f5] min-h-screen py-10 md:py-16 px-4 md:px-6 text-[#141414]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Nav */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-[#6e6b66] font-medium">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#141414] transition">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/properties"
                className={!type ? "text-[#141414] font-medium" : "hover:text-[#141414] transition"}
              >
                Properties
              </Link>
            </li>
            {type && type !== "All Types" && (
              <>
                <li>/</li>
                <li className="text-[#141414] font-medium">{type}</li>
              </>
            )}
            {location && location !== "All Locations" && (
              <>
                <li>/</li>
                <li className="text-[#141414] font-medium">{location}</li>
              </>
            )}
          </ol>
        </nav>

        {/* Page Heading */}
        <header className="mb-10 md:mb-14">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#9e7a44] block mb-2">
            Curated Listings
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-normal text-[#141414] tracking-tight leading-tight">
            {displayTitle}
          </h1>
          <p className="text-[#6e6b66] mt-3 text-base md:text-lg max-w-2xl font-normal leading-relaxed">
            Discover verified luxury properties across India&apos;s most prestigious locations with full legal verification and direct pricing.
          </p>
        </header>

        {/* Interactive Filters */}
        <PropertyFilters
          activeType={type}
          activeLocation={location}
          activeSort={sort}
          searchTerm={search}
        />

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-8 px-1">
          <p className="text-xs uppercase tracking-[0.18em] font-medium text-[#6e6b66]">
            Showing <span className="text-[#141414]">{filtered.length === 0 ? 0 : startIndex + 1}</span>–
            <span className="text-[#141414]">{Math.min(startIndex + ITEMS_PER_PAGE, filtered.length)}</span> of{" "}
            <span className="text-[#141414]">{filtered.length}</span> residences
          </p>
          {totalPages > 1 && (
            <p className="text-xs uppercase tracking-[0.18em] text-[#9c978f] font-medium">
              Page {currentPage} of {totalPages}
            </p>
          )}
        </div>

        {/* Server-rendered Properties Grid */}
        {paginatedProperties.length > 0 ? (
          <section aria-label="Properties list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedProperties.map((prop, idx) => (
              <PropertyCard
                key={prop.id}
                property={prop}
                priority={idx < 3 && currentPage === 1}
              />
            ))}
          </section>
        ) : (
          <div className="bg-white p-16 text-center border border-[#141414]/[0.08]">
            <h2 className="font-serif text-2xl font-normal text-[#141414] mb-3">No matching residences found</h2>
            <p className="text-[#6e6b66] mb-8 max-w-md mx-auto text-sm leading-relaxed">
              We couldn&apos;t find any properties matching your current filter criteria. Try adjusting your search or filters.
            </p>
            <Link
              href="/properties"
              className="inline-block bg-[#141414] text-[#faf8f5] px-8 py-3.5 font-medium uppercase text-xs tracking-[0.2em] hover:bg-[#2c2c2c] transition"
            >
              Reset All Filters
            </Link>
          </div>
        )}

        {/* Crawlable Pagination Controls */}
        {totalPages > 1 && (
          <nav aria-label="Pagination Navigation" className="mt-16 flex items-center justify-center gap-2">
            {currentPage > 1 ? (
              <Link
                href={buildPageUrl(currentPage - 1)}
                className="px-5 py-2.5 border border-[#141414]/15 bg-white text-[#141414] font-medium text-xs uppercase tracking-[0.15em] hover:border-[#141414] transition"
              >
                ← Previous
              </Link>
            ) : (
              <span className="px-5 py-2.5 border border-[#141414]/10 bg-transparent text-[#9c978f] font-medium text-xs uppercase tracking-[0.15em] cursor-not-allowed">
                ← Previous
              </span>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <Link
                key={pageNum}
                href={buildPageUrl(pageNum)}
                aria-current={pageNum === currentPage ? "page" : undefined}
                className={`w-10 h-10 flex items-center justify-center font-medium text-xs transition ${
                  pageNum === currentPage
                    ? "bg-[#141414] text-[#faf8f5] border border-[#141414]"
                    : "bg-white text-[#141414] border border-[#141414]/15 hover:border-[#141414]"
                }`}
              >
                {pageNum}
              </Link>
            ))}

            {currentPage < totalPages ? (
              <Link
                href={buildPageUrl(currentPage + 1)}
                className="px-5 py-2.5 border border-[#141414]/15 bg-white text-[#141414] font-medium text-xs uppercase tracking-[0.15em] hover:border-[#141414] transition"
              >
                Next →
              </Link>
            ) : (
              <span className="px-5 py-2.5 border border-[#141414]/10 bg-transparent text-[#9c978f] font-medium text-xs uppercase tracking-[0.15em] cursor-not-allowed">
                Next →
              </span>
            )}
          </nav>
        )}
      </div>
    </div>
  );
}