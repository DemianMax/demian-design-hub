
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">
          Olá eu sou Max Demian
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/dca4a824-424a-4167-b858-a7113947f98d.png" 
                alt="Max Demian"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="bg-white/80 p-8 rounded-2xl shadow-lg">
              <p className="text-lg leading-relaxed text-portfolio-text mb-6">
                Formado em Publicidade e Propaganda, iniciei minha carreira focado em usabilidade e atendimento ao público desde o primeiro estágio, antes de existirem siglas ou cursos especializados no assunto.
              </p>
              
              <p className="text-lg leading-relaxed text-portfolio-text mb-6">
                Inovei ao combinar ilustração com formas interativas de contar histórias, quando a internet ainda era dominada por grandes portais de notícias, o que me levou a trabalhar no maior jornal do sul do país.
              </p>
              
              <p className="text-lg leading-relaxed text-portfolio-text mb-6">
                Mais tarde, minha trajetória me levou ao centro do país, onde continuei atuando com usabilidade em diferentes meios de comunicação. Minha busca por aprimoramento profissional me direcionou a trabalhar com sistemas complexos em grandes empresas de B2B e B2C.
              </p>
              
              <p className="text-lg leading-relaxed text-portfolio-text">
                Essa jornada me deu uma compreensão profunda das necessidades do usuário e a habilidade de transformar complexidade em experiências intuitivas. Hoje, sigo comprometido em inovar e contribuir para projetos que fazem a diferença, sempre focado em criar soluções que agreguem valor e facilitem a vida das pessoas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
