import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useLanguage } from "@/contexts/LanguageContext";

export function MainFooter() {
  const { t } = useLanguage();

  const serviceLinks = ["AI Consulting", "AI Development", "Cryptography", "Digital Security", "Global Support"];
  const companyLinks = ["About Us", "Our Team", "Careers", "News", "Partners"];
  const legalLinks = ["Privacy Policy", "Terms of Service", "GDPR Compliance", "Security", "Cookies"];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">E</span>
              </div>
              <span className="font-bold text-3xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">EKOL Technologies</span>
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
              {serviceLinks.map((item, i) => (
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
              {companyLinks.map((item, i) => (
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
              {legalLinks.map((item, i) => (
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
  );
}