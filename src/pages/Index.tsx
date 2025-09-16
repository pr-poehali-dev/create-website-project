import { useEffect, useState } from "react";
import { Navigation } from "@/components/sections/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { MainFooter } from "@/components/sections/MainFooter";
import { TeamSection } from "@/components/team/TeamSection";
import { NewsFeed } from "@/components/news/NewsFeed";
import { LoginDialog } from "@/components/auth/LoginDialog";
import { RegisterDialog } from "@/components/auth/RegisterDialog";
import { CallbackModal } from "@/components/marketing/CallbackModal";
import { useAuth } from "@/contexts/AuthContext";

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCallback, setShowCallback] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    
    // Show callback modal after 45 seconds for non-authenticated users
    if (!user) {
      const timer = setTimeout(() => {
        setShowCallback(true);
      }, 45000);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
      };
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [user]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation 
        showLogin={showLogin}
        showRegister={showRegister}
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
      />

      <HeroSection isVisible={isVisible} />

      <ServicesSection />

      <AboutSection />

      <ContactSection />

      <TeamSection />

      {/* News Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <NewsFeed variant="compact" maxItems={6} showFilters={false} />
        </div>
      </section>

      <MainFooter />

      {/* Auth Dialogs */}
      <LoginDialog 
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onSwitchToRegister={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
      />
      
      <RegisterDialog 
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        onSwitchToLogin={() => {
          setShowRegister(false);
          setShowLogin(true);
        }}
      />

      <CallbackModal
        isOpen={showCallback}
        onClose={() => setShowCallback(false)}
      />
    </div>
  );
}