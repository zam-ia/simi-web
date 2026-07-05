import { CheckIcon } from "@/components/Icons";

export function Pricing() {
  const plans = [
    ["Basico", "S/ 49", "Carta digital con QR para empezar.", ["QR permanente", "Hasta 30 productos", "1 cambio mensual"]],
    ["Pro", "S/ 99", "Recomendado para negocios con pedidos activos.", ["Productos ilimitados", "Pedidos por WhatsApp", "Cambios ilimitados", "Soporte prioritario"]],
    ["Premium", "S/ 179", "Para marcas que quieren mas personalizacion.", ["Multi-sede", "Reportes", "Diseno personalizado", "Acompanamiento"]]
  ];

  return (
    <section id="precios" className="section-shell py-14">
      <h2 className="text-4xl font-medium tracking-[-0.02em]">Precios simples para empezar sin riesgo.</h2>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {plans.map(([name, price, text, features], index) => (
          <article key={String(name)} className={`rounded-[32px] border p-6 shadow-soft ${index === 1 ? "border-primary bg-neutral-950 text-white" : "border-border bg-card"}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-medium">{name}</h3>
                <p className={`mt-2 text-sm leading-6 ${index === 1 ? "text-white/62" : "text-foreground/62"}`}>{text as string}</p>
              </div>
              {index === 1 ? <span className="rounded-full bg-primary px-3 py-1 text-xs text-white">Mas elegido</span> : null}
            </div>
            <div className="mt-6 text-4xl font-medium">{price}<span className="text-sm opacity-60"> / mes</span></div>
            <ul className="mt-6 grid gap-3 text-sm">
              {(features as string[]).map((feature) => (
                <li key={feature} className="flex gap-2"><CheckIcon className="h-5 w-5 shrink-0 text-primary" />{feature}</li>
              ))}
            </ul>
            <a href="#demo" className={`mt-7 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-medium ${index === 1 ? "bg-primary text-white" : "bg-muted text-foreground"}`}>Elegir plan</a>
          </article>
        ))}
      </div>
    </section>
  );
}
