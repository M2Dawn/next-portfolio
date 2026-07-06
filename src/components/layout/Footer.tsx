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
          
          <a href="https://github.com/M2Dawn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 text-[13px] font-bold text-text-3 hover:text-white hover:bg-white/5 rounded-md transition-all">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/HossamSabryDev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 text-[13px] font-bold text-text-3 hover:text-[#0A66C2] hover:bg-white/5 rounded-md transition-all">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c.429-.645 1.196-1.565 2.905-1.565 2.122 0 3.714 1.383 3.714 4.357v5.506zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.958-1.715 1.187 0 1.927.76 1.94 1.715 0 .953-.753 1.715-1.983 1.715zm1.946 11.597H3.392V9.806h3.891v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}

