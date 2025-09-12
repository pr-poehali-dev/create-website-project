import { useLanguage } from "@/contexts/LanguageContext";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

export default function Contact() {
  const { t } = useLanguage();

  const breadcrumbItems = [
    { label: t('nav.home'), href: "/" },
    { label: t('nav.contact') }
  ];

  const contactMethods = [
    {
      icon: "Mail",
      title: t('contact.methods.email.title'),
      description: t('contact.methods.email.description'),
      value: "info@ekol.com"
    },
    {
      icon: "Phone",
      title: t('contact.methods.phone.title'),
      description: t('contact.methods.phone.description'),
      value: "+86 138 0013 8000"
    },
    {
      icon: "MapPin",
      title: t('contact.methods.address.title'),
      description: t('contact.methods.address.description'),
      value: t('contact.methods.address.value')
    },
    {
      icon: "Clock",
      title: t('contact.methods.hours.title'),
      description: t('contact.methods.hours.description'),
      value: t('contact.methods.hours.value')
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      {/* Contact Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>{t('contact.form.title')}</CardTitle>
                <CardDescription>{t('contact.form.description')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">{t('contact.form.name')}</Label>
                    <Input id="name" placeholder={t('contact.form.namePlaceholder')} />
                  </div>
                  <div>
                    <Label htmlFor="email">{t('contact.form.email')}</Label>
                    <Input id="email" type="email" placeholder={t('contact.form.emailPlaceholder')} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                  <Input id="subject" placeholder={t('contact.form.subjectPlaceholder')} />
                </div>
                <div>
                  <Label htmlFor="message">{t('contact.form.message')}</Label>
                  <Textarea id="message" placeholder={t('contact.form.messagePlaceholder')} rows={5} />
                </div>
                <Button className="w-full">
                  <Icon name="Send" size={16} className="mr-2" />
                  {t('contact.form.submit')}
                </Button>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">{t('contact.methods.title')}</h2>
              {contactMethods.map((method, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon name={method.icon as any} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                      <p className="text-sm font-medium">{method.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Реквизиты компании</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-xl">
                  Hong Kong Yalu King International Trading Co., Limited
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                      <Icon name="Building2" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Полное наименование:</h4>
                      <p className="text-muted-foreground">Hong Kong Yalu King International Trading Co., Limited</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                      <Icon name="MapPin" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Юридический адрес:</h4>
                      <p className="text-muted-foreground">Hong Kong Special Administrative Region</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                      <Icon name="FileText" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Регистрация:</h4>
                      <p className="text-muted-foreground">Зарегистрировано в Гонконге</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                      <Icon name="Briefcase" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Вид деятельности:</h4>
                      <p className="text-muted-foreground">Международная торговля и экспорт</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                      <Icon name="Globe" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Регион работы:</h4>
                      <p className="text-muted-foreground">Международные поставки, экспорт в страны СНГ</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                      <Icon name="Mail" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Контактная информация:</h4>
                      <p className="text-muted-foreground">info@ekol.com</p>
                      <p className="text-muted-foreground">+86 138 0013 8000</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('contact.map.title')}</h2>
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-border/50 flex items-center justify-center">
            <div className="text-center">
              <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">{t('contact.map.placeholder')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}