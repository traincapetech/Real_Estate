import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Luxury Real Estate Firm India",
  description:
    "Learn about Bold India Group — India's trusted luxury real estate firm with 15+ years of expertise across Delhi NCR, Gurugram, Noida, and Mumbai.",
  alternates: {
    canonical: "https://boldindiagroup.com/about",
  },
  openGraph: {
    title: "About Bold India Group | Luxury Real Estate Experts",
    description:
      "15+ years of trust. 1,800+ happy families. Discover the legacy and leadership behind Bold India Group.",
    url: "https://boldindiagroup.com/about",
    type: "website",
  },
};

export default function About() {
  return <AboutClient />;
}