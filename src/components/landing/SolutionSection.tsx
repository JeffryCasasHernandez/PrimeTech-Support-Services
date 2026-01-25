import { Radar, Activity, Brain, TrendingUp, Flame, Eye, Users } from 'lucide-react';
import HealthMatrix from './HealthMatrix';
import solutionVideo from '@/assets/solution-background.mp4';

const SolutionSection = () => {
  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src={solutionVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Glow Effects */}
      <div className="glow-orb-green top-1/3 -left-40 opacity-50" />
      <div className="glow-orb-blue bottom-1/3 -right-40 opacity-40" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-4 block drop-shadow-[0_0_8px_hsl(120_100%_50%/0.6)]">
            El Modelo PrimeTech
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            De{' '}
            <span className="text-muted-foreground">Apagar Incendios</span>
            <br />
            a{' '}
            <span className="gradient-text">Prevenir Riesgos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Usamos IA y una matriz de salud visual para detectar problemas antes de que 
            se conviertan en eventos de riesgo crítico.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Traditional Approach */}
          <div className="glass-card p-8 rounded-2xl border-destructive/20 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive/50 to-transparent" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Flame className="w-7 h-7 text-destructive" />
              </div>
              <div>
                <span className="text-xs text-destructive uppercase tracking-wider">Enfoque Tradicional</span>
                <h3 className="text-xl font-semibold">Monitoreo Reactivo</h3>
              </div>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-2" />
                <span>Apagamos incendios apenas aparecen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-2" />
                <span>Sin visibilidad hasta que el usuario reporta</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-2" />
                <span>Equipos desconectados y sin prioridades claras</span>
              </li>
            </ul>
          </div>

          {/* PrimeTech Approach */}
          <div className="glass-card p-8 rounded-2xl border-secondary/30 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary" />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-50" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shadow-[0_0_20px_hsl(120_100%_50%/0.3)]">
                  <Eye className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <span className="text-xs text-secondary uppercase tracking-wider drop-shadow-[0_0_6px_hsl(120_100%_50%/0.8)]">Enfoque PrimeTech</span>
                  <h3 className="text-xl font-semibold">Observabilidad Avanzada</h3>
                </div>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shadow-[0_0_6px_hsl(120_100%_50%/0.8)]" />
                  <span>IA detecta anomalías <strong className="text-secondary">antes</strong> del impacto</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shadow-[0_0_6px_hsl(120_100%_50%/0.8)]" />
                  <span>Matriz de salud visual centralizada en tiempo real</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shadow-[0_0_6px_hsl(120_100%_50%/0.8)]" />
                  <span>Todas las áreas hablan el mismo idioma de prioridades</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Health Matrix Visual */}
        <div className="max-w-4xl mx-auto mb-16">
          <HealthMatrix />
        </div>

        {/* Three Pillars */}
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-3xl border-primary/20 relative">
            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Radar,
                  title: 'Detección Temprana',
                  description: 'Identificamos patrones de riesgo antes de que se conviertan en incidentes críticos.',
                  color: 'secondary',
                },
                {
                  icon: Brain,
                  title: 'IA Predictiva',
                  description: 'Algoritmos que aprenden de tu historial para anticipar y prevenir problemas.',
                  color: 'primary',
                },
                {
                  icon: Users,
                  title: 'Alineación de Equipos',
                  description: 'Eliminamos silos internos. IT, RRHH y Finanzas bajo un mismo objetivo.',
                  color: 'secondary',
                },
              ].map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                    feature.color === 'primary'
                      ? 'bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(210_100%_50%/0.4)]'
                      : 'bg-secondary/10 group-hover:bg-secondary/20 group-hover:shadow-[0_0_20px_hsl(120_100%_50%/0.5)]'
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
            <div className="absolute top-1/2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent -translate-y-1/2 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
