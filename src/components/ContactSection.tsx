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

  return (
    <section id="contato" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Fale com um <span className="text-gradient-gold">Consultor</span>
          </h2>
          <div className="luxury-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Agende uma visita ao nosso showroom ou entre em contato para uma 
              consultoria personalizada. Nossa equipe está pronta para atendê-lo.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <info.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    {info.content.map((line, i) => (
                      <p key={i} className="text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#20ba5a] transition-colors duration-300"
            >
              <MessageCircle size={22} />
              Falar pelo WhatsApp
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 bg-card/50 rounded-lg border border-border/30"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
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
            </div>

            <div>
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
            </div>

            <div>
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
            </div>

            <div>
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
            </div>

            <button
              type="submit"
              className="btn-gold w-full uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Enviar Mensagem
            </button>
          </motion.form>
        </div>

        {/* Map Placeholder */}
        <motion.div
          className="mt-16 rounded-lg overflow-hidden border border-border/30 h-64 bg-card/50 flex items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center text-muted-foreground">
            <MapPin size={32} className="mx-auto mb-2 text-primary" />
            <p>Mapa do Showroom Aurora Motors</p>
            <p className="text-sm">Av. Europa, 1234 - Jardim Europa, São Paulo</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
