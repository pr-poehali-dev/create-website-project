import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/ui/language-selector";
import { useAuth } from "@/contexts/AuthContext";
import { LoginDialog } from "@/components/auth/LoginDialog";
import { RegisterDialog } from "@/components/auth/RegisterDialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TeamSection } from "@/components/team/TeamSection";
import { CallbackModal } from "@/components/marketing/CallbackModal";
import { ECOLLogo } from "@/components/branding/ECOLLogo";
import { NewsFeed } from "@/components/news/NewsFeed";

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCallback, setShowCallback] = useState(false);
  const { t, language } = useLanguage();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    
    // Show callback modal after 45 seconds for non-authenticated users
    if (!user) {
      const timer = setTimeout(() => {
        setShowCallback(true);
      }, 45000);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
      };
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [user]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <ECOLLogo variant="compact" size="md" />
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
                {t('nav.services')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
                {t('nav.about')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
                {t('nav.contact')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              {user ? (
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-blue-600 text-white text-xs">
                      {user.firstName[0]}{user.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => window.location.href = '/dashboard'}
                    className="border-primary/50 hover:border-primary hover:bg-primary/10"
                  >
                    <Icon name="LayoutDashboard" className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    onClick={logout}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Icon name="LogOut" className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button 
                    size="sm" 
                    variant="ghost"
                    onClick={() => setShowLogin(true)}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Sign In
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => setShowRegister(true)}
                    className="relative overflow-hidden group"
                  >
                    <span className="relative z-10">{t('nav.getStarted')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <img 
            src="/img/884ebdd1-21f1-436d-beb9-299b81f1fe21.jpg" 
            alt="AI Neural Network Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse-slow opacity-40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="mb-8">
              <h1 className={`font-bold mb-8 leading-tight ${
                language === 'zh' ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-6xl md:text-7xl lg:text-8xl'
              }`}>
                <span className="block bg-gradient-to-r from-white via-primary to-blue-400 bg-clip-text text-transparent animate-gradient-shift bg-300% bg-size-200">
                  {t('hero.title')}
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="text-lg px-10 py-4 relative overflow-hidden group bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-purple-600 transition-all duration-500 shadow-2xl shadow-primary/25">
                <Icon name="MessageSquare" className="mr-3 h-6 w-6" />
                <span className="relative z-10">{t('hero.cta1')}</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-4 border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                <Icon name="Calendar" className="mr-3 h-6 w-6" />
                {t('hero.cta2')}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
              {[
                { value: "500+", label: t('hero.stat1') },
                { value: "50+", label: t('hero.stat2') },
                { value: "99.9%", label: t('hero.stat3') },
                { value: "24/7", label: t('hero.stat4') }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              {t('services.title')}
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Brain",
                title: t('services.ai.title'),
                description: t('services.ai.description'),
                gradient: "from-blue-500/20 to-purple-500/20"
              },
              {
                icon: "Code",
                title: t('services.dev.title'),
                description: t('services.dev.description'),
                gradient: "from-green-500/20 to-blue-500/20"
              },
              {
                icon: "Shield",
                title: t('services.security.title'),
                description: t('services.security.description'),
                gradient: "from-red-500/20 to-pink-500/20"
              },
              {
                icon: "Globe",
                title: t('services.global.title'),
                description: t('services.global.description'),
                gradient: "from-purple-500/20 to-indigo-500/20"
              }
            ].map((service, index) => (
              <Card key={index} className={`group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-0 bg-gradient-to-br ${service.gradient} backdrop-blur-sm hover:-translate-y-2`}>
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative">
                    <Icon name={service.icon as any} className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/img/101356a7-bb81-4ed8-ab59-d2d70965cdd6.jpg" 
            alt="Cryptographic Security" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              {t('advantages.title')}
            </h2>
            <p className="text-muted-foreground text-xl">{t('advantages.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: "Zap", 
                title: t('advantages.efficiency.title'), 
                description: t('advantages.efficiency.description'),
                color: "from-yellow-400 to-orange-500"
              },
              { 
                icon: "TrendingDown", 
                title: t('advantages.cost.title'), 
                description: t('advantages.cost.description'),
                color: "from-green-400 to-emerald-500"
              },
              { 
                icon: "BarChart3", 
                title: t('advantages.decisions.title'), 
                description: t('advantages.decisions.description'),
                color: "from-blue-400 to-cyan-500"
              },
              { 
                icon: "CheckCircle", 
                title: t('advantages.compliance.title'), 
                description: t('advantages.compliance.description'),
                color: "from-purple-400 to-pink-500"
              }
            ].map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="relative mx-auto mb-6 w-24 h-24">
                  <div className={`w-full h-full bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon name={advantage.icon as any} className="h-12 w-12 text-white" />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`}></div>
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              {t('portfolio.title')}
            </h2>
            <p className="text-muted-foreground text-xl max-w-4xl mx-auto leading-relaxed">
              {t('portfolio.subtitle')}
            </p>
          </div>

          {/* Partnership Ecosystem */}
          <div className="mb-20">
            <Card className="bg-gradient-to-br from-primary/10 via-blue-500/10 to-purple-500/10 border border-primary/20 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-400 to-purple-400"></div>
              <CardHeader>
                <CardTitle className="text-3xl text-center mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  {t('portfolio.ecosystem.title')}
                </CardTitle>
                <CardDescription className="text-center max-w-5xl mx-auto text-lg leading-relaxed">
                  {t('portfolio.ecosystem.subtitle')}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="group">
                    <h4 className="font-bold mb-6 text-blue-400 text-lg flex items-center">
                      <Icon name="Cpu" className="mr-2 h-5 w-5" />
                      {t('portfolio.partners.ai')}
                    </h4>
                    <ul className="space-y-3">
                      {["Microsoft Azure AI", "OpenAI", "Meta (Llama)", "Amazon Web Services (AWS)"].map((partner, i) => (
                        <li key={i} className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:animate-pulse"></div>
                          {partner}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="group">
                    <h4 className="font-bold mb-6 text-green-400 text-lg flex items-center">
                      <Icon name="Cloud" className="mr-2 h-5 w-5" />
                      {t('portfolio.partners.cloud')}
                    </h4>
                    <ul className="space-y-3">
                      {["Google Cloud Platform", "Palo Alto Networks", "Cloudflare"].map((partner, i) => (
                        <li key={i} className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:animate-pulse"></div>
                          {partner}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="group">
                    <h4 className="font-bold mb-6 text-purple-400 text-lg flex items-center">
                      <Icon name="Zap" className="mr-2 h-5 w-5" />
                      {t('portfolio.partners.chinese')}
                    </h4>
                    <ul className="space-y-3">
                      {["Huawei", "Tencent Cloud", "Baidu AI", "SenseTime"].map((partner, i) => (
                        <li key={i} className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:animate-pulse"></div>
                          {partner}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service Sections */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-primary/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-gradient-to-br from-primary to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Brain" className="h-8 w-8 text-white" />
                  </div>
                  {t('portfolio.ai.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Custom & Fine-Tuned LLM Solutions",
                    "Intelligent Process Automation",
                    "Voice AI & Speech Recognition", 
                    "AI for Manufacturing & QC",
                    "Industry-Specific AI Solutions"
                  ].map((service, i) => (
                    <li key={i} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <Icon name="ArrowRight" className="mr-3 h-4 w-4 text-primary" />
                      {service}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-primary/20 bg-gradient-to-br from-green-500/5 to-blue-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Shield" className="h-8 w-8 text-white" />
                  </div>
                  {t('portfolio.crypto.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Secure Application Development",
                    "Public Key Infrastructure (PKI)",
                    "Global Compliance & Data Protection",
                    "Secure Document Workflow & e-Signatures",
                    "Cryptography for Blockchain & FinTech",
                    "Security Audit & Advisory"
                  ].map((service, i) => (
                    <li key={i} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <Icon name="ArrowRight" className="mr-3 h-4 w-4 text-green-400" />
                      {service}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Global Process */}
          <Card className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 border border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl text-center bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                {t('portfolio.process.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  { step: "1", title: "Discovery & Consultation", icon: "Search", color: "from-red-500 to-pink-500" },
                  { step: "2", title: "Strategy & Roadmap", icon: "Map", color: "from-yellow-500 to-orange-500" },
                  { step: "3", title: "Development & Testing", icon: "Code", color: "from-green-500 to-emerald-500" },
                  { step: "4", title: "Deployment & Integration", icon: "Rocket", color: "from-blue-500 to-cyan-500" },
                  { step: "5", title: "Support & Evolution", icon: "LifeBuoy", color: "from-purple-500 to-pink-500" }
                ].map((phase, index) => (
                  <div key={index} className="text-center group">
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon name={phase.icon as any} className="h-8 w-8" />
                    </div>
                    <h4 className="font-bold mb-2 text-primary">Step {phase.step}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{phase.title}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/img/1eba0e5d-88b5-44eb-84aa-320a9fced53a.jpg" 
            alt="Hong Kong Tech Hub" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-blue-400 bg-clip-text text-transparent">
                {t('about.title')}
              </h2>
              <p className="text-2xl text-primary mb-4">{t('about.location')}</p>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t('about.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 bg-gradient-to-br from-primary/5 to-blue-500/5 border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Icon name="Target" className="h-8 w-8 text-primary group-hover:animate-pulse" />
                    {t('about.mission.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {t('about.mission.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 bg-gradient-to-br from-green-500/5 to-blue-500/5 border border-green-400/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Icon name="MapPin" className="h-8 w-8 text-green-400 group-hover:animate-pulse" />
                    {t('about.hub.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {t('about.hub.description')}
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl text-center mb-8 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                  {t('about.why.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Strategic Hong Kong Hub",
                      description: "Bridging global markets with connectivity to East and West",
                      icon: "Globe"
                    },
                    {
                      title: "World-Class Partnerships", 
                      description: "Access to cutting-edge technologies and joint expertise",
                      icon: "Users"
                    },
                    {
                      title: "International Compliance Expertise",
                      description: "Navigating GDPR, APAC regulations, and more",
                      icon: "Shield"
                    },
                    {
                      title: "Multilingual Team",
                      description: "Seamless communication in English, Mandarin, and other languages",
                      icon: "MessageCircle"
                    },
                    {
                      title: "Premium Delivery",
                      description: "Relentless focus on quality, security, and achieving business goals",
                      icon: "Award"
                    },
                    {
                      title: "Global Mindset",
                      description: "Solutions designed for cross-border deployment",
                      icon: "Zap"
                    }
                  ].map((item, index) => (
                    <div key={index} className="group hover:bg-primary/5 p-6 rounded-xl transition-all duration-300 border border-transparent hover:border-primary/20">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-br from-primary to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon name={item.icon as any} className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                {t('contact.title')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <Icon name="Phone" className="h-8 w-8 text-primary" />
                    {t('contact.info.title')}
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 group hover:bg-primary/5 p-4 rounded-xl transition-all duration-300">
                      <div className="p-3 bg-gradient-to-br from-primary to-blue-600 rounded-lg">
                        <Icon name="MapPin" className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">{t('contact.location')}</p>
                        <p className="text-sm text-muted-foreground">{t('contact.location.subtitle')}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 group hover:bg-primary/5 p-4 rounded-xl transition-all duration-300">
                      <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
                        <Icon name="Mail" className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">{t('contact.email')}</p>
                        <p className="text-sm text-muted-foreground">{t('contact.email.subtitle')}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 group hover:bg-primary/5 p-4 rounded-xl transition-all duration-300">
                      <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg">
                        <Icon name="Phone" className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">{t('contact.phone')}</p>
                        <p className="text-sm text-muted-foreground">{t('contact.phone.subtitle')}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Card className="bg-gradient-to-br from-primary/5 to-blue-500/5 border border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Clock" className="h-6 w-6 text-primary" />
                      {t('contact.hours.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="text-primary font-semibold">9:00 AM - 6:00 PM (HKT)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="text-green-400 font-semibold">10:00 AM - 2:00 PM (HKT)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="text-muted-foreground">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Icon name="Send" className="h-8 w-8 text-primary" />
                    {t('contact.form.title')}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {t('contact.form.subtitle')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-semibold">{t('contact.form.firstName')}</Label>
                      <Input id="firstName" placeholder="John" className="mt-2 bg-background/50 border-primary/20 focus:border-primary" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-semibold">{t('contact.form.lastName')}</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-2 bg-background/50 border-primary/20 focus:border-primary" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold">{t('contact.form.email')}</Label>
                    <Input id="email" type="email" placeholder="john@company.com" className="mt-2 bg-background/50 border-primary/20 focus:border-primary" />
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-sm font-semibold">{t('contact.form.company')}</Label>
                    <Input id="company" placeholder="Your Company" className="mt-2 bg-background/50 border-primary/20 focus:border-primary" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold">{t('contact.form.message')}</Label>
                    <Textarea 
                      id="message" 
                      placeholder={t('contact.form.messagePlaceholder')}
                      rows={5}
                      className="mt-2 bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  
                  <Button className="w-full text-lg py-6 relative overflow-hidden group bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-purple-600">
                    <Icon name="Send" className="mr-3 h-5 w-5" />
                    <span className="relative z-10">{t('contact.form.send')}</span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* News Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <NewsFeed variant="compact" maxItems={6} showFilters={false} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">E</span>
                </div>
                <span className="font-bold text-3xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">ECOL</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Driving digital transformation with AI and cryptographic security from Hong Kong to the world.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="hover:bg-primary/20">
                  <Icon name="Linkedin" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-primary/20">
                  <Icon name="Twitter" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-primary/20">
                  <Icon name="Github" className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-xl text-primary">{t('footer.services')}</h4>
              <ul className="space-y-3">
                {["AI Consulting", "AI Development", "Cryptography", "Digital Security", "Global Support"].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group">
                      <Icon name="ArrowRight" className="mr-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-xl text-primary">{t('footer.company')}</h4>
              <ul className="space-y-3">
                {["About Us", "Our Team", "Careers", "News", "Partners"].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group">
                      <Icon name="ArrowRight" className="mr-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-xl text-primary">{t('footer.legal')}</h4>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service", "GDPR Compliance", "Security", "Cookies"].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group">
                      <Icon name="ArrowRight" className="mr-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>

      {/* Auth Dialogs */}
      <LoginDialog 
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onSwitchToRegister={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
      />
      
      <RegisterDialog 
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        onSwitchToLogin={() => {
          setShowRegister(false);
          setShowLogin(true);
        }}
      />

      <CallbackModal
        isOpen={showCallback}
        onClose={() => setShowCallback(false)}
      />
    </div>
  );
}