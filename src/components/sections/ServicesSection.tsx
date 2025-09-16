import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
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
  ];

  const advantages = [
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
  ];

  const processSteps = [
    { step: "1", title: "Discovery & Consultation", icon: "Search", color: "from-red-500 to-pink-500" },
    { step: "2", title: "Strategy & Roadmap", icon: "Map", color: "from-yellow-500 to-orange-500" },
    { step: "3", title: "Development & Testing", icon: "Code", color: "from-green-500 to-emerald-500" },
    { step: "4", title: "Deployment & Integration", icon: "Rocket", color: "from-blue-500 to-cyan-500" },
    { step: "5", title: "Support & Evolution", icon: "LifeBuoy", color: "from-purple-500 to-pink-500" }
  ];

  const partnerSections = [
    {
      title: t('portfolio.partners.ai'),
      icon: "Cpu",
      color: "text-blue-400",
      dotColor: "bg-primary",
      partners: ["Microsoft Azure AI", "OpenAI", "Meta (Llama)", "Amazon Web Services (AWS)"]
    },
    {
      title: t('portfolio.partners.cloud'),
      icon: "Cloud",
      color: "text-green-400", 
      dotColor: "bg-green-400",
      partners: ["Google Cloud Platform", "Palo Alto Networks", "Cloudflare"]
    },
    {
      title: t('portfolio.partners.chinese'),
      icon: "Zap",
      color: "text-purple-400",
      dotColor: "bg-purple-400", 
      partners: ["Huawei", "Tencent Cloud", "Baidu AI", "SenseTime"]
    }
  ];

  const aiServices = [
    "Custom & Fine-Tuned LLM Solutions",
    "Intelligent Process Automation",
    "Voice AI & Speech Recognition", 
    "AI for Manufacturing & QC",
    "Industry-Specific AI Solutions"
  ];

  const cryptoServices = [
    "Secure Application Development",
    "Public Key Infrastructure (PKI)",
    "Global Compliance & Data Protection",
    "Secure Document Workflow & e-Signatures",
    "Cryptography for Blockchain & FinTech",
    "Security Audit & Advisory"
  ];

  return (
    <>
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
            {services.map((service, index) => (
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
            {advantages.map((advantage, index) => (
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
                  {partnerSections.map((section, index) => (
                    <div key={index} className="group">
                      <h4 className={`font-bold mb-6 ${section.color} text-lg flex items-center`}>
                        <Icon name={section.icon as any} className="mr-2 h-5 w-5" />
                        {section.title}
                      </h4>
                      <ul className="space-y-3">
                        {section.partners.map((partner, i) => (
                          <li key={i} className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300">
                            <div className={`w-2 h-2 ${section.dotColor} rounded-full mr-3 group-hover:animate-pulse`}></div>
                            {partner}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
                  {aiServices.map((service, i) => (
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
                  {cryptoServices.map((service, i) => (
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
                {processSteps.map((phase, index) => (
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
    </>
  );
}