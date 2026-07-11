import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { formatBlogDate, getPublishedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog SIMI | Carta digital, pedidos y gestión gastronómica",
  description: "Guías prácticas para restaurantes, pollerías, cafeterías, pastelerías y otros negocios gastronómicos.",
  alternates: { canonical: "/blog" }
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();
  const featured = posts.find((post) => post.is_featured) || posts[0];
  const remaining = featured ? posts.filter((post) => post.id !== featured.id) : [];

  return (
    <div className="min-h-screen text-foreground">
      <Navbar />
      <main>
        <section className="border-b border-border py-16 md:py-24">
          <div className="section-shell">
            <p className="text-sm font-medium text-primary">BLOG SIMI</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-medium leading-tight tracking-normal md:text-6xl">Ideas simples para vender y atender mejor.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground/64">Contenido pensado para negocios gastronómicos de Huancayo y otras ciudades que quieren ordenar su carta, pedidos y atención.</p>
          </div>
        </section>

        {featured ? (
          <section className="py-12 md:py-16">
            <div className="section-shell grid overflow-hidden rounded-2xl border border-border bg-card shadow-float lg:grid-cols-[1.15fr_0.85fr]">
              {featured.cover_image_url ? <Image src={featured.cover_image_url} alt={featured.cover_image_alt || featured.title} width={1200} height={760} priority className="h-full min-h-[320px] w-full object-cover" /> : <div className="min-h-[320px] bg-muted" />}
              <div className="flex flex-col justify-center p-7 md:p-10">
                <p className="text-xs font-medium text-primary">DESTACADO · {formatBlogDate(featured.published_at)}</p>
                <h2 className="mt-3 text-3xl font-medium leading-tight md:text-4xl">{featured.title}</h2>
                <p className="mt-4 text-base leading-7 text-foreground/64">{featured.excerpt}</p>
                <Link href={`/blog/${featured.slug}`} className="mt-7 inline-flex min-h-12 w-fit items-center rounded-full bg-primary px-6 text-sm font-medium text-white">Leer artículo</Link>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-20"><div className="section-shell rounded-2xl border border-dashed border-border bg-card p-10 text-center text-foreground/62">El primer artículo está en preparación.</div></section>
        )}

        {remaining.length ? (
          <section className="pb-20">
            <div className="section-shell">
              <h2 className="text-3xl font-medium">Más artículos</h2>
              <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {remaining.map((post) => (
                  <article key={post.id} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                    {post.cover_image_url ? <Image src={post.cover_image_url} alt={post.cover_image_alt || post.title} width={900} height={520} className="aspect-[16/10] w-full object-cover" /> : <div className="aspect-[16/10] bg-muted" />}
                    <div className="p-5">
                      <p className="text-xs text-foreground/52">{formatBlogDate(post.published_at)}</p>
                      <h3 className="mt-2 line-clamp-2 text-xl font-medium leading-tight">{post.title}</h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-foreground/64">{post.excerpt}</p>
                      <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex text-sm font-medium text-primary">Leer artículo</Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
