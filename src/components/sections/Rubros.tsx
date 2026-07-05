export function Rubros() {
  const items = [
    ["Restaurantes", "Carta + pedido en mesa + reservas", "🍽️"],
    ["Pastelerias", "Catalogo + pedido personalizado + agenda", "🎂"],
    ["Cafeterias", "Recojo + delivery + venta rapida", "☕"],
    ["Pollerias", "Combos + cocina + delivery", "🍗"]
  ];

  return (
    <section id="rubros" className="section-shell py-14">
      <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.02em]">SIMI se adapta al tipo de negocio, no al reves.</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(([name, text, icon]) => (
          <article key={name} className="group overflow-hidden rounded-[30px] border border-border bg-card p-5 shadow-soft transition hover:-translate-y-1">
            <div className="grid aspect-[4/3] place-items-center rounded-[24px] bg-gradient-to-br from-white to-orange-100 text-6xl dark:from-muted dark:to-neutral-900">{icon}</div>
            <h3 className="mt-5 text-xl font-medium">{name}</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/60">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
