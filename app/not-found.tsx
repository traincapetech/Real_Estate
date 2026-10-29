import Link from "next/link";
import { Home, Search, PhoneCall } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6 py-20 bg-[#faf8f5] text-[#141414]">
      <div className="max-w-xl text-center bg-white p-10 md:p-16 border border-[#141414]/[0.08]">
        <span className="font-serif text-6xl md:text-7xl font-normal text-[#9e7a44] tracking-tight block mb-4">
          404
        </span>
        <h1 className="font-serif text-2xl md:text-3xl font-normal text-[#141414] mb-3 tracking-tight">
          Residence or Page Not Found
        </h1>
        <p className="text-[#6e6b66] mb-8 text-sm leading-relaxed">
          The property listing you are seeking may have been acquired, expired, or relocated.
          Explore our active portfolio or connect with our private advisory desk.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/properties"
            className="inline-flex items-center justify-center gap-2 bg-[#141414] text-[#faf8f5] px-6 py-3.5 font-medium uppercase text-xs tracking-[0.18em] hover:bg-[#2c2c2c] transition"
          >
            <Search size={14} /> Browse Portfolio
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-[#141414]/20 bg-white text-[#141414] px-6 py-3.5 font-medium uppercase text-xs tracking-[0.18em] hover:border-[#141414] transition"
          >
            <Home size={14} /> Return Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-[#141414]/20 bg-white text-[#141414] px-6 py-3.5 font-medium uppercase text-xs tracking-[0.18em] hover:text-[#9e7a44] transition"
          >
            <PhoneCall size={14} /> Advisory Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
