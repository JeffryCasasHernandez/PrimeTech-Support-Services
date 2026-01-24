import { useEffect, useState } from 'react';

interface LEDIndicator {
  id: number;
  status: 'active' | 'warning' | 'idle';
  delay: number;
}

const HealthMatrix = () => {
  const [leds, setLeds] = useState<LEDIndicator[]>([]);

  useEffect(() => {
    // Generate 48 LED indicators (6x8 grid)
    const generatedLeds: LEDIndicator[] = Array.from({ length: 48 }, (_, i) => ({
      id: i,
      status: Math.random() > 0.15 ? 'active' : Math.random() > 0.5 ? 'warning' : 'idle',
      delay: Math.random() * 2,
    }));
    setLeds(generatedLeds);

    // Randomly update some LEDs to simulate activity
    const interval = setInterval(() => {
      setLeds(prev => prev.map(led => ({
        ...led,
        status: Math.random() > 0.1 ? 'active' : Math.random() > 0.5 ? 'warning' : 'idle',
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Matrix Container */}
      <div className="glass-card p-6 rounded-2xl border-secondary/30 relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_hsl(120_100%_50%/0.8)]" />
            <span className="text-sm font-semibold text-foreground">MATRIZ DE SALUD</span>
          </div>
          <span className="text-xs text-secondary font-mono">SISTEMA ACTIVO</span>
        </div>

        {/* LED Grid */}
        <div className="grid grid-cols-8 gap-2 mb-6">
          {leds.map((led) => (
            <div
              key={led.id}
              className={`
                w-4 h-4 rounded-sm transition-all duration-500
                ${led.status === 'active' 
                  ? 'bg-secondary shadow-[0_0_8px_hsl(120_100%_50%/0.8),0_0_12px_hsl(120_100%_50%/0.5)]' 
                  : led.status === 'warning'
                  ? 'bg-primary shadow-[0_0_8px_hsl(210_100%_50%/0.8)]'
                  : 'bg-muted/50'
                }
              `}
              style={{ 
                animationDelay: `${led.delay}s`,
                opacity: led.status === 'active' ? 1 : led.status === 'warning' ? 0.8 : 0.3,
              }}
            />
          ))}
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between text-xs border-t border-border/50 pt-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_6px_hsl(120_100%_50%/0.8)]" />
              <span className="text-muted-foreground">Óptimo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_6px_hsl(210_100%_50%/0.8)]" />
              <span className="text-muted-foreground">Monitoreo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-muted/50" />
              <span className="text-muted-foreground">Inactivo</span>
            </div>
          </div>
          <span className="text-secondary font-mono">99.9% UPTIME</span>
        </div>

        {/* Scan Line Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent animate-[scanLine_4s_linear_infinite]"
            style={{ top: '20%' }}
          />
        </div>
      </div>

      {/* Glow Background */}
      <div className="absolute inset-0 bg-secondary/5 blur-3xl -z-10 rounded-full" />
    </div>
  );
};

export default HealthMatrix;
