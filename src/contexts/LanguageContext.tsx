import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ru' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',

    // Hero Section
    'hero.title': 'Drive Digital Transformation with AI and Cryptographic Security',
    'hero.subtitle': 'ECOL delivers cutting-edge Artificial Intelligence and cryptographic solutions from Hong Kong to the world. We empower businesses to innovate, optimize operations, and build unbreakable trust in the digital age.',
    'hero.cta1': 'Discuss Your Project',
    'hero.cta2': 'Request a Consultation',
    'hero.stat1': 'Projects Delivered',
    'hero.stat2': 'Global Clients',
    'hero.stat3': 'Uptime SLA',
    'hero.stat4': 'Support',

    // Services Section
    'services.title': 'Our Core Services',
    'services.subtitle': 'Comprehensive solutions designed for global markets with enterprise-grade reliability',
    'services.ai.title': 'AI Consulting & Strategy',
    'services.ai.description': 'Strategic guidance for AI implementation and digital transformation initiatives.',
    'services.dev.title': 'AI Development & Integration',
    'services.dev.description': 'Custom AI solutions tailored to your business needs and technical requirements.',
    'services.security.title': 'Cryptography & Digital Security',
    'services.security.description': 'Advanced security solutions and cryptographic implementations for enterprise.',
    'services.global.title': 'Global Support & Scaling',
    'services.global.description': 'Worldwide deployment and scaling with international compliance standards.',

    // Advantages Section
    'advantages.title': 'Why Choose ECOL',
    'advantages.subtitle': 'Strategic advantages that set us apart',
    'advantages.efficiency.title': 'Unmatched Efficiency',
    'advantages.efficiency.description': 'Streamlined processes and rapid deployment',
    'advantages.cost.title': 'Significant Cost Reduction',
    'advantages.cost.description': 'Optimized solutions that reduce operational costs',
    'advantages.decisions.title': 'Data-Driven Decisions',
    'advantages.decisions.description': 'Advanced analytics for informed business choices',
    'advantages.compliance.title': 'Global Compliance & Trust',
    'advantages.compliance.description': 'GDPR, APAC regulations and international standards',

    // Portfolio Section
    'portfolio.title': 'Our Global Service Portfolio',
    'portfolio.subtitle': 'End-to-end development and integration services, tailored to meet the challenges and regulations of international markets',
    'portfolio.ecosystem.title': 'Technology & Partnership Ecosystem',
    'portfolio.ecosystem.subtitle': 'Strategic partnerships with leading global technology providers, ensuring best-in-class solutions and maximum reliability for our clients',
    'portfolio.partners.ai': 'International AI Leaders',
    'portfolio.partners.cloud': 'Global Cloud & Security Giants',
    'portfolio.partners.chinese': 'Chinese Tech Innovators',
    'portfolio.ai.title': 'Artificial Intelligence & Machine Learning',
    'portfolio.crypto.title': 'Cryptographic Services & Digital Security',
    'portfolio.process.title': 'Our Global Process',

    // About Section
    'about.title': 'ECOL: Your Global Technology Partner',
    'about.location': 'Based in Hong Kong',
    'about.subtitle': 'A team of experts specializing in AI and cryptographic security, providing innovative, world-class solutions for businesses operating on the international stage',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To empower companies worldwide to streamline operations, make smarter decisions, and protect their critical assets through transformative and secure digital technologies, delivered to the highest standard of excellence.',
    'about.hub.title': 'Strategic Hong Kong Hub',
    'about.hub.description': 'Our strategic location in Hong Kong and collaborative relationships with major international and Chinese technology firms provide us with unique market insights, advanced technological capabilities, and robust infrastructure.',
    'about.why.title': 'Why Choose ECOL?',

    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Partner with us to leverage world-class technology and expertise. Let\'s build a secure and intelligent future for your business, together.',
    'contact.info.title': 'Contact Information',
    'contact.location': 'Hong Kong SAR, China',
    'contact.location.subtitle': 'Global Tech Hub',
    'contact.email': 'contact@ecol.tech',
    'contact.email.subtitle': 'Business Inquiries',
    'contact.phone': '+852 1234 5678',
    'contact.phone.subtitle': '24/7 Support',
    'contact.hours.title': 'Business Hours',
    'contact.form.title': 'Send us a Message',
    'contact.form.subtitle': 'We\'ll get back to you within 24 hours',
    'contact.form.firstName': 'First Name',
    'contact.form.lastName': 'Last Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Tell us about your project and how we can help you achieve your goals...',
    'contact.form.send': 'Send Message',

    // Footer
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.copyright': '2024 ECOL. All rights reserved. | Made with ❤️ in Hong Kong',

    // Auth
    'auth.login.title': 'Sign In',
    'auth.login.subtitle': 'Access your ECOL dashboard',
    'auth.login.email': 'Email',
    'auth.login.password': 'Password',
    'auth.login.submit': 'Sign In',
    'auth.login.loading': 'Signing in...',
    'auth.login.error': 'Invalid credentials',
    'auth.login.noAccount': "Don't have an account?",
    
    'auth.register.title': 'Create Account',
    'auth.register.subtitle': 'Join ECOL to manage your projects',
    'auth.register.submit': 'Create Account',
    'auth.register.loading': 'Creating account...',
    'auth.register.error': 'Registration failed',
    'auth.register.hasAccount': 'Already have an account?',
    'auth.register.passwordMismatch': 'Passwords do not match',
    
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.firstName': 'First Name',
    'auth.lastName': 'Last Name',
    'auth.company': 'Company',
    'auth.optional': 'optional',

    // Dashboard
    'dashboard.title': 'Client Dashboard',
    'dashboard.welcome': 'Welcome',
    'dashboard.welcomeSubtitle': 'Here\'s an overview of your projects and progress with ECOL.',
    'dashboard.newProject': 'New Project',
    'dashboard.nav.overview': 'Overview',
    'dashboard.nav.projects': 'Projects',
    'dashboard.nav.profile': 'Profile',
    'dashboard.stats.active': 'Active Projects',
    'dashboard.stats.completed': 'Completed',
    'dashboard.stats.budget': 'Total Budget',
    'dashboard.stats.spent': 'Total Spent',
    'dashboard.recentProjects': 'Recent Projects',
    'dashboard.progress': 'Progress',
    'dashboard.budget': 'Budget',
    'dashboard.spent': 'Spent',
    'dashboard.viewDetails': 'View Details',
    
    'dashboard.status.planning': 'Planning',
    'dashboard.status.development': 'Development',
    'dashboard.status.testing': 'Testing',
    'dashboard.status.completed': 'Completed',
    'dashboard.status.on-hold': 'On Hold',
    
    'dashboard.priority.low': 'Low',
    'dashboard.priority.medium': 'Medium',
    'dashboard.priority.high': 'High',
    'dashboard.priority.urgent': 'Urgent',
    
    'dashboard.type.ai': 'AI & ML',
    'dashboard.type.crypto': 'Cryptography',
    'dashboard.type.consulting': 'Consulting',
    'dashboard.type.development': 'Development',
    
    'dashboard.profile.personal': 'Personal Information',
    'dashboard.profile.personalDesc': 'Manage your account details and preferences',
    'dashboard.profile.activity': 'Account Activity',
    'dashboard.profile.settings': 'Quick Settings',
    'dashboard.profile.edit': 'Edit Profile',
    
    'dashboard.project.create': 'Create New Project',
    'dashboard.project.edit': 'Edit Project',
    'dashboard.project.createDesc': 'Start a new project with ECOL',
    'dashboard.project.editDesc': 'Update project details',
    'dashboard.project.name': 'Project Name',
    'dashboard.project.description': 'Description',
    'dashboard.project.descPlaceholder': 'Describe your project goals and requirements...',
    'dashboard.project.type': 'Project Type',
    'dashboard.project.priority': 'Priority',
    'dashboard.project.budget': 'Budget',
    'dashboard.project.endDate': 'Target End Date',
    'dashboard.project.saving': 'Saving...',
    'dashboard.project.update': 'Update Project',
    'dashboard.project.cancel': 'Cancel',
    'dashboard.project.error': 'Failed to save project'
  },

  ru: {
    // Navigation
    'nav.services': 'Услуги',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',
    'nav.getStarted': 'Начать',

    // Hero Section
    'hero.title': 'Ускорьте цифровую трансформацию с ИИ и криптографической безопасностью',
    'hero.subtitle': 'ECOL предлагает передовые решения в области искусственного интеллекта и криптографии из Гонконга для всего мира. Мы помогаем бизнесу внедрять инновации, оптимизировать операции и выстраивать безупречное доверие в цифровую эпоху.',
    'hero.cta1': 'Обсудить проект',
    'hero.cta2': 'Заказать консультацию',
    'hero.stat1': 'Проектов выполнено',
    'hero.stat2': 'Глобальных клиентов',
    'hero.stat3': 'SLA доступности',
    'hero.stat4': 'Поддержка',

    // Services Section
    'services.title': 'Наши основные услуги',
    'services.subtitle': 'Комплексные решения, разработанные для глобальных рынков с корпоративной надежностью',
    'services.ai.title': 'Консалтинг и стратегия ИИ',
    'services.ai.description': 'Стратегическое руководство по внедрению ИИ и инициативам цифровой трансформации.',
    'services.dev.title': 'Разработка и интеграция ИИ',
    'services.dev.description': 'Индивидуальные решения ИИ, адаптированные к вашим бизнес-потребностям и техническим требованиям.',
    'services.security.title': 'Криптография и цифровая безопасность',
    'services.security.description': 'Передовые решения безопасности и криптографические реализации для предприятий.',
    'services.global.title': 'Глобальная поддержка и масштабирование',
    'services.global.description': 'Всемирное развертывание и масштабирование с международными стандартами соответствия.',

    // Advantages Section
    'advantages.title': 'Почему выбирают ECOL',
    'advantages.subtitle': 'Стратегические преимущества, которые выделяют нас',
    'advantages.efficiency.title': 'Непревзойденная эффективность',
    'advantages.efficiency.description': 'Оптимизированные процессы и быстрое развертывание',
    'advantages.cost.title': 'Значительное снижение затрат',
    'advantages.cost.description': 'Оптимизированные решения, снижающие операционные расходы',
    'advantages.decisions.title': 'Решения на основе данных',
    'advantages.decisions.description': 'Продвинутая аналитика для обоснованных бизнес-решений',
    'advantages.compliance.title': 'Глобальное соответствие и доверие',
    'advantages.compliance.description': 'GDPR, регулирование APAC и международные стандарты',

    // Portfolio Section
    'portfolio.title': 'Наш глобальный портфель услуг',
    'portfolio.subtitle': 'Услуги полного цикла разработки и интеграции, адаптированные к вызовам и регулированию международных рынков',
    'portfolio.ecosystem.title': 'Технологическая и партнерская экосистема',
    'portfolio.ecosystem.subtitle': 'Стратегические партнерства с ведущими мировыми поставщиками технологий, обеспечивающие решения высшего класса и максимальную надежность для наших клиентов',
    'portfolio.partners.ai': 'Международные лидеры ИИ',
    'portfolio.partners.cloud': 'Глобальные гиганты облачных технологий и безопасности',
    'portfolio.partners.chinese': 'Китайские технологические инноваторы',
    'portfolio.ai.title': 'Искусственный интеллект и машинное обучение',
    'portfolio.crypto.title': 'Криптографические услуги и цифровая безопасность',
    'portfolio.process.title': 'Наш глобальный процесс',

    // About Section
    'about.title': 'ECOL: Ваш глобальный технологический партнер',
    'about.location': 'Базируется в Гонконге',
    'about.subtitle': 'Команда экспертов, специализирующаяся на ИИ и криптографической безопасности, предоставляющая инновационные решения мирового класса для бизнеса, работающего на международной арене',
    'about.mission.title': 'Наша миссия',
    'about.mission.description': 'Давать компаниям по всему миру возможность оптимизировать операции, принимать более обоснованные решения и защищать свои критически важные активы с помощью преобразующих и безопасных цифровых технологий, предоставляемых по высшему стандарту качества.',
    'about.hub.title': 'Стратегический хаб в Гонконге',
    'about.hub.description': 'Наше стратегическое расположение в Гонконге и сотрудничество с крупными международными и китайскими технологическими компаниями предоставляют нам уникальные рыночные insights, передовые технологические возможности и надежную инфраструктуру.',
    'about.why.title': 'Почему выбирают ECOL?',

    // Contact Section
    'contact.title': 'Связаться с нами',
    'contact.subtitle': 'Станьте нашим партнером, чтобы использовать технологии и экспертизу мирового уровня. Давайте вместе построим безопасное и интеллектуальное будущее для вашего бизнеса.',
    'contact.info.title': 'Контактная информация',
    'contact.location': 'Гонконг, Китай',
    'contact.location.subtitle': 'Глобальный технологический хаб',
    'contact.email': 'contact@ecol.tech',
    'contact.email.subtitle': 'Деловые запросы',
    'contact.phone': '+852 1234 5678',
    'contact.phone.subtitle': 'Поддержка 24/7',
    'contact.hours.title': 'Часы работы',
    'contact.form.title': 'Отправить сообщение',
    'contact.form.subtitle': 'Мы свяжемся с вами в течение 24 часов',
    'contact.form.firstName': 'Имя',
    'contact.form.lastName': 'Фамилия',
    'contact.form.email': 'Электронная почта',
    'contact.form.company': 'Компания',
    'contact.form.message': 'Сообщение',
    'contact.form.messagePlaceholder': 'Расскажите нам о вашем проекте и как мы можем помочь вам достичь ваших целей...',
    'contact.form.send': 'Отправить сообщение',

    // Footer
    'footer.services': 'Услуги',
    'footer.company': 'Компания',
    'footer.legal': 'Юридическое',
    'footer.copyright': '2024 ECOL. Все права защищены. | Создано с ❤️ в Гонконге'
  },

  zh: {
    // Navigation
    'nav.services': '服务',
    'nav.about': '关于我们',
    'nav.contact': '联系我们',
    'nav.getStarted': '开始',

    // Hero Section
    'hero.title': '借助人工智能和密码学安全推动数字化转型',
    'hero.subtitle': 'ECOL 从香港向全世界提供尖端的人工智能和密码学解决方案。我们帮助企业创新、优化运营，并在数字时代建立不可动摇的信任。',
    'hero.cta1': '讨论您的项目',
    'hero.cta2': '申请咨询',
    'hero.stat1': '已交付项目',
    'hero.stat2': '全球客户',
    'hero.stat3': '运行时间 SLA',
    'hero.stat4': '支持',

    // Services Section
    'services.title': '我们的核心服务',
    'services.subtitle': '为全球市场设计的企业级可靠性综合解决方案',
    'services.ai.title': 'AI 咨询与策略',
    'services.ai.description': '为 AI 实施和数字化转型计划提供战略指导。',
    'services.dev.title': 'AI 开发与集成',
    'services.dev.description': '根据您的业务需求和技术要求定制的 AI 解决方案。',
    'services.security.title': '密码学与数字安全',
    'services.security.description': '企业级先进安全解决方案和密码学实施。',
    'services.global.title': '全球支持与扩展',
    'services.global.description': '符合国际合规标准的全球部署和扩展。',

    // Advantages Section
    'advantages.title': '为什么选择 ECOL',
    'advantages.subtitle': '让我们脱颖而出的战略优势',
    'advantages.efficiency.title': '无与伦比的效率',
    'advantages.efficiency.description': '精简流程和快速部署',
    'advantages.cost.title': '显著降低成本',
    'advantages.cost.description': '降低运营成本的优化解决方案',
    'advantages.decisions.title': '数据驱动的决策',
    'advantages.decisions.description': '用于明智商业选择的先进分析',
    'advantages.compliance.title': '全球合规与信任',
    'advantages.compliance.description': 'GDPR、APAC 法规和国际标准',

    // Portfolio Section
    'portfolio.title': '我们的全球服务组合',
    'portfolio.subtitle': '端到端开发和集成服务，专为满足国际市场的挑战和法规而量身定制',
    'portfolio.ecosystem.title': '技术与合作伙伴生态系统',
    'portfolio.ecosystem.subtitle': '与领先的全球技术提供商建立战略合作伙伴关系，确保为我们的客户提供一流的解决方案和最大的可靠性',
    'portfolio.partners.ai': '国际 AI 领导者',
    'portfolio.partners.cloud': '全球云与安全巨头',
    'portfolio.partners.chinese': '中国科技创新者',
    'portfolio.ai.title': '人工智能与机器学习',
    'portfolio.crypto.title': '密码学服务与数字安全',
    'portfolio.process.title': '我们的全球流程',

    // About Section
    'about.title': 'ECOL：您的全球技术合作伙伴',
    'about.location': '总部位于香港',
    'about.subtitle': '专门从事 AI 和密码学安全的专家团队，为在国际舞台上运营的企业提供创新的世界级解决方案',
    'about.mission.title': '我们的使命',
    'about.mission.description': '通过变革性和安全的数字技术，让全世界的公司能够简化运营、做出更明智的决策并保护其关键资产，以最高的卓越标准交付。',
    'about.hub.title': '香港战略枢纽',
    'about.hub.description': '我们在香港的战略位置以及与主要国际和中国技术公司的合作关系为我们提供了独特的市场洞察、先进的技术能力和强大的基础设施。',
    'about.why.title': '为什么选择 ECOL？',

    // Contact Section
    'contact.title': '联系我们',
    'contact.subtitle': '与我们合作，利用世界级的技术和专业知识。让我们一起为您的企业构建安全智能的未来。',
    'contact.info.title': '联系信息',
    'contact.location': '中国香港特别行政区',
    'contact.location.subtitle': '全球科技中心',
    'contact.email': 'contact@ecol.tech',
    'contact.email.subtitle': '商务咨询',
    'contact.phone': '+852 1234 5678',
    'contact.phone.subtitle': '24/7 支持',
    'contact.hours.title': '营业时间',
    'contact.form.title': '发送消息',
    'contact.form.subtitle': '我们将在 24 小时内回复您',
    'contact.form.firstName': '名字',
    'contact.form.lastName': '姓氏',
    'contact.form.email': '电子邮件',
    'contact.form.company': '公司',
    'contact.form.message': '消息',
    'contact.form.messagePlaceholder': '告诉我们您的项目以及我们如何帮助您实现目标...',
    'contact.form.send': '发送消息',

    // Footer
    'footer.services': '服务',
    'footer.company': '公司',
    'footer.legal': '法律',
    'footer.copyright': '2024 ECOL。版权所有。| 在香港用 ❤️ 制作'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;