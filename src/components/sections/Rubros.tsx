import Image from "next/image";
import { CalendarIcon, CartIcon, CheckIcon, PhoneIcon } from "@/components/Icons";

export function Rubros() {
  const items = [
    { name: "Restaurantes", text: "Carta + pedido en mesa + reservas", icon: PhoneIcon },
    { name: "Pastelerias", text: "Catalogo + pedido personalizado + agenda", icon: CalendarIcon },
    { name: "Cafeterias", text: "Recojo + delivery + venta rapida", icon: CheckIcon },
    { name: "Pollerias", text: "Combos + cocina + delivery", icon: CartIcon }
  ];

  return (
    <section id="rubros" className="section-shell py-14">
      <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.02em]">SIMI se adapta al tipo de negocio, no al reves.</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ name, text, icon: Icon }) => (
          <article key={name} className="group overflow-hidden rounded-[30px] border border-border bg-card p-5 shadow-soft transition hover:-translate-y-1">
            <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[24px] bg-gradient-to-br from-white to-orange-100 dark:from-muted dark:to-neutral-900">
              <Image src="/simi/brand_app_icons/SIMI_icono.svg" alt="" width={42} height={42} className="absolute left-4 top-4 rounded-xl shadow-soft" />
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/82 text-primary shadow-soft dark:bg-white/10">
                <Icon className="h-8 w-8" />
              </span>
            </div>
            <h3 className="mt-5 text-xl font-medium">{name}</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/60">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
