import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { NewsCard, NewsItem } from './NewsCard';
import { useLanguage } from '@/contexts/LanguageContext';

// Mock data for top tech news
const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'ByteDance Launches Revolutionary AI Chip for Edge Computing',
    description: 'Chinese tech giant ByteDance unveils its latest AI processor designed for edge computing applications, competing directly with NVIDIA and AMD.',
    category: 'ai',
    source: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com',
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    readTime: 4,
    imageUrl: '/img/884ebdd1-21f1-436d-beb9-299b81f1fe21.jpg',
    tags: ['ByteDance', 'AI Chip', 'Edge Computing'],
    isBreaking: true,
    sourceCountry: 'china'
  },
  {
    id: '2',
    title: 'Quantum Cryptography Breakthrough at Alibaba Research',
    description: 'Alibaba DAMO Academy researchers achieve new milestone in quantum key distribution, potentially revolutionizing secure communications.',
    category: 'crypto',
    source: '36Kr',
    sourceUrl: 'https://36kr.com',
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    readTime: 6,
    imageUrl: '/img/101356a7-bb81-4ed8-ab59-d2d70965cdd6.jpg',
    tags: ['Alibaba', 'Quantum', 'Cryptography', 'Security'],
    sourceCountry: 'china'
  },
  {
    id: '3',
    title: 'OpenAI GPT-5 Training Accelerates with Chinese Hardware',
    description: 'OpenAI partners with Chinese semiconductor companies to enhance AI training capabilities, despite ongoing trade restrictions.',
    category: 'ai',
    source: 'Wired',
    sourceUrl: 'https://wired.com',
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    readTime: 8,
    tags: ['OpenAI', 'GPT-5', 'Training', 'Hardware'],
    sourceCountry: 'usa'
  },
  {
    id: '4',
    title: 'Tencent WeChat Introduces End-to-End Encryption',
    description: 'WeChat rolls out advanced encryption features for all messages, strengthening user privacy amid growing security concerns.',
    category: 'security',
    source: 'TechNode',
    sourceUrl: 'https://technode.com',
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    readTime: 5,
    tags: ['Tencent', 'WeChat', 'Encryption', 'Privacy'],
    sourceCountry: 'china'
  },
  {
    id: '5',
    title: 'Huawei HarmonyOS NEXT Challenges Android Dominance',
    description: 'Huawei\'s latest HarmonyOS version gains traction in Chinese market, presenting first real alternative to Google\'s Android.',
    category: 'it',
    source: 'The Verge',
    sourceUrl: 'https://theverge.com',
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    readTime: 7,
    tags: ['Huawei', 'HarmonyOS', 'Android', 'Mobile'],
    sourceCountry: 'global'
  },
  {
    id: '6',
    title: 'Baidu Apollo Self-Driving Fleet Expands to 10 Cities',
    description: 'Chinese search giant Baidu announces major expansion of its autonomous vehicle testing program across major Chinese cities.',
    category: 'ai',
    source: 'China Daily',
    sourceUrl: 'https://chinadaily.com.cn',
    publishedAt: new Date(Date.now() - 18 * 60 * 60 * 1000), // 18 hours ago
    readTime: 6,
    tags: ['Baidu', 'Apollo', 'Self-Driving', 'Autonomous'],
    sourceCountry: 'china'
  },
  {
    id: '7',
    title: 'Apple Reportedly Sourcing AI Chips from Chinese Manufacturers',
    description: 'Despite trade tensions, Apple continues strategic partnerships with Chinese chip manufacturers for its next-generation AI processors.',
    category: 'ai',
    source: 'Reuters',
    sourceUrl: 'https://reuters.com',
    publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    readTime: 5,
    tags: ['Apple', 'AI Chips', 'Manufacturing', 'Trade'],
    sourceCountry: 'global'
  },
  {
    id: '8',
    title: 'Zero-Knowledge Proof Adoption Surges in DeFi Sector',
    description: 'Privacy-preserving cryptographic techniques see massive adoption across decentralized finance platforms worldwide.',
    category: 'crypto',
    source: 'CoinDesk',
    sourceUrl: 'https://coindesk.com',
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    readTime: 9,
    tags: ['Zero-Knowledge', 'DeFi', 'Privacy', 'Blockchain'],
    sourceCountry: 'global'
  }
];

interface NewsFeedProps {
  variant?: 'full' | 'compact' | 'sidebar';
  maxItems?: number;
  showFilters?: boolean;
}

export const NewsFeed = ({ variant = 'full', maxItems = 8, showFilters = true }: NewsFeedProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSource, setSelectedSource] = useState<string>('all');
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(mockNews);
  const { t } = useLanguage();

  useEffect(() => {
    let filtered = mockNews;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(news => news.category === selectedCategory);
    }
    
    if (selectedSource !== 'all') {
      filtered = filtered.filter(news => news.sourceCountry === selectedSource);
    }
    
    setFilteredNews(filtered.slice(0, maxItems));
  }, [selectedCategory, selectedSource, maxItems]);

  const categories = [
    { id: 'all', label: t('news.filter.all'), icon: 'Globe' },
    { id: 'ai', label: t('news.category.ai'), icon: 'Brain' },
    { id: 'crypto', label: t('news.category.crypto'), icon: 'Shield' },
    { id: 'it', label: t('news.category.it'), icon: 'Code' },
    { id: 'security', label: t('news.category.security'), icon: 'Lock' }
  ];

  const sources = [
    { id: 'all', label: t('news.source.all'), flag: '🌍' },
    { id: 'china', label: t('news.source.china'), flag: '🇨🇳' },
    { id: 'usa', label: t('news.source.usa'), flag: '🇺🇸' },
    { id: 'global', label: t('news.source.global'), flag: '🌐' }
  ];

  if (variant === 'sidebar') {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Newspaper" className="h-5 w-5" />
            {t('news.title')}
          </CardTitle>
          <CardDescription>{t('news.subtitle')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {filteredNews.slice(0, 5).map((news) => (
            <NewsCard key={news.id} news={news} variant="compact" />
          ))}
          <Button variant="outline" className="w-full">
            <Icon name="ArrowRight" className="mr-2 h-4 w-4" />
            {t('news.viewAll')}
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Icon name="TrendingUp" className="h-6 w-6 text-primary" />
            {t('news.trending')}
          </h3>
          <Button variant="ghost" size="sm">
            <Icon name="RefreshCw" className="mr-2 h-4 w-4" />
            {t('news.refresh')}
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {filteredNews.slice(0, 6).map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    );
  }

  // Full variant
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Icon name="Newspaper" className="h-8 w-8 text-primary" />
            {t('news.title')}
          </h2>
          <p className="text-muted-foreground mt-2">{t('news.description')}</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            <Icon name="Zap" className="mr-1 h-3 w-3" />
            {t('news.live')}
          </Badge>
          <Button variant="ghost" size="sm">
            <Icon name="RefreshCw" className="mr-2 h-4 w-4" />
            {t('news.refresh')}
          </Button>
        </div>
      </div>

      {showFilters && (
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <div className="flex items-center justify-between mb-6">
            <TabsList className="grid w-full max-w-md grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-1">
                  <Icon name={category.icon as any} className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">{t('news.source.filter')}:</span>
              {sources.map((source) => (
                <Button
                  key={source.id}
                  variant={selectedSource === source.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedSource(source.id)}
                  className="flex items-center space-x-1"
                >
                  <span>{source.flag}</span>
                  <span>{source.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <TabsContent value={selectedCategory} className="mt-0">
            {/* Featured News */}
            {filteredNews.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Icon name="Star" className="h-5 w-5 text-yellow-400" />
                  {t('news.featured')}
                </h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  {filteredNews.slice(0, 2).map((news) => (
                    <NewsCard key={news.id} news={news} variant="featured" />
                  ))}
                </div>
              </div>
            )}

            {/* Latest News Grid */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Clock" className="h-5 w-5 text-blue-400" />
                {t('news.latest')}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.slice(2).map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            </div>

            {filteredNews.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t('news.noResults.title')}</h3>
                <p className="text-muted-foreground">{t('news.noResults.description')}</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      )}

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          <Icon name="Plus" className="mr-2 h-4 w-4" />
          {t('news.loadMore')}
        </Button>
      </div>
    </div>
  );
};