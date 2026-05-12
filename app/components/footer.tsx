import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-1 py-10 flex flex-col md:flex-row justify-between gap-10">
        
        {/* Brand */}
     <div>
  <Link
    href="/"
    className="flex items-center gap-3 mb-3"
  >
    <Image
      src="/logo.png"
      alt="Bold India Group"
      width={75}
      height={55}
      className="object-contain"
      priority
    />

    <span className="text-2xl font-bold tracking-wide text-amber-400 hover:text-amber-300 transition">
      Bold India Group
    </span>
  </Link>

  <p className="text-sm text-slate-500 max-w-xs">
    Premium real estate solutions for modern living.
  </p>
</div>

        {/* Contact */}
        <div className="text-sm">
          <span className="text-slate-300 font-medium mb-2 block">
            Contact
          </span>
          <p>Delhi, India</p>
          <p>info@boldindiagroup.com</p>
          <p>+91 99999 99999</p>
        </div>

      </div>

      <div className="border-t border-slate-800 text-center py-4 text-xs text-slate-500">
        © 2026 Bold India Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;