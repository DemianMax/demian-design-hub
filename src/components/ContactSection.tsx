
import React from 'react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      type: 'Email',
      value: 'max3demian@gmail.com',
      icon: '📧',
      link: 'mailto:max3demian@gmail.com'
    },
    {
      type: 'LinkedIn',
      value: '/in/maxdemian',
      icon: '💼',
      link: 'https://www.linkedin.com/in/maxdemian/'
    },
    {
      type: 'Behance',
      value: '/maxdemian',
      icon: '🎨',
      link: 'https://www.behance.net/maxdemian'
    },
    {
      type: 'Telefone',
      value: '(11) 94555-4555',
      icon: '📱',
      link: 'tel:+5511945554555'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-portfolio-accent/20 to-portfolio-highlight/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 animate-fade-in">
          Vamos Conversar
        </h2>
        
        <p className="text-xl text-portfolio-textSecondary mb-12 animate-fade-in">
          Pronto para transformar suas ideias em experiências excepcionais? Entre em contato!
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <div 
              key={contact.type}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a 
                href={contact.link}
                target={contact.type !== 'Email' && contact.type !== 'Telefone' ? '_blank' : undefined}
                rel={contact.type !== 'Email' && contact.type !== 'Telefone' ? 'noopener noreferrer' : undefined}
                className="block bg-white/90 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <h3 className="font-semibold text-portfolio-text mb-2">
                  {contact.type}
                </h3>
                <p className="text-portfolio-textSecondary group-hover:text-portfolio-accent transition-colors duration-300">
                  {contact.value}
                </p>
              </a>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            className="bg-portfolio-highlight text-portfolio-text hover:bg-portfolio-highlight/90 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => window.open('mailto:max3demian@gmail.com', '_blank')}
          >
            Enviar Email
          </Button>
          
          <Button 
            variant="outline"
            className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://www.linkedin.com/in/maxdemian/', '_blank')}
          >
            Conectar no LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
