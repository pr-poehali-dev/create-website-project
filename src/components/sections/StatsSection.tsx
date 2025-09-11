import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/ui/animated-section";

export function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    {
      value: "150+",
      label: t('hero.stat1'),
      description: "Successfully completed projects worldwide"
    },
    {
      value: "50+",
      label: t('hero.stat2'),
      description: "Clients across different industries"
    },
    {
      value: "99.9%",
      label: t('hero.stat3'),
      description: "System uptime and reliability"
    },
    {
      value: "24/7",
      label: t('hero.stat4'),
      description: "Technical support coverage"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by businesses worldwide for delivering excellence in AI and cryptography solutions
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="text-center"
            >
              <div className="bg-background rounded-2xl p-6 shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}