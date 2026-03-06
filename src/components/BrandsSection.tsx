import { motion } from 'framer-motion';

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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Marcas <span className="text-gradient-gold">Premium</span>
          </h2>
          <div className="luxury-divider" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="flex items-center justify-center p-4 md:p-6 bg-card/50 rounded-lg border border-border/30 hover:border-primary/40 transition-all duration-300">
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-muted-foreground group-hover:text-primary transition-colors duration-300 text-center">
                  {brand.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
