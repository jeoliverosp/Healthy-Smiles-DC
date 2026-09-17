"use client";

import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-ink">
      {/* ── Video background ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        {/* Replace with actual video file */}
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* ── Overlay ── */}
      <div className="absolute inset-0 bg-ink/40" />

      {/* ── Content ── */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-gold flex items-center justify-center">
            <span className="text-ink font-display font-bold text-3xl">HS</span>
          </div>
          <span className="font-display font-semibold text-2xl text-cream">
            Healthy Smiles
          </span>
        </div>

        <p className="mb-4 text-step--1 font-body font-medium uppercase tracking-[0.2em] text-cream/70 md:text-step-0">
          Family &amp; Cosmetic Dentistry
        </p>

        <h1 className="mb-6 max-w-4xl font-display text-step-4 font-bold text-cream md:text-step-6">
          Your Smile, Our Passion
        </h1>

        <p className="mb-10 max-w-xl text-step-0 text-cream/70 md:text-step-1">
          Healthy Smiles Dental Care — trusted by families across Maryland
        </p>

        <a href="#chatbox" className="btn btn-gold text-step-0">
          Find a Location Near You
        </a>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-cream/50">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}
