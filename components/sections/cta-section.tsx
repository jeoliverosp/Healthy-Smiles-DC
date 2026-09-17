export default function CtaSection() {
  return (
    <section className="section-deep section text-center" id="cta">
      <div className="container max-w-2xl">
        <h2 className="font-display text-step-4 font-bold text-cream mb-4">
          Ready to Smile?
        </h2>
        <p className="text-step-0 text-cream/70 mb-8">
          Book your appointment today and discover why thousands of families
          trust Healthy Smiles Dental Care.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:+13018384291" className="btn btn-gold">
            Call (301) 838-4291
          </a>
          <a href="#chatbox" className="btn btn-outline border-cream/30 text-cream hover:bg-cream hover:text-ink">
            Chat With Us
          </a>
        </div>
      </div>
    </section>
  );
}
