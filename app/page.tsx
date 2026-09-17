import Hero from "@/components/hero";
import AboutPreview from "@/components/sections/about-preview";
import ServicesGrid from "@/components/sections/services-grid";
import LocationsSection from "@/components/sections/locations-section";
import DoctorsSection from "@/components/sections/doctors-section";
import ReviewsSection from "@/components/sections/reviews-section";
import TechSection from "@/components/sections/tech-section";
import CtaSection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <LocationsSection />
      <DoctorsSection />
      <ReviewsSection />
      <TechSection />
      <CtaSection />
    </>
  );
}
