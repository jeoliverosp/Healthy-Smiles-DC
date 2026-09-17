import Link from "next/link";
import { Phone, MapPin, Clock, Heart } from "lucide-react";

const LOCATIONS = [
  { name: "Silver Spring", address: "11016 New Hampshire Ave", city: "Silver Spring, MD 20904", phone: "(301) 838-4291" },
  { name: "Rockville", address: "1600 Veirs Mill Rd", city: "Rockville, MD 20851", phone: "(301) 838-3180" },
  { name: "College Park", address: "4809 Greenbelt Rd", city: "College Park, MD 20740", phone: "(240) 696-3668" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink">
      {/* ── Main footer: deep (#22333B) ── */}
      <div className="bg-deep">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 lg:py-20">

          {/* Top: Logo + tagline + links */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-14">

            {/* Brand column */}
            <div className="max-w-xs">
              <Link href="/" className="flex items-center gap-3 mb-4 no-underline">
                <div className="h-12 w-12 rounded-full bg-gold flex items-center justify-center ring-2 ring-gold/30">
                  <span className="text-ink font-display font-bold text-lg">HS</span>
                </div>
                <span className="font-display font-semibold text-xl text-cream">
                  Healthy Smiles
                </span>
              </Link>
              <p className="text-brown leading-relaxed text-sm mb-4">
                Family and cosmetic dentistry across Maryland. Your smile is our passion.
              </p>
              {/* Heart + tag */}
              <div className="flex items-center gap-2 text-gold/60">
                <Heart className="h-4 w-4" />
                <span className="text-step--1 font-body uppercase tracking-widest">
                  Trusted by families
                </span>
              </div>
            </div>

            {/* Links columns */}
            <div className="flex gap-12">
              <div>
                <div className="text-step--1 font-body font-medium text-gold uppercase tracking-widest mb-4">
                  Navigate
                </div>
                <ul className="space-y-2.5">
                  {["Home", "About", "Services", "Locations", "Contact"].map((link) => (
                    <li key={link}>
                      <Link
                        href={`/${link.toLowerCase()}`}
                        className="text-brown text-sm hover:text-cream transition-colors no-underline"
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
                <ul className="space-y-2.5">
                  {["General", "Cosmetic", "Implants", "Orthodontics", "Emergency"].map((service) => (
                    <li key={service}>
                      <Link
                        href="/services"
                        className="text-brown text-sm hover:text-cream transition-colors no-underline"
                      >
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Gold divider */}
          <div className="mb-14">
            <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          </div>

          {/* ── Locations grid on deep card ── */}
          <div className="mb-10">
            <div className="text-step--1 font-body font-medium text-gold uppercase tracking-widest mb-6">
              Our Locations
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {LOCATIONS.map((loc) => (
                <div
                  key={loc.name}
                  className="bg-ink/60 border border-cream-hover/10 rounded-lg p-5 space-y-3 hover:border-gold/30 transition-colors"
                >
                  <h3 className="font-display text-lg text-cream">{loc.name}</h3>
                  <div className="flex items-start gap-2 text-brown text-sm">
                    <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                    <span>
                      {loc.address}
                      <br />
                      {loc.city}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-gold" />
                    <a
                      href={`tel:${loc.phone.replace(/\D/g, "")}`}
                      className="text-brown hover:text-cream transition-colors no-underline"
                    >
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-brown">
                    <Clock className="h-4 w-4 text-gold" />
                    <span>Mon–Fri: 9am–6pm</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA strip ── */}
          <div className="bg-ink/40 border border-cream-hover/10 rounded-lg p-6 md:p-8 text-center">
            <h3 className="font-display text-step-2 font-semibold text-cream mb-2">
              Need Immediate Care?
            </h3>
            <p className="text-brown text-sm mb-4">
              We offer emergency dental services across all 3 locations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:+13018384291"
                className="btn btn-gold text-sm"
              >
                Call (301) 838-4291
              </a>
              <a
                href="/contact"
                className="btn btn-outline border-cream/20 text-cream hover:bg-cream/10 text-sm"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar: ink (#0A0908) ── */}
      <div className="bg-ink border-t border-cream-hover/10">
        <div className="mx-auto max-w-[1200px] px-5 py-6 md:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-cream/30 text-xs">
              &copy; {year} Healthy Smiles Dental Care. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.facebook.com/HealthySmilesDC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown hover:text-gold transition-colors text-sm no-underline"
              >
                Facebook
              </a>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown hover:text-gold transition-colors text-sm no-underline"
              >
                Google Maps
              </a>
              <Link
                href="/locations"
                className="text-brown hover:text-gold transition-colors text-sm no-underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
