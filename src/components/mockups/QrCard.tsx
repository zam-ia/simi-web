export function QrCard({ label = "Pollo Loco", className = "" }: { label?: string; className?: string }) {
  const size = 21;
  const cells = Array.from({ length: size * size }, (_, i) => {
    const x = i % size;
    const y = Math.floor(i / size);
    const seed = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
    const finder = (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13);
    return finder || seed - Math.floor(seed) > 0.57;
  });

  return (
    <div className={`rounded-[30px] bg-card p-5 shadow-elegant ring-1 ring-border ${className}`}>
      <div className="flex items-center justify-between text-xs text-foreground/58">
        <span className="text-lg font-medium text-foreground">{label}</span>
        <span className="chip">Carta digital</span>
      </div>
      <div className="mt-4 aspect-square rounded-[24px] bg-white p-4">
        <div className="grid h-full w-full" style={{ gridTemplateColumns: `repeat(${size}, 1fr)`, gap: 2 }}>
          {cells.map((filled, index) => <span key={index} className={filled ? "rounded-[1px] bg-neutral-950" : "bg-transparent"} />)}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 text-[11px] text-foreground/58">
        <span>Escanea y mira la carta</span>
        <span className="font-medium text-primary">simi.pe/pollo-loco</span>
      </div>
    </div>
  );
}
