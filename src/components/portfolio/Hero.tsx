const Hero = () => (
  <section id="top" className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-6">
    <div className="max-w-5xl mx-auto animate-fade-up">
      <div className="glass-pill inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-foreground/70 mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Available for select work — 2026
      </div>
      <h1 className="display text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight">
        Rohan Fozdar.
        <br />
        <span className="text-foreground/50">Everything Engineer.</span>
      </h1>
      <p className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/70 leading-relaxed">
        I ship to solve problems.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href="#work" className="glass-strong rounded-full px-6 py-3 text-sm font-medium hover:scale-[1.02] active:scale-100 transition-transform">
          See the work →
        </a>
        <a href="#contact" className="rounded-full px-6 py-3 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
          Get in touch
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
