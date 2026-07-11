import { BrowserMockup } from "@/components/mockups/BrowserMockup";

export function MenuEditorMockup({ className = "" }: { className?: string }) {
  return (
    <BrowserMockup url="simi-peru.vercel.app/admin" className={className}>
      <div className="grid bg-background sm:grid-cols-5">
        <aside className="hidden border-r border-border bg-muted/45 p-4 sm:col-span-2 sm:block">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium">Categorias</span>
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-white">+</span>
          </div>
          {[["Pollos", "6"], ["Ofertas", "12"], ["Parrillas", "9"], ["Bebidas", "14"]].map(([name, count], index) => (
            <div key={name} className={`mb-2 flex items-center justify-between rounded-xl px-3 py-2 text-xs ${index === 1 ? "bg-card shadow-soft" : "text-foreground/58"}`}>
              <span>{name}</span>
              <span>{count}</span>
            </div>
          ))}
        </aside>
        <main className="p-5 sm:col-span-3">
          <div className="mb-4">
            <div className="text-xs text-foreground/50">Editando producto</div>
            <div className="text-xl font-medium">Combo familiar</div>
          </div>
          <div className="grid gap-3">
            <Field label="Producto" value="Combo familiar" />
            <Field label="Precio anterior" value="S/ 56.00" muted />
            <Field label="Precio actualizado" value="S/ 59.00" accent />
            <Field label="Estado" value="Publicado" success />
          </div>
        </main>
      </div>
    </BrowserMockup>
  );
}

function Field({ label, value, muted, accent, success }: { label: string; value: string; muted?: boolean; accent?: boolean; success?: boolean }) {
  return (
    <div>
      <div className="mb-1 text-[10px] uppercase tracking-wide text-foreground/45">{label}</div>
      <div className={`rounded-xl border border-border bg-card px-3 py-2 text-sm ${muted ? "text-foreground/45 line-through" : ""} ${accent ? "text-primary" : ""} ${success ? "text-[var(--success)]" : ""}`}>{value}</div>
    </div>
  );
}
