'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <a href="#main" className="absolute -top-[100px] left-0 bg-brand text-white py-3 px-6 z-[9999] transition-[top] focus:top-0">
        Skip to content
      </a>
      
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-500">
        <nav
          id="nav"
          className={`pointer-events-auto flex items-center justify-between transition-all duration-500 w-full max-w-[1200px] px-6 ${
            scrolled
              ? 'bg-[#0A0A0C]/90 backdrop-blur-xl border-b md:border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] py-3 mt-4 md:rounded-full'
              : 'bg-transparent border-transparent py-6 mt-0'
          }`}
        >
          <Link href="/" className="font-heading text-[1.05rem] font-bold text-white tracking-tight flex items-center gap-3 group" translate="no">
            <span className="w-2 h-2 rounded-full bg-brand shadow-[0_0_12px_rgba(91,141,243,0.9)] group-hover:scale-150 transition-all duration-300"></span>
            Hossam Sabry
          </Link>
          
          <button
            className="md:hidden text-text-2 text-xl p-2 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <ul
            id="navLinks"
            className={`${
              mobileMenuOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row absolute md:static top-[70px] left-4 right-4 md:w-auto bg-[#0A0A0C]/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border border-white/10 md:border-transparent rounded-2xl md:rounded-none items-center gap-2 md:gap-8 list-none p-6 md:p-0 shadow-2xl md:shadow-none transition-all`}
          >
            <li>
              <Link 
                href="/#work" 
                className="text-[13px] font-semibold text-text-2 hover:text-white transition-colors" 
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', '/#work');
                  }
                }}
              >
                Work
              </Link>
            </li>
            <li>
              <Link 
                href="/#expertise" 
                className="text-[13px] font-semibold text-text-2 hover:text-white transition-colors" 
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', '/#expertise');
                  }
                }}
              >
                Expertise
              </Link>
            </li>
            <li>
              <Link 
                href="/#experience" 
                className="text-[13px] font-semibold text-text-2 hover:text-white transition-colors" 
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', '/#experience');
                  }
                }}
              >
                Experience
              </Link>
            </li>
            <li className="md:border-r md:border-white/10 md:pr-8">
              <Link href="/blog" className="text-[13px] font-semibold text-text-2 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-[13px] font-bold text-white px-4 py-2 border border-white/10 bg-white/5 rounded-full hover:border-brand/50 hover:bg-brand/10 hover:shadow-[0_0_15px_rgba(91,141,243,0.3)] transition-all mt-4 md:mt-0 inline-block"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', '/#contact');
                  }
                }}
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
