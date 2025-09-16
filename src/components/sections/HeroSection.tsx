import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroSectionProps {
  isVisible: boolean;
}

export function HeroSection({ isVisible }: HeroSectionProps) {
  const { t, language } = useLanguage();

  const stats = [
    { value: "500+", label: t('hero.stat1') },
    { value: "50+", label: t('hero.stat2') },
    { value: "99.9%", label: t('hero.stat3') },
    { value: "24/7", label: t('hero.stat4') }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img 
          src="/img/884ebdd1-21f1-436d-beb9-299b81f1fe21.jpg" 
          alt="AI Neural Network Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse-slow opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="mb-8">
            <h1 className={`font-bold mb-8 leading-tight ${
              language === 'zh' ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-6xl md:text-7xl lg:text-8xl'
            }`}>
              <span className="block bg-gradient-to-r from-white via-primary to-blue-400 bg-clip-text text-transparent animate-gradient-shift bg-300% bg-size-200">
                {t('hero.title')}
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="text-lg px-10 py-4 relative overflow-hidden group bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-purple-600 transition-all duration-500 shadow-2xl shadow-primary/25">
              <Icon name="MessageSquare" className="mr-3 h-6 w-6" />
              <span className="relative z-10">{t('hero.cta1')}</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-4 border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300">
              <Icon name="Calendar" className="mr-3 h-6 w-6" />
              {t('hero.cta2')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}