"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
        <div className="mx-auto flex items-center justify-between px-5 py-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline">
            <div
              className={cn(
                "flex items-center transition-all duration-300 ease-out",
                scrolled ? "gap-2" : "gap-3"
              )}
            >
              <div
                className={cn(
                  "rounded-full bg-gold flex items-center justify-center transition-all duration-300 shrink-0",
                  scrolled ? "h-8 w-8 text-sm" : "h-14 w-14 text-xl"
                )}
              >
                <span className="text-ink font-display font-bold">HS</span>
              </div>
              <span
                className={cn(
                  "font-display font-semibold transition-all duration-300 whitespace-nowrap",
                  scrolled
                    ? "text-sm text-ink"
                    : "text-2xl md:text-3xl text-cream"
                )}
              >
                Healthy Smiles
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
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

          {/* Right: phone + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+13018384291"
              className={cn(
                "hidden md:flex items-center gap-2 text-sm font-medium no-underline transition-colors",
                scrolled
                  ? "text-ink hover:text-gold"
                  : "text-cream/80 hover:text-cream"
              )}
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">(301) 838-4291</span>
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-md transition-colors",
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
          "fixed inset-0 z-[100] transition-opacity duration-300",
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
              Emergency
            </div>
            <a
              href="tel:+13018384291"
              className="flex items-center gap-3 text-ink text-lg font-body font-medium no-underline hover:text-gold transition-colors"
            >
              <Phone className="h-5 w-5 text-gold" />
              (301) 838-4291
            </a>
          </div>

          <div className="px-8 mt-8">
            <div className="text-step--1 font-body font-medium text-brown uppercase tracking-widest mb-3">
              Language
            </div>
            <div className="flex flex-wrap gap-2">
              {["EN", "ES", "ZH", "KO", "FA", "FR", "HI"].map((lang) => (
                <Link
                  key={lang}
                  href={`/${lang.toLowerCase()}/`}
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
        </div>
      </div>
    </>
  );
}
