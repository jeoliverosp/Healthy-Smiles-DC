interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const dentalClinicSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Healthy Smiles Dental Care",
  image: "https://hsdentalmd.com/images/logo.png",
  url: "https://hsdentalmd.com",
  telephone: ["+13018384291", "+13018383180", "+12406963668"],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "11016 New Hampshire Ave",
      addressLocality: "Silver Spring",
      addressRegion: "MD",
      postalCode: "20904",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "1600 Veirs Mill Rd",
      addressLocality: "Rockville",
      addressRegion: "MD",
      postalCode: "20851",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "4809 Greenbelt Rd",
      addressLocality: "College Park",
      addressRegion: "MD",
      postalCode: "20740",
      addressCountry: "US",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "State",
    name: "Maryland",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "955",
  },
};
