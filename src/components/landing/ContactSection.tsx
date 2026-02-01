import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="glow-orb-blue top-1/2 left-1/4 -translate-y-1/2 opacity-30" />
      <div className="glow-orb-green top-1/2 right-1/4 -translate-y-1/2 opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-4 block drop-shadow-[0_0_8px_hsl(120_100%_50%/0.6)]">
              Conversión
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿Listo para{' '}
              <span className="gradient-text">Elevar tu Estándar</span>?
            </h2>
            <p className="text-muted-foreground text-lg">
              Cuéntanos sobre tu operación y te mostraremos cómo podemos transformar 
              tu gestión de incidencias en un motor de satisfacción.
            </p>
          </div>

          {/* Form Card */}
          <div className="glass-card p-8 md:p-10 rounded-2xl border-primary/20 relative card-shimmer">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_10px_hsl(210_100%_50%/0.3)] transition-all duration-200"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_10px_hsl(210_100%_50%/0.3)] transition-all duration-200"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_10px_hsl(210_100%_50%/0.3)] transition-all duration-200"
                    placeholder="tu@empresa.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    ¿Cómo podemos ayudarte?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_10px_hsl(210_100%_50%/0.3)] transition-all duration-200 resize-none"
                    placeholder="Cuéntanos sobre tu situación actual, número de usuarios, principales desafíos..."
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" size="xl" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 neon-pulse-green hover:scale-[1.02] transition-all duration-300">
                  <Sparkles className="mr-2 w-5 h-5" />
                  Solicitar Asesoría con un Especialista
                  <Send className="ml-2 w-5 h-5" />
                </Button>

                {/* Privacy Note */}
                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario, aceptas que nos comuniquemos contigo para discutir 
                  cómo podemos ayudarte. No compartimos tu información con terceros.
                </p>
              </form>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_hsl(120_100%_50%/0.4)]">
                  <CheckCircle2 className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">¡Solicitud Recibida!</h3>
                <p className="text-muted-foreground">
                  Un especialista se pondrá en contacto contigo en las próximas 24 horas hábiles.
                </p>
              </div>
            )}

            {/* Decorative Corner */}
            <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl" />
            <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-secondary/30 rounded-bl-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
