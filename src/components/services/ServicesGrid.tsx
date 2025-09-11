import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export function ServicesGrid() {
  const { t } = useLanguage();

  const services = [
    {
      icon: "Brain",
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      features: [
        "Machine Learning Strategy",
        "AI Model Development", 
        "Natural Language Processing",
        "Computer Vision Solutions"
      ]
    },
    {
      icon: "Code",
      title: t('services.dev.title'),
      description: t('services.dev.description'),
      features: [
        "Custom AI Applications",
        "API Integration",
        "Cloud Deployment",
        "Performance Optimization"
      ]
    },
    {
      icon: "Shield",
      title: t('services.security.title'),
      description: t('services.security.description'),
      features: [
        "Encryption Implementation",
        "Security Audits",
        "Blockchain Development",
        "Identity Management"
      ]
    },
    {
      icon: "Globe",
      title: t('services.global.title'),
      description: t('services.global.description'),
      features: [
        "Global Infrastructure",
        "Multi-region Support",
        "Compliance Management",
        "24/7 Monitoring"
      ]
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative group p-8 bg-background border rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">
            {t('page.services.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('page.services.cta.description')}
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
          >
            <Link to="/contact">
              {t('page.services.cta.button')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}