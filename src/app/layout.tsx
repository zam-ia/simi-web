import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://simi-peru.vercel.app"),
  title: "SIMI | Carta digital para negocios gastronomicos",
  description: "Tu carta digital lista en 48 horas para recibir pedidos por WhatsApp sin reenviar menus ni cambiar tu QR.",
  icons: {
    icon: "/simi/brand_app_icons/SIMI_icono.svg",
    apple: "/simi/previews/preview_app_icon.png"
  },
  openGraph: {
    title: "SIMI | Carta digital, pedidos y reservas",
    description: "Una carta moderna con QR permanente, pedidos por WhatsApp y panel de control para tu negocio.",
    siteName: "SIMI",
    type: "website",
    images: [{ url: "/simi/previews/simi-share-preview.png", width: 1200, height: 630, alt: "SIMI landing preview" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "SIMI | Carta digital, pedidos y reservas",
    description: "Tu carta digital lista en 48 horas para recibir pedidos por WhatsApp.",
    images: ["/simi/previews/simi-share-preview.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
