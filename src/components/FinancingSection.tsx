import { motion } from 'framer-motion';
import { CreditCard, TrendingUp, Clock } from 'lucide-react';

const FinancingSection = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

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
    <section id="financiamento" className="section-padding relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <motion.span
              className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Financiamento Exclusivo
            </motion.span>
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Planos <span className="text-gradient-gold">Personalizados</span>
            </motion.h2>
            <motion.div
              className="luxury-divider !mx-0"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.p
              className="text-muted-foreground text-lg mb-8 leading-relaxed mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Oferecemos as melhores condições do mercado com taxas diferenciadas, 
              leasing de luxo e planos sob medida para o seu perfil. Nossa equipe 
              financeira trabalha com os principais bancos para garantir aprovação 
              rápida e condições exclusivas.
            </motion.p>

            <motion.div
              className="space-y-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 group"
                >
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={22} />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="#contato"
              className="btn-gold uppercase tracking-wider inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 40px hsl(43 74% 49% / 0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              Simular Financiamento
            </motion.a>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <div className="aspect-square rounded-lg bg-gradient-to-br from-secondary to-card border border-border/30 flex items-center justify-center relative overflow-hidden">
              {/* Animated decorative circles */}
              <motion.div
                className="absolute w-72 h-72 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute w-56 h-56 rounded-full border border-primary/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute w-40 h-40 rounded-full bg-primary/10 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-5xl font-bold text-gradient-gold">%</span>
              </motion.div>
              
              {/* Floating stats with animation */}
              <motion.div
                className="absolute top-8 right-8 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/50"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-xs text-muted-foreground mb-1">Taxa especial</p>
                <motion.p
                  className="text-2xl font-bold text-primary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  0.89%
                </motion.p>
              </motion.div>

              <motion.div
                className="absolute bottom-8 left-8 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-xs text-muted-foreground mb-1">Parcelas até</p>
                <motion.p
                  className="text-2xl font-bold text-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  60x
                </motion.p>
              </motion.div>

              {/* Glowing particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/40 rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${15 + i * 18}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;
