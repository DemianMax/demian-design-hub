
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Placeholder images representing Behance portfolio
  const portfolioImages = [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % portfolioImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [portfolioImages.length]);

  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 animate-fade-in">
          Veja Meu Portfólio Completo
        </h2>
        
        <div className="mb-12 relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {portfolioImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img 
                    src={image} 
                    alt={`Portfolio item ${index + 1}`}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {portfolioImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-portfolio-highlight scale-125' 
                    : 'bg-portfolio-textSecondary/50'
                }`}
              />
            ))}
          </div>
        </div>

        <Button 
          className="bg-portfolio-highlight text-portfolio-text hover:bg-portfolio-highlight/90 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
          onClick={() => window.open('https://www.behance.net/maxdemian', '_blank')}
        >
          Ver no Behance
        </Button>
      </div>
    </section>
  );
};

export default PortfolioSection;
