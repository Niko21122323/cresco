import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import IntroductionSection from "@/components/sections/IntroductionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <IntroductionSection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
    </>
  );
}
