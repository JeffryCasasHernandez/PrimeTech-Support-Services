import { Ticket, BarChart3, Headphones, KeyRound } from 'lucide-react';

const features = [
  {
    icon: KeyRound,
    title: 'Gestión Total de Accesos',
    description: 'MFA, recuperación de contraseñas y desbloqueo de cuentas inmediatos. Automatización segura que libera a tu equipo.',
    benefits: ['Restablecimiento de MFA instantáneo', 'Cambios de contraseña en segundos', 'Autoservicio seguro integrado'],
    color: 'secondary',
  },
  {
    icon: BarChart3,
    title: 'Dashboards en Tiempo Real',
    description: 'El cliente ve el estado de su empresa al instante. Métricas de SLA, tiempos de respuesta y salud del servicio.',
    benefits: ['KPIs actualizados en vivo', 'Alertas proactivas configurables', 'Transparencia total en SLAs'],
    color: 'primary',
  },
  {
    icon: Headphones,
    title: 'Soporte Humano 24/7',
    description: 'Agentes de Nivel 1 disponibles en todo momento. Primera respuesta real, no bots. Escalación con contexto completo.',
    benefits: ['Primera respuesta en < 5 minutos', 'Cobertura sin interrupciones', 'Humanos reales, no chatbots'],
    color: 'secondary',
  },
  {
    icon: Ticket,
    title: 'Portal de Autoservicio',
    description: 'Base de conocimientos inteligente donde los usuarios resuelven problemas comunes sin esperar.',
    benefits: ['Reducción de 60% en tickets', 'Clasificación automática por IA', 'Soluciones paso a paso'],
    color: 'primary',
  },
];

const FeaturesSection = () => {
  return (
    <section id="beneficios" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-orb-blue top-20 left-1/4 opacity-20" />
        <div className="glow-orb-green bottom-20 right-1/4 opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-4 block drop-shadow-[0_0_8px_hsl(120_100%_50%/0.6)]">
            Servicios Nivel 1 · 24/7
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Recupera la{' '}
            <span className="gradient-text">Productividad Empresarial</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Optimización de recursos, transparencia total en SLAs y soporte humano disponible siempre.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl group hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                feature.color === 'primary'
                  ? 'from-primary/5 via-transparent to-transparent'
                  : 'from-secondary/5 via-transparent to-transparent'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center relative ${
                  feature.color === 'primary'
                    ? 'bg-primary/10'
                    : 'bg-secondary/10'
                }`}>
                  <feature.icon className={`w-8 h-8 ${
                    feature.color === 'primary' ? 'text-primary' : 'text-secondary'
                  }`} />
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-xl ${
                    feature.color === 'primary'
                      ? 'bg-primary/20'
                      : 'bg-secondary/20'
                  } blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        feature.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                      }`} />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
