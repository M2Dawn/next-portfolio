import Link from 'next/link';
import { getAllBlogs } from '@/lib/markdown';
import Reveal from '@/components/ui/Reveal';

// Estimate read time from content length (~200 words/min)
function getReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export default function BlogPage() {
  const blogs = getAllBlogs()
    .filter((blog): blog is NonNullable<typeof blog> => blog !== null)
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());

  const [featured, ...rest] = blogs;

  return (
    <div className="min-h-screen pt-24 pb-20 bg-bg-base">
      <div className="max-w-[1100px] mx-auto px-6 w-full">

        <Reveal>
          <div className="mb-14">
            <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-semibold text-text-3 hover:text-brand transition-colors mb-8">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Back to Portfolio
            </Link>

            <h1 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight text-text-1 mb-4">
              Blog & Articles
            </h1>
            <p className="text-[1.1rem] text-text-2 max-w-2xl leading-relaxed">
              In-depth insights on BIM development, automation patterns, and digital construction — published quarterly.
            </p>
          </div>
        </Reveal>

        {/* Featured Post — full width */}
        {featured && (
          <Reveal delay={100}>
            <Link
              href={`/blog/${featured.slug}`}
              className="group block w-full mb-8 bg-bg-inset border border-border-1 rounded-[1.5rem] p-8 md:p-12 relative overflow-hidden hover:bg-[#18181D] hover:border-brand/25 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(91,141,243,0.08)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[1.5rem]"></div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[11px] font-bold uppercase tracking-widest mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                    Latest Article
                  </div>

                  <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-text-1 mb-4 group-hover:text-brand transition-colors">
                    {featured.meta.title}
                  </h2>

                  <p className="text-[1rem] text-text-2 leading-relaxed mb-6 max-w-2xl">
                    {featured.meta.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {featured.meta.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded text-[11px] font-mono text-text-3">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-3 shrink-0 md:pt-1">
                  <span className="text-[12px] font-mono text-text-3">
                    {new Date(featured.meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span className="text-[12px] font-mono text-text-3">
                    {getReadTime(featured.content)}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-border-2 flex items-center justify-center text-text-3 group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        {/* Remaining posts grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((blog, idx) => (
              <Reveal key={blog.slug} delay={150 + (idx * 75)}>
                <Link href={`/blog/${blog.slug}`} className="group h-full flex flex-col bg-bg-inset border border-border-1 rounded-[1.25rem] p-8 relative overflow-hidden hover:bg-[#202025] hover:border-border-2 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-text-3 font-semibold">{blog.meta.tags.slice(0, 2).join(' · ')}</span>
                    <div className="w-8 h-8 rounded-full border border-border-2 flex items-center justify-center text-text-3 group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </div>
                  </div>

                  <h2 className="font-heading text-xl font-bold tracking-tight text-text-1 mb-3 group-hover:text-brand transition-colors">
                    {blog.meta.title}
                  </h2>

                  <p className="text-[14px] text-text-2 leading-relaxed mb-6 flex-1">
                    {blog.meta.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-1">
                    <span className="text-[12px] font-mono text-text-3">
                      {new Date(blog.meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                    <span className="text-[12px] font-mono text-text-3">
                      {getReadTime(blog.content)}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
