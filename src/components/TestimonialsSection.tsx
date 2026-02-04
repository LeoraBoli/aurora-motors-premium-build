import { Star, Quote } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollReveal';

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
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Depoimentos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que nossos <span className="text-gradient-gold">clientes</span> dizem
            </h2>
            <div className="luxury-divider" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 150} direction="up">
              <div className="relative p-8 bg-card/50 rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-500 h-full">
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 text-primary/20" size={40} />

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
