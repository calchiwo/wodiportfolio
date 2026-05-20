'use client';

interface ContactLink {
  label: string;
  href: string;
  type: 'email' | 'link';
}

const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:calebwodi33@gmail.com',
    type: 'email',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/calchiwo',
    type: 'link',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/calchiwo',
    type: 'link',
  },
  {
    label: 'X/Twitter',
    href: 'https://x.com/calchiwo',
    type: 'link',
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@calchiwo',
    type: 'link',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@calchiwo',
    type: 'link',
  },
  {
    label: 'Discord',
    href: 'https://discord.gg/y3a2dFgA',
    type: 'link',
  },
];

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="space-y-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-light text-foreground">Contact</h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Open to discussions about systems, collaboration, inquiries, open source and engineering.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Email</p>
            <a
              href="mailto:calebwodi33@gmail.com"
              className="text-sm text-foreground hover:text-accent transition-colors font-medium inline-block"
            >
              calebwodi33@gmail.com
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Connect</p>
            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.type === 'link' ? '_blank' : undefined}
                  rel={link.type === 'link' ? 'noopener noreferrer' : undefined}
                  className="block text-sm text-foreground hover:text-accent transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
