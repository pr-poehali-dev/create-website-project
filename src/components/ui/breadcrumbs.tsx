import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  className?: string;
  items?: BreadcrumbItem[];
}

export function Breadcrumbs({ className, items }: BreadcrumbsProps) {
  const location = useLocation();
  const { t } = useLanguage();
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items;
    
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    
    const breadcrumbs: BreadcrumbItem[] = [
      { label: t('nav.home'), href: '/' }
    ];
    
    const routeMap: Record<string, string> = {
      'about': t('nav.about'),
      'services': t('nav.services'),
      'team': t('nav.team'),
      'news': t('nav.news'),
      'contact': t('nav.contact'),
    };
    
    let currentPath = '';
    pathSegments.forEach(segment => {
      currentPath += `/${segment}`;
      const label = routeMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({
        label,
        href: currentPath
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbItems = generateBreadcrumbs();
  
  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn("flex items-center space-x-2 text-sm text-muted-foreground py-4", className)}
    >
      {breadcrumbItems.map((item, index) => {
        const isLast = index === breadcrumbItems.length - 1;
        
        return (
          <div key={index} className="flex items-center space-x-2">
            {index > 0 && (
              <Icon name="ChevronRight" size={16} className="text-muted-foreground/60" />
            )}
            
            {isLast ? (
              <span className="text-foreground font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link 
                to={item.href || '#'}
                className="hover:text-foreground transition-colors duration-200"
                aria-label={`Go to ${item.label}`}
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}