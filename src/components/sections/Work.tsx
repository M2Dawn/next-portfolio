import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
export default function Work() {
  return (
    <section className="py-24 bg-[#050507] relative overflow-hidden" id="work">
      {/* Background Deep Glow & Noise */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-glow-subtle)] blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.015] mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
      ></div>

      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-text-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
              Featured Work
            </div>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight mb-4 text-white">
              Selected{' '}
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
              >Projects</span>
            </h2>
            <p className="text-[1.1rem] text-text-2 max-w-2xl font-medium leading-relaxed">
              Engineering tools that solve real coordination problems &mdash; measured in hours saved, not features shipped.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(400px,auto)]">
          <Reveal className="col-span-full h-full">
            {/* Card 1: BIM Automation Tool - FULL WIDTH */}
            <SpotlightCard className="h-full rounded-[1.5rem]" spotlightColor="rgba(124,110,249,0.15)">
              <Link href="/case-studies/bim-automation-tool" className="group h-full bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-8 lg:p-12 hover:bg-[#0F0F13] hover:border-white/10 hover:-translate-y-1 transition-all duration-500 flex flex-col md:flex-row gap-10 relative overflow-hidden shadow-2xl">
              
              {/* Card Hover Glow */}
              <div className="absolute -inset-px bg-gradient-to-b from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem] pointer-events-none"></div>

              <div className="flex-1 flex flex-col relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-brand-light font-bold">Revit API &middot; C# &middot; .NET &middot; WPF</span>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-brand group-hover:border-brand transition-all duration-300 group-hover:scale-110">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                  </div>
                </div>
                
                <h3 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-light transition-all">BIM Automation Tool</h3>
                
                <p className="text-[1.05rem] text-text-2 leading-relaxed max-w-[90%] mb-8 font-medium">
                  Replaced a 6&ndash;8 hour manual export cycle with a single-click Revit API add-in. Batch-exports 200+ views to DWG with intelligent naming conventions, extracts schedule data to structured CSV, and eliminates rework caused by inconsistent file management.
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-8 border-t border-white/5 pt-6 mt-auto">
                  <div>
                    <div className="text-2xl font-black text-white drop-shadow-sm">~65<span className="text-brand">%</span></div>
                    <div className="text-[10px] text-text-3 font-bold uppercase tracking-[0.15em] mt-1">Time Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white drop-shadow-sm">500<span className="text-brand">+</span></div>
                    <div className="text-[10px] text-text-3 font-bold uppercase tracking-[0.15em] mt-1">Views Automated</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white drop-shadow-sm">~95<span className="text-brand">%</span></div>
                    <div className="text-[10px] text-text-3 font-bold uppercase tracking-[0.15em] mt-1">Error Reduction</div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 relative min-h-[300px] md:min-h-0 rounded-2xl overflow-hidden border border-white/5 bg-[#121216] group-hover:border-white/10 transition-colors shadow-inner">
                <Image src="/images/bim-tool-hero.png" alt="BIM Automation Tool Interface" fill sizes="(max-width: 768px) 100vw, 50vw" quality={90} className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              </div>
              </Link>
            </SpotlightCard>
          </Reveal>

          <Reveal className="col-span-1 md:col-span-7 h-full" delay={100}>
            {/* Card 2: Clash Detection Dashboard - LEFT HALF */}
            <SpotlightCard className="h-full rounded-[1.5rem]" spotlightColor="rgba(124,110,249,0.15)">
              <a href="/live-demos/clash-dashboard/index.html?v=2" target="_blank" rel="noopener noreferrer" className="group h-full bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-8 lg:p-10 flex flex-col relative overflow-hidden hover:bg-[#0F0F13] hover:border-white/10 hover:-translate-y-1 transition-all duration-500 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-brand-light font-bold">JavaScript &middot; Chart.js</span>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-brand group-hover:border-brand transition-all duration-300 group-hover:scale-110">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </div>
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-light transition-all">Clash Detection Dashboard</h3>
              <p className="text-[0.95rem] text-text-2 leading-relaxed mb-8 font-medium">
                Web dashboard that ingests Navisworks clash data, visualizes severity by discipline, and auto-generates coordination reports.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8 border-t border-white/5 pt-6">
                <div>
                  <div className="text-2xl font-black text-white">40<span className="text-brand-light">%</span></div>
                  <div className="text-[10px] text-text-3 font-bold uppercase tracking-[0.15em] mt-1">Faster Prep</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">5<span className="text-brand-light">+</span></div>
                  <div className="text-[10px] text-text-3 font-bold uppercase tracking-[0.15em] mt-1">Active Projects</div>
                </div>
              </div>

              <div className="relative h-[220px] mt-auto rounded-xl overflow-hidden border border-white/5 bg-[#121216] group-hover:border-white/10 transition-colors shadow-inner -mx-4 -mb-4 lg:-mx-6 lg:-mb-6">
                <Image src="/images/clash-dashboard-hero.png" alt="Clash Detection Dashboard" fill sizes="(max-width: 768px) 100vw, 50vw" quality={90} className="object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              </div>
            </a>
            </SpotlightCard>
          </Reveal>

          <Reveal className="col-span-1 md:col-span-5 h-full" delay={200}>
            {/* Card 3: Dynamo Scripts - RIGHT HALF */}
            <SpotlightCard className="h-full rounded-[1.5rem]" spotlightColor="rgba(250, 204, 21, 0.15)">
              <Link href="/case-studies/dynamo-scripts" className="group h-full bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-8 lg:p-10 flex flex-col relative overflow-hidden hover:bg-[#0F0F13] hover:border-white/10 hover:-translate-y-1 transition-all duration-500 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-yellow-400 font-bold">Dynamo &middot; Python</span>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-all duration-300 group-hover:scale-110">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] font-extrabold uppercase tracking-widest w-max mb-4 shadow-[0_0_15px_rgba(74,222,128,0.1)]">
                Open Source
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-yellow-200 transition-all">Dynamo Script Library</h3>
              <p className="text-[0.95rem] text-text-2 leading-relaxed mb-8 font-medium">
                10+ production-ready Dynamo scripts for Revit automation. Room numbering, batch sheet creation, parameter validation.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8 border-t border-white/5 pt-6">
                <div>
                  <div className="text-2xl font-black text-white">12</div>
                  <div className="text-[10px] text-text-3 font-bold uppercase tracking-[0.15em] mt-1">Core Scripts</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">200<span className="text-yellow-400">+</span></div>
                  <div className="text-[10px] text-text-3 font-bold uppercase tracking-[0.15em] mt-1">Hrs Saved/Yr</div>
                </div>
              </div>

              <div className="relative h-[220px] mt-auto rounded-xl overflow-hidden border border-white/5 bg-[#121216] group-hover:border-white/10 transition-colors shadow-inner -mx-4 -mb-4 lg:-mx-6 lg:-mb-6">
                <Image src="/images/dynamo-hero.png" alt="Dynamo Scripts" fill sizes="(max-width: 768px) 100vw, 50vw" quality={90} className="object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              </div>
              </Link>
            </SpotlightCard>
          </Reveal>

          <Reveal className="col-span-1 md:col-span-5 h-full" delay={300}>
            {/* Card 4: Model Health Dashboard - LEFT HALF (small) */}
            <SpotlightCard className="h-full rounded-[1.5rem]" spotlightColor="rgba(6, 182, 212, 0.15)">
              <a href="/live-demos/model-health/index.html?v=2" target="_blank" rel="noopener noreferrer" className="group h-full bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-8 lg:p-10 flex flex-col relative overflow-hidden hover:bg-[#0F0F13] hover:border-white/10 hover:-translate-y-1 transition-all duration-500 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-cyan-400 font-bold">Power BI &middot; Forge API</span>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-300 group-hover:scale-110">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </div>
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all">Model Health Dashboard</h3>
              <p className="text-[0.95rem] text-text-2 leading-relaxed mb-8 font-medium">
                Automated tracking dashboard providing real-time insights into BIM model health, warnings, and compliance metrics across multiple active projects.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8 border-t border-white/5 pt-6">
                <div>
                  <div className="text-2xl font-black text-white">8</div>
                  <div className="text-[10px] text-text-3 font-bold uppercase tracking-[0.15em] mt-1">Active Models</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">75<span className="text-cyan-400">%</span></div>
                  <div className="text-[10px] text-text-3 font-bold uppercase tracking-[0.15em] mt-1">Faster Audits</div>
                </div>
              </div>

              <div className="relative h-[220px] mt-auto rounded-xl overflow-hidden border border-white/5 bg-[#121216] group-hover:border-white/10 transition-colors shadow-inner -mx-4 -mb-4 lg:-mx-6 lg:-mb-6">
                <Image src="/images/model-health-hero.png" alt="Model Health Dashboard" fill sizes="(max-width: 768px) 100vw, 50vw" quality={90} className="object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              </div>
            </a>
            </SpotlightCard>
          </Reveal>

          <Reveal className="col-span-1 md:col-span-7 h-full" delay={400}>
            {/* Card 5: Sheet Manager - RIGHT HALF (large) */}
            <SpotlightCard className="h-full rounded-[1.5rem]" spotlightColor="rgba(249, 115, 22, 0.15)">
              <a href="/live-demos/sheet-manager/index.html?v=2" target="_blank" rel="noopener noreferrer" className="group h-full bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-8 lg:p-10 flex flex-col relative overflow-hidden hover:bg-[#0F0F13] hover:border-white/10 hover:-translate-y-1 transition-all duration-500 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-orange-400 font-bold">Revit API &middot; WPF &middot; C#</span>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300 group-hover:scale-110">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </div>
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-orange-300 transition-all">Sheet Manager Add-in</h3>
              <p className="text-[0.95rem] text-text-2 leading-relaxed mb-8 font-medium">
                A powerful add-in for bulk sheet creation, revision tracking, and parameter updates. Enables teams to manage hundreds of sheets simultaneously through an intuitive grid interface.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8 border-t border-white/5 pt-6">
                <div>
                  <div className="text-2xl font-black text-white">50<span className="text-orange-400">+</span></div>
                  <div className="text-[10px] text-text-3 font-bold uppercase tracking-[0.15em] mt-1">Sheets/Min</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">100<span className="text-orange-400">%</span></div>
                  <div className="text-[10px] text-text-3 font-bold uppercase tracking-[0.15em] mt-1">Standardized</div>
                </div>
              </div>

              <div className="relative h-[220px] mt-auto rounded-xl overflow-hidden border border-white/5 bg-[#121216] group-hover:border-white/10 transition-colors shadow-inner -mx-4 -mb-4 lg:-mx-6 lg:-mb-6">
                <Image src="/images/sheet-manager-hero.png" alt="Sheet Manager Plugin" fill sizes="(max-width: 768px) 100vw, 50vw" quality={90} className="object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              </div>
            </a>
            </SpotlightCard>
          </Reveal>
        </div>

        {/* Post-section CTA — interactive-portfolio skill: "After projects: Secondary CTA" */}
        <Reveal delay={200}>
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <p className="text-text-3 text-sm font-medium">Interested in working together?</p>
              <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-white border border-white/10 bg-white/5 hover:border-brand/50 hover:bg-brand/10 hover:shadow-[0_0_30px_rgba(124,110,249,0.3)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              Let&apos;s Work Together
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

