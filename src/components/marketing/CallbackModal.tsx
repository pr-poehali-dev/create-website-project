import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useLanguage } from '@/contexts/LanguageContext';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallbackModal = ({ isOpen, onClose }: CallbackModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    timeSlot: '',
    interest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      setFormData({
        name: '',
        phone: '',
        company: '',
        timeSlot: '',
        interest: ''
      });
    }, 3000);
  };

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <Icon name="Check" className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              {t('callback.success.title')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('callback.success.message')}
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-primary">
              <Icon name="Clock" className="h-4 w-4" />
              <span>{t('callback.success.timing')}</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-gradient-to-br from-primary to-blue-600 rounded-lg">
              <Icon name="Phone" className="h-6 w-6 text-white" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                {t('callback.title')}
              </DialogTitle>
              <DialogDescription className="text-base">
                {t('callback.subtitle')}
              </DialogDescription>
            </div>
          </div>
          
          {/* Special Offer Badge */}
          <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Zap" className="h-5 w-5 text-red-400" />
              <span className="font-bold text-red-400">{t('callback.offer.badge')}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('callback.offer.description')}
            </p>
          </div>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Label htmlFor="name">{t('callback.form.name')}</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => handleChange('name')(e.target.value)}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="phone">{t('callback.form.phone')}</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+86 138 0013 8000"
                value={formData.phone}
                onChange={(e) => handleChange('phone')(e.target.value)}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="company">{t('callback.form.company')}</Label>
              <Input
                id="company"
                placeholder="Your Company"
                value={formData.company}
                onChange={(e) => handleChange('company')(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label>{t('callback.form.timeSlot')}</Label>
              <Select value={formData.timeSlot} onValueChange={handleChange('timeSlot')}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder={t('callback.form.selectTime')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">9:00 - 12:00 (HKT)</SelectItem>
                  <SelectItem value="afternoon">13:00 - 17:00 (HKT)</SelectItem>
                  <SelectItem value="evening">18:00 - 21:00 (HKT)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>{t('callback.form.interest')}</Label>
              <Select value={formData.interest} onValueChange={handleChange('interest')}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder={t('callback.form.selectService')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ai">AI Solutions</SelectItem>
                  <SelectItem value="crypto">Cryptography</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="Info" className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-semibold text-primary mb-1">
                  {t('callback.guarantee.title')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('callback.guarantee.description')}
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button 
              type="submit" 
              className="flex-1 bg-gradient-to-r from-primary to-blue-600" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                  {t('callback.form.submitting')}
                </>
              ) : (
                <>
                  <Icon name="Phone" className="mr-2 h-4 w-4" />
                  {t('callback.form.submit')}
                </>
              )}
            </Button>
            
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              disabled={isSubmitting}
            >
              {t('callback.form.cancel')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};