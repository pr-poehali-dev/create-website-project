import { EKOLBrandShowcase } from "@/components/branding/ECOLLogo";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/ui/language-selector";
import { EKOLLogo } from "@/components/branding/ECOLLogo";
import Icon from "@/components/ui/icon";

export default function Branding() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <EKOLLogo variant="compact" size="md" />
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.location.href = '/'}
              >
                <Icon name="Home" className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </nav>

      {/* Brand Showcase */}
      <EKOLBrandShowcase />

      {/* Usage Guidelines */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Brand Usage Guidelines</h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Proper usage ensures consistent brand recognition and professional presentation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Do's */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-400 flex items-center">
                <Icon name="Check" className="mr-3 h-6 w-6" />
                Do's
              </h3>
              <div className="space-y-4">
                <div className="bg-card border border-green-500/20 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Maintain Clear Space</h4>
                  <p className="text-sm text-muted-foreground">Always provide adequate spacing around the logo</p>
                </div>
                <div className="bg-card border border-green-500/20 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Use Original Colors</h4>
                  <p className="text-sm text-muted-foreground">Stick to the official brand color palette</p>
                </div>
                <div className="bg-card border border-green-500/20 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Scale Proportionally</h4>
                  <p className="text-sm text-muted-foreground">Maintain aspect ratio when resizing</p>
                </div>
                <div className="bg-card border border-green-500/20 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">High Contrast Backgrounds</h4>
                  <p className="text-sm text-muted-foreground">Ensure good readability on all backgrounds</p>
                </div>
              </div>
            </div>

            {/* Don'ts */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-400 flex items-center">
                <Icon name="X" className="mr-3 h-6 w-6" />
                Don'ts
              </h3>
              <div className="space-y-4">
                <div className="bg-card border border-red-500/20 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Don't Stretch or Distort</h4>
                  <p className="text-sm text-muted-foreground">Never change the proportions of the logo</p>
                </div>
                <div className="bg-card border border-red-500/20 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Don't Use Unauthorized Colors</h4>
                  <p className="text-sm text-muted-foreground">Avoid changing brand colors without permission</p>
                </div>
                <div className="bg-card border border-red-500/20 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Don't Place on Busy Backgrounds</h4>
                  <p className="text-sm text-muted-foreground">Avoid backgrounds that compromise readability</p>
                </div>
                <div className="bg-card border border-red-500/20 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Don't Rotate or Tilt</h4>
                  <p className="text-sm text-muted-foreground">Keep the logo horizontal and upright</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Download Brand Assets</h2>
            <p className="text-muted-foreground text-xl mb-12">
              Get access to high-resolution logo files, brand guidelines, and design assets
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Button className="h-20 text-lg bg-gradient-to-r from-primary to-blue-600">
                <Icon name="Download" className="mr-3 h-6 w-6" />
                Logo Pack (PNG)
              </Button>
              <Button variant="outline" className="h-20 text-lg border-2">
                <Icon name="FileText" className="mr-3 h-6 w-6" />
                Brand Guidelines
              </Button>
              <Button variant="outline" className="h-20 text-lg border-2">
                <Icon name="Palette" className="mr-3 h-6 w-6" />
                Color Palette
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}