'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Navigate</p>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavClick('about')} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('projects')} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Links</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/calchiwo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/calchiwo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/calchiwo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            Copyright {currentYear} WodiPortfolio. Built by Caleb Wodi as part of my BuiltByWodi Projects
          </p>
        </div>
      </div>
    </footer>
  );
}
