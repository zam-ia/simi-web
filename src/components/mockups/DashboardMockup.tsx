import { BrowserMockup } from "@/components/mockups/BrowserMockup";
import { ChartIcon, CheckIcon } from "@/components/Icons";

export function DashboardMockup({ className = "" }: { className?: string }) {
  const metrics = [
    ["Pedidos activos", "12", "ahora"],
    ["Pagos", "3", "validar"],
    ["Reservas", "8", "hoy"],
    ["Productos", "86", "publicados"]
  ];

  const flow = [
    ["Nuevos", 72],
    ["En cocina", 56],
    ["Listos", 38],
    ["Delivery", 44]
  ];

  const alerts = [
    ["Pedido nuevo", "Aceptar"],
    ["Pago enviado", "Validar"],
    ["Delivery listo", "Asignar"]
  ];

  return (
    <BrowserMockup url="simi-peru.vercel.app/admin" className={className}>
      <div className="grid grid-cols-12 bg-background">
        <aside className="col-span-3 hidden border-r border-border bg-muted/45 p-4 sm:block">
          <div className="mb-6 flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary text-white">S</span>
            <span className="text-lg font-medium">SIMI</span>
          </div>
          {["Inicio", "Pedidos", "Cocina", "Delivery", "Reservas", "Pagos"].map((item, index) => (
            <div key={item} className={`mb-1 rounded-xl px-3 py-2 text-xs ${index === 0 ? "bg-primary/12 text-primary" : "text-foreground/58"}`}>{item}</div>
          ))}
        </aside>
        <main className="col-span-12 p-4 sm:col-span-9 sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="text-xs text-foreground/50">Hoy - en vivo</div>
              <div className="text-2xl font-medium">Centro operativo</div>
            </div>
            <span className="chip">Actualizado</span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {metrics.map(([label, value, delta]) => (
              <div key={label} className="rounded-2xl border border-border bg-card p-3">
                <div className="text-[10px] text-foreground/50">{label}</div>
                <div className="mt-1 text-lg font-medium">{value}</div>
                <div className="mt-1 text-[10px] text-primary">{delta}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-5">
            <div className="rounded-2xl border border-border bg-card p-4 md:col-span-3">
              <div className="mb-3 flex items-center justify-between text-xs font-medium">
                <span>Flujo de pedidos</span>
                <ChartIcon className="h-4 w-4 text-foreground/45" />
              </div>
              <div className="grid gap-2">
                {flow.map(([label, width]) => (
                  <div key={String(label)}>
                    <div className="mb-1 flex justify-between text-[10px] text-foreground/50">
                      <span>{label}</span>
                      <span>{width}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-gradient-to-r from-primary to-[#ffc107]" style={{ width: `${width}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 md:col-span-2">
              <div className="mb-2 text-xs font-medium">Alertas recientes</div>
              {alerts.map(([name, status]) => (
                <div key={name} className="mb-2 flex items-center justify-between rounded-xl bg-muted px-3 py-2 text-[11px]">
                  <span>{name}</span>
                  <span className="flex items-center gap-1 text-[var(--success)]"><CheckIcon className="h-3 w-3" />{status}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </BrowserMockup>
  );
}
