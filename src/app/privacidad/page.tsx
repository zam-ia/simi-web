import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = { title: "Privacidad | SIMI", description: "Uso de datos y notificaciones de SIMI." };

export default function PrivacyPage() {
  return (
    <div className="min-h-screen text-foreground">
      <Navbar />
      <main className="section-shell py-16">
        <article className="article-copy mx-auto max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-soft md:p-10">
          <h1>Privacidad y notificaciones</h1>
          <p>SIMI utiliza los datos ingresados en una carta digital para registrar y atender el pedido solicitado. El número de WhatsApp se comparte con el negocio que recibe el pedido.</p>
          <h2>Mensajes por WhatsApp</h2>
          <p>La confirmación automática al cliente solo se programa cuando la persona acepta recibir actualizaciones de ese pedido. Estas notificaciones son transaccionales y no autorizan publicidad.</p>
          <h2>Información operativa</h2>
          <p>El negocio puede recibir una copia resumida del pedido en su WhatsApp de atención. Los pagos, direcciones y datos de contacto se protegen mediante controles de acceso por negocio.</p>
          <h2>Solicitudes comerciales</h2>
          <p>Los datos enviados en el formulario de demo se usan para contactar al negocio y preparar una demostración de SIMI.</p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
