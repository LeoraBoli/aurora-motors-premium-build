import { Link } from 'react-router-dom';
import { Gauge, Zap } from 'lucide-react';
import { cars } from '@/data/cars';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const FeaturedCars = () => {
  return (
    <section id="carros" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Coleção Exclusiva
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Destaques da <span className="text-gradient-gold">Semana</span>
            </h2>
            <div className="luxury-divider" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <ScrollReveal key={car.id} delay={index * 100} direction="up">
              <div className="card-3d gold-glow-border group h-full">
                {/* Badge */}
                {car.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                      {car.badge}
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-primary text-xs font-semibold uppercase tracking-widest">
                      {car.brand}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-1">
                      {car.name}
                    </h3>
                  </div>

                  {/* Specs */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Zap size={14} className="text-primary" />
                      <span>{car.spec1}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
                    <Gauge size={14} className="text-primary" />
                    <span>{car.spec2}</span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-lg font-bold text-foreground">
                      {car.price}
                    </span>
                    <Link 
                      to={`/carro/${car.id}`}
                      className="text-sm font-semibold text-primary hover:text-gold-light transition-colors duration-300 flex items-center gap-2 group/btn"
                    >
                      Ver detalhes
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="text-center mt-12">
            <a href="#" className="btn-gold-outline uppercase tracking-wider">
              Ver Todos os Veículos
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturedCars;
