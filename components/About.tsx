export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="space-y-20">
        <div className="space-y-6 border-l border-accent pl-8">
          <h2 className="text-3xl md:text-4xl font-light text-foreground leading-tight">
            Depth over frameworks
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            I focus on fundamentals and first-principles thinking. I care less about which framework, care more about understanding the machinery behind them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Foundation Languages</p>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Python</p>
                  <p className="text-sm text-muted-foreground">Fast iteration and scripting</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">TypeScript</p>
                  <p className="text-sm text-muted-foreground">Web systems and browser runtime</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Systems Depth</p>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">C</p>
                  <p className="text-sm text-muted-foreground">Memory, OS internals, how software executes</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Rust</p>
                  <p className="text-sm text-muted-foreground">Safe systems programming and concurrency</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Go</p>
                  <p className="text-sm text-muted-foreground">Network services and infrastructure tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 border-t border-border pt-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">What I build</p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-accent font-semibold mt-0.5">01</span>
                <span className="text-sm text-muted-foreground">Developer products that solve real problems</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-semibold mt-0.5">02</span>
                <span className="text-sm text-muted-foreground">Systems and infrastructure</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-semibold mt-0.5">03</span>
                <span className="text-sm text-muted-foreground">Protocols and networking</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-semibold mt-0.5">04</span>
                <span className="text-sm text-muted-foreground">Learning by shipping</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-8 border-t border-border pt-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Current focus</p>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                HTTP servers from raw TCP sockets
              </li>
              <li className="text-sm text-muted-foreground flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Reading and analyzing production codebases
              </li>
              <li className="text-sm text-muted-foreground flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Building useful tools instead of writing tutorials
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
