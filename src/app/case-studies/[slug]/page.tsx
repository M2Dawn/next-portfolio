import { getCaseStudyBySlug, getCaseStudySlugs } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export async function generateStaticParams() {
  const slugs = getCaseStudySlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-bg-base text-text-1">
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <article className="max-w-[800px] mx-auto px-6 w-full">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-3 hover:text-text-1 mb-8 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Home
          </Link>
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-1 mb-4">{caseStudy.meta.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.meta.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded text-[11px] font-mono text-text-2">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xl text-text-2 leading-relaxed">{caseStudy.meta.description}</p>
          </header>

          <div className="prose prose-invert prose-brand max-w-none prose-headings:text-text-1 prose-a:text-brand-light hover:prose-a:text-brand prose-p:text-text-2 prose-li:text-text-2 prose-strong:text-text-1">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {caseStudy.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
