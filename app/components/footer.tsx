import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#141414] border-t border-white/10 text-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-12">
        {/* Brand */}
        <div>
          <Link
            href="/"
            className="flex items-center gap-3 mb-4 group"
          >
            <div className="w-9 h-7 rounded-sm bg-white/10 overflow-hidden flex items-center justify-center p-0.5 border border-white/15 shrink-0">
              <Image
                src="/logo.png"
                alt="Bold India Group"
                width={36}
                height={28}
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.16em] uppercase text-[#faf8f5] group-hover:text-[#9e7a44] transition-colors">
                Bold India Group
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#9c978f]">
                Private Residences & Advisory
              </span>
            </div>
          </Link>

          <p className="text-xs text-[#9c978f] max-w-sm leading-relaxed">
            Curating India&apos;s most architecturally significant residences with complete legal due diligence and absolute discretion.
          </p>
        </div>

        {/* Navigation & Contact */}
        <div className="flex flex-col sm:flex-row gap-12 text-xs uppercase tracking-[0.18em]">
          <div>
            <span className="text-[#9e7a44] font-medium block mb-3 text-[10px] tracking-[0.25em]">
              Directory
            </span>
            <ul className="space-y-2 text-[#9c978f]">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/properties" className="hover:text-white transition">Properties</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-[#9e7a44] font-medium block mb-3 text-[10px] tracking-[0.25em]">
              Private Office
            </span>
            <div className="space-y-2 text-[#9c978f]">
              <p>Delhi NCR, India</p>
              <a href="mailto:sales@boldindiagroup.com" className="block hover:text-white transition lowercase">
                sales@boldindiagroup.com
              </a>
              <a href="tel:+919311696477" className="block hover:text-white transition">
                +91 93116 96477
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.08] text-center py-6 text-[10px] uppercase tracking-[0.2em] text-[#9c978f]">
        © 2026 Bold India Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;