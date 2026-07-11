import Image from "next/image";
import Link from "next/link";
import { formatBlogDate, type PublicBlogPost } from "@/lib/blog";

export function BlogHighlights({ posts }: { posts: PublicBlogPost[] }) {
  if (!posts.length) return null;

  return (
    <section className="py-20" aria-labelledby="blog-home-title">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary">Ideas para vender mejor</p>
            <h2 id="blog-home-title" className="mt-2 text-3xl font-medium tracking-normal md:text-5xl">Guías claras para negocios gastronómicos.</h2>
            <p className="mt-4 text-base leading-7 text-foreground/64">Carta digital, pedidos, atención y operación diaria explicados sin complicaciones.</p>
          </div>
          <Link href="/blog" className="inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-card px-5 text-sm font-medium shadow-soft">Ver todos los artículos</Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
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
  );
}
