import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: ['Av. Europa, 1234 - Jardim Europa', 'São Paulo - SP, 01449-000'],
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: ['(11) 99999-9999'],
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: ['contato@auroramotors.com.br'],
    },
    {
      icon: Clock,
      title: 'Horário',
      content: ['Seg - Sex: 9h às 19h', 'Sáb: 9h às 14h'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
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
            Entre em Contato
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Fale com um <span className="text-gradient-gold">Consultor</span>
          </motion.h2>
          <motion.div
            className="luxury-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <motion.p
              className="text-muted-foreground text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Agende uma visita ao nosso showroom ou entre em contato para uma 
              consultoria personalizada. Nossa equipe está pronta para atendê-lo.
            </motion.p>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <info.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={22} />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {info.title}
                    </h4>
                    {info.content.map((line, i) => (
                      <p key={i} className="text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#20ba5a] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={22} />
              Falar pelo WhatsApp
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 bg-card/50 rounded-lg border border-border/30 backdrop-blur-sm relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            {/* Form glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 relative z-10"
            >
              <motion.div variants={formFieldVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  placeholder="Seu nome"
                />
              </motion.div>

              <motion.div variants={formFieldVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  placeholder="seu@email.com"
                />
              </motion.div>

              <motion.div variants={formFieldVariants}>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  placeholder="(11) 99999-9999"
                />
              </motion.div>

              <motion.div variants={formFieldVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Conte-nos sobre o veículo que você busca..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="btn-gold w-full uppercase tracking-wider flex items-center justify-center gap-2"
                variants={formFieldVariants}
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px hsl(43 74% 49% / 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                Enviar Mensagem
              </motion.button>
            </motion.div>
          </motion.form>
        </div>

        {/* Map Placeholder */}
        <motion.div
          className="mt-16 rounded-lg overflow-hidden border border-border/30 h-64 bg-card/50 flex items-center justify-center relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ borderColor: 'hsl(43 74% 49% / 0.3)' }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="text-center text-muted-foreground relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <MapPin size={32} className="mx-auto mb-2 text-primary" />
            </motion.div>
            <p>Mapa do Showroom Aurora Motors</p>
            <p className="text-sm">Av. Europa, 1234 - Jardim Europa, São Paulo</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
