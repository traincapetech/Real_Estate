"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Properties" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#141414]/[0.08] transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Architectural Masthead - FIND Real Estate Aesthetic */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-[#141414] overflow-hidden flex items-center justify-center p-1 border border-[#141414]/10 shrink-0 shadow-xs">
            <Image
              src="/logo.png"
              alt="BIG Real Estate"
              width={36}
              height={36}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-[0.12em] text-[#141414] uppercase leading-none group-hover:text-[#9e7a44] transition-colors">
              Bold India group
            </span>
            <span className="text-[9px] uppercase tracking-[0.24em] text-[#6e6b66] font-medium mt-0.5">
              Real Estate
            </span>
          </div>
        </Link>

        {/* Editorial Navigation Links (Matching Video Frame 04) */}
        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#6e6b66]">
          <Link href="/properties" className="hover:text-[#141414] transition-colors">
            Search
          </Link>
          <Link href="/properties" className="hover:text-[#141414] transition-colors">
            Properties
          </Link>
          <Link href="/#services" className="hover:text-[#141414] transition-colors">
            Services
          </Link>
          <Link href="/#intelligence" className="hover:text-[#141414] transition-colors">
            Intelligence
          </Link>
          <Link href="/about" className="hover:text-[#141414] transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#141414] transition-colors">
            Contact
          </Link>
          <Link
            href="/contact"
            className="bg-[#141414] text-[#faf8f5] px-6 py-2.5 rounded-full font-medium hover:bg-[#2c2c2c] transition-all text-xs uppercase tracking-[0.18em] shadow-xs active:scale-[0.98]"
          >
            Inquire
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#141414] hover:text-[#9e7a44] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#faf8f5] border-b border-[#141414]/[0.08] shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm uppercase tracking-[0.2em] font-medium text-[#141414] hover:text-[#9e7a44] transition-colors py-3 border-b border-[#141414]/[0.06] last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#141414] text-[#faf8f5] px-6 py-3.5 rounded-sm font-medium text-center mt-2 hover:bg-[#2c2c2c] transition-all text-xs uppercase tracking-[0.2em]"
              onClick={() => setIsOpen(false)}
            >
              Inquire
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;