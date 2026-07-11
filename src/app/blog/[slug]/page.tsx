import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { formatBlogDate, getPublishedPost } from "@/lib/blog";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) return { title: "Artículo no encontrado | SIMI" };
  return {
    title: post.seo_title || `${post.title} | SIMI`,
    description: post.seo_description || post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seo_title || post.title,
      description: post.seo_description || post.excerpt,
      type: "article",
      publishedTime: post.published_at,
      modifiedTime: post.updated_at,
      images: post.cover_image_url ? [{ url: post.cover_image_url, alt: post.cover_image_alt || post.title }] : undefined
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen text-foreground">
      <Navbar />
      <main>
        <article>
          <header className="section-shell py-12 text-center md:py-20">
            <Link href="/blog" className="text-sm font-medium text-primary">Volver al blog</Link>
            <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-medium leading-tight tracking-normal md:text-6xl">{post.title}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-foreground/64">{post.excerpt}</p>
            <p className="mt-5 text-sm text-foreground/52">{post.author_name} · {formatBlogDate(post.published_at)}</p>
          </header>

          {post.cover_image_url ? (
            <div className="section-shell overflow-hidden rounded-2xl border border-border bg-card shadow-float">
              <Image src={post.cover_image_url} alt={post.cover_image_alt || post.title} width={1400} height={800} priority className="aspect-[16/9] w-full object-cover" />
            </div>
          ) : null}

          <div className="section-shell grid gap-10 py-12 lg:grid-cols-[minmax(0,760px)_240px] lg:justify-center lg:py-16">
            <div className="article-copy">{renderContent(post.content)}</div>
            <aside className="h-fit rounded-2xl border border-border bg-card p-5 shadow-soft lg:sticky lg:top-24">
              <p className="text-sm font-medium">Lleva SIMI a tu negocio</p>
              <p className="mt-2 text-sm leading-6 text-foreground/62">Mira cómo se vería tu carta y el flujo de pedidos.</p>
              <Link href="/#demo" className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-white">Solicitar demo</Link>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

function renderContent(content: string) {
  return content.split(/\n{2,}/).map((block, index) => {
    const value = block.trim();
    if (!value) return null;
    if (value.startsWith("## ")) return <h2 key={index}>{value.slice(3)}</h2>;
    if (value.startsWith("### ")) return <h3 key={index}>{value.slice(4)}</h3>;
    const lines = value.split("\n").map((line) => line.trim()).filter(Boolean);
    if (lines.every((line) => line.startsWith("- "))) {
      return <ul key={index}>{lines.map((line, lineIndex) => <li key={lineIndex}>{line.slice(2)}</li>)}</ul>;
    }
    return <p key={index}>{lines.join(" ")}</p>;
  });
}
