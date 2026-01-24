import { Mail, Eye, Users, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: Mail,
    title: 'Caos en los Emails',
    description: 'Solicitudes perdidas en hilos interminables. Sin priorización, sin seguimiento, sin respuestas a tiempo.',
    color: 'primary',
  },
  {
    icon: Eye,
    title: 'Falta de Trazabilidad',
    description: 'No sabes quién atendió qué, cuándo ni cómo. Cada incidente es una caja negra sin historial.',
    color: 'secondary',
  },
  {
    icon: Users,
    title: 'Cuellos de Botella',
    description: 'Departamentos trabajando en silos. Escalaciones que tardan días cuando deberían tomar minutos.',
    color: 'primary',
  },
  {
    icon: AlertTriangle,
    title: 'Reacción vs. Prevención',
    description: 'Apagando incendios constantemente. Sin visibilidad de patrones ni capacidad de anticipar problemas.',
    color: 'secondary',
  },
];

const ProblemsSection = () => {
  return (
    <section id="servicios" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-orb-blue -top-40 -right-40 opacity-30" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            El Problema
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Tu equipo de IT vive apagando{' '}
            <span className="gradient-text">incendios</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Estos son los síntomas de una gestión de incidencias que necesita evolucionar.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl group hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                problem.color === 'primary' 
                  ? 'from-primary/5 to-transparent' 
                  : 'from-secondary/5 to-transparent'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center ${
                  problem.color === 'primary'
                    ? 'bg-primary/10 group-hover:bg-primary/20'
                    : 'bg-secondary/10 group-hover:bg-secondary/20'
                } transition-colors duration-300`}>
                  <problem.icon className={`w-7 h-7 ${
                    problem.color === 'primary' ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-foreground/90">
                  {problem.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className={`absolute -top-1 -right-1 w-20 h-20 ${
                problem.color === 'primary'
                  ? 'bg-primary/10'
                  : 'bg-secondary/10'
              } blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
