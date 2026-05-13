import Navbar from './components/navbar';
import Footer from './components/footer';
import EnquiryPopup from "./components/EnquiryPopup";
import WhatsAppButton from "./components/WhatsAppButton";
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const dm = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: {
    default: "Bold India Group | Luxury Real Estate",
    template: "%s | Bold India Group",
  },
  description:
    "Discover India's most exclusive luxury properties. Bold India Group offers premium villas, apartments, penthouses, and plots across Mumbai, Delhi NCR, Bangalore & Goa.",
  keywords: [
    "luxury real estate India",
    "buy property India",
    "premium apartments Mumbai",
    "villas Goa",
    "plots Bangalore",
    "Bold India Group",
    "real estate agent India",
  ],
  metadataBase: new URL("https://boldindiagroup.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://boldindiagroup.com",
    siteName: "Bold India Group",
    title: "Bold India Group | Luxury Real Estate",
    description:
      "Discover India's most exclusive luxury properties — villas, apartments, plots & penthouses.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200",
        width: 1200,
        height: 630,
        alt: "Bold India Group — Luxury Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bold India Group | Luxury Real Estate",
    description: "Discover India's most exclusive luxury properties.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dm.variable}`}>
      <body className="font-body bg-stone-50 text-stone-900">
        <EnquiryPopup />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}