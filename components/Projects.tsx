'use client';

import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'ExplainThisRepo',
    description: 'The fastest way to understand any unfamiliar codebase using real project signals. Not blind AI guessing. Signals first. LLM second.',
    link: 'https://explainthisrepo.com',
    tags: ['codebase understanding', 'repository analysis', 'developer productivity'],
  },
  {
    id: '2',
    title: 'Auth System From Scratch',
    description: 'Authentication system built from first principles. Explores core concepts of session management, password hashing, and security best practices.',
    link: 'https://github.com/calchiwo/auth-system-from-scratch',
    tags: ['systems', 'security', 'backend'],
  },
  {
    id: '3',
    title: 'TwitterXScraper',
    description: 'Scrapes tweets and metadata for analysis or archiving. I built to understand web scraping, data collection, and API interactions.',
    link: 'https://github.com/calchiwo/twitterxscraper',
    tags: ['python', 'playwright', 'scraping', 'metadata'],
  },
  {
    id: '4',
    title: 'FileMapTree',
    description: 'Generates ASCII file trees from project directories for visualizing project structure and understanding codebase organization (One of the products I built under ExplainThisRepo).',
    link: 'https://github.com/explainthisrepo/filemaptree',
    tags: ['file tree', 'deterministic', 'ASCII'],
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="space-y-16">
        <div>
          <h2 className="text-3xl font-light text-foreground mb-3">Projects</h2>
          <p className="text-sm text-muted-foreground">Selected work exploring systems and tooling</p>
        </div>
        
        <div className="space-y-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-b border-border py-8 hover:border-accent transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="border-t border-border pt-16">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Every project I ship is toward the same goal: Become a stronger engineer by understanding the foundations of software and understanding systems deeply. See more at <a href="https://github.com/calchiwo" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">GitHub</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
