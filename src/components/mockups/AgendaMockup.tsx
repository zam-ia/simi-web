import { BrowserMockup } from "@/components/mockups/BrowserMockup";
import { CalendarIcon, CheckIcon } from "@/components/Icons";

export function AgendaMockup({ className = "" }: { className?: string }) {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const dates = Array.from({ length: 35 }, (_, i) => i - 2);

  return (
    <BrowserMockup url="app.simi.pe/reservas" className={className}>
      <div className="grid bg-background sm:grid-cols-2">
        <div className="border-b border-border p-5 sm:border-b-0 sm:border-r">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium"><CalendarIcon className="h-4 w-4 text-primary" />Marzo 2026</div>
            <span className="chip">24 reservas</span>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-foreground/50">
            {days.map((day, index) => <div key={`${day}-${index}`} className="py-1 font-medium">{day}</div>)}
            {dates.map((date, index) => {
              const valid = date > 0 && date <= 31;
              const active = date === 14;
              const busy = [3, 8, 14, 19, 22, 27].includes(date);
              return (
                <div key={index} className={`aspect-square rounded-lg p-1 text-[10px] ${!valid ? "text-transparent" : active ? "bg-primary text-white" : busy ? "bg-primary/10 text-foreground" : "text-foreground/72"}`}>{valid ? date : "."}</div>
              );
            })}
          </div>
        </div>
        <div className="p-5">
          <div className="mb-3 text-sm font-medium">Reservas · viernes 14</div>
          {[["19:30", "Familia Lopez", "4 personas", true], ["20:00", "Mesa Andres", "2 personas", true], ["20:30", "Torta personalizada", "Entrega", false]].map(([hour, name, people, ok]) => (
            <div key={String(hour)} className="mb-2 flex items-center gap-3 rounded-2xl border border-border bg-card p-3">
              <div className="w-12 text-center">
                <div className="text-[10px] text-foreground/45">hora</div>
                <div className="text-sm font-medium">{hour}</div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">{name}</div>
                <div className="text-[11px] text-foreground/50">{people}</div>
              </div>
              <span className={`flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-medium ${ok ? "bg-green-500/15 text-green-700" : "bg-amber-500/15 text-amber-700"}`}>
                <CheckIcon className="h-3 w-3" />{ok ? "Confirmada" : "Pendiente"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </BrowserMockup>
  );
}
