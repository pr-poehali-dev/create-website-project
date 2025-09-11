import { useLanguage } from "@/contexts/LanguageContext";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export default function Services() {
  const { t } = useLanguage();

  const breadcrumbItems = [
    { label: t('nav.home'), href: "/" },
    { label: t('nav.services') }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      {/* Services Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('services.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ServicesGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('services.cta.title')}</h2>
          <p className="text-xl mb-8 opacity-90">{t('services.cta.description')}</p>
          <button className="bg-background text-foreground px-8 py-3 rounded-lg font-medium hover:bg-background/90 transition-colors">
            {t('services.cta.button')}
          </button>
        </div>
      </section>
    </div>
  );
}