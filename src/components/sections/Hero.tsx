'use client';

import Link from 'next/link';
import WpfSimulation from '@/components/ui/WpfSimulation';
import Reveal from '@/components/ui/Reveal';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-20 md:pb-32 min-h-[100svh] flex items-center bg-[#050507]" id="hero">
      
      {/* Background ΓÇö Blueprint AEC Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Primary blue glow ΓÇö committed brand identity */}
        <div className="absolute -top-[20%] -left-[10%] w-[55%] h-[55%] rounded-full bg-[radial-gradient(circle,rgba(91,141,243,0.2)_0%,transparent_65%)] blur-[100px]"></div>
        <div className="absolute top-[30%] -right-[5%] w-[45%] h-[45%] rounded-full bg-[radial-gradient(circle,rgba(91,141,243,0.1)_0%,transparent_65%)] blur-[120px]"></div>
      </div>
      {/* Blueprint grid ΓÇö architectural crosshair pattern */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(91,141,243,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(91,141,243,0.06) 1px, transparent 1px),
            linear-gradient(to right, rgba(91,141,243,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(91,141,243,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '96px 96px, 96px 96px, 24px 24px, 24px 24px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, #000 20%, transparent 100%)'
        }}
      ></div>

      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">
        
        {/* Left Content Area */}
        <div className="w-full max-w-[650px] lg:max-w-full relative">
          <Reveal>
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 text-[11px] md:text-[13px] font-semibold tracking-wide text-text-1 mb-6 md:mb-8 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(91,141,243,0.1)] hover:bg-white/10 transition-colors cursor-default">
              <span className="relative flex h-2.5 w-2.5 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_8px_#4ade80]"></span>
              </span>
              Available for Projects <span className="text-white/30 mx-1">&bull;</span> BIM Solutions Developer
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            {/* Main Headline */}
            <h1 className="font-heading text-[clamp(2.25rem,4vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.03em] mb-6 text-white">
              Building the Tools <br className="hidden lg:block" />
              <span className="relative inline-block mt-1">
                <span className="absolute -inset-2 bg-brand/20 blur-3xl rounded-full"></span>
                <span className="relative bg-[linear-gradient(to_right,#60A5FA,#93C5FD,#3B82F6,#60A5FA)] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-text">
                  BIM Teams Rely On.
                </span>
              </span>
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-[1.05rem] md:text-[1.15rem] text-text-2 leading-relaxed mb-8 md:mb-10 max-w-[90%] font-medium">
              Custom Revit API plugins, Dynamo systems, and coordination dashboards that eliminate manual workflows in AEC projects.
            </p>
          </Reveal>
          
          <Reveal delay={300}>
            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10 md:mb-12">
              <Link href="#work" className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-bold text-white bg-white/5 border border-white/10 transition-all duration-300 overflow-hidden shadow-[0_0_40px_rgba(91,141,243,0.15)] hover:shadow-[0_0_60px_rgba(91,141,243,0.35)] hover:-translate-y-1">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand via-[#8b5cf6] to-brand opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Explore My Work
                  <svg className="transform group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </Link>
              <Link 
                href="/#contact" 
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', '/#contact');
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-semibold text-text-1 hover:text-white bg-transparent border border-border-1 hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </Reveal>
          
          <Reveal delay={400}>
            {/* Key Stats - Professional Variant */}
            <div className="flex flex-wrap items-center gap-x-8 md:gap-x-12 gap-y-6 pt-6 border-t border-white/5">
              <div className="flex flex-col gap-1.5">
                <span className="text-3xl md:text-4xl font-semibold text-white tracking-tight">80<span className="text-brand">+</span></span>
                <span className="text-sm text-text-2 font-medium">Workflows Automated</span>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <span className="text-3xl md:text-4xl font-semibold text-white tracking-tight">20<span className="text-brand">+</span></span>
                <span className="text-sm text-text-2 font-medium">Enterprise Deployments</span>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <span className="text-3xl md:text-4xl font-semibold text-white tracking-tight">65<span className="text-brand">%</span></span>
                <span className="text-sm text-text-2 font-medium">Avg. Time Saved</span>
              </div>
            </div>
          </Reveal>
        </div>
        
        {/* Right Content - Visual Panel */}
        <div className="w-full relative mt-16 lg:mt-0 flex flex-col gap-6">
          <Reveal delay={300} className="relative z-10">
            {/* Massive glow behind the mockup */}
            <div className="absolute -inset-4 bg-gradient-to-b from-brand/20 via-purple-500/10 to-transparent rounded-[2rem] blur-2xl opacity-60 pointer-events-none"></div>
            
            <WpfSimulation />
          </Reveal>

          {/* Info Tags (Moved to standard flow below simulation instead of overlapping) */}
          <Reveal delay={400} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full">
            <div className="flex items-center gap-2.5 bg-[#121216]/90 border border-white/10 rounded-xl px-4 py-2 text-xs font-bold text-text-1 shadow-lg backdrop-blur-xl">
              <svg className="text-brand" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              <span>6&ndash;8 hrs <span className="text-brand-light mx-1">&rarr;</span> 2 hrs</span>
            </div>
            <div className="flex items-center gap-2.5 bg-[#121216]/90 border border-white/10 rounded-xl px-4 py-2 text-xs font-bold text-text-1 shadow-lg backdrop-blur-xl">
              <svg className="text-purple-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Autodesk Certified</span>
            </div>
            <div className="flex items-center gap-2.5 bg-[#121216]/90 border border-white/10 rounded-xl px-4 py-2 text-xs font-bold text-text-1 shadow-lg backdrop-blur-xl">
              <span className="text-brand-light font-mono">Revit API / C#</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
