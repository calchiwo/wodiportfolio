'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 md:py-40">
      <div className="space-y-16">
        <div className="w-32 h-32 md:w-40 md:h-40">
          <Image
            src="/calebwodi.png"
            alt="Caleb Wodi: WodiPortfolio"
            width={160}
            height={160}
            className="w-full h-full rounded-full object-cover border border-border"
            priority
          />
        </div>

        <div className="space-y-3">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground">
            Building systems
          </h1>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-accent">
            from first principles
          </h1>
        </div>
        
        <p className="text-base text-muted-foreground max-w-2xl leading-relaxed font-light">
          I focus on depth. Most software lacks fundamentals. I test ideas, build systems, and understand how things work under the hood before shipping. I'm so obsessed with systems design, architecture, infrastructure, security and taste
        </p>
      </div>
    </section>
  );
}
