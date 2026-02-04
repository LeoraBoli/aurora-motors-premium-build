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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="marcas" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Animated line decoration */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Marcas <span className="text-gradient-gold">Premium</span>
          </motion.h2>
          <motion.div
            className="luxury-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                scale: 1.05,
                transition: { duration: 0.2 } 
              }}
              className="group"
            >
              <div className="flex items-center justify-center p-4 md:p-6 bg-card/50 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-500 hover:bg-card backdrop-blur-sm relative overflow-hidden">
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative text-[10px] md:text-xs font-bold tracking-widest text-muted-foreground group-hover:text-primary transition-colors duration-300 text-center">
                  {brand.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom animated line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
};

export default BrandsSection;
