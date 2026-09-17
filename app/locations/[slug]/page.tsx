import Link from "next/link";
import { ArrowLeft, MapPin, Phone, Clock } from "lucide-react";

const LOCATIONS_DATA: Record<string, { name: string; address: string; city: string; phone: string; hours: string }> = {
  "silver-spring": { name: "Silver Spring", address: "11016 New Hampshire Ave", city: "Silver Spring, MD 20904", phone: "(301) 838-4291", hours: "Mon–Fri: 9am–6pm | Sat: 9am–2pm" },
  "rockville": { name: "Rockville", address: "1600 Veirs Mill Rd", city: "Rockville, MD 20851", phone: "(301) 838-3180", hours: "Mon–Fri: 9am–6pm | Sat: 9am–2pm" },
  "college-park": { name: "College Park", address: "4809 Greenbelt Rd", city: "College Park, MD 20740", phone: "(240) 696-3668", hours: "Mon–Fri: 9am–6pm | Sat: 9am–2pm" },
  "location-4": { name: "Location 4", address: "Coming Soon", city: "Maryland", phone: "(XXX) XXX-XXXX", hours: "Coming Soon" },
  "location-5": { name: "Location 5", address: "Coming Soon", city: "Maryland", phone: "(XXX) XXX-XXXX", hours: "Coming Soon" },
};

export function generateStaticParams() {
  return Object.keys(LOCATIONS_DATA).map((slug) => ({ slug }));
}

export default async function LocationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = LOCATIONS_DATA[slug] || { name: "Location", address: "Address", city: "City", phone: "(XXX) XXX-XXXX", hours: "Hours" };

  return (
    <>
      <section className="section-deep section pt-32 pb-16 text-center">
        <div className="container max-w-3xl">
          <p className="text-step--1 font-body font-medium text-gold uppercase tracking-[0.1em] mb-3">
            Our Locations
          </p>
          <h1 className="font-display text-step-4 font-bold text-cream mb-4">
            {loc.name}
          </h1>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container max-w-4xl">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-gold text-sm hover:text-brown transition-colors mb-8 no-underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Locations
          </Link>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Map */}
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] rounded-lg bg-cream-hover flex items-center justify-center">
                <span className="text-brown/40 text-step--1 uppercase tracking-widest">
                  Google Maps
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-brown">
                  <MapPin className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-step-0">
                    {loc.address}<br />{loc.city}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-brown">
                  <Phone className="h-5 w-5 text-gold shrink-0" />
                  <a
                    href={`tel:${loc.phone.replace(/\D/g, "")}`}
                    className="text-step-0 text-brown hover:text-gold transition-colors no-underline"
                  >
                    {loc.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-brown">
                  <Clock className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-step-0">{loc.hours}</span>
                </div>
              </div>

              <div className="bg-deep text-cream rounded-lg p-6 text-center">
                <h3 className="font-display text-step-1 font-semibold mb-2">
                  Book an Appointment
                </h3>
                <p className="text-cream/60 text-sm mb-4">
                  Call us or use our online booking.
                </p>
                <a href={`tel:${loc.phone.replace(/\D/g, "")}`} className="btn btn-gold">
                  Call {loc.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
