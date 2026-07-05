import { CartIcon, QrIcon } from "@/components/Icons";

export function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto w-[270px] sm:w-[310px] ${className}`}>
      <div className="relative rounded-[2.6rem] bg-neutral-950 p-2 shadow-elegant ring-1 ring-black/20">
        <div className="relative overflow-hidden rounded-[2.1rem] bg-[#fff8f2] text-[#1d1d1f]">
          <div className="absolute left-1/2 top-2 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-neutral-950" />
          <div className="flex h-[560px] flex-col">
            <div className="flex items-center justify-between px-6 pt-3 text-[10px] font-medium">
              <span>9:41</span>
              <span className="opacity-60">SIMI · Pollo Loco</span>
            </div>
            <div className="px-5 pt-5">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#ff2d1f] to-[#ff8a1a] text-xl font-medium text-white">P</div>
                <div>
                  <div className="text-[16px] font-medium">Pollo Loco</div>
                  <div className="text-[11px] text-neutral-500">Abierto · Polleria</div>
                </div>
              </div>
              <div className="mt-4 rounded-full bg-white px-4 py-3 text-[12px] text-neutral-500 shadow-sm">Buscar combos, bebidas...</div>
              <div className="mt-3 flex gap-2 overflow-hidden">
                {["Promos", "Pollos", "Chaufas", "Bebidas"].map((item, index) => (
                  <span key={item} className={`rounded-full px-3 py-1 text-[11px] font-medium ${index === 0 ? "bg-neutral-950 text-white" : "bg-white text-neutral-600"}`}>{item}</span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex-1 space-y-3 overflow-hidden px-5 pb-5">
              {[
                ["Combo familiar", "1 pollo + papas + gaseosa", "S/ 59.00", "Mas pedido"],
                ["1/4 Pollo a la Brasa", "Con papas y ensalada", "S/ 16.50", "Clasico"],
                ["Chaufa de pollo", "Wok con sabor oriental", "S/ 12.00", "Nuevo"]
              ].map(([name, desc, price, tag]) => (
                <div key={name} className="grid grid-cols-[64px_1fr_auto] items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-orange-50 to-amber-100 text-2xl">🍗</div>
                  <div className="min-w-0">
                    <div className="truncate text-[13px] font-medium">{name}</div>
                    <div className="truncate text-[10px] text-neutral-500">{desc}</div>
                    <span className="mt-1 inline-flex rounded-full bg-[#ffefe8] px-2 py-0.5 text-[9px] font-medium text-[#c62828]">{tag}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-[13px] font-medium">{price}</div>
                    <button className="mt-2 grid h-7 w-7 place-items-center rounded-full bg-[#ff5a1f] text-white">+</button>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between rounded-2xl bg-neutral-950 px-4 py-3 text-white">
                <div className="flex items-center gap-2 text-[12px]">
                  <QrIcon className="h-4 w-4" />
                  <span>Pedido · 2 items</span>
                </div>
                <span className="flex items-center gap-1 text-[12px] font-medium"><CartIcon className="h-4 w-4" /> S/ 75.50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
