import { Gauge, Zap, Calendar } from 'lucide-react';
import lamborghiniImg from '@/assets/car-lamborghini.jpg';
import ferrariImg from '@/assets/car-ferrari.jpg';
import porscheImg from '@/assets/car-porsche.jpg';

interface Car {
  id: number;
  name: string;
  brand: string;
  price: string;
  spec1: string;
  spec2: string;
  image: string;
  badge?: string;
}

const cars: Car[] = [
  {
    id: 1,
    name: 'Huracán EVO',
    brand: 'Lamborghini',
    price: 'R$ 3.490.000',
    spec1: '0-100 km/h em 2.9s',
    spec2: '640 cv',
    image: lamborghiniImg,
    badge: 'Destaque',
  },
  {
    id: 2,
    name: 'F8 Tributo',
    brand: 'Ferrari',
    price: 'R$ 4.200.000',
    spec1: '0-100 km/h em 2.9s',
    spec2: '710 cv',
    image: ferrariImg,
    badge: 'Exclusivo',
  },
  {
    id: 3,
    name: '911 Turbo S',
    brand: 'Porsche',
    price: 'R$ 1.850.000',
    spec1: '0-100 km/h em 2.7s',
    spec2: '650 cv',
    image: porscheImg,
  },
];

const FeaturedCars = () => {
  return (
    <section id="carros" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Coleção Exclusiva
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Destaques da <span className="text-gradient-gold">Semana</span>
          </h2>
          <div className="luxury-divider" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div
              key={car.id}
              className="card-3d gold-glow-border group opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
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
                  <button className="text-sm font-semibold text-primary hover:text-gold-light transition-colors duration-300 flex items-center gap-2 group/btn">
                    Ver detalhes
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-gold-outline uppercase tracking-wider">
            Ver Todos os Veículos
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
