import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { EKOLLogo } from "@/components/branding/ECOLLogo";

export default function Home() {
  const features = [
    {
      icon: "Package",
      title: "Качественная продукция",
      description: "Поставляем только сертифицированные товары высокого качества от проверенных производителей"
    },
    {
      icon: "Truck",
      title: "Быстрая доставка", 
      description: "Организуем доставку в кратчайшие сроки с полным логистическим сопровождением"
    },
    {
      icon: "Shield",
      title: "Надежность",
      description: "Гарантируем безопасность сделок и соблюдение всех международных стандартов"
    }
  ];

  const stats = [
    { value: "500+", label: "Довольных клиентов" },
    { value: "1000+", label: "Успешных поставок" },
    { value: "15", label: "Стран партнеров" },
    { value: "24/7", label: "Поддержка клиентов" }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <EKOLLogo size="sm" />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium hover:text-primary">Услуги</a>
              <a href="#about" className="text-sm font-medium hover:text-primary">О компании</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary">Контакты</a>
            </nav>
            <Button onClick={scrollToContact}>Связаться</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                EKOL
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Международная торговая компания, специализирующаяся на поставках высококачественных товаров из Азии
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={scrollToContact}>
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать каталог
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                <EKOLLogo size="xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Предоставляем полный спектр услуг в сфере международной торговли
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
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">О компании EKOL</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Hong Kong Yalu King International Trading Co., Limited — это надежный партнер в сфере международной торговли с многолетним опытом работы на азиатском рынке.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Мы специализируемся на поставках качественных товаров и предоставлении комплексных логистических решений для наших клиентов по всему миру.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <span>Прямые поставки от производителей</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <span>Контроль качества на всех этапах</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <span>Полное логистическое сопровождение</span>
                </div>
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

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Готовы обсудить ваши потребности и предложить оптимальное решение
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Hong Kong Yalu King International Trading Co., Limited</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Mail" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@ekol.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Phone" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">+86 138 0013 8000</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">Hong Kong Special Administrative Region</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Имя</label>
                    <input className="w-full px-3 py-2 border border-border rounded-md" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" className="w-full px-3 py-2 border border-border rounded-md" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Тема</label>
                  <input className="w-full px-3 py-2 border border-border rounded-md" placeholder="Тема сообщения" />
                </div>
                <div>
                  <label className="text-sm font-medium">Сообщение</label>
                  <textarea rows={4} className="w-full px-3 py-2 border border-border rounded-md" placeholder="Ваше сообщение..."></textarea>
                </div>
                <Button className="w-full">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/50 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <EKOLLogo size="sm" />
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>© 2024 Hong Kong Yalu King International Trading Co., Limited</p>
              <p>Все права защищены</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}