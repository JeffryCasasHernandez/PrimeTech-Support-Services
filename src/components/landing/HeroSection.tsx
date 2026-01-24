import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Clock, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-50" />
      
      {/* Glow Orbs */}
      <div className="glow-orb-blue top-20 -left-40 animate-float" />
      <div className="glow-orb-green bottom-20 -right-40 animate-float" style={{ animationDelay: '3s' }} />
      <div className="glow-orb-blue top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30" />

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Mesa de Ayuda de Nueva Generación
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            No solo resolvemos tickets,{' '}
            <br />
            <span className="gradient-text">garantizamos la continuidad</span>
            <br />
            <span className="text-muted-foreground">de tu negocio</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Transformamos el soporte técnico reactivo en observabilidad preventiva. 
            Centralizamos la gestión y garantizamos respuestas en{' '}
            <span className="text-secondary font-semibold drop-shadow-[0_0_8px_hsl(120_100%_50%/0.8)]">menos de 15 minutos</span>{' '}
            sin sacrificar la calidad técnica.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contacto" className="group">
                Solicitar Asesoría Gratuita
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#como-funciona">Ver Cómo Funciona</a>
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            {[
              { icon: Clock, value: '< 15 min', label: 'Tiempo de Resolución' },
              { icon: Zap, value: '99.9%', label: 'Uptime Garantizado' },
              { icon: Shield, value: '24/7', label: 'Soporte Humano' },
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-xl group hover:border-primary/30 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-primary mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
