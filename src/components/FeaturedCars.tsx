import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gauge, Zap, Play } from 'lucide-react';
import { cars } from '@/data/cars';

const FeaturedCars = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="carros" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <motion.span
            className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Coleção Exclusiva
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Destaques da <span className="text-gradient-gold">Semana</span>
          </motion.h2>
          <motion.div
            className="luxury-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {cars.map((car) => (
            <motion.div
              key={car.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative bg-card rounded-lg overflow-hidden border border-border/30 hover:border-primary/50 transition-colors duration-500">
                {/* Badge */}
                {car.badge && (
                  <motion.div
                    className="absolute top-4 left-4 z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-lg">
                      {car.badge}
                    </span>
                  </motion.div>
                )}

                {/* Video indicator */}
                {car.video && (
                  <motion.div
                    className="absolute top-4 right-4 z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="bg-background/80 backdrop-blur-sm text-foreground text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-sm flex items-center gap-1">
                      <Play size={10} className="fill-current" />
                      <span>Vídeo</span>
                    </div>
                  </motion.div>
                )}

                {/* Image or Video */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  {car.video ? (
                    <motion.video
                      src={car.video}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                  ) : (
                    <motion.img
                      src={car.image}
                      alt={`${car.brand} ${car.name}`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
                      {car.brand}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-1 group-hover:text-primary transition-colors duration-300">
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
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </div>
                </div>

                {/* Gold border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: 'inset 0 0 0 1px hsl(43 74% 49% / 0.3), 0 0 30px hsl(43 74% 49% / 0.1)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href="#"
            className="btn-gold-outline uppercase tracking-wider inline-block"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Todos os Veículos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCars;
