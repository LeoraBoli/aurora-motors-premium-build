import { useState } from 'react';
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

  return (
    <section id="contato" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fale com um <span className="text-gradient-gold">Consultor</span>
          </h2>
          <div className="luxury-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 opacity-0 animate-fade-in">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Agende uma visita ao nosso showroom ou entre em contato para uma 
              consultoria personalizada. Nossa equipe está pronta para atendê-lo.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                  <p className="text-muted-foreground">
                    Av. Europa, 1234 - Jardim Europa<br />
                    São Paulo - SP, 01449-000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                  <p className="text-muted-foreground">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                  <p className="text-muted-foreground">contato@auroramotors.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Horário</h4>
                  <p className="text-muted-foreground">
                    Seg - Sex: 9h às 19h<br />
                    Sáb: 9h às 14h
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#20ba5a] transition-colors duration-300"
            >
              <MessageCircle size={22} />
              Falar pelo WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-card/50 rounded-lg border border-border/30">
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
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-foreground placeholder:text-muted-foreground"
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
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-foreground placeholder:text-muted-foreground"
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
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-foreground placeholder:text-muted-foreground"
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
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-foreground placeholder:text-muted-foreground resize-none"
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
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 rounded-lg overflow-hidden border border-border/30 h-64 bg-card/50 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <MapPin size={32} className="mx-auto mb-2 text-primary" />
            <p>Mapa do Showroom Aurora Motors</p>
            <p className="text-sm">Av. Europa, 1234 - Jardim Europa, São Paulo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
