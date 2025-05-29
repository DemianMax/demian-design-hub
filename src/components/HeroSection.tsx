
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById('trabalhos');
    workSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-end justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/dca4a824-424a-4167-b858-a7113947f98d.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 mb-16 md:mb-20 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
          Olá, sou o Max.
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-shadow max-w-3xl mx-auto">
          UX/UI Designer, Ilustrador e Infografista.
        </p>
        <p className="text-lg md:text-xl mb-12 text-shadow max-w-2xl mx-auto opacity-90">
          Transformando complexidade em experiências intuitivas há mais de duas décadas.
        </p>
        
        <Button 
          onClick={scrollToWork}
          className="bg-portfolio-highlight text-portfolio-text hover:bg-portfolio-highlight/90 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
        >
          Ver Meus Trabalhos
        </Button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
