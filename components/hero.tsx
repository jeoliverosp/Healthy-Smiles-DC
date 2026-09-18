"use client";

import { ChevronDown, Star, MapPin, ShieldCheck } from "lucide-react";

const STATS = [
  { icon: ShieldCheck, value: "15+", label: "Years of care" },
  { icon: MapPin, value: "5", label: "MD locations" },
  { icon: Star, value: "4.8★", label: "955+ reviews" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ink flex flex-col">
      {/* Video YouTube fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          title="Healthy Smiles background video"
          src="https://www.youtube.com/embed/X9J2ea8iNnM?autoplay=1&mute=1&loop=1&playlist=X9J2ea8iNnM&controls=0&modestbranding=1&rel=0&playsinline=1"
          allow="autoplay; encrypted-media"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-full min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Capa gradiente 60% para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,9,8,0.4)_100%)]" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pt-28 pb-10 text-center">
        {/* Logo grande centro */}
        <div className="mb-7 flex flex-col items-center gap-4">
          <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-gold flex items-center justify-center ring-4 ring-gold/30 shadow-2xl">
            <span className="text-ink font-display font-bold text-3xl md:text-4xl">HS</span>
          </div>
          <span className="font-display font-semibold text-xl md:text-2xl text-cream tracking-wide">
            Healthy Smiles
          </span>
        </div>

        {/* Badge */}
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ink/50 backdrop-blur px-4 py-1.5 text-step--1 font-body font-medium uppercase tracking-[0.2em] text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          Family &amp; Cosmetic Dentistry
        </p>

        <h1 className="mb-5 max-w-4xl font-display text-step-4 font-bold text-cream md:text-step-6 leading-[1.05]">
          Your Smile,{" "}
          <span className="italic text-gold">Our Passion</span>
        </h1>

        {/* Regla dorada */}
        <div className="mb-5 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <p className="mb-9 max-w-xl text-step-0 text-cream/75 md:text-step-1 leading-relaxed">
          Trusted by families across Maryland — gentle care, modern technology,
          honest pricing.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a href="#chatbox" className="btn btn-gold text-step-0 shadow-xl">
            Find a Location Near You
          </a>
          <a href="tel:+13018384291" className="btn btn-outline text-step-0">
            Call us now!
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 flex items-center gap-6 md:gap-10 rounded-2xl border border-cream/15 bg-ink/45 backdrop-blur px-6 py-4 md:px-10">
          {STATS.map((s, i) => (
            <div key={s.label} className="flex items-center gap-6 md:gap-10">
              <div className="flex flex-col items-center gap-1">
                <span className="font-display text-xl md:text-2xl font-bold text-cream">{s.value}</span>
                <span className="text-[0.65rem] font-body uppercase tracking-widest text-cream/55">{s.label}</span>
              </div>
              {i < STATS.length - 1 && <span className="h-8 w-px bg-cream/15" />}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 pb-7 flex justify-center text-cream/50 animate-bounce">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}
