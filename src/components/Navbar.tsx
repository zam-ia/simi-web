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
            <span className="block text-lg font-medium leading-none text-foreground">SIMI</span>
            <span className="hidden text-xs text-foreground/58 sm:block">Carta digital lista en 48h</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-foreground/68 lg:flex">
          <Link href="/#producto">Producto</Link>
          <Link href="/#rubros">Rubros</Link>
          <Link href="/#precios">Precios</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#demo">Demo</Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/#demo" className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-float transition active:scale-[0.97]">
            Quiero mi demo
          </Link>
        </div>
      </div>
    </header>
  );
}
