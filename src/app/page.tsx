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
import { BlogHighlights } from "@/components/sections/BlogHighlights";
import { getPublishedPosts } from "@/lib/blog";

export default async function HomePage() {
  const blogPosts = await getPublishedPosts(3);

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
        <BlogHighlights posts={blogPosts} />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
