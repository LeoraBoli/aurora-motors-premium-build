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
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            O que nossos <span className="text-gradient-gold">clientes</span> dizem
          </h2>
          <div className="luxury-divider" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative p-8 bg-card/50 rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-300 h-full">
                <Quote className="absolute top-6 right-6 text-primary/15" size={36} />

                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
