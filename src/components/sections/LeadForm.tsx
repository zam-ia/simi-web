"use client";

import { useState, useTransition } from "react";
import { whatsappUrl } from "@/lib/utils";

const apiUrl = process.env.NEXT_PUBLIC_SIMI_API_URL || "";

export function LeadForm() {
  const [message, setMessage] = useState("");
  const [ok, setOk] = useState(false);
  const [isPending, startTransition] = useTransition();

  function submit(formData: FormData) {
    startTransition(async () => {
      setMessage("");
      setOk(false);

      const search = new URLSearchParams(window.location.search);
      const payload = {
        businessName: String(formData.get("business_name") || ""),
        whatsapp: String(formData.get("whatsapp") || ""),
        businessType: String(formData.get("business_type") || "restaurant"),
        city: String(formData.get("city") || "Huancayo"),
        message: String(formData.get("message") || ""),
        planInterest: String(formData.get("plan_interest") || "Pro"),
        source: "simi-web",
        utm: {
          source: search.get("utm_source"),
          medium: search.get("utm_medium"),
          campaign: search.get("utm_campaign"),
          content: search.get("utm_content"),
          term: search.get("utm_term")
        }
      };

      if (!apiUrl) {
        setMessage("Falta configurar NEXT_PUBLIC_SIMI_API_URL para guardar leads en la API.");
        return;
      }

      const response = await fetch(`${apiUrl.replace(/\/$/, "")}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setMessage(data.error || "No se pudo enviar la solicitud.");
        return;
      }

      setOk(true);
      setMessage("Listo. Te contactaremos por WhatsApp para preparar tu demo.");
    });
  }

  return (
    <section id="demo" className="section-shell py-16">
      <div className="grid gap-6 rounded-[38px] border border-border bg-card p-6 shadow-elegant lg:grid-cols-[0.82fr_1.18fr] lg:p-8">
        <div>
          <p className="text-sm font-medium text-primary">Demo personalizada</p>
          <h2 className="mt-3 text-4xl font-medium tracking-[-0.02em]">Mira como se veria SIMI en tu negocio.</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/64">
            Enviamos una primera propuesta por WhatsApp con tu rubro, tu carta y el estilo de tu marca.
          </p>
          <a href={whatsappUrl("Hola, quiero ver una demo de SIMI para mi negocio.")} className="mt-6 inline-flex rounded-full border border-border bg-muted px-5 py-3 text-sm font-medium">
            Prefiero escribir por WhatsApp
          </a>
        </div>
        <form action={submit} className="grid gap-4 md:grid-cols-2">
          <Field label="Nombre del negocio" name="business_name" required />
          <Field label="WhatsApp" name="whatsapp" placeholder="+51 999 999 999" required />
          <label className="grid gap-2 text-sm">
            <span className="font-medium">Rubro</span>
            <select name="business_type" className="min-h-12 rounded-2xl border border-border bg-background px-4 outline-none">
              <option value="polleria">Polleria</option>
              <option value="restaurant">Restaurante</option>
              <option value="coffee_shop">Cafeteria</option>
              <option value="pastry_shop">Pasteleria</option>
              <option value="fast_food">Fast food</option>
            </select>
          </label>
          <Field label="Ciudad" name="city" defaultValue="Huancayo" />
          <label className="grid gap-2 text-sm md:col-span-2">
            <span className="font-medium">Que quieres mejorar?</span>
            <textarea name="message" rows={4} className="rounded-2xl border border-border bg-background px-4 py-3 outline-none" placeholder="Ej: quiero dejar de mandar mi carta por WhatsApp." />
          </label>
          {message ? <p className={`rounded-2xl p-3 text-sm md:col-span-2 ${ok ? "bg-green-500/12 text-green-700 dark:text-green-300" : "bg-red-500/12 text-red-700 dark:text-red-300"}`}>{message}</p> : null}
          <button disabled={isPending} className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-float disabled:opacity-60 md:col-span-2">
            {isPending ? "Enviando..." : "Quiero mi demo"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, required, placeholder, defaultValue }: { label: string; name: string; required?: boolean; placeholder?: string; defaultValue?: string }) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-medium">{label}</span>
      <input name={name} required={required} placeholder={placeholder} defaultValue={defaultValue} className="min-h-12 rounded-2xl border border-border bg-background px-4 outline-none" />
    </label>
  );
}
