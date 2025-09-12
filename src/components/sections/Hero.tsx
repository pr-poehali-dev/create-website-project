import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/animated-section";
import Icon from "@/components/ui/icon";

export function Hero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Поехали!
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Создавай сайты через русский язык. Быстрее конструкторов и кодинга в 30 раз.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="text-lg px-8">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Создать сайт
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border/40">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Созданных сайтов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">30x</div>
                <div className="text-sm text-muted-foreground">Быстрее обычного</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">1 мин</div>
                <div className="text-sm text-muted-foreground">Время создания</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">🚀</div>
                <div className="text-sm text-muted-foreground">Космическая скорость</div>
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