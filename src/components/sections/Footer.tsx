import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

import Icon from "@/components/ui/icon";

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    company: [
      { label: t('nav.about'), href: "/about" },
      { label: t('nav.services'), href: "/services" },
      { label: t('nav.team'), href: "/team" },
      { label: t('nav.news'), href: "/news" }
    ],
    support: [
      { label: t('nav.contact'), href: "/contact" },
      { label: t('footer.support.help'), href: "/help" },
      { label: t('footer.support.privacy'), href: "/privacy" },
      { label: t('footer.support.terms'), href: "/terms" }
    ],
    social: [
      { label: "WeChat", icon: "MessageCircle", href: "#" },
      { label: "LinkedIn", icon: "Linkedin", href: "#" },
      { label: "Twitter", icon: "Twitter", href: "#" },
      { label: "GitHub", icon: "Github", href: "#" }
    ]
  };

  return (
    <footer className="bg-muted/30 border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="Rocket" size={32} className="text-primary" />
              <span className="text-xl font-bold">EKOL Technologies</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon name={social.icon as any} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.support.title')}</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@ekol-tech.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+86 138 0013 8000</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="MapPin" size={16} className="mt-0.5" />
                <span>{t('footer.address')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 EKOL Technologies. {t('footer.rights')}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link 
              to="/privacy" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('footer.support.privacy')}
            </Link>
            <Link 
              to="/terms" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('footer.support.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}