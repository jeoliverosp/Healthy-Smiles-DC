const DOCTORS = [
  {
    name: "Dr. Qing Xu",
    title: "DDS",
    specialty: "General & Family Dentistry",
    slug: "qing-xu",
  },
  {
    name: "Dr. Andrew Park",
    title: "DDS",
    specialty: "General & Family Dentistry",
    slug: "andrew-park",
  },
  {
    name: "Dr. Sheng Ge",
    title: "DMD, PhD",
    specialty: "Oral Surgery",
    slug: "sheng-ge",
  },
  {
    name: "Dr. Giatu Bui",
    title: "DDS",
    specialty: "General Dentistry",
    slug: "giatu-bui",
  },
  {
    name: "Dr. Jamielynn Jung",
    title: "DDS",
    specialty: "General Dentistry",
    slug: "jamielynn-jung",
  },
];

export default function DoctorsSection() {
  return (
    <section className="section-deep section" id="doctors">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-step--1 font-body font-medium text-gold uppercase tracking-[0.1em] mb-3">
            Meet Your Team
          </p>
          <h2 className="font-display text-step-3 font-semibold text-cream">
            Our Doctors
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {DOCTORS.map((doc) => (
            <div
              key={doc.slug}
              className="flex flex-col items-center text-center group"
            >
              {/* Avatar placeholder */}
              <div className="w-28 h-28 rounded-full bg-cream/10 border-2 border-cream/20 flex items-center justify-center mb-4 group-hover:border-gold/50 transition-colors">
                <span className="text-cream/30 text-step--1 uppercase">
                  {doc.name.split(" ").pop()}
                </span>
              </div>
              <h3 className="font-display text-step-0 font-semibold text-cream">
                {doc.name}
              </h3>
              <p className="text-gold text-sm font-body">{doc.title}</p>
              <p className="text-cream/50 text-sm font-body">{doc.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
