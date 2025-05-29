
import React from 'react';
import HeroSection from '@/components/HeroSection';
import WorkSection from '@/components/WorkSection';
import PortfolioSection from '@/components/PortfolioSection';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';
import TimelineSection from '@/components/TimelineSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WorkSection />
      <PortfolioSection />
      <SkillsSection />
      <AboutSection />
      <TimelineSection />
      <ContactSection />
    </div>
  );
};

export default Index;
