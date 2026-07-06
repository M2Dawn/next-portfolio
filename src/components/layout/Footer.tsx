'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050507] border-t border-white/5 relative overflow-hidden">


      {/* Standard Footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-8 w-full flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <p className="text-[13px] text-text-3 font-semibold tracking-wide">
          &copy; {new Date().getFullYear()} Hossam Sabry &middot; BIM Automation Engineer
        </p>
        
        <nav className="flex flex-wrap items-center justify-center gap-2" aria-label="Footer navigation">
          <Link href="/#work" className="px-3 py-1.5 text-[13px] font-semibold text-text-3 hover:text-white hover:bg-white/5 rounded-md transition-all">Work</Link>
          <Link href="/#expertise" className="px-3 py-1.5 text-[13px] font-semibold text-text-3 hover:text-white hover:bg-white/5 rounded-md transition-all">Expertise</Link>
          <Link href="/#experience" className="px-3 py-1.5 text-[13px] font-semibold text-text-3 hover:text-white hover:bg-white/5 rounded-md transition-all">Experience</Link>
          <Link href="/blog" className="px-3 py-1.5 text-[13px] font-semibold text-text-3 hover:text-white hover:bg-white/5 rounded-md transition-all">Blog</Link>
          
          <div className="w-px h-4 bg-white/10 mx-2 hidden md:block"></div>
          

        </nav>
      </div>
    </footer>
  );
}

