import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ricardo Mendes',
    role: 'Empresário',
    content: 'Experiência absurda, nível internacional. Desde o primeiro contato até a entrega do meu Porsche 911, tudo foi impecável.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carolina Ferreira',
    role: 'Investidora',
    content: 'Nunca vi um atendimento tão exclusivo. Foram além de todas as expectativas e me ajudaram a encontrar o carro perfeito.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Marcelo Augusto',
    role: 'CEO',
    content: 'A Aurora Motors redefine o padrão de concessionárias de luxo. Profissionalismo e transparência incomparáveis.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
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
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Animated background quote */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/5 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Quote size={400} />
      </motion.div>

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
            Depoimentos
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            O que nossos <span className="text-gradient-gold">clientes</span> dizem
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
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative p-8 bg-card/50 rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-500 h-full backdrop-blur-sm overflow-hidden">
                {/* Quote icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Quote className="absolute top-6 right-6 text-primary/20" size={40} />
                </motion.div>

                {/* Rating with animation */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star size={18} className="fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-lg font-bold text-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {testimonial.name.charAt(0)}
                    </span>
                  </motion.div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
