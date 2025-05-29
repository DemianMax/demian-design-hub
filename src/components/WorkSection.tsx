
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Work {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  hashtags: string[];
}

const WorkSection = () => {
  const [activeCategory, setActiveCategory] = useState('UX/UI Design');
  
  const categories = ['UX/UI Design', 'Infografia', 'Ilustração'];
  
  const works: Work[] = [
    // UX/UI Design
    {
      id: 'ux1',
      title: 'Sistema B2B de Gestão',
      description: 'Redesign completo de interface para sistema complexo de gestão empresarial.',
      category: 'UX/UI Design',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      hashtags: ['#Figma', '#UserResearch', '#Prototipagem', '#DesignSystem']
    },
    {
      id: 'ux2',
      title: 'App Mobile E-commerce',
      description: 'Interface intuitiva para aplicativo de vendas com foco na experiência do usuário.',
      category: 'UX/UI Design',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      hashtags: ['#Sketch', '#UserTesting', '#MobileFirst', '#Prototipagem']
    },
    {
      id: 'ux3',
      title: 'Dashboard Analytics',
      description: 'Painel de controle para visualização de dados complexos de forma simplificada.',
      category: 'UX/UI Design',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      hashtags: ['#Figma', '#DataVisualization', '#UXWriting', '#Responsive']
    },
    // Infografia
    {
      id: 'info1',
      title: 'Relatório Anual Interativo',
      description: 'Infográfico digital interativo apresentando dados corporativos complexos.',
      category: 'Infografia',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      hashtags: ['#Illustrator', '#AfterEffects', '#DataVisualization', '#Interactive']
    },
    {
      id: 'info2',
      title: 'Guia de Processos Internos',
      description: 'Material visual explicativo para onboarding de novos funcionários.',
      category: 'Infografia',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      hashtags: ['#Illustrator', '#InDesign', '#ProcessDesign', '#Educational']
    },
    {
      id: 'info3',
      title: 'Timeline de Produto',
      description: 'Infográfico temporal mostrando evolução de produto ao longo dos anos.',
      category: 'Infografia',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      hashtags: ['#Timeline', '#Illustrator', '#Storytelling', '#Corporate']
    },
    // Ilustração
    {
      id: 'ill1',
      title: 'Iconografia de Sistema',
      description: 'Conjunto de ícones customizados para interface de sistema complexo.',
      category: 'Ilustração',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop',
      hashtags: ['#IconDesign', '#Illustrator', '#SystemDesign', '#Minimalism']
    },
    {
      id: 'ill2',
      title: 'Ilustrações Editoriais',
      description: 'Série de ilustrações para artigos de revista sobre tecnologia.',
      category: 'Ilustração',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      hashtags: ['#Editorial', '#Digital', '#Conceptual', '#Technology']
    },
    {
      id: 'ill3',
      title: 'Personagens para App',
      description: 'Desenvolvimento de personagens para aplicativo educativo infantil.',
      category: 'Ilustração',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      hashtags: ['#CharacterDesign', '#Kids', '#Mobile', '#Storytelling']
    }
  ];

  const filteredWorks = works.filter(work => work.category === activeCategory);

  return (
    <section id="trabalhos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
          Trabalhos em Destaque
        </h2>
        
        {/* Category Menu */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-portfolio-highlight text-portfolio-text'
                  : 'bg-white/80 text-portfolio-text hover:bg-portfolio-highlight/20'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work, index) => (
            <Card 
              key={work.id} 
              className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-portfolio-text">
                    {work.title}
                  </h3>
                  <p className="text-portfolio-textSecondary mb-4 line-clamp-2">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.hashtags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs bg-portfolio-highlight/20 text-portfolio-text px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-portfolio-highlight text-portfolio-text hover:bg-portfolio-highlight/90 rounded-full"
                    onClick={() => {
                      console.log('Navegando para projeto:', work.id);
                      // Aqui seria a navegação para a página de detalhes
                    }}
                  >
                    Veja Mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
