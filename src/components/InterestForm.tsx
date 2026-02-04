import { useState } from 'react';
import { Send, Phone, Mail, User, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

interface InterestFormProps {
  carName: string;
  carBrand: string;
}

const InterestForm = ({ carName, carBrand }: InterestFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'whatsapp',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Interesse enviado com sucesso!', {
      description: 'Nossa equipe entrará em contato em breve.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      preferredContact: 'whatsapp',
    });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-card border border-border/50 rounded-lg p-6 lg:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">
          Tenho Interesse
        </h3>
        <p className="text-sm text-muted-foreground">
          Preencha o formulário para receber mais informações sobre o{' '}
          <span className="text-primary font-medium">
            {carBrand} {carName}
          </span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="tel"
            placeholder="WhatsApp ou telefone"
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
            required
            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
          />
        </div>

        {/* Preferred Contact */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Prefiro contato por:
          </label>
          <div className="flex gap-4">
            {[
              { value: 'whatsapp', label: 'WhatsApp' },
              { value: 'phone', label: 'Ligação' },
              { value: 'email', label: 'E-mail' },
            ].map(option => (
              <label
                key={option.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="preferredContact"
                  value={option.value}
                  checked={formData.preferredContact === option.value}
                  onChange={e =>
                    setFormData({ ...formData, preferredContact: e.target.value })
                  }
                  className="w-4 h-4 text-primary bg-background border-border focus:ring-primary"
                />
                <span className="text-sm text-foreground">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <textarea
            placeholder="Mensagem (opcional)"
            rows={3}
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-gold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send size={16} />
              Enviar Interesse
            </>
          )}
        </button>
      </form>

      {/* Quick Contact */}
      <div className="mt-6 pt-6 border-t border-border/50">
        <p className="text-xs text-muted-foreground text-center mb-3">
          Ou entre em contato direto:
        </p>
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full btn-gold-outline flex items-center justify-center gap-2 text-sm"
        >
          <Phone size={14} />
          WhatsApp Exclusivo
        </a>
      </div>
    </div>
  );
};

export default InterestForm;
