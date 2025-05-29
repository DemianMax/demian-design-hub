
import React from 'react';

const TimelineSection = () => {
  const experiences = [
    {
      company: 'TechCorp Solutions',
      position: 'Senior UX/UI Designer',
      period: '2020 - Presente',
      location: 'São Paulo, SP',
      description: 'Liderança em projetos de UX para sistemas B2B complexos, pesquisa de usuário e criação de design systems escaláveis.',
      current: true
    },
    {
      company: 'Digital Media Group',
      position: 'UX Designer',
      period: '2017 - 2020',
      location: 'São Paulo, SP',
      description: 'Desenvolvimento de interfaces para plataformas digitais, testes de usabilidade e otimização de conversão.',
      current: false
    },
    {
      company: 'Innovate Studio',
      position: 'Designer Gráfico e Web',
      period: '2014 - 2017',
      location: 'Curitiba, PR',
      description: 'Criação de identidades visuais, websites responsivos e materiais gráficos para diversos segmentos.',
      current: false
    },
    {
      company: 'Jornal Regional Sul',
      position: 'Designer Digital',
      period: '2010 - 2014',
      location: 'Porto Alegre, RS',
      description: 'Pioneiro em infografias interativas para web, ilustrações editoriais e design de interfaces para portal de notícias.',
      current: false
    },
    {
      company: 'Agência Criativa',
      position: 'Designer Júnior',
      period: '2008 - 2010',
      location: 'Porto Alegre, RS',
      description: 'Início da carreira focado em usabilidade e atendimento ao cliente, desenvolvimento de peças publicitárias.',
      current: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 animate-fade-in">
          Trajetória Profissional
        </h2>
        <p className="text-xl text-center text-portfolio-textSecondary mb-16 animate-fade-in">
          Uma jornada de crescimento contínuo no universo do design e experiência do usuário.
        </p>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-portfolio-highlight"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative flex items-center mb-12 animate-fade-in ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                exp.current 
                  ? 'bg-portfolio-highlight border-portfolio-highlight' 
                  : 'bg-white border-portfolio-highlight'
              }`}></div>
              
              {/* Content Card */}
              <div className={`ml-20 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <div className="bg-white/90 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-portfolio-text">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg font-semibold text-portfolio-accent">
                        {exp.company}
                      </h4>
                    </div>
                    {exp.current && (
                      <span className="bg-portfolio-highlight text-portfolio-text px-3 py-1 rounded-full text-sm font-medium">
                        Atual
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-portfolio-textSecondary text-sm mb-3">
                    <span className="mr-4">📅 {exp.period}</span>
                    <span>📍 {exp.location}</span>
                  </div>
                  
                  <p className="text-portfolio-text">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
