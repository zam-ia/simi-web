import { AgendaMockup } from "@/components/mockups/AgendaMockup";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { MenuEditorMockup } from "@/components/mockups/MenuEditorMockup";
import { OrderMockup } from "@/components/mockups/OrderMockup";
import { PhoneMockup } from "@/components/mockups/PhoneMockup";
import { QrCard } from "@/components/mockups/QrCard";

export function Product() {
  return (
    <section id="producto" className="section-shell py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-primary">Producto real, no solo QR</p>
        <h2 className="mt-3 text-4xl font-medium tracking-[-0.02em] md:text-5xl">Todo lo que necesita tu negocio para vender mejor desde el celular.</h2>
      </div>
      <div className="mt-8 grid gap-5">
        <Feature title="Actualiza tu menu en segundos" text="Cambias precio, foto o disponibilidad en el panel. Tu carta publica queda actualizada al instante." visual={<MenuEditorMockup />} />
        <Feature title="Pedidos mas ordenados" text="El cliente arma su pedido desde la carta y tu equipo recibe un resumen claro para mesa, recojo o delivery." visual={<div className="grid gap-4 md:grid-cols-2"><PhoneMockup /><OrderMockup className="self-center" /></div>} reverse />
        <Feature title="QR permanente + link para redes" text="Imprimes el QR una vez y usas el mismo link en Instagram, WhatsApp y Google Maps." visual={<div className="grid gap-4 md:grid-cols-[0.85fr_1.15fr]"><QrCard /><PhoneMockup /></div>} />
        <Feature title="Agenda, reservas y pedidos programados" text="Para restaurantes, pastelerias y catering: organiza reservas, entregas y pedidos por fecha." visual={<AgendaMockup />} reverse />
        <Feature title="Panel operativo claro" text="Pedidos activos, pagos por validar, cocina, delivery, reservas y productos desde una vista facil de leer." visual={<DashboardMockup />} />
      </div>
    </section>
  );
}

function Feature({ title, text, visual, reverse }: { title: string; text: string; visual: React.ReactNode; reverse?: boolean }) {
  return (
    <article className="grid gap-6 overflow-hidden rounded-[36px] border border-border bg-card p-5 shadow-soft lg:grid-cols-2 lg:items-center lg:p-8">
      <div className={reverse ? "lg:order-2" : ""}>
        <h3 className="text-3xl font-medium tracking-[-0.02em]">{title}</h3>
        <p className="mt-3 max-w-xl text-lg leading-8 text-foreground/64">{text}</p>
      </div>
      <div>{visual}</div>
    </article>
  );
}
