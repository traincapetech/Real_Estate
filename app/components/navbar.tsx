import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Properties" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-1 py-4">
        
        {/* Logo */}
       <Link
  href="/"
  className="flex items-center gap-3"
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

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm text-slate-300">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative group hover:text-amber-400 transition"
            >
              {l.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all"></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-amber-400 text-slate-900 px-4 py-2 rounded-md font-medium hover:bg-amber-300 transition"
        >
          Get in Touch
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;