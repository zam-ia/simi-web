import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Testimonial } from "@/components/sections/Testimonial";
import { Product } from "@/components/sections/Product";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { Rubros } from "@/components/sections/Rubros";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { LeadForm } from "@/components/sections/LeadForm";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function HomePage() {
  return (
    <div className="min-h-screen text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Testimonial />
        <Product />
        <HowItWorks />
        <Benefits />
        <Rubros />
        <Pricing />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
