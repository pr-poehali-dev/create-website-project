import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/ui/language-selector";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavigationProps {
  showLogin: boolean;
  showRegister: boolean;
  setShowLogin: (show: boolean) => void;
  setShowRegister: (show: boolean) => void;
}

export function Navigation({ showLogin, showRegister, setShowLogin, setShowRegister }: NavigationProps) {
  const { t } = useLanguage();
  const { user, logout } = useAuth();

  return (
    <nav className="border-b border-white/10 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Rocket" size={32} className="text-primary" />
            <span className="text-xl font-bold">EKOL Technologies</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              {t('nav.services')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              {t('nav.about')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              {t('nav.contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            {user ? (
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-blue-600 text-white text-xs">
                    {user.firstName[0]}{user.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => window.location.href = '/dashboard'}
                  className="border-primary/50 hover:border-primary hover:bg-primary/10"
                >
                  <Icon name="LayoutDashboard" className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost"
                  onClick={logout}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Icon name="LogOut" className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button 
                  size="sm" 
                  variant="ghost"
                  onClick={() => setShowLogin(true)}
                  className="text-muted-foreground hover:text-primary"
                >
                  Sign In
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => setShowRegister(true)}
                  className="relative overflow-hidden group"
                >
                  <span className="relative z-10">{t('nav.getStarted')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}