import { BrowserMockup } from "@/components/mockups/BrowserMockup";
import { ChartIcon, CheckIcon } from "@/components/Icons";

export function DashboardMockup({ className = "" }: { className?: string }) {
  return (
    <BrowserMockup url="app.simi.pe/panel" className={className}>
      <div className="grid grid-cols-12 bg-background">
        <aside className="col-span-3 hidden border-r border-border bg-muted/45 p-4 sm:block">
          <div className="mb-6 flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary text-white">S</span>
            <span className="text-lg font-medium">SIMI</span>
          </div>
          {["Resumen", "Pedidos", "Carta", "Reservas", "Delivery", "Ajustes"].map((item, index) => (
            <div key={item} className={`mb-1 rounded-xl px-3 py-2 text-xs ${index === 0 ? "bg-primary/12 text-primary" : "text-foreground/58"}`}>{item}</div>
          ))}
        </aside>
        <main className="col-span-12 p-4 sm:col-span-9 sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="text-xs text-foreground/50">Hoy · en vivo</div>
              <div className="text-2xl font-medium">Centro de ventas</div>
            </div>
            <span className="chip">Actualizado</span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[["Ventas", "S/ 482", "+12%"], ["Pedidos", "38", "+4"], ["Pagos", "3", "validar"], ["Reservas", "12", "hoy"]].map(([label, value, delta]) => (
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
                <span>Pedidos por hora</span>
                <ChartIcon className="h-4 w-4 text-foreground/45" />
              </div>
              <div className="flex h-24 items-end gap-1.5">
                {[35, 52, 40, 68, 84, 72, 90, 60, 44, 58, 76, 88].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary to-[#ffc107]" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 md:col-span-2">
              <div className="mb-2 text-xs font-medium">Pedidos recientes</div>
              {[["Mesa 4", "Servido"], ["Delivery #204", "En cocina"], ["Recojo #201", "Listo"]].map(([name, status]) => (
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
