import { ScrollReveal } from '@/hooks/useScrollReveal';

const brands = [
  { name: 'Ferrari', logo: 'FERRARI' },
  { name: 'Lamborghini', logo: 'LAMBORGHINI' },
  { name: 'Porsche', logo: 'PORSCHE' },
  { name: 'BMW M', logo: 'BMW M' },
  { name: 'Mercedes-AMG', logo: 'MERCEDES-AMG' },
  { name: 'Audi RS', logo: 'AUDI RS' },
  { name: 'McLaren', logo: 'MCLAREN' },
  { name: 'Bentley', logo: 'BENTLEY' },
];

const BrandsSection = () => {
  return (
    <section id="marcas" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Marcas <span className="text-gradient-gold">Premium</span>
            </h2>
            <div className="luxury-divider" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <ScrollReveal key={brand.name} delay={index * 50} direction="up">
              <div className="group flex items-center justify-center p-4 md:p-6 bg-card/50 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-500 hover:bg-card">
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-muted-foreground group-hover:text-primary transition-colors duration-300 text-center">
                  {brand.logo}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
