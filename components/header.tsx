"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, Phone, X, Globe, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

const LANGUAGES = ["EN", "ES", "ZH", "KO", "FA", "FR", "HI"];

const LOCATIONS = [
  { name: "Silver Spring", phone: "(301) 838-4291", full: "(301) 838-4291" },
  { name: "Rockville", phone: "(301) 838-3180", full: "(301) 838-3180" },
  { name: "College Park", phone: "(240) 696-3668", full: "(240) 696-3668" },
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

  // Close phone dropdown on outside click
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
      {/* ═══ HEADER ═══ */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          scrolled
            ? "bg-cream/90 backdrop-blur-md border-b border-cream-hover"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex items-center justify-between px-5 py-3 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center shrink-0">
              <span className="text-ink font-display font-bold text-sm">HS</span>
            </div>
            <span className="font-display font-semibold text-sm text-ink hidden sm:inline">
              Healthy Smiles
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-body font-medium tracking-wide uppercase no-underline transition-colors duration-fast",
                  scrolled
                    ? "text-ink hover:text-gold"
                    : "text-cream/80 hover:text-cream"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language selector — prominent */}
            <div className="hidden md:flex items-center gap-1">
              <Globe className="h-4 w-4 text-gold" />
              {LANGUAGES.map((lang) => (
                <Link
                  key={lang}
                  href={`/${lang.toLowerCase()}/`}
                  className={cn(
                    "px-2 py-1 text-xs font-body font-medium rounded border transition-colors no-underline",
                    lang === "EN"
                      ? "bg-ink text-cream border-ink"
                      : "bg-transparent text-cream/60 border-cream/20 hover:border-gold hover:text-gold"
                  )}
                >
                  {lang}
                </Link>
              ))}
            </div>

            {/* Call us now — dropdown with all locations */}
            <div className="hidden sm:flex" ref={phoneRef}>
              <button
                onClick={() => setPhoneOpen(!phoneOpen)}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-body font-medium transition-colors",
                  scrolled
                    ? "bg-gold text-ink hover:bg-brown"
                    : "bg-gold text-ink hover:bg-brown"
                )}
                aria-label="Call us"
                aria-expanded={phoneOpen}
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </button>

              {phoneOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-lg border border-cream-hover bg-cream shadow-xl p-4 space-y-3">
                  {LOCATIONS.map((loc) => (
                    <a
                      key={loc.name}
                      href={`tel:${loc.phone.replace(/\D/g, "")}`}
                      className="flex items-start gap-2 text-sm text-ink hover:text-gold transition-colors no-underline group"
                    >
                      <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                      <div>
                        <p className="font-body font-medium">{loc.name}</p>
                        <p className="text-brown text-xs">{loc.phone}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Hamburger — solo mobile */}
            <button
              onClick={() => setMenuOpen(true)}
              className={cn(
                "lg:hidden flex items-center justify-center w-10 h-10 rounded-md transition-colors",
                scrolled
                  ? "text-ink hover:bg-cream-hover/50"
                  : "text-cream hover:bg-white/10"
              )}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ═══ MOBILE MENU ═══ */}
      <div
        className={cn(
          "fixed inset-0 z-[100] transition-opacity duration-300 lg:hidden",
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-ink/50"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        <div
          className={cn(
            "absolute top-0 right-0 h-full w-full max-w-sm bg-cream shadow-2xl transition-transform duration-300 ease-out",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex justify-end p-5">
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-md text-ink hover:bg-cream-hover/50 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Language in mobile menu */}
          <div className="px-8 mb-4">
            <div className="text-step--1 font-body font-medium text-brown uppercase tracking-widest mb-3">
              Language
            </div>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((lang) => (
                <Link
                  key={lang}
                  href={`/${lang.toLowerCase()}/`}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "px-3 py-1.5 text-sm font-body font-medium rounded border transition-colors no-underline",
                    lang === "EN"
                      ? "bg-ink text-cream border-ink"
                      : "bg-transparent text-ink border-brown/30 hover:border-gold hover:text-gold"
                  )}
                >
                  {lang}
                </Link>
              ))}
            </div>
          </div>

          <nav className="flex flex-col px-8 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-xl font-display font-medium text-ink py-3 border-b border-cream-hover/60 no-underline hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="px-8 mt-8">
            <div className="text-step--1 font-body font-medium text-brown uppercase tracking-widest mb-3">
              Call Us — All Locations
            </div>
            {LOCATIONS.map((loc) => (
              <a
                key={loc.name}
                href={`tel:${loc.phone.replace(/\D/g, "")}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 text-ink text-base font-body font-medium no-underline hover:text-gold transition-colors py-2"
              >
                <Phone className="h-5 w-5 text-gold" />
                <span>
                  <p>{loc.name}</p>
                  <p className="text-brown text-sm">{loc.phone}</p>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
