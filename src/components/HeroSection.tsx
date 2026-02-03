import heroImage from '@/assets/hero-car.jpg';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury supercar"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 opacity-0 animate-fade-in">
            Dirija o{' '}
            <span className="text-gradient-gold">futuro</span>.
            <br />
            Viva o{' '}
            <span className="text-gradient-gold">luxo</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Superesportivos, sedãs de luxo e SUVs premium selecionados com a excelência que você merece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#carros" className="btn-gold text-center uppercase tracking-wider">
              Ver Coleção
            </a>
            <a href="#contato" className="btn-gold-outline text-center uppercase tracking-wider">
              Agendar Test Drive
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <a href="#marcas" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300">
          <span className="text-xs uppercase tracking-widest mb-2">Explorar</span>
          <ChevronDown className="animate-bounce" size={20} />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
