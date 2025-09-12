import Icon from "@/components/ui/icon";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="Rocket" size={32} className="text-primary" />
              <span className="text-xl font-bold">Поехали!</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Создавайте профессиональные сайты через простое общение на русском языке. Быстрее конструкторов в 30 раз.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://t.me/+QgiLIa1gFRY4Y2Iy"
                className="w-8 h-8 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Icon name="MessageCircle" size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Icon name="Github" size={16} />
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold mb-4">Возможности</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Быстрая разработка</li>
              <li className="text-sm text-muted-foreground">ИИ-ассистент Юра</li>
              <li className="text-sm text-muted-foreground">Автопубликация</li>
              <li className="text-sm text-muted-foreground">GitHub интеграция</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Документация</li>
              <li className="text-sm text-muted-foreground">Сообщество</li>
              <li className="text-sm text-muted-foreground">Примеры проектов</li>
              <li className="text-sm text-muted-foreground">API</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="MessageCircle" size={16} />
                <span>Telegram сообщество</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} />
                <span>poehali.dev</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="Rocket" size={16} className="mt-0.5" />
                <span>Космическая скорость разработки</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Поехали! Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground">Сделано с 🚀 в России</span>
          </div>
        </div>
      </div>
    </footer>
  );
}