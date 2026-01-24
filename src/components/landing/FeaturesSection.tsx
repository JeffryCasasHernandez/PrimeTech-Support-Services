import { Ticket, BarChart3, Headphones, KeyRound } from 'lucide-react';

const features = [
  {
    icon: Ticket,
    title: 'Tickets Automáticos & Portal Autoservicio',
    description: 'Generación automática de tickets desde múltiples canales. Portal intuitivo donde los usuarios resuelven problemas comunes sin esperar.',
    benefits: ['Reducción de 60% en tickets repetitivos', 'Clasificación automática por IA', 'Base de conocimientos integrada'],
    color: 'primary',
  },
  {
    icon: BarChart3,
    title: 'Dashboards en Tiempo Real',
    description: 'Visualiza la salud de tu servicio al instante. Métricas de SLA, tiempos de respuesta y satisfacción del usuario en un solo lugar.',
    benefits: ['KPIs actualizados cada 60 segundos', 'Alertas proactivas configurables', 'Reportes ejecutivos automatizados'],
    color: 'secondary',
  },
  {
    icon: Headphones,
    title: 'Soporte Humano 24/7',
    description: 'Agentes de Nivel 1 disponibles en todo momento. Escalación inteligente que conecta el problema correcto con el experto correcto.',
    benefits: ['Primera respuesta en < 5 minutos', 'Cobertura global sin interrupciones', 'Escalación con contexto completo'],
    color: 'primary',
  },
  {
    icon: KeyRound,
    title: 'Gestión de Accesos',
    description: 'MFA, recuperación de contraseñas y desbloqueo de cuentas. Automatización segura que libera a tu equipo de tareas repetitivas.',
    benefits: ['Autoservicio para resets de password', 'Integración con AD/LDAP/SSO', 'Auditoría completa de accesos'],
    color: 'secondary',
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
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Todo lo que Necesitas para{' '}
            <span className="gradient-text">Recuperar el Control</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Herramientas diseñadas para reducir tiempos de respuesta y mantener la continuidad operativa.
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
