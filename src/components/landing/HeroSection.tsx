import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Clock, Shield } from 'lucide-react';
import heroVideo from '@/assets/hero-background.mp4';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
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
              Centro de Observabilidad Proactiva
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            BUEN DÍA{' '}
            <br />
            <span className="gradient-text">COACH</span>
            <br />
            <span className="text-muted-foreground">de CALIDAD SERVICIO DE SOFTWARE 3
</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Transformamos mesas de ayuda reactivas en centros de{' '}
            <span className="text-primary font-semibold">Observabilidad Proactiva</span>. 
            Sustituimos la urgencia vacía por un estándar de{' '}
            <span className="text-secondary font-semibold drop-shadow-[0_0_8px_hsl(120_100%_50%/0.8)]">15 minutos de resolución real</span>{' '}
            y empática.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <Button variant="hero" size="xl" asChild className="neon-pulse-green hover:scale-105 transition-transform">
              <a href="#contacto" className="group">
                Solicitar Asesoría con un Especialista
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="hover:scale-105 transition-transform">
              <a href="#como-funciona">Ver Cómo Funciona</a>
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            {[
              { icon: Clock, value: '< 15 min', label: 'Resolución Real' },
              { icon: Zap, value: '99.9%', label: 'Uptime Garantizado' },
              { icon: Shield, value: '24/7', label: 'Soporte Humano' },
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-xl group hover:border-primary/30 hover:scale-105 transition-all duration-300 card-shimmer">
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
