import AnimatedSection from "@/components/ui/animated-section";

export function StatsSection() {
  const stats = [
    {
      value: "1000+",
      label: "Созданно сайтов",
      description: "Успешно реализованные проекты по всему миру"
    },
    {
      value: "30x",
      label: "Быстрее обычного",
      description: "Скорость создания сайтов по сравнению с традиционным кодингом"
    },
    {
      value: "1 мин",
      label: "Время создания",
      description: "Среднее время на создание полноценного сайта"
    },
    {
      value: "100%",
      label: "На русском языке",
      description: "Полная поддержка русскоязычного интерфейса"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наши достижения в цифрах
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Нам доверяют компании по всему миру для создания качественных веб-решений
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