import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stealth-black border-t-2 border-stealth-red text-stealth-muted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Services */}
          <div>
            <h3 className="text-stealth-white font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="hover:text-stealth-bright transition-colors">Tactical Armed Teams</Link></li>
              <li><Link href="#services" className="hover:text-stealth-bright transition-colors">Security Officers</Link></li>
              <li><Link href="#services" className="hover:text-stealth-bright transition-colors">K‑9 Units & Handlers</Link></li>
              <li><Link href="#services" className="hover:text-stealth-bright transition-colors">CCTV & Alarm</Link></li>
              <li><Link href="#services" className="hover:text-stealth-bright transition-colors">Bodyguards & Escorts</Link></li>
              <li><Link href="#services" className="hover:text-stealth-bright transition-colors">Alarm Monitoring</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-stealth-white font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="hover:text-stealth-bright transition-colors">About Us</Link></li>
              <li><Link href="#why-us" className="hover:text-stealth-bright transition-colors">Why Choose Us</Link></li>
              <li><Link href="#" className="hover:text-stealth-bright transition-colors">Careers</Link></li>
              <li><Link href="#contact" className="hover:text-stealth-bright transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-stealth-white font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://wa.me/76906800" className="hover:text-stealth-bright transition-colors">WhatsApp: 76906800</a></li>
              <li><a href="tel:76906800" className="hover:text-stealth-bright transition-colors">Call: 76906800</a></li>
              <li><a href="mailto:info@stealthsecurity.com" className="hover:text-stealth-bright transition-colors">Email Us</a></li>
              <li><a href="#" className="hover:text-stealth-bright transition-colors">Facebook</a></li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-stealth-white font-bold mb-4">Location</h3>
            <p className="text-sm mb-2">
              Serving the greater region with premier tactical security solutions.
            </p>
            <p className="text-sm">
              123 Security Blvd.<br />
              Suite 400<br />
              City, Region, 00000
            </p>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-stealth-charcoal text-sm text-center">
          &copy; {new Date().getFullYear()} Stealth Security. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
