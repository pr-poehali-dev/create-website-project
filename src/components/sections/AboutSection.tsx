import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  const whyChooseItems = [
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
  ];

  return (
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
                {whyChooseItems.map((item, index) => (
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
  );
}