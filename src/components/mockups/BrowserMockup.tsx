import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BrowserMockup({ url = "simi-peru.vercel.app/admin", children, className }: { url?: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-[28px] border border-border bg-card shadow-elegant", className)}>
      <div className="flex items-center gap-2 border-b border-border bg-muted/70 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="mx-auto hidden items-center gap-2 rounded-lg bg-background/80 px-3 py-1 text-[11px] text-foreground/58 sm:flex">
          <span className="h-2 w-2 rounded-full bg-[var(--success)]" />
          {url}
        </div>
        <span className="w-8" />
      </div>
      <div>{children}</div>
    </div>
  );
}
