import { CreditCard, TrendingUp, Clock } from 'lucide-react';

const FinancingSection = () => {
  return (
    <section id="financiamento" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="opacity-0 animate-fade-in">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Financiamento Exclusivo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Planos <span className="text-gradient-gold">Personalizados</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Oferecemos as melhores condições do mercado com taxas diferenciadas, 
              leasing de luxo e planos sob medida para o seu perfil. Nossa equipe 
              financeira trabalha com os principais bancos para garantir aprovação 
              rápida e condições exclusivas.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CreditCard className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Taxas a partir de 0.89% a.m.</h4>
                  <p className="text-sm text-muted-foreground">Condições especiais para clientes Aurora</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Leasing Premium</h4>
                  <p className="text-sm text-muted-foreground">Troque de veículo a cada 2 anos</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Aprovação em 24h</h4>
                  <p className="text-sm text-muted-foreground">Processo ágil e descomplicado</p>
                </div>
              </div>
            </div>

            <a href="#contato" className="btn-gold uppercase tracking-wider inline-block">
              Simular Financiamento
            </a>
          </div>

          {/* Visual Element */}
          <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-square rounded-lg bg-gradient-to-br from-secondary to-card border border-border/30 flex items-center justify-center relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute w-64 h-64 rounded-full border border-primary/20 animate-pulse" />
              <div className="absolute w-48 h-48 rounded-full border border-primary/30" />
              <div className="absolute w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-4xl font-bold text-gradient-gold">%</span>
              </div>
              
              {/* Floating stats */}
              <div className="absolute top-8 right-8 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <p className="text-xs text-muted-foreground mb-1">Taxa especial</p>
                <p className="text-2xl font-bold text-primary">0.89%</p>
              </div>

              <div className="absolute bottom-8 left-8 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <p className="text-xs text-muted-foreground mb-1">Parcelas até</p>
                <p className="text-2xl font-bold text-foreground">60x</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;
