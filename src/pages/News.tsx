import { useLanguage } from "@/contexts/LanguageContext";
import { NewsFeed } from "@/components/news/NewsFeed";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export default function News() {
  const { t } = useLanguage();

  const breadcrumbItems = [
    { label: t('nav.home'), href: "/" },
    { label: t('nav.news') }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      {/* News Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('news.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('news.subtitle')}
          </p>
        </div>
      </section>

      {/* News Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <NewsFeed />
        </div>
      </section>
    </div>
  );
}