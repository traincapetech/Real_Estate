import Navbar from './components/navbar';
import Footer from './components/footer';
import EnquiryPopup from "./components/EnquiryPopup";
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const dm = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = { title: "Bold Group India", description: "Luxury Real Estate" };



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dm.variable}`}>
      <body className="font-body bg-stone-50 text-stone-900">
          <EnquiryPopup />

        <Navbar/>

        <main>{children}</main>

    
<Footer/>
      </body>
    </html>
  );
}