import { Radar, Activity, Brain, TrendingUp } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Glow Effects */}
      <div className="glow-orb-green top-1/3 -left-40 opacity-40" />
      <div className="glow-orb-blue bottom-1/3 -right-40 opacity-40" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Nuestra Solución
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Observabilidad + Monitoreo</span>
            <br />
            <span className="text-foreground">El Diferencial que Transforma</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            La IA detecta anomalías y errores antes de que se conviertan en incendios. 
            No solo gestionamos incidencias, las prevenimos.
          </p>
        </div>

        {/* Main Visual */}
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-3xl border-primary/20 relative">
            {/* Central Icon */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Brain className="w-12 h-12 text-primary-foreground" />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl -z-10 animate-pulse" />
                
                {/* Orbiting Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-card border border-primary/30 flex items-center justify-center animate-float">
                  <Activity className="w-4 h-4 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-lg bg-card border border-secondary/30 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <Radar className="w-4 h-4 text-secondary" />
                </div>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Radar,
                  title: 'Monitoreo Proactivo',
                  description: 'Detectamos anomalías en tiempo real antes de que afecten a usuarios finales.',
                  color: 'primary',
                },
                {
                  icon: Brain,
                  title: 'IA Predictiva',
                  description: 'Algoritmos que aprenden de patrones históricos para anticipar incidentes.',
                  color: 'secondary',
                },
                {
                  icon: TrendingUp,
                  title: 'Mejora Continua',
                  description: 'Métricas accionables que revelan oportunidades de optimización constante.',
                  color: 'primary',
                },
              ].map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                    feature.color === 'primary'
                      ? 'bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(210_100%_50%/0.3)]'
                      : 'bg-secondary/10 group-hover:bg-secondary/20 group-hover:shadow-[0_0_20px_hsl(140_100%_45%/0.3)]'
                  } transition-all duration-300`}>
                    <feature.icon className={`w-8 h-8 ${
                      feature.color === 'primary' ? 'text-primary' : 'text-secondary'
                    }`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Decorative Lines */}
            <div className="absolute top-1/2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
