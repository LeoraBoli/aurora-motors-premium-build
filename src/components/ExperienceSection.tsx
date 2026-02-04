import { Shield, Award, HeadphonesIcon } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollReveal';

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
  return (
    <section id="empresa" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Por que nos escolher
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experiência <span className="text-gradient-gold">Aurora</span>
            </h2>
            <div className="luxury-divider" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.title} delay={index * 150} direction="up">
              <div className="group text-center p-8 bg-card/50 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-500 hover:bg-card h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <exp.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{exp.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
