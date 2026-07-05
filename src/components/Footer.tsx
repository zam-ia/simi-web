import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-shell flex flex-col gap-4 text-sm text-foreground/62 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/simi/brand_app_icons/simi-app-icon.png" alt="SIMI" width={34} height={34} className="rounded-xl" />
          <span><span className="font-medium text-foreground">SIMI</span> - Carta digital, pedidos y reservas para negocios gastronomicos.</span>
        </div>
        <a className="font-medium text-foreground" href="#demo">Solicitar demo</a>
      </div>
    </footer>
  );
}
