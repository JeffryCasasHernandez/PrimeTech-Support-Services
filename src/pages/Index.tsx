import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import ProblemsSection from '@/components/landing/ProblemsSection';
import SolutionSection from '@/components/landing/SolutionSection';
import ServicePillarsSection from '@/components/landing/ServicePillarsSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import MethodologySection from '@/components/landing/MethodologySection';
import CTASection from '@/components/landing/CTASection';
import IntegrationsSection from '@/components/landing/IntegrationsSection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden custom-scrollbar">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <ServicePillarsSection />
      <FeaturesSection />
      <MethodologySection />
      <CTASection />
      <IntegrationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
