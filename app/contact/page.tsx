import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bold India Group. Call, email or visit our office in Gurugram. Our real estate experts are ready to help you find your dream property.",
  openGraph: {
    title: "Contact Bold India Group | Real Estate Experts",
    description:
      "Reach out to our property specialists today. Office in Gurugram, Delhi NCR. Mon–Sat 10AM–7PM.",
  },
};

export default function Contact() {
  return <ContactClient />;
}