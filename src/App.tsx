
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import AnimatedSection from "@/components/ui/animated-section";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const queryClient = new QueryClient();

const features = [
  {
    icon: "Rocket",
    title: "Быстрая разработка",
    description: "Создаем сайты в 30 раз быстрее обычного. Ваш проект будет готов за минуты, а не недели."
  },
  {
    icon: "Brain",
    title: "ИИ-ассистент",
    description: "Юра — ваш личный программист, который понимает русский язык и создает именно то, что вам нужно."
  },
  {
    icon: "Globe",
    title: "Публикация одним кликом",
    description: "Готовый сайт автоматически публикуется в интернете с SSL-сертификатом и собственным доменом."
  }
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          {/* Hero Section */}
          <Hero />

          {/* Stats Section */}
          <StatsSection />

          {/* Services Section */}
          <AnimatedSection>
            <section className="py-24">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши возможности</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Создавайте профессиональные сайты через простое общение на русском языке
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
                  <Button size="lg">
                    <Icon name="ArrowRight" size={20} className="mr-2" />
                    Попробовать бесплатно
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">О проекте Поехали!</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Поехали.dev — это революционный сервис для создания сайтов с помощью искусственного интеллекта. 
                      Просто опишите что вам нужно на русском языке, и Юра создаст для вас профессиональный сайт.
                    </p>
                    <p className="text-lg text-muted-foreground mb-8">
                      Без программирования, без сложных настроек — только результат, который вам нужен.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-green-600" />
                        <span>Работает на русском языке</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-green-600" />
                        <span>Создание сайта за минуты</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-green-600" />
                        <span>Автоматическая публикация</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                      <Icon name="Rocket" size={64} className="text-primary" />
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы создать свой сайт?</h2>
                <p className="text-xl mb-8 opacity-90">Начните прямо сейчас — это бесплатно!</p>
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                  <Icon name="MessageSquare" size={20} className="mr-2" />
                  Создать сайт
                </Button>
              </div>
            </section>
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;