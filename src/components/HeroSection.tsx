import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-car.jpg';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Luxury supercar"
          className="w-full h-full object-cover object-center"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent w-full"
            style={{ top: `${30 + i * 20}%` }}
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 8,
              delay: i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <motion.span
              className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-6 block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Aurora Motors Premium
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Dirija o{' '}
            </motion.span>
            <motion.span
              className="text-gradient-gold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              futuro
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              .
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Viva o{' '}
            </motion.span>
            <motion.span
              className="text-gradient-gold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              luxo
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              .
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            Superesportivos, sedãs de luxo e SUVs premium selecionados com a excelência que você merece.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <motion.a
              href="#carros"
              className="btn-gold text-center uppercase tracking-wider"
              whileHover={{ scale: 1.02, boxShadow: '0 0 40px hsl(43 74% 49% / 0.4)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Ver Coleção
            </motion.a>
            <motion.a
              href="#contato"
              className="btn-gold-outline text-center uppercase tracking-wider"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Agendar Test Drive
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <motion.a
          href="#marcas"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs uppercase tracking-[0.2em] mb-2">Explorar</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>

      {/* Decorative Corner Elements */}
      <motion.div
        className="absolute top-24 right-12 w-32 h-32 border-r border-t border-primary/20 hidden lg:block"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
      <motion.div
        className="absolute bottom-24 left-12 w-32 h-32 border-l border-b border-primary/20 hidden lg:block"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
