import { Mail, Eye, Users, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: Mail,
    title: 'Mala Comunicación',
    description: 'El 50% de los retrasos en soporte no son técnicos, sino humanos. Silos entre áreas y falta de empatía generan cuellos de botella.',
    color: 'primary',
    stat: '50%',
    statLabel: 'retrasos evitables',
  },
  {
    icon: Eye,
    title: 'Pérdida de Confianza',
    description: 'Incidentes críticos que se ignoran mientras los usuarios pierden la fe en el equipo de IT.',
    color: 'secondary',
    stat: '–',
    statLabel: 'sin visibilidad',
  },
  {
    icon: Users,
    title: 'Silos Departamentales',
    description: 'Equipos que no hablan el mismo idioma de prioridades. IT trabaja aislado del resto del negocio.',
    color: 'primary',
    stat: '∞',
    statLabel: 'escalaciones lentas',
  },
  {
    icon: AlertTriangle,
    title: 'Modo Bombero 24/7',
    description: 'Apagando incendios constantemente. Sin capacidad de anticipar problemas ni tiempo para mejorar.',
    color: 'secondary',
    stat: '0',
    statLabel: 'prevención',
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
            El{' '}
            <span className="gradient-text">50% de los retrasos</span>{' '}
            no son técnicos
          </h2>
          <p className="text-muted-foreground text-lg">
            Son problemas humanos: mala comunicación, silos entre áreas y falta de empatía entre equipos.
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
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    problem.color === 'primary'
                      ? 'bg-primary/10 group-hover:bg-primary/20'
                      : 'bg-secondary/10 group-hover:bg-secondary/20'
                  } transition-colors duration-300`}>
                    <problem.icon className={`w-7 h-7 ${
                      problem.color === 'primary' ? 'text-primary' : 'text-secondary'
                    }`} />
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${
                      problem.color === 'primary' ? 'text-primary' : 'text-secondary drop-shadow-[0_0_8px_hsl(120_100%_50%/0.6)]'
                    }`}>
                      {problem.stat}
                    </div>
                    <div className="text-xs text-muted-foreground">{problem.statLabel}</div>
                  </div>
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
