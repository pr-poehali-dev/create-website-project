import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Icon name="Rocket" size={32} className="text-primary" />
            <span className="text-xl font-bold">Поехали!</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Главная
            </a>
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Возможности
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              О проекте
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button>
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Создать сайт
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}