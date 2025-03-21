import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { StatsSection } from "./components/StatsSection";
import { TeamSection } from "./components/TeamSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        {/* <TestimonialsSection /> */}
        <AboutSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
