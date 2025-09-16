import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { useAuth, Project } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { NewsFeed } from '@/components/news/NewsFeed';

export default function Dashboard() {
  const { user, projects, logout } = useAuth();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'profile' | 'news'>('overview');

  if (!user) {
    return null;
  }

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'planning': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'development': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'testing': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'on-hold': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getPriorityColor = (priority: Project['priority']) => {
    switch (priority) {
      case 'low': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'high': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'urgent': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getTypeIcon = (type: Project['type']) => {
    switch (type) {
      case 'ai': return 'Brain';
      case 'crypto': return 'Shield';
      case 'consulting': return 'Users';
      case 'development': return 'Code';
      default: return 'Briefcase';
    }
  };

  const totalBudget = projects.reduce((sum, project) => sum + project.budget, 0);
  const totalSpent = projects.reduce((sum, project) => sum + project.spent, 0);
  const activeProjects = projects.filter(p => p.status !== 'completed').length;
  const completedProjects = projects.filter(p => p.status === 'completed').length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-white/10 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="font-bold text-2xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">EKOL Technologies</span>
              </div>
              <div className="hidden md:block h-6 w-px bg-border"></div>
              <h1 className="text-xl font-semibold hidden md:block">{t('dashboard.title')}</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-blue-600 text-white">
                    {user.firstName[0]}{user.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="font-medium">{user.firstName} {user.lastName}</p>
                  <p className="text-sm text-muted-foreground">{user.company}</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={logout}
                className="text-muted-foreground hover:text-primary"
              >
                <Icon name="LogOut" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <nav className="space-y-2">
                  {[
                    { id: 'overview', icon: 'LayoutDashboard', label: t('dashboard.nav.overview') },
                    { id: 'projects', icon: 'Briefcase', label: t('dashboard.nav.projects') },
                    { id: 'news', icon: 'Newspaper', label: t('dashboard.nav.news') },
                    { id: 'profile', icon: 'User', label: t('dashboard.nav.profile') }
                  ].map((item) => (
                    <Button
                      key={item.id}
                      variant={activeTab === item.id ? 'default' : 'ghost'}
                      className={`w-full justify-start ${
                        activeTab === item.id 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-primary/10'
                      }`}
                      onClick={() => setActiveTab(item.id as any)}
                    >
                      <Icon name={item.icon as any} className="mr-3 h-4 w-4" />
                      {item.label}
                    </Button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-primary/20">
                  <h2 className="text-2xl font-bold mb-2">
                    {t('dashboard.welcome')}, {user.firstName}!
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {t('dashboard.welcomeSubtitle')}
                  </p>
                  <Button className="bg-gradient-to-r from-primary to-blue-600">
                    <Icon name="Plus" className="mr-2 h-4 w-4" />
                    {t('dashboard.newProject')}
                  </Button>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">{t('dashboard.stats.active')}</p>
                          <p className="text-3xl font-bold text-primary">{activeProjects}</p>
                        </div>
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Icon name="Activity" className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">{t('dashboard.stats.completed')}</p>
                          <p className="text-3xl font-bold text-green-400">{completedProjects}</p>
                        </div>
                        <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                          <Icon name="CheckCircle" className="h-6 w-6 text-green-400" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">{t('dashboard.stats.budget')}</p>
                          <p className="text-2xl font-bold text-blue-400">
                            ${totalBudget.toLocaleString()}
                          </p>
                        </div>
                        <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                          <Icon name="DollarSign" className="h-6 w-6 text-blue-400" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">{t('dashboard.stats.spent')}</p>
                          <p className="text-2xl font-bold text-purple-400">
                            ${totalSpent.toLocaleString()}
                          </p>
                        </div>
                        <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                          <Icon name="TrendingUp" className="h-6 w-6 text-purple-400" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Projects */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Clock" className="h-5 w-5" />
                      {t('dashboard.recentProjects')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {projects.slice(0, 3).map((project) => (
                        <div key={project.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className="p-2 bg-gradient-to-br from-primary to-blue-600 rounded-lg">
                              <Icon name={getTypeIcon(project.type) as any} className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <h4 className="font-medium">{project.name}</h4>
                              <p className="text-sm text-muted-foreground">{project.description}</p>
                            </div>
                          </div>
                          <div className="text-right space-y-2">
                            <Badge className={getStatusColor(project.status)}>
                              {t(`dashboard.status.${project.status}`)}
                            </Badge>
                            <div className="flex items-center space-x-2">
                              <Progress value={project.progress} className="w-20" />
                              <span className="text-sm text-muted-foreground">{project.progress}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold">{t('dashboard.nav.projects')}</h2>
                  <Button className="bg-gradient-to-r from-primary to-blue-600">
                    <Icon name="Plus" className="mr-2 h-4 w-4" />
                    {t('dashboard.newProject')}
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {projects.map((project) => (
                    <Card key={project.id} className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-gradient-to-br from-primary to-blue-600 rounded-lg">
                              <Icon name={getTypeIcon(project.type) as any} className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                {project.name}
                              </CardTitle>
                              <CardDescription>{project.description}</CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex space-x-2">
                            <Badge className={getStatusColor(project.status)}>
                              {t(`dashboard.status.${project.status}`)}
                            </Badge>
                            <Badge className={getPriorityColor(project.priority)}>
                              {t(`dashboard.priority.${project.priority}`)}
                            </Badge>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">{t('dashboard.progress')}</span>
                            <span className="font-medium">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">{t('dashboard.budget')}</p>
                            <p className="font-medium">${project.budget.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">{t('dashboard.spent')}</p>
                            <p className="font-medium">${project.spent.toLocaleString()}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4">
                          <p className="text-sm text-muted-foreground">
                            Started: {project.startDate.toLocaleDateString()}
                          </p>
                          <Button variant="outline" size="sm">
                            <Icon name="Eye" className="mr-2 h-4 w-4" />
                            {t('dashboard.viewDetails')}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">{t('dashboard.nav.profile')}</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>{t('dashboard.profile.personal')}</CardTitle>
                      <CardDescription>{t('dashboard.profile.personalDesc')}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-6">
                        <Avatar className="h-20 w-20">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback className="bg-gradient-to-br from-primary to-blue-600 text-white text-2xl">
                            {user.firstName[0]}{user.lastName[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-2xl font-bold">{user.firstName} {user.lastName}</h3>
                          <p className="text-muted-foreground">{user.email}</p>
                          {user.company && (
                            <p className="text-sm text-primary">{user.company}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            {t('auth.firstName')}
                          </label>
                          <p className="font-medium">{user.firstName}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            {t('auth.lastName')}
                          </label>
                          <p className="font-medium">{user.lastName}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            {t('auth.email')}
                          </label>
                          <p className="font-medium">{user.email}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            {t('auth.company')}
                          </label>
                          <p className="font-medium">{user.company || 'Not specified'}</p>
                        </div>
                      </div>

                      <Button className="w-full">
                        <Icon name="Edit" className="mr-2 h-4 w-4" />
                        {t('dashboard.profile.edit')}
                      </Button>
                    </CardContent>
                  </Card>

                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">{t('dashboard.profile.activity')}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-green-500/10 rounded-lg">
                              <Icon name="Calendar" className="h-4 w-4 text-green-400" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Member since</p>
                              <p className="text-xs text-muted-foreground">
                                {user.createdAt.toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                              <Icon name="Briefcase" className="h-4 w-4 text-blue-400" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{projects.length} Projects</p>
                              <p className="text-xs text-muted-foreground">Total projects</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">{t('dashboard.profile.settings')}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <Button variant="outline" className="w-full justify-start">
                            <Icon name="Bell" className="mr-2 h-4 w-4" />
                            Notifications
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <Icon name="Lock" className="mr-2 h-4 w-4" />
                            Security
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <Icon name="Globe" className="mr-2 h-4 w-4" />
                            Language
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'news' && (
              <div className="space-y-6">
                <NewsFeed variant="full" maxItems={12} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}