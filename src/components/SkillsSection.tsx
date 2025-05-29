
import React from 'react';

const SkillsSection = () => {
  const softwares = [
    { name: 'Figma', logo: '🎨' },
    { name: 'Framer', logo: '⚡' },
    { name: 'Photoshop', logo: '🖼️' },
    { name: 'Illustrator', logo: '✏️' },
    { name: 'After Effects', logo: '🎬' },
    { name: 'Sketch', logo: '💎' }
  ];

  const skills = [
    { name: 'Ilustração', level: 95, icon: '🎨' },
    { name: 'Animação', level: 85, icon: '🎬' },
    { name: 'Edição de vídeo', level: 80, icon: '📹' },
    { name: 'Edição de áudio', level: 75, icon: '🎵' }
  ];

  const knowledge = [
    { name: 'Design Thinking', level: 98, icon: '💡' },
    { name: 'User Experience', level: 95, icon: '👤' },
    { name: 'UX Writing', level: 90, icon: '✍️' },
    { name: 'UX Research', level: 92, icon: '🔍' },
    { name: 'Prototipação', level: 94, icon: '⚙️' },
    { name: 'Design Responsivo', level: 96, icon: '📱' },
    { name: 'Design Gráfico', level: 93, icon: '🎯' },
    { name: 'Sistemas B2B e B2C', level: 91, icon: '🏢' },
    { name: 'Projetos Ágeis com Scrum', level: 88, icon: '🚀' }
  ];

  const SkillBar = ({ name, level, icon }: { name: string; level: number; icon: string }) => (
    <div className="mb-4 animate-fade-in">
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-3">{icon}</span>
        <span className="font-medium text-portfolio-text">{name}</span>
        <span className="ml-auto text-portfolio-textSecondary text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-white/50 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-portfolio-highlight to-portfolio-accent transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section className="py-20 px-4 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">
          Habilidades Técnicas
        </h2>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Softwares */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-8 text-portfolio-text">Softwares</h3>
            <div className="grid grid-cols-2 gap-6">
              {softwares.map((software, index) => (
                <div 
                  key={software.name}
                  className="bg-white/80 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-3">{software.logo}</div>
                  <div className="font-medium text-portfolio-text">{software.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Habilidades */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-8 text-portfolio-text">Habilidades</h3>
            <div className="bg-white/80 p-6 rounded-lg shadow-lg">
              {skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Conhecimentos */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-8 text-portfolio-text">Conhecimentos</h3>
            <div className="bg-white/80 p-6 rounded-lg shadow-lg">
              {knowledge.map((item) => (
                <SkillBar key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
