import { HeroSection } from "./hero-section";
import { HowItWorksSection } from "./how-it-works-section";
import { FeaturesSection } from "./features-section";
import { TestimonialsSection } from "./testimonials-section";
import { CtaSection } from "./cta-section";

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection id="how-it-works" />
      <FeaturesSection id="features" />
      <TestimonialsSection id="testimonials" />
      <CtaSection />
    </>
  );
}
