import { CheckIcon } from "@/components/Icons";

export function Benefits() {
  return (
    <section className="section-shell py-14">
      <div className="rounded-[36px] border border-border bg-card p-6 shadow-soft md:p-8">
        <h2 className="text-4xl font-medium tracking-[-0.02em]">Lo que gana el negocio desde el primer dia.</h2>
        <div className="mt-7 grid gap-3 md:grid-cols-3">
          {["Ya no reenvias cartas", "El QR no se vuelve obsoleto", "Tu cliente decide mas rapido", "Menos pedidos incompletos", "Mejor imagen para redes", "Control sin sistema complicado"].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl bg-muted p-4 text-sm">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
