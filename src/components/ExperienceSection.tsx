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
  return (
    <section id="empresa" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Experiência <span className="text-gradient-gold">Aurora</span>
          </h2>
          <div className="luxury-divider" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="text-center p-8 bg-card/50 rounded-lg border border-border/30 hover:border-primary/40 transition-all duration-300 h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <exp.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
