import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Schedule a Private Property Consultation",
  description:
    "Get in touch with Bold India Group. Call, email, or visit our office in Delhi NCR. Our luxury real estate specialists are ready to assist you.",
  alternates: {
    canonical: "https://boldindiagroup.com/contact",
  },
  openGraph: {
    title: "Contact Bold India Group | Real Estate Specialists",
    description:
      "Reach out to our luxury property specialists. Dedicated consultations across Delhi NCR, Gurugram, and Noida.",
    url: "https://boldindiagroup.com/contact",
    type: "website",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Bold India Group",
  url: "https://boldindiagroup.com/contact",
  description: "Contact information for Bold India Group luxury real estate consultants.",
  mainEntity: {
    "@type": "RealEstateAgent",
    name: "Bold India Group",
    telephone: "+919311696477",
    email: "sales@boldindiagroup.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi NCR",
      addressCountry: "IN",
    },
  },
};

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient />
    </>
  );
}