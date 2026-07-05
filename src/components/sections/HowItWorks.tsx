export function HowItWorks() {
  return (
    <section className="section-shell py-14">
      <h2 className="max-w-2xl text-4xl font-medium tracking-[-0.02em]">De tu carta actual a una carta digital lista en 48 horas.</h2>
      <div className="mt-8 grid gap-3 md:grid-cols-4">
        {[
          ["01", "Nos pasas tu carta", "PDF, foto, Excel o mensaje de WhatsApp."],
          ["02", "Armamos tu menu", "Categorias, precios, fotos y promociones."],
          ["03", "Te damos QR y link", "Para mesas, redes y WhatsApp."],
          ["04", "Empiezas a vender", "Tus clientes ven, eligen y piden mejor."]
        ].map(([number, title, text]) => (
          <article key={number} className="rounded-[28px] border border-border bg-card p-5 shadow-soft">
            <span className="text-sm font-medium text-primary">{number}</span>
            <h3 className="mt-4 text-xl font-medium">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/60">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
