import AboutSection from "./components/landing/AboutSection";
import EquipmentShowcase from "./components/landing/EquipmentShowcase";
import FeaturesSection from "./components/landing/FeaturesSection";
import HeroSection from "./components/landing/HeroSection";
import HowItWorks from "./components/landing/HowItWorks";
import LandingNavbar from "./components/landing/LandingNavbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F1E7]">
      <LandingNavbar/>
      <HeroSection/>
      <FeaturesSection/>
      <HowItWorks/>
      <EquipmentShowcase/>
      <AboutSection/>
    </main>
  );
}
