import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEOHead({ 
  title, 
  description, 
  keywords,
  canonicalUrl,
  ogImage = '/og-default.jpg',
  ogType = 'website'
}: SEOHeadProps) {
  const { language } = useLanguage();
  
  useEffect(() => {
    const fullTitle = `${title} | ECOL - AI & Cryptography Solutions`;
    
    document.title = fullTitle;
    
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const updateProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);
    updateMeta('author', 'ECOL - AI & Cryptography Solutions');
    updateMeta('robots', 'index, follow');
    
    document.documentElement.lang = language;
    
    updateProperty('og:title', fullTitle);
    updateProperty('og:description', description);
    updateProperty('og:type', ogType);
    updateProperty('og:image', ogImage);
    updateProperty('og:locale', language === 'en' ? 'en_US' : language === 'ru' ? 'ru_RU' : 'zh_CN');
    
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    updateProperty('twitter:card', 'summary_large_image');
    updateProperty('twitter:title', fullTitle);
    updateProperty('twitter:description', description);
    updateProperty('twitter:image', ogImage);
    
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, language]);

  return null;
}