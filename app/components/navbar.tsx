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
    <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 group">
          <Image
            src="/logo.png"
            alt="Bold India Group"
            width={60}
            height={45}
            className="object-contain md:w-[75px] md:h-[55px]"
            priority
          />
          <span className="text-xl md:text-2xl font-bold tracking-tight text-amber-400 group-hover:text-amber-300 transition-colors">
            Bold India Group
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative group hover:text-amber-400 transition-colors"
            >
              {l.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all"></span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-amber-400 text-slate-900 px-5 py-2.5 rounded-xl font-bold hover:bg-amber-300 transition-all active:scale-95 shadow-lg shadow-amber-400/20"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-amber-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-lg font-medium text-slate-300 hover:text-amber-400 transition-colors py-2 border-b border-slate-900 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-amber-400 text-slate-900 px-6 py-4 rounded-2xl font-bold text-center mt-4 hover:bg-amber-300 transition-all active:scale-95"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;