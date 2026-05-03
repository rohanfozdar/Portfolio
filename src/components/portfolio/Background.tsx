const Background = () => (
  <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-background">
    <div
      className="orb animate-drift-1"
      style={{
        width: 520,
        height: 520,
        top: "-120px",
        left: "-80px",
        background: "hsl(var(--orb-1) / 0.85)",
      }}
    />
    <div
      className="orb animate-drift-2"
      style={{
        width: 600,
        height: 600,
        top: "30%",
        right: "-160px",
        background: "hsl(var(--orb-2) / 0.7)",
      }}
    />
    <div
      className="orb animate-drift-3"
      style={{
        width: 480,
        height: 480,
        bottom: "-120px",
        left: "20%",
        background: "hsl(var(--orb-3) / 0.7)",
      }}
    />
    <div
      className="orb animate-drift-1"
      style={{
        width: 420,
        height: 420,
        top: "55%",
        left: "-100px",
        background: "hsl(var(--orb-4) / 0.6)",
      }}
    />
  </div>
);

export default Background;