import Navbar from './components/navbar';
import Footer from './components/footer';
import EnquiryPopup from "./components/EnquiryPopup";
import WhatsAppButton from "./components/WhatsAppButton";
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const dm = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://boldindiagroup.com"),
  title: {
    default: "Bold India Group | Luxury Real Estate India",
    template: "%s | Bold India Group",
  },
  description:
    "Discover India's most exclusive luxury properties. Bold India Group offers premium villas, apartments, penthouses, farmhouses, and plots across Delhi NCR, Gurugram, Noida, and Mumbai.",
  keywords: [
    "luxury real estate India",
    "buy property Delhi NCR",
    "luxury villas Gurugram",
    "premium apartments Noida",
    "farmhouse Delhi NCR",
    "Bold India Group",
    "luxury property consultants India",
  ],
  alternates: {
    canonical: "https://boldindiagroup.com",
  },
  verification: {
    google: "googleb9d2a01ffda9325a",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://boldindiagroup.com",
    siteName: "Bold India Group",
    title: "Bold India Group | Luxury Real Estate India",
    description:
      "Discover India's most exclusive luxury properties — villas, apartments, penthouses, farmhouses, and plots across Delhi NCR.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200",
        width: 1200,
        height: 630,
        alt: "Bold India Group — Luxury Real Estate in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bold India Group | Luxury Real Estate India",
    description: "Discover India's most exclusive luxury properties across Delhi NCR and Mumbai.",
    images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Bold India Group",
  url: "https://boldindiagroup.com",
  logo: "https://boldindiagroup.com/logo.png",
  image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200",
  description:
    "India's trusted luxury real estate firm offering exclusive villas, apartments, farmhouses, penthouses, and commercial plots.",
  telephone: "+919311696477",
  email: "sales@boldindiagroup.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi NCR",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  priceRange: "₹₹₹₹",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dm.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-body bg-[#faf8f5] text-[#141414] antialiased selection:bg-[#141414] selection:text-[#faf8f5]">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2QPS4VNW7V" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2QPS4VNW7V');
          `}
        </Script>
        <EnquiryPopup />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}