import { PhoneMockup } from "@/components/mockups/PhoneMockup";

export function Testimonial() {
  return (
    <section className="section-shell grid gap-6 py-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
      <div className="rounded-[34px] border border-border bg-card p-5 shadow-soft">
        <PhoneMockup />
      </div>
      <div>
        <p className="text-sm font-medium text-primary">Caso real</p>
        <h2 className="mt-3 text-4xl font-medium tracking-[-0.02em]">Pollo Loco fue el primer negocio que uso SIMI como carta viva.</h2>
        <blockquote className="mt-6 rounded-[28px] bg-card p-6 text-xl leading-8 shadow-soft">
          "Ahora el cliente ve el menu actualizado, escoge y nosotros solo confirmamos."
        </blockquote>
        <a href="https://simi-peru.vercel.app/menu/pollo-loco" className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-float">Ver carta real</a>
      </div>
    </section>
  );
}
