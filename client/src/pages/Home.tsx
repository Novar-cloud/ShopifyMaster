import { useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import IdealClientsSection from "@/components/IdealClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FuturisticButton from "@/components/FuturisticButton";

export default function Home() {
  const [location, setLocation] = useLocation();

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Add a small delay to ensure the page has loaded
          setTimeout(() => {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }, 100);
        }
      }
    };

    // Handle initial hash on page load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <IdealClientsSection />
        <ContactSection />
      </main>
      <Footer />
      <FuturisticButton />
    </div>
  );
}
