import { ArrowUpRight } from "lucide-react";
import { socials } from "@/data/portfolio";

const Contact = () => (
  <section id="contact" className="px-6 py-20 md:py-32">
    <div className="max-w-4xl mx-auto">
      <div className="glass-strong rounded-3xl p-8 md:p-14 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/50 mb-4">Contact</p>
        <h2 className="display text-4xl md:text-6xl font-bold tracking-tight">
          Let's make something
          <br />
          <span className="text-foreground/50">worth shipping.</span>
        </h2>
        <a
          href="mailto:rohan.fozdar@gmail.com"
          className="display inline-block mt-8 text-2xl md:text-4xl font-semibold tracking-tight underline-offset-8 hover:underline"
        >
          rohan.fozdar@gmail.com
        </a>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="glass-pill inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm hover:scale-[1.03] transition-transform"
            >
              {s.label}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </div>
      <p className="text-center text-xs text-foreground/40 mt-8">
        © {new Date().getFullYear()} Rohan Fozdar. Designed and built with care.
      </p>
    </div>
  </section>
);

export default Contact;
