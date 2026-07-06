'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Work', href: '/#work', id: 'work' },
  { label: 'Expertise', href: '/#expertise', id: 'expertise' },
  { label: 'Experience', href: '/#experience', id: 'experience' },
  { label: 'Blog', href: '/blog', id: null },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string | null) => {
    setMobileMenuOpen(false);
    if (id && window.location.pathname === '/') {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `/#${id}`);
    }
  };

  return (
    <>
      <a href="#main" className="absolute -top-[100px] left-0 bg-brand text-white py-3 px-6 z-[9999] transition-[top] focus:top-0">
        Skip to content
      </a>

      {/* Fluid Island Navbar — always a floating pill */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5 pointer-events-none">
        <nav
          id="nav"
          className="pointer-events-auto flex items-center justify-between gap-6 px-5 py-3 rounded-full bg-[#0A0A0C]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.06)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
          style={{ width: 'min(720px, calc(100% - 2rem))' }}
        >
          {/* Logo */}
          <Link href="/" className="font-heading text-[0.95rem] font-bold text-white tracking-tight flex items-center gap-2.5 group shrink-0" translate="no">
            <span className="w-2 h-2 rounded-full bg-brand shadow-[0_0_12px_rgba(58,90,128,0.9)] group-hover:scale-150 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"></span>
            Hossam Sabry
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-7 list-none">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[13px] font-semibold text-text-2 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center gap-2 text-[13px] font-bold text-white px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:border-brand/50 hover:bg-brand/10 hover:shadow-[0_0_15px_rgba(58,90,128,0.3)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shrink-0"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Let&apos;s Talk
            {/* Button-in-Button trailing icon */}
            <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </Link>

          {/* Mobile Hamburger — animated morph */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-[5px] p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`block h-[1.5px] w-5 bg-white rounded-full origin-center transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block h-[1.5px] w-5 bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-[1.5px] w-5 bg-white rounded-full origin-center transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </nav>
      </div>

      {/* Mobile Full-Screen Overlay — cinematic expansion */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden backdrop-blur-2xl ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(5,5,7,0.92)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-3">
          {/* Staggered nav links */}
          {navLinks.map((link, i) => (
            <div
              key={link.label}
              className="transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(3rem)',
                opacity: mobileMenuOpen ? 1 : 0,
                transitionDelay: mobileMenuOpen ? `${100 + i * 60}ms` : '0ms',
              }}
            >
              <Link
                href={link.href}
                className="block text-[2rem] font-heading font-bold text-white/80 hover:text-white transition-colors duration-200 py-2 text-center"
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </Link>
            </div>
          ))}

          {/* Mobile CTA */}
          <div
            className="transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] mt-6"
            style={{
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(3rem)',
              opacity: mobileMenuOpen ? 1 : 0,
              transitionDelay: mobileMenuOpen ? `${100 + navLinks.length * 60}ms` : '0ms',
            }}
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white bg-brand/90 border border-brand/50 shadow-[0_0_30px_rgba(58,90,128,0.4)] hover:shadow-[0_0_50px_rgba(58,90,128,0.6)] transition-all duration-500"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Let&apos;s Talk
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
