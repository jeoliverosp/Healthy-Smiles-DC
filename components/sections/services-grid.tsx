import {
  Heart,
  Sparkles,
  Wrench,
  Smile,
  Shield,
  Zap,
  Scan,
  Syringe,
} from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { name: "General Dentistry", icon: Heart, slug: "general-dentistry" },
  { name: "Cosmetic Dentistry", icon: Sparkles, slug: "cosmetic-dentistry" },
  { name: "Dental Implants", icon: Wrench, slug: "dental-implants" },
  { name: "Orthodontics", icon: Smile, slug: "orthodontics" },
  { name: "Dental Crowns", icon: Shield, slug: "dental-crowns" },
  { name: "Root Canal", icon: Zap, slug: "root-canal" },
  { name: "Digital X-Rays", icon: Scan, slug: "digital-x-rays" },
  { name: "Emergency", icon: Syringe, slug: "emergency" },
];

export default function ServicesGrid() {
  return (
    <section className="section-deep section" id="services">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-step--1 font-body font-medium text-gold uppercase tracking-[0.1em] mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-step-3 font-semibold text-cream">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col items-center gap-3 p-6 rounded-lg bg-deep border border-cream/10 hover:border-gold/40 transition-all duration-normal no-underline text-center"
            >
              <s.icon className="h-8 w-8 text-gold group-hover:scale-110 transition-transform duration-fast" />
              <span className="font-body text-sm font-medium text-cream/80 group-hover:text-cream transition-colors">
                {s.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="btn btn-outline border-cream/30 hover:border-cream text-cream"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
