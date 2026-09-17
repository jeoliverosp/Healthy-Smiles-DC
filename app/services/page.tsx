import Link from "next/link";
import {
  Heart, Sparkles, Wrench, Smile, Shield, Zap, Scan, Syringe,
} from "lucide-react";

const SERVICES = [
  { name: "General Dentistry", icon: Heart, slug: "general-dentistry", desc: "Comprehensive exams, cleanings, fillings, and preventive care for the whole family." },
  { name: "Cosmetic Dentistry", icon: Sparkles, slug: "cosmetic-dentistry", desc: "Teeth whitening, veneers, and smile makeovers to enhance your appearance." },
  { name: "Dental Implants", icon: Wrench, slug: "dental-implants", desc: "Permanent tooth replacement that looks and feels like natural teeth." },
  { name: "Orthodontics", icon: Smile, slug: "orthodontics", desc: "Invisalign and traditional braces for straighter, healthier smiles." },
  { name: "Dental Crowns", icon: Shield, slug: "dental-crowns", desc: "Custom crowns to restore damaged teeth to full function and beauty." },
  { name: "Root Canal", icon: Zap, slug: "root-canal", desc: "Pain-free root canal therapy to save infected teeth." },
  { name: "Digital X-Rays", icon: Scan, slug: "digital-x-rays", desc: "Advanced imaging with 90% less radiation than traditional X-rays." },
  { name: "Emergency", icon: Syringe, slug: "emergency", desc: "Same-day emergency dental care when you need it most." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section-deep section pt-32 pb-16 text-center">
        <div className="container max-w-3xl">
          <p className="text-step--1 font-body font-medium text-gold uppercase tracking-[0.1em] mb-3">
            What We Offer
          </p>
          <h1 className="font-display text-step-4 font-bold text-cream mb-4">
            Our Services
          </h1>
          <p className="text-step-0 text-cream/70">
            Comprehensive dental care for every stage of life.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-start gap-4 p-6 rounded-lg border border-cream-hover bg-white hover:shadow-md transition-shadow no-underline group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <s.icon className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-step-1 font-semibold text-ink mb-1 group-hover:text-gold transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-brown text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
