'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050507] border-t border-white/5 relative overflow-hidden">
      {/* Grand Finale CTA */}
      <div className="relative py-24 md:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(124,110,249,0.15)_0%,transparent_70%)] blur-[100px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-30"></div>
        </div>
        
        <div className="max-w-[800px] mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-6 text-white leading-tight">
            Ready to{' '}
            <span
              className="animate-gradient-text"
              style={{
                backgroundImage: 'linear-gradient(to right, #B8A4FF, #7C6EF9, #B8A4FF)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >Automate?</span>
          </h2>
          <p className="text-[1.1rem] md:text-[1.25rem] text-text-2 mb-10 leading-relaxed font-medium max-w-[600px]">
            Stop losing hundreds of hours to repetitive modeling tasks. Let&apos;s build a custom toolkit that lets your team focus on engineering, not clicking.
          </p>
          <Link 
            href="/#contact" 
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '/#contact');
              }
            }}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-white bg-white/5 border border-white/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden shadow-[0_0_40px_rgba(124,110,249,0.2)] hover:shadow-[0_0_80px_rgba(124,110,249,0.4)] hover:-translate-y-1 active:scale-[0.98]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand via-violet-400 to-brand opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center gap-3 text-lg">
              Start a Conversation
              {/* Button-in-Button trailing icon */}
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </span>
          </Link>
        </div>
      </div>

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

