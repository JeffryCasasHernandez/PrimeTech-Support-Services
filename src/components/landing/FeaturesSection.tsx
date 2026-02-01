import { Clock, Cpu, Users, Heart } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Reducción Drástica de Tiempos',
    description: 'De horas a minutos. Nuestro estándar de 15 minutos de resolución real transforma la percepción de IT en tu organización.',
    benefits: ['Respuesta en menos de 15 min', 'Escalaciones con contexto completo', 'SLAs que realmente se cumplen'],
    color: 'secondary',
  },
  {
    icon: Cpu,
    title: 'Optimización Total de Recursos',
    description: 'Maximizamos el rendimiento de tu infraestructura actual. Más resultados con la misma inversión tecnológica.',
    benefits: ['Automatización inteligente', 'Reducción de tickets recurrentes', 'ROI medible desde el primer mes'],
    color: 'primary',
  },
  {
    icon: Users,
    title: 'Cultura Colaborativa',
    description: 'Construimos puentes entre IT y el resto del negocio. La confianza del usuario final se convierte en tu activo más valioso.',
    benefits: ['Comunicación sin fricción', 'Equipos alineados', 'Satisfacción medible'],
    color: 'secondary',
  },
  {
    icon: Heart,
    title: 'De Costo a Motor de Satisfacción',
    description: 'Transformamos tu soporte de un centro de costos en un diferenciador competitivo que impulsa la productividad.',
    benefits: ['Valor visible para el negocio', 'Usuarios empoderados', 'IT como aliado estratégico'],
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
            La Promesa PrimeTech
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Beneficios que{' '}
            <span className="gradient-text">Transforman tu Operación</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            No solo resolvemos tickets. Elevamos el estándar de soporte hasta convertirlo en un motor de satisfacción y productividad.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl group hover:border-primary/30 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden card-shimmer"
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
                        feature.color === 'primary' ? 'bg-primary' : 'bg-secondary shadow-[0_0_6px_hsl(120_100%_50%/0.6)]'
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
