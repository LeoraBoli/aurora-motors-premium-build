const brands = [
  { name: 'Ferrari', logo: 'FERRARI' },
  { name: 'Lamborghini', logo: 'LAMBORGHINI' },
  { name: 'Porsche', logo: 'PORSCHE' },
  { name: 'BMW M', logo: 'BMW M' },
  { name: 'Mercedes-AMG', logo: 'MERCEDES-AMG' },
  { name: 'Audi RS', logo: 'AUDI RS' },
];

const BrandsSection = () => {
  return (
    <section id="marcas" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Marcas <span className="text-gradient-gold">Premium</span>
          </h2>
          <div className="luxury-divider" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group flex items-center justify-center p-6 bg-card/50 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-500 hover:bg-card opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-xs md:text-sm font-bold tracking-widest text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {brand.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
