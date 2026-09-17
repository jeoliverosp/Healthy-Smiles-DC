import { Camera, Monitor, Zap, Sun } from "lucide-react";

const TECH = [
  {
    icon: Camera,
    name: "Cone Beam CT",
    desc: "3D imaging for precise diagnosis and treatment planning.",
  },
  {
    icon: Monitor,
    name: "Intra-Oral Camera",
    desc: "See exactly what we see with real-time mouth imaging.",
  },
  {
    icon: Zap,
    name: "Digital X-Rays",
    desc: "90% less radiation than traditional X-rays.",
  },
  {
    icon: Sun,
    name: "Laser Dentistry",
    desc: "Minimally invasive treatments with faster healing.",
  },
];

export default function TechSection() {
  return (
    <section className="section bg-cream-hover/30" id="technology">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-step--1 font-body font-medium text-gold uppercase tracking-[0.1em] mb-3">
            Advanced Care
          </p>
          <h2 className="font-display text-step-3 font-semibold text-ink">
            Our Technology
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH.map((t) => (
            <div key={t.name} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <t.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-display text-step-0 font-semibold text-ink mb-2">
                {t.name}
              </h3>
              <p className="text-brown text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
