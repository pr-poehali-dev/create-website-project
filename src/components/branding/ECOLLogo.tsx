import React from 'react';

interface EKOLLogoProps {
  variant?: 'default' | 'compact' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showImage?: boolean;
}

export const EKOLLogo: React.FC<EKOLLogoProps> = ({ 
  variant = 'default', 
  size = 'md',
  showImage = false
}) => {
  const sizeClasses = {
    sm: 'text-lg w-6 h-6',
    md: 'text-2xl w-10 h-10',
    lg: 'text-3xl w-12 h-12',
    xl: 'text-4xl w-16 h-16'
  };

  const logoSizes = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-20'
  };

  if (showImage) {
    return (
      <div className="flex items-center space-x-3">
        <img 
          src="/img/52c96ca9-e683-4bf9-9cfa-7c6043346fb6.jpg" 
          alt="EKOL Logo Design" 
          className={`${logoSizes[size]} object-contain`}
        />
      </div>
    );
  }

  if (variant === 'icon-only') {
    return (
      <div className={`${sizeClasses[size].split(' ')[1]} ${sizeClasses[size].split(' ')[2]} bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center animate-glow`}>
        <span className={`text-white font-bold ${sizeClasses[size].split(' ')[0]}`}>E</span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="flex items-center space-x-2">
        <div className={`${sizeClasses[size].split(' ')[1]} ${sizeClasses[size].split(' ')[2]} bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center animate-glow`}>
          <span className={`text-white font-bold ${sizeClasses[size].split(' ')[0]}`}>E</span>
        </div>
        <span className={`font-bold ${sizeClasses[size].split(' ')[0]} bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent`}>
          EKOL
        </span>
      </div>
    );
  }

  // Default variant
  return (
    <div className="flex items-center space-x-3">
      <div className={`${sizeClasses[size].split(' ')[1]} ${sizeClasses[size].split(' ')[2]} bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center animate-glow relative overflow-hidden`}>
        <span className={`text-white font-bold ${sizeClasses[size].split(' ')[0]} relative z-10`}>E</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] animate-shine"></div>
      </div>
      <div className="flex flex-col">
        <span className={`font-bold ${sizeClasses[size].split(' ')[0]} bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent leading-tight`}>
          EKOL
        </span>
        {size !== 'sm' && (
          <span className="text-xs text-muted-foreground font-medium tracking-wider">
            TECH SOLUTIONS
          </span>
        )}
      </div>
    </div>
  );
};

// Brand showcase component
export const EKOLBrandShowcase: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-blue-400 bg-clip-text text-transparent">
            EKOL Brand Identity
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Professional branding that represents innovation, trust, and technological excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo Variants */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-8">Logo Variants</h3>
            
            <div className="bg-card border border-primary/20 rounded-xl p-8 text-center space-y-6">
              <h4 className="font-semibold text-primary mb-4">Primary Logo</h4>
              <EKOLLogo size="lg" />
            </div>

            <div className="bg-card border border-primary/20 rounded-xl p-8 text-center space-y-6">
              <h4 className="font-semibold text-primary mb-4">Compact Version</h4>
              <EKOLLogo variant="compact" size="lg" />
            </div>

            <div className="bg-card border border-primary/20 rounded-xl p-8 text-center space-y-6">
              <h4 className="font-semibold text-primary mb-4">Icon Only</h4>
              <EKOLLogo variant="icon-only" size="lg" />
            </div>
          </div>

          {/* Size Variations */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-8">Size Variations</h3>
            
            <div className="bg-card border border-primary/20 rounded-xl p-8 space-y-8">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">Extra Large</p>
                <EKOLLogo size="xl" />
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">Large</p>
                <EKOLLogo size="lg" />
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">Medium</p>
                <EKOLLogo size="md" />
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">Small</p>
                <EKOLLogo size="sm" />
              </div>
            </div>
          </div>

          {/* Brand Designs */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-8">Brand Designs</h3>
            
            <div className="bg-card border border-primary/20 rounded-xl p-8 text-center space-y-6">
              <h4 className="font-semibold text-primary mb-4">Professional Design</h4>
              <img 
                src="/img/52c96ca9-e683-4bf9-9cfa-7c6043346fb6.jpg" 
                alt="EKOL Professional Logo Design" 
                className="w-full h-32 object-contain bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-lg p-4"
              />
            </div>

            <div className="bg-card border border-primary/20 rounded-xl p-8 text-center space-y-6">
              <h4 className="font-semibold text-primary mb-4">Tech Identity</h4>
              <img 
                src="/img/82acdbd0-ffd4-4d81-bfbb-8c40082dc8c6.jpg" 
                alt="EKOL Tech Brand Identity" 
                className="w-full h-32 object-contain bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg p-4"
              />
            </div>

            <div className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 rounded-xl p-8 text-center">
              <h4 className="font-semibold text-white mb-4">Dark Background</h4>
              <EKOLLogo size="lg" />
            </div>
          </div>
        </div>

        {/* Brand Colors */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Brand Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 bg-primary rounded-lg border-4 border-white shadow-lg"></div>
              <p className="font-semibold">Primary</p>
              <p className="text-sm text-muted-foreground">#0EA5E9</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 bg-blue-600 rounded-lg border-4 border-white shadow-lg"></div>
              <p className="font-semibold">Blue</p>
              <p className="text-sm text-muted-foreground">#2563EB</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 bg-purple-600 rounded-lg border-4 border-white shadow-lg"></div>
              <p className="font-semibold">Purple</p>
              <p className="text-sm text-muted-foreground">#9333EA</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 bg-gray-800 rounded-lg border-4 border-white shadow-lg"></div>
              <p className="font-semibold">Dark</p>
              <p className="text-sm text-muted-foreground">#1F2937</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 bg-white rounded-lg border-4 border-gray-200 shadow-lg"></div>
              <p className="font-semibold">Light</p>
              <p className="text-sm text-muted-foreground">#FFFFFF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};