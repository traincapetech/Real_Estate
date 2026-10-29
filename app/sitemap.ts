import { MetadataRoute } from "next";
import { allProperties } from "./components/data";

const KEY_CATEGORIES = [
  "Villa",
  "Apartment",
  "Penthouse",
  "Plot",
  "Farm House",
  "Commercial Space",
  "Studio",
  "Office Space",
];

const KEY_LOCALITIES = [
  "Delhi",
  "Gurugram",
  "Noida",
  "Greater Noida",
  "Vrindavan",
  "Shimla",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://boldindiagroup.com";
  const now = new Date();

  // Core Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${base}/properties`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Canonical Category Landing URLs
  const categoryRoutes: MetadataRoute.Sitemap = KEY_CATEGORIES.map((cat) => ({
    url: `${base}/properties?type=${encodeURIComponent(cat)}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.85,
  }));

  // Canonical Locality Landing URLs
  const localityRoutes: MetadataRoute.Sitemap = KEY_LOCALITIES.map((loc) => ({
    url: `${base}/properties?location=${encodeURIComponent(loc)}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.85,
  }));

  // Individual Canonical Property Listings (only active, verified items)
  const propertyRoutes: MetadataRoute.Sitemap = allProperties.map((p) => ({
    url: `${base}/properties/${p.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...localityRoutes,
    ...propertyRoutes,
  ];
}
