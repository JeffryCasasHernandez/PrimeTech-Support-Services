import { Rocket, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pillars = [
  {
    icon: Rocket,
    label: 'Nuevos Proyectos',
    title: 'Implementación Integral',
    subtitle: 'Diseñamos tu Mesa de Servicio desde cero',
    description:
      'Creamos centros de soporte de alto rendimiento adaptados a tu operación. Desde la arquitectura de procesos hasta la integración de herramientas de observabilidad con IA, construimos la base que tu negocio necesita para escalar sin fricciones.',
    features: [
      'Diseño de flujos ITIL adaptados a tu industria',
      'Integración nativa de observabilidad con IA',
      'Estándar de resolución de 15 minutos desde el día uno',
      'Capacitación y onboarding del equipo completo',
    ],
    color: 'primary' as const,
  },
  {
    icon: RefreshCw,
    label: 'Mesas Existentes',
    title: 'Optimización Estratégica',
    subtitle: 'Transformamos tu soporte actual en un activo estratégico',
    description:
      'Auditamos, rediseñamos y elevamos tu mesa de servicio existente bajo nuestros parámetros de observabilidad avanzada. Eliminamos ineficiencias, cerramos brechas de comunicación y establecemos el estándar de 15 minutos que tu operación merece.',
    features: [
      'Auditoría completa de procesos y herramientas actuales',
      'Migración a modelo de observabilidad preventiva',
      'Reducción medible de tiempos de resolución',
      'Alineación interdepartamental y eliminación de silos',
    ],
    color: 'secondary' as const,
  },
];

const ServicePillarsSection = () => {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-15" />
      <div className="glow-orb-blue top-1/3 -left-20 opacity-20" />
      <div className="glow-orb-green top-1/3 -right-20 opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-4 block drop-shadow-[0_0_8px_hsl(120_100%_50%/0.6)]">
            Nuestra Oferta
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Dos Caminos, Un Mismo{' '}
            <span className="gradient-text">Estándar de Excelencia</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ya sea que necesites construir desde cero o transformar lo que ya tienes, 
            nuestro compromiso es el mismo: soporte que impulsa tu negocio.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="glass-card p-8 md:p-10 rounded-2xl group hover:border-primary/30 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden card-shimmer"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  pillar.color === 'primary'
                    ? 'from-primary/5 via-transparent to-transparent'
                    : 'from-secondary/5 via-transparent to-transparent'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 ${
                    pillar.color === 'primary'
                      ? 'bg-primary/15 text-primary border border-primary/30'
                      : 'bg-secondary/15 text-secondary border border-secondary/30'
                  }`}
                >
                  <pillar.icon className="w-3.5 h-3.5" />
                  {pillar.label}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{pillar.title}</h3>
                <p
                  className={`text-sm font-medium mb-4 ${
                    pillar.color === 'primary' ? 'text-primary' : 'text-secondary drop-shadow-[0_0_6px_hsl(120_100%_50%/0.6)]'
                  }`}
                >
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {pillar.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <CheckCircle2
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          pillar.color === 'primary' ? 'text-primary' : 'text-secondary'
                        }`}
                      />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={pillar.color === 'primary' ? 'neonBlue' : 'neonGreen'}
                  size="lg"
                  asChild
                  className="w-full"
                >
                  <a href="#contacto">
                    Quiero esta solución
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePillarsSection;
