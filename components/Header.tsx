'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    const newIsDark = !isDark;
    
    if (newIsDark) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    setIsDark(newIsDark);
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  };

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border/40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight text-foreground hover:text-accent transition-colors duration-200">
          Caleb Wodi
        </a>
        
        <nav className="hidden md:flex items-center gap-12">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`text-xs font-medium uppercase tracking-wider transition-colors duration-200 ${
                activeSection === section.id
                  ? 'text-accent'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-sm hover:bg-secondary transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
              ) : (
                <Moon className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
              )}
            </button>
          )}

          <div className="md:hidden">
            <select
              value={activeSection}
              onChange={(e) => handleNavClick(e.target.value)}
              className="text-xs font-medium bg-background text-foreground border border-border rounded-sm px-3 py-2"
            >
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
