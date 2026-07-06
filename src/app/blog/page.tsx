import Link from 'next/link';
import { getAllBlogs } from '@/lib/markdown';
import Reveal from '@/components/ui/Reveal';

export default function BlogPage() {
  const blogs = getAllBlogs().filter((blog): blog is NonNullable<typeof blog> => blog !== null);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-bg-base">
      <div className="max-w-[1100px] mx-auto px-6 w-full">
        
        <Reveal>
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-semibold text-text-3 hover:text-brand transition-colors mb-6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Back to Portfolio
            </Link>
            
            <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight text-text-1 mb-4">
              Blog & Articles
            </h1>
            <p className="text-[1.1rem] text-text-2 max-w-2xl leading-relaxed">
              Insights on BIM Development, Automation, and Digital Construction
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, idx) => (
            <Reveal key={blog.slug} delay={100 + (idx * 50)}>
              <Link href={`/blog/${blog.slug}`} className="group h-full bg-bg-inset border border-border-1 rounded-[1.25rem] p-8 flex flex-col relative overflow-hidden hover:bg-[#202025] hover:border-border-2 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-text-3 font-semibold">{blog.meta.tags.slice(0,2).join(' · ')}</span>
                  <div className="w-8 h-8 rounded-full border border-border-2 flex items-center justify-center text-text-3 group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold tracking-tight text-text-1 mb-3 group-hover:text-brand transition-colors">
                  {blog.meta.title}
                </h2>
                
                <p className="text-[14px] text-text-2 leading-relaxed mb-6 flex-1">
                  {blog.meta.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-1">
                  <span className="text-[12px] font-mono text-text-3">{new Date(blog.meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </Link>
            </Reveal>
          ))}
          
          <Reveal delay={300}>
            <div className="h-full bg-bg-inset border border-border-1 border-dashed rounded-[1.25rem] p-8 flex flex-col items-center justify-center text-center relative overflow-hidden opacity-70">
              <div className="w-12 h-12 rounded-full border border-border-2 flex items-center justify-center text-text-3 mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h2 className="text-lg font-bold tracking-tight text-text-1 mb-2">
                More Coming Soon
              </h2>
              <p className="text-[13px] text-text-3">
                Stay tuned for in-depth tutorials, case studies, and insights.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
