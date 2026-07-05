import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/82 backdrop-blur-2xl">
      <div className="section-shell flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 overflow-hidden rounded-2xl bg-white shadow-soft">
            <Image src="/simi/brand_app_icons/simi-app-icon.png" alt="SIMI" width={40} height={40} />
          </span>
          <span>
            <Image src="/simi/brand_app_icons/SIMI_logo_TRANSPARENTE.svg" alt="SIMI" width={74} height={22} className="h-[22px] w-auto dark:brightness-110" />
            <span className="hidden text-xs text-foreground/58 sm:block">Carta digital lista en 48h</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-foreground/68 lg:flex">
          <a href="#producto">Producto</a>
          <a href="#rubros">Rubros</a>
          <a href="#precios">Precios</a>
          <a href="#demo">Demo</a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#demo" className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-float transition active:scale-[0.97]">
            Quiero mi demo
          </a>
        </div>
      </div>
    </header>
  );
}
