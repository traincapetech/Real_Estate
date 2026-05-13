import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bold India Group — India's trusted luxury real estate firm with 15+ years of expertise across Mumbai, Delhi NCR, Bangalore and Goa.",
  openGraph: {
    title: "About Bold India Group | Luxury Real Estate Experts",
    description:
      "15+ years. 1,800+ happy clients. 2,400+ properties. Know the team behind India's most trusted luxury real estate brand.",
  },
};

export default function About() {
  return <AboutClient />;
}