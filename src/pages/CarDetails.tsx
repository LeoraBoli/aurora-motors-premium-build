import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Gauge, Zap, Shield, Award, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarGallery from '@/components/CarGallery';
import InterestForm from '@/components/InterestForm';
import { getCarById } from '@/data/cars';

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const car = id ? getCarById(id) : undefined;

  if (!car) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-3xl font-bold mb-4">Veículo não encontrado</h1>
            <p className="text-muted-foreground mb-8">
              O veículo que você está procurando não está disponível.
            </p>
            <Link to="/" className="btn-gold inline-flex items-center gap-2">
              <ArrowLeft size={16} />
              Voltar para Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/#carros"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <ArrowLeft size={16} />
              Voltar para Coleção
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Gallery & Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  {car.badge && (
                    <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-3">
                      {car.badge}
                    </span>
                  )}
                  <span className="block text-primary text-sm font-semibold uppercase tracking-widest mb-1">
                    {car.brand}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    {car.name}
                  </h1>
                </div>
                <div className="text-right">
                  <span className="block text-sm text-muted-foreground mb-1">
                    A partir de
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-gradient-gold">
                    {car.price}
                  </span>
                </div>
              </div>

              {/* Gallery */}
              <CarGallery images={car.gallery} video={car.video} carName={`${car.brand} ${car.name}`} />

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Zap, label: 'Aceleração', value: car.spec1.replace('0-100 km/h em ', '') },
                  { icon: Gauge, label: 'Potência', value: car.spec2 },
                  { icon: Calendar, label: 'Ano', value: car.year.toString() },
                  { icon: Shield, label: 'Garantia', value: '3 anos' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border/50 rounded-lg p-4 text-center hover:border-primary/50 transition-colors duration-300"
                  >
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {stat.label}
                    </span>
                    <span className="block text-lg font-bold text-foreground">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="bg-card border border-border/50 rounded-lg p-6 lg:p-8">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Sobre este Veículo
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {car.description}
                </p>
              </div>

              {/* Technical Specs */}
              <div className="bg-card border border-border/50 rounded-lg p-6 lg:p-8">
                <h2 className="text-xl font-bold text-foreground mb-6">
                  Especificações Técnicas
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {car.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-border/30 last:border-0"
                    >
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="font-semibold text-foreground">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-card border border-border/50 rounded-lg p-6 lg:p-8">
                <h2 className="text-xl font-bold text-foreground mb-6">
                  Equipamentos & Tecnologia
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {car.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Interest Form (Sticky) */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <InterestForm carName={car.name} carBrand={car.brand} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CarDetails;
