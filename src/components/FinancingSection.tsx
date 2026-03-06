import { motion } from 'framer-motion';
import { CreditCard, TrendingUp, Clock } from 'lucide-react';

const FinancingSection = () => {
  const features = [
    {
      icon: CreditCard,
      title: 'Taxas a partir de 0.89% a.m.',
      description: 'Condições especiais para clientes Aurora',
    },
    {
      icon: TrendingUp,
      title: 'Leasing Premium',
      description: 'Troque de veículo a cada 2 anos',
    },
    {
      icon: Clock,
      title: 'Aprovação em 24h',
      description: 'Processo ágil e descomplicado',
    },
  ];

  return (
    <section id="financiamento" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
              Financiamento Exclusivo
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Planos <span className="text-gradient-gold">Personalizados</span>
            </h2>
            <div className="luxury-divider !mx-0" />
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed mt-6">
              Oferecemos as melhores condições do mercado com taxas diferenciadas, 
              leasing de luxo e planos sob medida para o seu perfil. Nossa equipe 
              financeira trabalha com os principais bancos para garantir aprovação 
              rápida e condições exclusivas.
            </p>

            <div className="space-y-5 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <feature.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#contato"
              className="btn-gold uppercase tracking-wider inline-block"
            >
              Simular Financiamento
            </a>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-square rounded-lg bg-gradient-to-br from-secondary to-card border border-border/30 flex items-center justify-center relative overflow-hidden">
              <div className="absolute w-72 h-72 rounded-full border border-primary/10" />
              <div className="absolute w-56 h-56 rounded-full border border-primary/15" />
              <div className="absolute w-40 h-40 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-5xl font-bold text-gradient-gold">%</span>
              </div>
              
              <div className="absolute top-8 right-8 bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <p className="text-xs text-muted-foreground mb-1">Taxa especial</p>
                <p className="text-2xl font-bold text-primary">0.89%</p>
              </div>

              <div className="absolute bottom-8 left-8 bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <p className="text-xs text-muted-foreground mb-1">Parcelas até</p>
                <p className="text-2xl font-bold text-foreground">60x</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;
