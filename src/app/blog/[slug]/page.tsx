import { getBlogBySlug, getAllBlogs } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs
    .filter((blog): blog is NonNullable<typeof blog> => blog !== null)
    .map((blog) => ({
      slug: blog.slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-24 pb-20 bg-bg-base">
      <div className="max-w-[800px] mx-auto px-6 w-full">
        <Reveal>
          <div className="mb-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[13px] font-semibold text-text-3 hover:text-brand transition-colors mb-8">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Back to Blog
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.meta.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded text-[11px] font-mono text-text-2">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-text-1 mb-6 leading-[1.1]">
              {blog.meta.title}
            </h1>
            
            <div className="flex items-center gap-4 text-[13px] font-mono text-text-3 border-b border-border-1 pb-8">
              <span>{new Date(blog.meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="w-1 h-1 rounded-full bg-border-2"></span>
              <span>Hossam Sabry</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} threshold={0}>
          <div className="prose prose-invert prose-brand max-w-none">
            <MarkdownRenderer content={blog.content} />
          </div>
        </Reveal>
      </div>
    </article>
  );
}
