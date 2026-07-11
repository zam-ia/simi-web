export type PublicBlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image_url: string | null;
  cover_image_alt: string | null;
  author_name: string;
  tags: string[];
  is_featured: boolean;
  seo_title: string | null;
  seo_description: string | null;
  published_at: string;
  updated_at: string;
};

export async function getPublishedPosts(limit?: number): Promise<PublicBlogPost[]> {
  const baseUrl = getRestUrl();
  const headers = getHeaders();
  if (!baseUrl || !headers) return [];

  const params = new URLSearchParams({
    select: "id,slug,title,excerpt,content,cover_image_url,cover_image_alt,author_name,tags,is_featured,seo_title,seo_description,published_at,updated_at",
    status: "eq.published",
    published_at: `lte.${new Date().toISOString()}`,
    order: "is_featured.desc,published_at.desc"
  });
  if (limit) params.set("limit", String(limit));

  const response = await fetch(`${baseUrl}/blog_posts?${params}`, { headers, next: { revalidate: 60 } });
  if (!response.ok) return [];
  return await response.json() as PublicBlogPost[];
}

export async function getPublishedPost(slug: string): Promise<PublicBlogPost | null> {
  const baseUrl = getRestUrl();
  const headers = getHeaders();
  if (!baseUrl || !headers) return null;

  const params = new URLSearchParams({
    select: "id,slug,title,excerpt,content,cover_image_url,cover_image_alt,author_name,tags,is_featured,seo_title,seo_description,published_at,updated_at",
    slug: `eq.${slug}`,
    status: "eq.published",
    published_at: `lte.${new Date().toISOString()}`,
    limit: "1"
  });
  const response = await fetch(`${baseUrl}/blog_posts?${params}`, { headers, next: { revalidate: 60 } });
  if (!response.ok) return null;
  const rows = await response.json() as PublicBlogPost[];
  return rows[0] || null;
}

function getRestUrl() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, "");
  return supabaseUrl ? `${supabaseUrl}/rest/v1` : null;
}

function getHeaders() {
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!anonKey) return null;
  return { apikey: anonKey, Authorization: `Bearer ${anonKey}` };
}

export function formatBlogDate(value: string) {
  return new Intl.DateTimeFormat("es-PE", { day: "numeric", month: "long", year: "numeric" }).format(new Date(value));
}
