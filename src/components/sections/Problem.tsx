export function Problem() {
  return (
    <section className="section-shell py-12">
      <div className="grid gap-4 rounded-[34px] border border-border bg-neutral-950 p-6 text-white shadow-elegant md:grid-cols-[0.8fr_1.2fr] md:p-8">
        <div>
          <p className="text-sm text-white/60">Antes de SIMI</p>
          <h2 className="mt-2 text-3xl font-medium">WhatsApp vende, pero tambien desordena.</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {["Cartas que se reenvian", "Precios viejos en circulacion", "Pedidos mezclados en chats"].map((item) => (
            <div key={item} className="rounded-2xl bg-white/8 p-4 text-sm text-white/78">{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
