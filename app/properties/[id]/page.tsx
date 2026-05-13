import type { Metadata } from "next";
import { allProperties } from "../../components/data";
import PropertyDetailsClient from "../PropertiesClient";

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const property = allProperties.find(
    (p) => p.id === Number(params.id)
  );

  if (!property) {
    return {
      title: "Property Not Found",
    };
  }

  return {
    title: `${property.title} — ${property.location}`,
    description:
      property.description ??
      `${property.type} for sale in ${property.location}. ₹${property.price}. ${property.sqft} sq.ft.`,
    openGraph: {
      title: `${property.title} | Bold India Group`,
      description: `${property.type} in ${property.location} · ₹${property.price} · ${property.sqft} sq.ft`,
      images: [
        {
          url: property.image,
          width: 1200,
          height: 630,
          alt: property.title,
        },
      ],
    },
  };
}

export default function PropertyPage({ params }: PageProps) {
  return <PropertyDetailsClient id={params.id} />;
}