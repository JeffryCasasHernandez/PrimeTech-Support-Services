const integrations = [
  { name: 'Slack', icon: '💬' },
  { name: 'Microsoft Teams', icon: '👥' },
  { name: 'Jira', icon: '📋' },
  { name: 'ServiceNow', icon: '⚙️' },
  { name: 'Zendesk', icon: '🎧' },
  { name: 'Salesforce', icon: '☁️' },
  { name: 'Azure AD', icon: '🔐' },
  { name: 'Google Workspace', icon: '📧' },
  { name: 'AWS', icon: '🌐' },
  { name: 'Datadog', icon: '📊' },
  { name: 'PagerDuty', icon: '🚨' },
  { name: 'Confluence', icon: '📝' },
];

const IntegrationsSection = () => {
  // Duplicate the array for infinite scroll effect
  const duplicatedIntegrations = [...integrations, ...integrations];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-muted/10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Integraciones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Se Conecta con las Herramientas que{' '}
            <span className="gradient-text">Ya Usas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Integración nativa con las plataformas empresariales más populares.
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <div className="flex gap-6 infinite-scroll">
              {duplicatedIntegrations.map((integration, index) => (
                <div
                  key={index}
                  className="glass-card px-8 py-6 rounded-xl flex-shrink-0 flex items-center gap-4 hover:border-primary/30 transition-all duration-300 group min-w-[180px]"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">
                    {integration.icon}
                  </span>
                  <span className="font-medium text-foreground whitespace-nowrap">
                    {integration.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            ¿No ves tu herramienta? Desarrollamos integraciones personalizadas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
