import HeroSection from "./components/landing/HeroSection";
import LandingNavbar from "./components/landing/LandingNavbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F1E7]">
      <LandingNavbar/>
      <HeroSection/>
    </main>
  );
}
