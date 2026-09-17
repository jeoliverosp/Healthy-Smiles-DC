import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import GoogleMap from "@/components/google-map";

const LOCATIONS = [
  {
    name: "Silver Spring",
    address: "11016 New Hampshire Ave",
    city: "Silver Spring, MD 20904",
    fullAddress: "11016 New Hampshire Ave, Silver Spring, MD 20904",
    phone: "(301) 838-4291",
    hours: "Mon–Fri: 9am–6pm | Sat: 9am–2pm",
    slug: "silver-spring",
  },
  {
    name: "Rockville",
    address: "1600 Veirs Mill Rd",
    city: "Rockville, MD 20851",
    fullAddress: "1600 Veirs Mill Rd, Rockville, MD 20851",
    phone: "(301) 838-3180",
    hours: "Mon–Fri: 9am–6pm | Sat: 9am–2pm",
    slug: "rockville",
  },
  {
    name: "College Park",
    address: "4809 Greenbelt Rd",
    city: "College Park, MD 20740",
    fullAddress: "4809 Greenbelt Rd, College Park, MD 20740",
    phone: "(240) 696-3668",
    hours: "Mon–Fri: 9am–6pm | Sat: 9am–2pm",
    slug: "college-park",
  },
  {
    name: "Location 4",
    address: "Coming Soon",
    city: "Maryland",
    fullAddress: "Maryland",
    phone: "(XXX) XXX-XXXX",
    hours: "Coming Soon",
    slug: "location-4",
  },
  {
    name: "Location 5",
    address: "Coming Soon",
    city: "Maryland",
    fullAddress: "Maryland",
    phone: "(XXX) XXX-XXXX",
    hours: "Coming Soon",
    slug: "location-5",
  },
];

export default function LocationsPage() {
  return (
    <>
      <section className="section-deep section pt-32 pb-16 text-center">
        <div className="container max-w-3xl">
          <p className="text-step--1 font-body font-medium text-gold uppercase tracking-[0.1em] mb-3">
            Find Us
          </p>
          <h1 className="font-display text-step-4 font-bold text-cream mb-4">
            Our Locations
          </h1>
          <p className="text-step-0 text-cream/70">
            Five convenient locations across Maryland.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className="rounded-lg border border-cream-hover bg-white overflow-hidden hover:shadow-md transition-shadow"
              >
                <GoogleMap
                  address={loc.fullAddress}
                  className="aspect-[16/9]"
                />

                <div className="p-6 space-y-3">
                  <h2 className="font-display text-step-2 font-semibold text-ink">
                    {loc.name}
                  </h2>
                  <div className="flex items-start gap-2 text-sm text-brown">
                    <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                    <span>
                      {loc.address}
                      <br />
                      {loc.city}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-brown">
                    <Phone className="h-4 w-4 text-gold" />
                    <a
                      href={`tel:${loc.phone.replace(/\D/g, "")}`}
                      className="text-brown hover:text-gold transition-colors no-underline"
                    >
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-brown">
                    <Clock className="h-4 w-4 text-gold" />
                    <span>{loc.hours}</span>
                  </div>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:text-brown transition-colors no-underline mt-2"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
