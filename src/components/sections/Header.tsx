import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LoginDialog } from "@/components/auth/LoginDialog";
import { RegisterDialog } from "@/components/auth/RegisterDialog";
import { ECOLLogo } from "@/components/branding/ECOLLogo";
import Icon from "@/components/ui/icon";
import ThemeToggle from "@/components/ui/theme-toggle";
import { LanguageSelector } from "@/components/ui/language-selector";

export function Header() {
  const { t } = useLanguage();
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t('nav.home'), href: "/" },
    { label: t('nav.about'), href: "/about" },
    { label: t('nav.services'), href: "/services" },
    { label: t('nav.team'), href: "/team" },
    { label: t('nav.news'), href: "/news" },
    { label: t('nav.contact'), href: "/contact" }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <ECOLLogo size="sm" />
              <span className="text-xl font-bold">ECOL</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) 
                      ? 'text-primary' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <ThemeToggle />
              <div className="hidden sm:flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  onClick={() => setShowLogin(true)}
                >
                  {t('nav.login')}
                </Button>
                <Button onClick={() => setShowRegister(true)}>
                  {t('nav.register')}
                </Button>
              </div>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border/40 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.href) 
                        ? 'text-primary' 
                        : 'text-muted-foreground'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Mobile Actions */}
                <div className="flex flex-col space-y-2 pt-4 border-t border-border/40">
                  <Button 
                    variant="outline" 
                    className="justify-start"
                    onClick={() => {
                      setShowLogin(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t('nav.login')}
                  </Button>
                  <Button 
                    className="justify-start"
                    onClick={() => {
                      setShowRegister(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t('nav.register')}
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Auth Modals */}
      <LoginDialog 
        open={showLogin} 
        onOpenChange={setShowLogin}
        onSwitchToRegister={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
      />
      <RegisterDialog 
        open={showRegister} 
        onOpenChange={setShowRegister}
        onSwitchToLogin={() => {
          setShowRegister(false);
          setShowLogin(true);
        }}
      />
    </>
  );
}