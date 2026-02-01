import { Heart, Users, Target, Handshake } from 'lucide-react';

const MethodologySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-4 block drop-shadow-[0_0_8px_hsl(120_100%_50%/0.6)]">
              El Factor Humano
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              La Clave del{' '}
              <span className="gradient-text">50% de los Retrasos</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              El factor humano causa hasta el 50% de los retrasos operativos. Eliminamos los silos 
              de comunicación y los cuellos de botella interdepartamentales mediante una{' '}
              <span className="text-secondary font-semibold">alineación estratégica de prioridades</span>, 
              unificando a todo tu equipo bajo un mismo objetivo.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="glass-card p-5 rounded-xl text-center card-shimmer hover:scale-105 transition-transform">
                <div className="text-3xl font-bold gradient-text mb-1">50%</div>
                <div className="text-sm text-muted-foreground">Reducción de fricción</div>
              </div>
              <div className="glass-card p-5 rounded-xl text-center card-shimmer hover:scale-105 transition-transform">
                <div className="text-3xl font-bold gradient-text mb-1">1 Idioma</div>
                <div className="text-sm text-muted-foreground">Prioridades unificadas</div>
              </div>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                { icon: Users, text: 'Eliminamos silos entre IT, RRHH y Finanzas' },
                { icon: Target, text: 'Alineación estratégica de prioridades' },
                { icon: Handshake, text: 'Todos hablan el mismo idioma de urgencia' },
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 group-hover:shadow-[0_0_15px_hsl(120_100%_50%/0.4)] transition-all duration-300">
                    <point.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-foreground">{point.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="glass-card p-8 rounded-3xl border-secondary/20 relative card-shimmer">
              {/* Central Element */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center border border-secondary/30 group-hover:scale-110 transition-transform">
                    <Heart className="w-16 h-16 text-secondary animate-pulse" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-secondary/20 blur-2xl -z-10" />
                </div>
              </div>

              {/* Connection Lines */}
              <div className="grid grid-cols-3 gap-4">
                {['IT', 'RRHH', 'Finanzas'].map((dept, index) => (
                  <div key={index} className="text-center">
                    <div className="glass-card p-4 rounded-xl mb-2 border-secondary/20 hover:border-secondary/40 hover:scale-105 transition-all duration-300 cursor-default">
                      <span className="text-sm font-medium">{dept}</span>
                    </div>
                    <div className="h-8 w-px bg-gradient-to-b from-secondary/50 to-transparent mx-auto" />
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-muted-foreground text-sm italic text-center">
                  "Cuando IT y negocio hablan el mismo idioma, los problemas se resuelven antes de escalar."
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-primary/20 animate-float" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-secondary/30 animate-float" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
