import HeroSection from "@/components/home/hero-section";
import EmailCapture from "@/components/home/email-capture";
import CategoryCards from "@/components/home/category-cards";
import WeBuyHouses from "@/components/home/we-buy-houses";
import FeaturedListings from "@/components/home/featured-listings";
import TestimonialsSection from "@/components/home/testimonials-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EmailCapture />
      <CategoryCards />
      <WeBuyHouses />
      <FeaturedListings />
      <TestimonialsSection />
    </main>
  );
}
