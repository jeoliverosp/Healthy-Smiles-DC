"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, Phone, X, MapPin, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageSelect from "@/components/language-select";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

const LOCATIONS = [
  { name: "Silver Spring", phone: "(301) 838-4291" },
  { name: "Rockville", phone: "(301) 838-3180" },
  { name: "College Park", phone: "(240) 696-3668" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (phoneRef.current && !phoneRef.current.contains(e.target as Node)) {
        setPhoneOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          scrolled
            ? "bg-ink/85 backdrop-blur-md border-b border-gold/20 shadow-lg"
            : "bg-gradient-to-b from-ink/60 to-transparent"
        )}
      >
        <div className="mx-auto flex items-center justify-between px-5 py-3 md:px-8">
          {/* Logo — siempre izquierda */}
          <Link href="/" className="flex items-center gap-2 no-underline group">
            <div className="h-9 w-9 rounded-full bg-gold flex items-center justify-center shrink-0 ring-2 ring-gold/40 group-hover:ring-gold transition-all">
              <span className="text-ink font-display font-bold text-sm">HS</span>
            </div>
            <span className="font-display font-semibold text-sm text-cream hidden sm:inline tracking-wide">
              Healthy Smiles
            </span>
          </Link>

          {/* Derecha: idioma + call + hamburger */}
          <div className="flex items-center gap-2.5">
            <div className="hidden sm:block">
              <LanguageSelect dark />
            </div>

            {/* Call us now — dropdown sedes */}
            <div className="relative hidden sm:block" ref={phoneRef}>
              <button
                onClick={() => setPhoneOpen(!phoneOpen)}
                className="flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-body font-semibold text-ink hover:bg-cream transition-colors shadow-md"
                aria-label="Call us now"
                aria-expanded={phoneOpen}
              >
                <Phone className="h-4 w-4" />
                <span className="hidden md:inline">Call us now!</span>
                <span className="md:hidden">Call</span>
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", phoneOpen && "rotate-180")} />
              </button>

              {phoneOpen && (
                <div className="absolute right-0 mt-2 w-60 rounded-xl border border-gold/25 bg-ink shadow-2xl p-2">
                  <p className="px-3 pt-2 pb-1 text-step--1 font-body font-medium text-gold uppercase tracking-widest">
                    Choose location
                  </p>
                  {LOCATIONS.map((loc) => (
                    <a
                      key={loc.name}
                      href={`tel:${loc.phone.replace(/\D/g, "")}`}
                      className="flex items-start gap-2.5 rounded-lg px-3 py-2.5 text-sm no-underline hover:bg-white/5 transition-colors group"
                    >
                      <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                      <span>
                        <span className="block font-body font-semibold text-cream group-hover:text-gold transition-colors">
                          {loc.name}
                        </span>
                        <span className="block text-cream/60 text-xs">{loc.phone}</span>
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Hamburger — siempre visible */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-cream/25 text-cream hover:border-gold hover:text-gold transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ═══ PANEL HAMBURGER (derecha) ═══ */}
      <div
        className={cn(
          "fixed inset-0 z-[100] transition-opacity duration-300",
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        <div
          className={cn(
            "absolute top-0 right-0 h-full w-full max-w-sm bg-deep shadow-2xl transition-transform duration-300 ease-out flex flex-col",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Top bar panel */}
          <div className="flex items-center justify-between p-5 border-b border-gold/15">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center">
                <span className="text-ink font-display font-bold text-xs">HS</span>
              </div>
              <span className="font-display font-semibold text-cream">Menu</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-cream/20 text-cream hover:border-gold hover:text-gold transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Idioma en panel */}
          <div className="px-6 pt-5 sm:hidden">
            <LanguageSelect dark />
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-6 py-4 overflow-y-auto">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between py-4 border-b border-cream/10 no-underline"
              >
                <span className="flex items-baseline gap-3">
                  <span className="text-xs font-body text-gold/50">0{i + 1}</span>
                  <span className="text-2xl font-display font-medium text-cream group-hover:text-gold group-hover:translate-x-1 transition-all">
                    {link.label}
                  </span>
                </span>
                <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>
            ))}
          </nav>

          {/* Teléfonos sedes */}
          <div className="mt-auto px-6 pb-6">
            <p className="text-step--1 font-body font-medium text-gold uppercase tracking-widest mb-3">
              Call us now!
            </p>
            <div className="space-y-1 rounded-xl border border-gold/20 bg-ink/50 p-2">
              {LOCATIONS.map((loc) => (
                <a
                  key={loc.name}
                  href={`tel:${loc.phone.replace(/\D/g, "")}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 no-underline hover:bg-white/5 transition-colors"
                >
                  <Phone className="h-4 w-4 text-gold shrink-0" />
                  <span>
                    <span className="block text-cream text-sm font-body font-semibold">{loc.name}</span>
                    <span className="block text-cream/50 text-xs">{loc.phone}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
