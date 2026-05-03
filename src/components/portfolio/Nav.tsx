const links = [
  { label: "Work", href: "#work" },
  { label: "Resume", href: "#resume" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Nav = () => (
  <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 px-4 w-full max-w-3xl">
    <nav className="glass rounded-full px-2 py-2 flex items-center justify-between">
      <a href="#top" className="display font-bold text-sm pl-3 pr-2 tracking-tight">
        RF
      </a>
      <ul className="flex items-center gap-1 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="px-3 py-1.5 rounded-full text-foreground/80 hover:text-foreground hover:bg-white/40 transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Nav;