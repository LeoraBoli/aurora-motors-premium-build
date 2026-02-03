import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Carros', href: '#carros' },
    { name: 'Financiamento', href: '#financiamento' },
    { name: 'Sobre Nós', href: '#empresa' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-black tracking-tight text-foreground">
                AURORA
              </span>
              <span className="text-2xl font-light tracking-widest text-primary">
                MOTORS
              </span>
            </a>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Especialistas em carros de luxo, esportivos e supercars. 
              Há mais de 15 anos proporcionando experiências extraordinárias 
              para clientes exigentes.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Horário</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>Segunda - Sexta: 9h às 19h</li>
              <li>Sábado: 9h às 14h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Aurora Motors. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
