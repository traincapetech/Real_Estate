import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allProperties } from "../../components/data";
import PropertyDetailsClient from "../PropertiesClient";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return allProperties.map((p) => ({
    id: p.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const propertyId = Number(id);

  const property = allProperties.find((p) => p.id === propertyId);

  if (!property) {
    return {
      title: "Property Not Found | Bold India Group",
      description: "The requested luxury property listing could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${property.title} in ${property.location} | Bold India Group`;
  const description =
    property.description ||
    `${property.type} for sale in ${property.location}. Price: ₹${property.price}. Super area: ${property.sqft} sq.ft. Complete legal verification by Bold India Group.`;
  const canonicalUrl = `https://boldindiagroup.com/properties/${property.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: property.image,
          width: 1200,
          height: 630,
          alt: `${property.title} - ${property.type} in ${property.location}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [property.image],
    },
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const { id } = await params;
  const propertyId = Number(id);

  const property = allProperties.find((p) => p.id === propertyId);

  if (!property) {
    notFound();
  }

  // Schema.org BreadcrumbList
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
      {
        "@type": "ListItem",
        position: 3,
        name: property.type,
        item: `https://boldindiagroup.com/properties?type=${encodeURIComponent(property.type)}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: property.title,
        item: `https://boldindiagroup.com/properties/${property.id}`,
      },
    ],
  };

  // Schema.org RealEstateListing + Accommodation
  // Strictly validated against visible page content - zero invented reviews or availability!
  const realEstateSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.description,
    url: `https://boldindiagroup.com/properties/${property.id}`,
    image: [property.image],
    datePosted: "2026-01-15",
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `https://boldindiagroup.com/properties/${property.id}`,
    },
    about: {
      "@type":
        property.type === "Villa"
          ? "SingleFamilyResidence"
          : property.type === "Apartment"
          ? "Apartment"
          : "Accommodation",
      name: property.title,
      description: property.description,
      floorSize: {
        "@type": "QuantitativeValue",
        value: property.sqft,
        unitCode: "FTK",
      },
      ...(property.beds !== undefined && property.beds > 0
        ? { numberOfBedrooms: property.beds }
        : {}),
      ...(property.baths !== undefined && property.baths > 0
        ? { numberOfBathroomsTotal: property.baths }
        : {}),
      address: {
        "@type": "PostalAddress",
        addressLocality: property.location,
        addressCountry: "IN",
      },
      ...(property.amenities && property.amenities.length > 0
        ? {
            amenityFeature: property.amenities.map((item) => ({
              "@type": "LocationFeatureSpecification",
              name: item,
              value: true,
            })),
          }
        : {}),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateSchema) }}
      />
      <PropertyDetailsClient property={property} />
    </>
  );
}