import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-stealth-black/95 backdrop-blur border-b border-stealth-charcoal text-stealth-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-[50px] h-[60px]">
            <Image 
              src="/logo.jpg" 
              alt="Stealth Security Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stealth-muted">
          <Link href="/" className="hover:text-stealth-white transition-colors">Home</Link>
          <Link href="#about" className="hover:text-stealth-white transition-colors">About</Link>
          <Link href="#services" className="hover:text-stealth-white transition-colors">Services</Link>
          <Link href="#why-us" className="hover:text-stealth-white transition-colors">Why Us</Link>
          <Link href="#contact" className="hover:text-stealth-white transition-colors">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center">
          <Link href="#contact" className="bg-stealth-red hover:bg-stealth-bright text-white px-6 py-2.5 rounded font-bold transition-colors flex items-center gap-2">
            Get Protected <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
