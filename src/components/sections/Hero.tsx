import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/ui/animated-section";
import Icon from "@/components/ui/icon";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              {t('hero.title')}
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">
                  <Icon name="MessageSquare" size={20} className="mr-2" />
                  {t('hero.cta1')}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link to="/services">
                  <Icon name="ArrowRight" size={20} className="mr-2" />
                  {t('hero.cta2')}
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border/40">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">{t('hero.stat1')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">{t('hero.stat2')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">{t('hero.stat3')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">{t('hero.stat4')}</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
}