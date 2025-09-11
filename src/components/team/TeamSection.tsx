import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useLanguage } from '@/contexts/LanguageContext';

export const TeamSection = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      id: 1,
      name: '李威 (Li Wei)',
      nameEn: 'Li Wei',
      position: t('team.positions.cto'),
      image: '/img/d9b706d7-5b65-425d-87e1-bd3ea0cb5306.jpg',
      specialization: 'AI Architecture',
      experience: '8+ years',
      location: 'Shenzhen',
      expertise: ['Machine Learning', 'Neural Networks', 'Deep Learning'],
      languages: ['Chinese', 'English']
    },
    {
      id: 2,
      name: '张美丽 (Zhang Meili)',
      nameEn: 'Zhang Meili',
      position: t('team.positions.dataScientist'),
      image: '/img/17069e61-1e95-4704-a5b7-0d48abda4384.jpg',
      specialization: 'Data Analytics',
      experience: '6+ years',
      location: 'Beijing',
      expertise: ['Big Data', 'Statistical Analysis', 'Predictive Modeling'],
      languages: ['Chinese', 'English']
    },
    {
      id: 3,
      name: '王建华 (Wang Jianhua)',
      nameEn: 'Wang Jianhua',
      position: t('team.positions.architect'),
      image: '/img/918023b1-c63b-48c5-90f8-d66faac66070.jpg',
      specialization: 'System Architecture',
      experience: '10+ years',
      location: 'Shanghai',
      expertise: ['Microservices', 'Cloud Architecture', 'Scalability'],
      languages: ['Chinese', 'English']
    },
    {
      id: 4,
      name: '陈小红 (Chen Xiaohong)',
      nameEn: 'Chen Xiaohong',
      position: t('team.positions.security'),
      image: '/img/d9b706d7-5b65-425d-87e1-bd3ea0cb5306.jpg',
      specialization: 'Cybersecurity',
      experience: '7+ years',
      location: 'Guangzhou',
      expertise: ['Encryption', 'Network Security', 'Threat Analysis'],
      languages: ['Chinese', 'English']
    },
    {
      id: 5,
      name: '刘志强 (Liu Zhiqiang)',
      nameEn: 'Liu Zhiqiang',
      position: t('team.positions.blockchain'),
      image: '/img/17069e61-1e95-4704-a5b7-0d48abda4384.jpg',
      specialization: 'Blockchain Development',
      experience: '5+ years',
      location: 'Hangzhou',
      expertise: ['Smart Contracts', 'DeFi', 'Consensus Algorithms'],
      languages: ['Chinese', 'English']
    },
    {
      id: 6,
      name: '赵雅琴 (Zhao Yaqin)',
      nameEn: 'Zhao Yaqin',
      position: t('team.positions.nlp'),
      image: '/img/918023b1-c63b-48c5-90f8-d66faac66070.jpg',
      specialization: 'Natural Language Processing',
      experience: '4+ years',
      location: 'Xi\'an',
      expertise: ['NLP', 'Language Models', 'Text Processing'],
      languages: ['Chinese', 'English', 'Japanese']
    },
    {
      id: 7,
      name: '孙浩然 (Sun Haoran)',
      nameEn: 'Sun Haoran',
      position: t('team.positions.devops'),
      image: '/img/d9b706d7-5b65-425d-87e1-bd3ea0cb5306.jpg',
      specialization: 'DevOps & Infrastructure',
      experience: '6+ years',
      location: 'Chengdu',
      expertise: ['Kubernetes', 'CI/CD', 'Monitoring'],
      languages: ['Chinese', 'English']
    },
    {
      id: 8,
      name: '马晓敏 (Ma Xiaomin)',
      nameEn: 'Ma Xiaomin',
      position: t('team.positions.pm'),
      image: '/img/918023b1-c63b-48c5-90f8-d66faac66070.jpg',
      specialization: 'Technical Project Management',
      experience: '9+ years',
      location: 'Hong Kong',
      expertise: ['Agile', 'Stakeholder Management', 'Risk Assessment'],
      languages: ['Chinese', 'English', 'Cantonese']
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="team">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-blue-400 bg-clip-text text-transparent">
            {t('team.title')}
          </h2>
          <p className="text-muted-foreground text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            {t('team.subtitle')}
          </p>
          
          {/* China Focus Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600/20 to-yellow-500/20 border border-red-500/30 rounded-full px-6 py-3 mb-12">
            <span className="text-2xl">🇨🇳</span>
            <span className="font-semibold text-red-400">{t('team.chinaFocus')}</span>
            <Icon name="Sparkles" className="h-4 w-4 text-yellow-400" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-0 bg-gradient-to-br from-background/80 via-background/90 to-primary/5 backdrop-blur-sm hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-center">
                  {/* Avatar */}
                  <div className="relative mx-auto mb-6 w-24 h-24">
                    <img 
                      src={member.image} 
                      alt={member.nameEn}
                      className="w-full h-full object-cover rounded-full border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                      🇨🇳
                    </div>
                  </div>

                  {/* Name & Position */}
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {member.nameEn}
                  </p>
                  <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                    {member.position}
                  </Badge>

                  {/* Location & Experience */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <Icon name="MapPin" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{member.location}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <Icon name="Clock" className="h-4 w-4 text-green-400" />
                      <span className="text-muted-foreground">{member.experience}</span>
                    </div>
                  </div>

                  {/* Specialization */}
                  <div className="bg-primary/10 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-primary mb-2">{t('team.specialization')}:</p>
                    <p className="text-xs text-muted-foreground">{member.specialization}</p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-medium text-muted-foreground">{t('team.expertise')}:</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.expertise.slice(0, 2).map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs px-2 py-0.5">
                          {skill}
                        </Badge>
                      ))}
                      {member.expertise.length > 2 && (
                        <Badge variant="outline" className="text-xs px-2 py-0.5">
                          +{member.expertise.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex items-center justify-center space-x-1">
                    <Icon name="Languages" className="h-4 w-4 text-blue-400" />
                    <span className="text-xs text-muted-foreground">
                      {member.languages.join(', ')}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon name="Users" className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">8</div>
            <p className="text-sm text-muted-foreground">{t('team.stats.experts')}</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon name="Award" className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
            <p className="text-sm text-muted-foreground">{t('team.stats.experience')}</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon name="Globe" className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
            <p className="text-sm text-muted-foreground">{t('team.stats.cities')}</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🇨🇳</span>
            </div>
            <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
            <p className="text-sm text-muted-foreground">{t('team.stats.chinese')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};