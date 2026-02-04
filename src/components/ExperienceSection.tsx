import { motion } from 'framer-motion';
import { Shield, Award, HeadphonesIcon } from 'lucide-react';

const experiences = [
  {
    icon: Shield,
    title: 'Seleção Rigorosa',
    description: 'Cada veículo passa por mais de 200 pontos de inspeção antes de integrar nossa frota exclusiva.',
  },
  {
    icon: Award,
    title: 'Garantia Premium',
    description: 'Cobertura estendida e assistência 24h para total tranquilidade em cada quilômetro.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Atendimento VIP',
    description: 'Consultores especializados dedicados a proporcionar uma experiência personalizada.',
  },
];

const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
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
    <section id="empresa" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Por que nos escolher
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Experiência <span className="text-gradient-gold">Aurora</span>
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
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.title}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="text-center p-8 bg-card/50 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-500 hover:bg-card h-full backdrop-blur-sm relative overflow-hidden">
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <motion.div
                  className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <exp.icon size={28} />
                </motion.div>
                <h3 className="relative text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
