import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Shield, TrendingUp, AlertTriangle } from 'lucide-react';

const CTASection = () => {
  const urgencyPoints = [
    {
      icon: AlertTriangle,
      stat: '47%',
      text: 'de empresas pierden clientes por tiempos de respuesta lentos',
    },
    {
      icon: Clock,
      stat: '$5,600',
      text: 'USD/minuto cuesta en promedio un sistema caído',
    },
    {
      icon: TrendingUp,
      stat: '3x',
      text: 'más productivos son los equipos con soporte preventivo',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Intense Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Animated Glow */}
      <div className="glow-orb-green top-0 left-1/2 -translate-x-1/2 opacity-60 animate-pulse" />
      <div className="glow-orb-blue bottom-0 left-1/4 opacity-40" />
      <div className="glow-orb-blue bottom-0 right-1/4 opacity-40" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Warning Banner */}
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
          <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-destructive/50" />
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-destructive/30 bg-destructive/10">
            <AlertTriangle className="w-4 h-4 text-destructive animate-pulse" />
            <span className="text-sm font-medium text-destructive">
              Cada minuto sin acción es un riesgo para tu operación
            </span>
          </div>
          <div className="h-px flex-1 max-w-20 bg-gradient-to-l from-transparent to-destructive/50" />
        </div>

        {/* Main CTA Content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            ¿Listo para{' '}
            <span className="gradient-text">Elevar tu Estándar</span>{' '}
            de Soporte?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            No esperes a que un incidente crítico paralice tu operación. 
            Transforma tu soporte reactivo en una estrategia de{' '}
            <span className="text-secondary font-semibold drop-shadow-[0_0_6px_hsl(120_100%_50%/0.6)]">observabilidad preventiva</span>{' '}
            antes de que sea demasiado tarde.
          </p>
        </div>

        {/* Urgency Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {urgencyPoints.map((point, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl border-border/50 text-center group hover:border-primary/50 hover:scale-105 transition-all duration-300 card-shimmer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-secondary drop-shadow-[0_0_8px_hsl(120_100%_50%/0.6)] mb-2">{point.stat}</div>
              <p className="text-sm text-muted-foreground">{point.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="glass-card p-8 md:p-12 rounded-2xl border-secondary/30 max-w-3xl mx-auto relative overflow-hidden">
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
          
          {/* Decorative Corners */}
          <div className="absolute -top-2 -left-2 w-20 h-20 border-t-2 border-l-2 border-secondary/50 rounded-tl-2xl" />
          <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-2 border-r-2 border-primary/50 rounded-br-2xl" />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary drop-shadow-[0_0_6px_hsl(120_100%_50%/0.6)]">Garantía de respuesta en menos de 15 minutos</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Obtén una asesoría gratuita y descubre cómo podemos{' '}
              <span className="text-secondary drop-shadow-[0_0_8px_hsl(120_100%_50%/0.6)]">blindar tu operación</span>
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Nuestros especialistas analizarán tu infraestructura actual y te mostrarán 
              exactamente dónde están tus vulnerabilidades operativas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild className="w-full sm:w-auto neon-pulse-green hover:scale-105 transition-transform">
                <a href="#contacto">
                  Solicitar Asesoría con un Especialista
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground">
                Sin compromiso · Respuesta en 24 hrs
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Empresas que ya transformaron su soporte con PrimeTech
          </p>
          <div className="flex items-center justify-center gap-8 opacity-50">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-24 h-8 rounded bg-muted/30 flex items-center justify-center hover:opacity-100 transition-opacity"
              >
                <span className="text-xs text-muted-foreground">Cliente {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
