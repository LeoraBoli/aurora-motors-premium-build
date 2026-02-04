import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BrandsSection from '@/components/BrandsSection';
import FeaturedCars from '@/components/FeaturedCars';
import ExperienceSection from '@/components/ExperienceSection';
import FinancingSection from '@/components/FinancingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      <div className={`min-h-screen bg-background text-foreground ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <Header />
        <main>
          <HeroSection />
          <BrandsSection />
          <FeaturedCars />
          <ExperienceSection />
          <FinancingSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
