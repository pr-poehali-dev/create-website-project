import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();

  return (
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
  );
}