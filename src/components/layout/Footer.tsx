import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050507] border-t border-white/5 relative overflow-hidden">


      {/* Standard Footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-8 w-full flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <p className="text-[13px] text-text-3 font-semibold tracking-wide">
          &copy; {new Date().getFullYear()} Hossam Sabry &middot; BIM Automation Engineer
        </p>
        
        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6" aria-label="Footer navigation">
          <Link href="/#work" className="text-[14px] font-medium text-text-3 hover:text-white transition-colors">Work</Link>
          <Link href="/#expertise" className="text-[14px] font-medium text-text-3 hover:text-white transition-colors">Expertise</Link>
          <Link href="/#experience" className="text-[14px] font-medium text-text-3 hover:text-white transition-colors">Experience</Link>
          <Link href="/blog" className="text-[14px] font-medium text-text-3 hover:text-white transition-colors">Blog</Link>
        </nav>
      </div>
    </footer>
  );
}

