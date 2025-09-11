import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useLanguage } from '@/contexts/LanguageContext';

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  category: 'ai' | 'crypto' | 'it' | 'security';
  source: string;
  sourceUrl: string;
  publishedAt: Date;
  readTime: number;
  imageUrl?: string;
  tags: string[];
  isBreaking?: boolean;
  sourceCountry: 'china' | 'usa' | 'global';
}

interface NewsCardProps {
  news: NewsItem;
  variant?: 'default' | 'compact' | 'featured';
}

export const NewsCard = ({ news, variant = 'default' }: NewsCardProps) => {
  const { t } = useLanguage();
  
  const getCategoryColor = (category: NewsItem['category']) => {
    switch (category) {
      case 'ai': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'crypto': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'it': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'security': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getCountryFlag = (country: NewsItem['sourceCountry']) => {
    switch (country) {
      case 'china': return '🇨🇳';
      case 'usa': return '🇺🇸';
      case 'global': return '🌍';
      default: return '🌍';
    }
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return t('news.time.now');
    if (diffInHours < 24) return `${diffInHours}${t('news.time.hours')}`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}${t('news.time.days')}`;
    
    return date.toLocaleDateString();
  };

  if (variant === 'compact') {
    return (
      <div className="flex items-center space-x-4 p-4 hover:bg-muted/30 transition-colors rounded-lg cursor-pointer group">
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <Badge className={getCategoryColor(news.category)} variant="outline">
              {t(`news.category.${news.category}`)}
            </Badge>
            {news.isBreaking && (
              <Badge className="bg-red-600/20 text-red-400 border-red-500/30 animate-pulse">
                🔥 {t('news.breaking')}
              </Badge>
            )}
          </div>
          <h3 className="font-semibold leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">
            {news.title}
          </h3>
          <div className="flex items-center text-sm text-muted-foreground space-x-3">
            <span className="flex items-center space-x-1">
              <span>{getCountryFlag(news.sourceCountry)}</span>
              <span>{news.source}</span>
            </span>
            <span>•</span>
            <span>{formatTimeAgo(news.publishedAt)}</span>
          </div>
        </div>
        <Icon name="ExternalLink" className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-0 bg-gradient-to-br from-background/80 via-background/90 to-primary/5 backdrop-blur-sm overflow-hidden">
        {news.imageUrl && (
          <div className="relative h-48 overflow-hidden">
            <img 
              src={news.imageUrl} 
              alt={news.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute top-4 left-4 flex space-x-2">
              <Badge className={getCategoryColor(news.category)}>
                {t(`news.category.${news.category}`)}
              </Badge>
              {news.isBreaking && (
                <Badge className="bg-red-600/20 text-red-400 border-red-500/30 animate-pulse">
                  🔥 {t('news.breaking')}
                </Badge>
              )}
            </div>
            <div className="absolute top-4 right-4">
              <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                {getCountryFlag(news.sourceCountry)} {news.source}
              </div>
            </div>
          </div>
        )}
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors">
                {news.title}
              </h3>
              <CardDescription className="text-base leading-relaxed">
                {news.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-muted-foreground space-x-4">
              <span>{formatTimeAgo(news.publishedAt)}</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Icon name="Clock" className="h-3 w-3" />
                <span>{news.readTime} {t('news.readTime')}</span>
              </span>
            </div>
            <Button variant="outline" size="sm" className="group-hover:border-primary group-hover:text-primary">
              <Icon name="ExternalLink" className="mr-2 h-4 w-4" />
              {t('news.readMore')}
            </Button>
          </div>
          
          {news.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {news.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  #{tag}
                </Badge>
              ))}
              {news.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{news.tags.length - 3}
                </Badge>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  // Default variant
  return (
    <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex space-x-2 mb-3">
            <Badge className={getCategoryColor(news.category)}>
              {t(`news.category.${news.category}`)}
            </Badge>
            {news.isBreaking && (
              <Badge className="bg-red-600/20 text-red-400 border-red-500/30 animate-pulse">
                🔥 {t('news.breaking')}
              </Badge>
            )}
          </div>
          <div className="text-sm text-muted-foreground">
            {getCountryFlag(news.sourceCountry)}
          </div>
        </div>
        <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
          {news.title}
        </h3>
        <CardDescription className="leading-relaxed">
          {news.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-3">
            <span className="font-medium">{news.source}</span>
            <span>•</span>
            <span>{formatTimeAgo(news.publishedAt)}</span>
            <span>•</span>
            <span>{news.readTime} {t('news.readTime')}</span>
          </div>
          <Icon name="ExternalLink" className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        {news.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {news.tags.slice(0, 4).map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};