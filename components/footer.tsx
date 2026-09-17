import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

const LOCATIONS = [
  {
    name: "Silver Spring",
    address: "11016 New Hampshire Ave",
    city: "Silver Spring, MD 20904",
    phone: "(301) 838-4291",
  },
  {
    name: "Rockville",
    address: "1600 Veirs Mill Rd",
    city: "Rockville, MD 20851",
    phone: "(301) 838-3180",
  },
  {
    name: "College Park",
    address: "4809 Greenbelt Rd",
    city: "College Park, MD 20740",
    phone: "(240) 696-3668",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 lg:py-20">
        {/* ── Top row: Logo + tagline ── */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-14">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 no-underline">
              <div className="h-10 w-10 rounded-full bg-gold flex items-center justify-center">
                <span className="text-ink font-display font-bold text-sm">HS</span>
              </div>
              <span className="font-display font-semibold text-xl text-cream">
                Healthy Smiles
              </span>
            </Link>
            <p className="text-cream/60 text-sm max-w-xs leading-relaxed">
              Family and cosmetic dentistry across Maryland. Your smile is our passion.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex gap-16">
            <div>
              <div className="text-step--1 font-body font-medium text-gold uppercase tracking-widest mb-4">
                Navigate
              </div>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Locations", "Contact"].map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase()}`}
                      className="text-sm text-cream/60 hover:text-cream transition-colors no-underline"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-step--1 font-body font-medium text-gold uppercase tracking-widest mb-4">
                Services
              </div>
              <ul className="space-y-2">
                {[
                  "General Dentistry",
                  "Cosmetic",
                  "Implants",
                  "Orthodontics",
                  "Emergency",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-sm text-cream/60 hover:text-cream transition-colors no-underline"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Locations grid ── */}
        <div className="border-t border-cream/10 pt-10 mb-10">
          <div className="text-step--1 font-body font-medium text-gold uppercase tracking-widest mb-6">
            Our Locations
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {LOCATIONS.map((loc) => (
              <div key={loc.name} className="space-y-2">
                <h4 className="font-display text-lg text-cream">{loc.name}</h4>
                <div className="flex items-start gap-2 text-sm text-cream/60">
                  <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                  <span>
                    {loc.address}
                    <br />
                    {loc.city}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-cream/60">
                  <Phone className="h-4 w-4 text-gold" />
                  <a
                    href={`tel:${loc.phone.replace(/\D/g, "").replace(/^(\d{10})$/, "+1$1")}`}
                    className="text-cream/60 hover:text-cream transition-colors no-underline"
                  >
                    {loc.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-cream/60">
                  <Clock className="h-4 w-4 text-gold" />
                  <span>Mon–Fri: 9am–6pm | Sat: 9am–2pm</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom row: Social + legal ── */}
        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            &copy; {year} Healthy Smiles Dental Care. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/HealthySmilesDC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-cream transition-colors text-sm no-underline"
            >
              Facebook
            </a>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-cream transition-colors text-sm no-underline"
            >
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
