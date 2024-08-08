import React from 'react';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';
import content from '@/content.json';

const PortfolioLandingPage = () => {
  return (
    <div className="bg-[#faf7f2] text-[#31312d]">
      <Hero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        description={content.hero.description}
      />
      <About title={content.about.title} description={content.about.description} />
      <Projects projects={content.projects} />
      <Contact title={content.contact.title} description={content.contact.description} />
    </div>
  );
};

export default PortfolioLandingPage;
