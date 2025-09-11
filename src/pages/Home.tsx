import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Layout } from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/animated-section";
import SEOHead from "@/components/ui/seo-head";

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: "Brain",
      title: t('home.features.ai.title'),
      description: t('home.features.ai.description')
    },
    {
      icon: "Shield",
      title: t('home.features.security.title'),
      description: t('home.features.security.description')
    },
    {
      icon: "Globe",
      title: t('home.features.global.title'),
      description: t('home.features.global.description')
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title={t('nav.home')}
        description="ECOL - Leading AI and cryptography solutions provider from Hong Kong. Accelerate your digital transformation with cutting-edge artificial intelligence and cryptographic security."
        keywords="AI, artificial intelligence, cryptography, digital transformation, Hong Kong, technology solutions"
        canonicalUrl="/"
      />
      
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('home.features.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection 
                key={index} 
                delay={index * 0.1}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={feature.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t('home.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link to="/services">
                  {t('home.cta.services')}
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/contact">
                  {t('home.cta.contact')}
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}