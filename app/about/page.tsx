export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-deep section pt-32 pb-16 text-center">
        <div className="container max-w-3xl">
          <p className="text-step--1 font-body font-medium text-gold uppercase tracking-[0.1em] mb-3">
            About Us
          </p>
          <h1 className="font-display text-step-4 font-bold text-cream mb-4">
            Healthy Smiles Dental Care
          </h1>
          <p className="text-step-0 text-cream/70">
            Trusted family and cosmetic dentistry in Maryland for over 15 years.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-cream">
        <div className="container max-w-4xl space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] rounded-lg bg-cream-hover flex items-center justify-center">
                <span className="text-brown/40 text-step--1 uppercase tracking-widest">
                  Photo
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="font-display text-step-2 font-semibold text-ink">
                Our Story
              </h2>
              <p className="text-brown leading-relaxed">
                Founded with a mission to provide exceptional dental care to
                families across Maryland, Healthy Smiles Dental Care has grown
                from a single practice to five convenient locations.
              </p>
              <p className="text-brown leading-relaxed">
                Our team of experienced dentists and staff are committed to
                staying at the forefront of dental technology while maintaining
                the warm, personal touch that our patients have come to expect.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-deep text-cream rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-display text-step-2 font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-cream/70 text-step-0 max-w-2xl mx-auto leading-relaxed">
              To provide comprehensive, compassionate dental care that improves
              the lives of our patients and their families. We believe everyone
              deserves a healthy, beautiful smile.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-deep section">
        <div className="container">
          <h2 className="font-display text-step-3 font-semibold text-cream text-center mb-12">
            Meet Our Doctors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Dr. Qing Xu", title: "DDS", spec: "General & Family" },
              { name: "Dr. Andrew Park", title: "DDS", spec: "General & Family" },
              { name: "Dr. Sheng Ge", title: "DMD, PhD", spec: "Oral Surgery" },
              { name: "Dr. Giatu Bui", title: "DDS", spec: "General Dentistry" },
              { name: "Dr. Jamielynn Jung", title: "DDS", spec: "General Dentistry" },
            ].map((doc) => (
              <div key={doc.name} className="flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full bg-cream/10 border-2 border-cream/20 flex items-center justify-center mb-4">
                  <span className="text-cream/30 text-step--1">
                    {doc.name.split(" ").pop()}
                  </span>
                </div>
                <h3 className="font-display text-step-0 font-semibold text-cream">
                  {doc.name}
                </h3>
                <p className="text-gold text-sm">{doc.title}</p>
                <p className="text-cream/50 text-sm">{doc.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
