import { useLanguage } from "@/contexts/LanguageContext";
import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import AnimatedSection from "@/components/ui/animated-section";
import { Link } from "react-router-dom";

export default function Home() {
  const { t } = useLanguage();
  const features = [
    {
      icon: "Package",
      title: t('home.features.quality.title'),
      description: t('home.features.quality.description')
    },
    {
      icon: "Truck",
      title: t('home.features.delivery.title'),
      description: t('home.features.delivery.description')
    },
    {
      icon: "Shield",
      title: t('home.features.reliability.title'),
      description: t('home.features.reliability.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <AnimatedSection>
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.services.title')}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('home.services.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={feature.icon as any} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/services">
                  <Icon name="ArrowRight" size={20} className="mr-2" />
                  {t('home.services.viewAll')}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection>
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('home.about.title')}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {t('home.about.description1')}
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  {t('home.about.description2')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-600" />
                    <span>{t('home.about.feature1')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-600" />
                    <span>{t('home.about.feature2')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-600" />
                    <span>{t('home.about.feature3')}</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild size="lg" variant="outline">
                    <Link to="/about">
                      <Icon name="ArrowRight" size={20} className="mr-2" />
                      {t('home.about.learnMore')}
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                  <Icon name="Building2" size={64} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact CTA Section */}
      <AnimatedSection>
        <section className="py-24 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.contact.title')}</h2>
            <p className="text-xl mb-8 opacity-90">{t('home.contact.description')}</p>
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/contact">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                {t('home.contact.button')}
              </Link>
            </Button>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}