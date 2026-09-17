import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="section bg-cream" id="about">
      <div className="container flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
        {/* Image placeholder */}
        <div className="w-full md:w-1/2">
          <div className="aspect-[4/3] rounded-lg bg-cream-hover flex items-center justify-center">
            <span className="text-brown/40 text-step--1 uppercase tracking-widest">
              Photo
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 space-y-4">
          <p className="text-step--1 font-body font-medium text-gold uppercase tracking-[0.1em]">
            About Us
          </p>
          <h2 className="font-display text-step-3 font-semibold text-ink">
            Family &amp; Cosmetic Dentistry in Maryland
          </h2>
          <p className="text-brown leading-relaxed">
            Healthy Smiles Dental Care has been serving families across Maryland
            for over 15 years. Our team of experienced dentists combines
            advanced technology with gentle, compassionate care.
          </p>
          <p className="text-brown leading-relaxed">
            From routine cleanings to complete smile makeovers, we offer
            comprehensive dental services in a warm, welcoming environment.
          </p>
          <Link href="/about" className="btn btn-gold inline-flex mt-2">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
