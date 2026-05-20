'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <div data-section="about">
          {activeSection === 'about' && <About />}
        </div>
        <div data-section="projects">
          {activeSection === 'projects' && <Projects />}
        </div>
        <div data-section="contact">
          {activeSection === 'contact' && <Contact />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
