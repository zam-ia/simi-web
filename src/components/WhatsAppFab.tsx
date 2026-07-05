import { whatsappUrl } from "@/lib/utils";

export function WhatsAppFab() {
  return (
    <a href={whatsappUrl("Hola, quiero una demo de SIMI para mi negocio.")} className="fixed bottom-5 right-5 z-50 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white shadow-elegant transition hover:-translate-y-1 active:scale-[0.97]">
      WhatsApp
    </a>
  );
}
