import { CartIcon, CheckIcon } from "@/components/Icons";

export function OrderMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-[28px] border border-border bg-card p-5 shadow-elegant ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-white"><CartIcon className="h-5 w-5" /></span>
          <div>
            <div className="text-sm font-medium">Pedido #263220</div>
            <div className="text-[11px] text-foreground/52">Cliente: Carlos - Recojo</div>
          </div>
        </div>
        <span className="chip">Nuevo</span>
      </div>
      <div className="mt-4 space-y-2">
        {[["1x", "Combo familiar", "S/ 59.00"], ["1x", "Gaseosa 1.5L", "S/ 8.00"]].map(([q, name, price]) => (
          <div key={name} className="flex items-center justify-between text-sm">
            <span><span className="mr-2 text-foreground/45">{q}</span>{name}</span>
            <span className="font-medium">{price}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm">
        <span className="text-foreground/58">Total</span>
        <span className="font-medium">S/ 67.00</span>
      </div>
      <div className="mt-4 grid gap-2 rounded-2xl bg-muted p-3 text-[11px]">
        <span className="flex items-center gap-2 text-[var(--success)]"><CheckIcon className="h-3 w-3" /> Pedido recibido</span>
        <span className="flex items-center gap-2 text-primary"><CheckIcon className="h-3 w-3" /> Listo para aceptar</span>
      </div>
    </div>
  );
}
