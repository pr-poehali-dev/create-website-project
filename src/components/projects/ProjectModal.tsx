import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useAuth, Project } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project?: Project;
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [formData, setFormData] = useState({
    name: project?.name || '',
    description: project?.description || '',
    type: project?.type || 'development',
    priority: project?.priority || 'medium',
    budget: project?.budget?.toString() || '',
    endDate: project?.endDate?.toISOString().split('T')[0] || ''
  });
  const [error, setError] = useState('');
  const { createProject, updateProject, isLoading } = useAuth();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const projectData = {
        name: formData.name,
        description: formData.description,
        type: formData.type as Project['type'],
        priority: formData.priority as Project['priority'],
        budget: parseFloat(formData.budget),
        endDate: formData.endDate ? new Date(formData.endDate) : undefined,
        status: 'planning' as const,
        progress: 0,
        spent: 0
      };

      if (project) {
        await updateProject(project.id, projectData);
      } else {
        await createProject(projectData);
      }
      
      onClose();
      setFormData({
        name: '',
        description: '',
        type: 'development',
        priority: 'medium',
        budget: '',
        endDate: ''
      });
    } catch (err) {
      setError(t('dashboard.project.error'));
    }
  };

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const projectTypes = [
    { value: 'ai', label: t('dashboard.type.ai'), icon: 'Brain' },
    { value: 'crypto', label: t('dashboard.type.crypto'), icon: 'Shield' },
    { value: 'consulting', label: t('dashboard.type.consulting'), icon: 'Users' },
    { value: 'development', label: t('dashboard.type.development'), icon: 'Code' }
  ];

  const priorities = [
    { value: 'low', label: t('dashboard.priority.low'), color: 'text-gray-400' },
    { value: 'medium', label: t('dashboard.priority.medium'), color: 'text-yellow-400' },
    { value: 'high', label: t('dashboard.priority.high'), color: 'text-orange-400' },
    { value: 'urgent', label: t('dashboard.priority.urgent'), color: 'text-red-400' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            {project ? t('dashboard.project.edit') : t('dashboard.project.create')}
          </DialogTitle>
          <DialogDescription>
            {project ? t('dashboard.project.editDesc') : t('dashboard.project.createDesc')}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Label htmlFor="name">{t('dashboard.project.name')}</Label>
              <Input
                id="name"
                placeholder="AI Customer Support Bot"
                value={formData.name}
                onChange={(e) => handleChange('name')(e.target.value)}
                required
                className="mt-2"
              />
            </div>

            <div className="col-span-2">
              <Label htmlFor="description">{t('dashboard.project.description')}</Label>
              <Textarea
                id="description"
                placeholder={t('dashboard.project.descPlaceholder')}
                value={formData.description}
                onChange={(e) => handleChange('description')(e.target.value)}
                rows={3}
                className="mt-2"
              />
            </div>

            <div>
              <Label>{t('dashboard.project.type')}</Label>
              <Select value={formData.type} onValueChange={handleChange('type')}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {projectTypes.map(type => (
                    <SelectItem key={type.value} value={type.value}>
                      <div className="flex items-center space-x-2">
                        <Icon name={type.icon as any} className="h-4 w-4" />
                        <span>{type.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>{t('dashboard.project.priority')}</Label>
              <Select value={formData.priority} onValueChange={handleChange('priority')}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {priorities.map(priority => (
                    <SelectItem key={priority.value} value={priority.value}>
                      <span className={priority.color}>
                        {priority.label}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="budget">{t('dashboard.project.budget')} (USD)</Label>
              <Input
                id="budget"
                type="number"
                placeholder="50000"
                value={formData.budget}
                onChange={(e) => handleChange('budget')(e.target.value)}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="endDate">{t('dashboard.project.endDate')} ({t('auth.optional')})</Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => handleChange('endDate')(e.target.value)}
                className="mt-2"
              />
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <div className="flex space-x-4">
            <Button 
              type="submit" 
              className="flex-1" 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                  {t('dashboard.project.saving')}
                </>
              ) : (
                <>
                  <Icon name={project ? 'Save' : 'Plus'} className="mr-2 h-4 w-4" />
                  {project ? t('dashboard.project.update') : t('dashboard.project.create')}
                </>
              )}
            </Button>
            
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              disabled={isLoading}
            >
              {t('dashboard.project.cancel')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};