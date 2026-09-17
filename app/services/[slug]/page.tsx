import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const SERVICES_DATA: Record<string, { title: string; desc: string; benefits: string[] }> = {
  "general-dentistry": {
    title: "General Dentistry",
    desc: "Our general dentistry services focus on preventing, diagnosing, and treating oral health issues. From routine exams and cleanings to fillings and extractions, we provide comprehensive care for patients of all ages.",
    benefits: ["Comprehensive oral exams", "Professional cleanings", "Cavity fillings", "Gum disease treatment", "Oral cancer screening"],
  },
  "cosmetic-dentistry": {
    title: "Cosmetic Dentistry",
    desc: "Transform your smile with our cosmetic dentistry services. Whether you want whiter teeth, straighter alignment, or a complete smile makeover, our team will help you achieve the look you desire.",
    benefits: ["Teeth whitening", "Porcelain veneers", "Dental bonding", "Smile makeovers", "Gum contouring"],
  },
  "dental-implants": {
    title: "Dental Implants",
    desc: "Dental implants are the gold standard for replacing missing teeth. They look, feel, and function like natural teeth, giving you back your confidence and oral health.",
    benefits: ["Permanent tooth replacement", "Prevents bone loss", "No dietary restrictions", "Natural appearance", "Long-lasting results"],
  },
  "orthodontics": {
    title: "Orthodontics",
    desc: "Straighten your teeth and correct your bite with our orthodontic options. We offer both Invisalign clear aligners and traditional braces for patients of all ages.",
    benefits: ["Invisalign clear aligners", "Traditional braces", "Bite correction", "Improved oral health", "Customized treatment plans"],
  },
  "dental-crowns": {
    title: "Dental Crowns",
    desc: "A dental crown is a custom-made cap that covers a damaged tooth, restoring its shape, size, and strength. Crowns blend seamlessly with your natural teeth.",
    benefits: ["Restores damaged teeth", "Natural appearance", "Long-lasting durability", "Same-day options available", "Protects weak teeth"],
  },
  "root-canal": {
    title: "Root Canal Therapy",
    desc: "Modern root canal therapy is comfortable and efficient. We remove infected pulp, clean the canal, and seal the tooth — saving your natural tooth and relieving pain.",
    benefits: ["Pain-free procedure", "Saves natural tooth", "Prevents further infection", "Restores full function", "Usually completed in one visit"],
  },
  "digital-x-rays": {
    title: "Digital X-Rays",
    desc: "Digital X-rays produce high-quality images with 90% less radiation than traditional film X-rays. Results are instant, allowing us to diagnose issues quickly.",
    benefits: ["90% less radiation", "Instant results", "High-resolution images", "Easy to share and store", "Environmentally friendly"],
  },
  "emergency": {
    title: "Emergency Dentistry",
    desc: "Dental emergencies don't wait — and neither do we. We offer same-day emergency appointments for severe toothaches, broken teeth, lost fillings, and other urgent dental needs.",
    benefits: ["Same-day appointments", "Severe toothache relief", "Broken tooth repair", "Lost filling replacement", "After-hours availability"],
  },
};

export function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug] || { title: "Service", desc: "Details coming soon.", benefits: [] };

  return (
    <>
      <section className="section-deep section pt-32 pb-16 text-center">
        <div className="container max-w-3xl">
          <p className="text-step--1 font-body font-medium text-gold uppercase tracking-[0.1em] mb-3">
            Our Services
          </p>
          <h1 className="font-display text-step-4 font-bold text-cream mb-4">
            {service.title}
          </h1>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container max-w-3xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gold text-sm hover:text-brown transition-colors mb-8 no-underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>

          <p className="text-brown leading-relaxed text-step-0 mb-8">
            {service.desc}
          </p>

          {service.benefits.length > 0 && (
            <>
              <h3 className="font-display text-step-1 font-semibold text-ink mb-4">
                Benefits
              </h3>
              <ul className="space-y-2 mb-8">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-brown">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="bg-deep text-cream rounded-lg p-8 text-center">
            <h3 className="font-display text-step-1 font-semibold mb-2">
              Ready to Get Started?
            </h3>
            <p className="text-cream/60 text-sm mb-4">
              Call us or book your appointment online.
            </p>
            <a href="tel:+13018384291" className="btn btn-gold">
              Call (301) 838-4291
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
