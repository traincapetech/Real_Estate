import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/properties",
          "/properties/*",
          "/about",
          "/contact",
          "/robots.txt",
          "/sitemap.xml",
        ],
        disallow: [
          "/api/",
          "/_next/",
          "/*?*sort=*",
          "/*?*search=*",
          "/*?*page=*",
        ],
      },
    ],
    sitemap: "https://boldindiagroup.com/sitemap.xml",
    host: "https://boldindiagroup.com",
  };
}
