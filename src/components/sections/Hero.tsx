import Image from "next/image";
import { CheckIcon, QrIcon } from "@/components/Icons";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { PhoneMockup } from "@/components/mockups/PhoneMockup";
import { QrCard } from "@/components/mockups/QrCard";

export function Hero() {
  return (
    <section className="section-shell grid gap-10 pb-16 pt-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:pb-24 lg:pt-20">
      <div className="reveal">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm text-foreground/72 shadow-soft">
          <Image src="/simi/brand_app_icons/SIMI_icono.svg" alt="" width={22} height={22} className="rounded-md" />
          Tu carta digital lista en 48 horas
        </div>
        <h1 className="mt-6 max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.02em] md:text-7xl">
          Tu carta cambia. Tu QR no.
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-foreground/68">
          SIMI ayuda a restaurantes, pollerias y cafeterias a tener menu digital, pedidos por WhatsApp y panel de control sin depender de cartas en PDF.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#demo" className="rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-white shadow-float transition hover:-translate-y-1 active:scale-[0.97]">Quiero ver mi demo</a>
          <a href="#producto" className="rounded-full border border-border bg-card px-6 py-3 text-center text-sm font-medium shadow-soft transition hover:-translate-y-1 active:scale-[0.97]">Ver como funciona</a>
        </div>
        <div className="mt-6 grid gap-2 text-sm text-foreground/70 sm:grid-cols-3">
          {["QR permanente", "Sin comisiones", "Cambios en segundos"].map((item) => (
            <span key={item} className="flex items-center gap-2"><CheckIcon className="h-4 w-4 text-primary" />{item}</span>
          ))}
        </div>
      </div>

      <div className="relative min-h-[620px] reveal lg:min-h-[680px]">
        <div className="absolute -right-2 top-0 hidden w-[76%] opacity-95 lg:block">
          <DashboardMockup />
        </div>
        <div className="absolute left-0 top-10 z-10 float-soft">
          <PhoneMockup />
        </div>
        <div className="absolute bottom-4 right-0 z-20 w-[245px] sm:w-[280px]">
          <QrCard />
        </div>
        <div className="absolute right-12 top-24 z-30 hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-[#c62828] shadow-elegant lg:flex">
          Pedido recibido
        </div>
        <div className="absolute left-10 top-[520px] z-30 hidden items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 text-sm font-medium text-white shadow-elegant sm:flex">
          <QrIcon className="h-4 w-4" /> Link para redes
        </div>
      </div>
    </section>
  );
}
