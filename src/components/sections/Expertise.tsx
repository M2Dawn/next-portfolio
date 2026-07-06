import Reveal from '@/components/ui/Reveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
export default function Expertise() {
  return (
    <section className="relative py-32 bg-[#050507] overflow-hidden border-t border-white/5" id="expertise">
      
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-[radial-gradient(circle,var(--color-glow-subtle)_0%,transparent_60%)] blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(58,90,128,0.02)_0%,transparent_60%)] blur-[100px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
            <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-2 font-bold">Capabilities</span>
          </div>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight mb-6 text-white">
            Technical Expertise
          </h2>
          <p className="text-[1.1rem] text-text-2 mb-16 max-w-2xl leading-relaxed font-medium">
            Deep specialization across the full BIM automation stack &mdash; from Revit API internals to production-ready enterprise tooling.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1 — Revit API */}
          <Reveal delay={100} className="h-full">
            {/* Double-Bezel outer shell */}
            <div className="h-full p-[3px] rounded-[2rem] bg-white/[0.03] ring-1 ring-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
            <SpotlightCard className="h-full rounded-[calc(2rem-3px)]" spotlightColor="rgba(58,90,128,0.15)">
              {/* Double-Bezel inner core */}
              <div className="group bg-[#0A0A0C] border border-white/5 rounded-[calc(2rem-3px)] p-8 lg:p-10 flex flex-col hover:bg-[#0F0F13] hover:border-brand/30 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(58,90,128,0.12)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] h-full relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-brand/50 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"></div>
              
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:text-brand transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:shadow-[0_0_20px_rgba(58,90,128,0.2)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              
              <div className="w-full h-1 bg-white/5 rounded-full mb-8 overflow-hidden">
                <div className="h-full relative" style={{ width: '92%', background: 'linear-gradient(to right, #3A5A80, #6B8EBD)' }}>
                  <div className="absolute inset-0 bg-white/20 animate-[scanlineMove_2s_linear_infinite]"></div>
                </div>
              </div>
              
              <h3 className="font-heading text-xl font-bold text-white mb-4">Revit API Development</h3>
              <p className="text-[15px] text-text-2 leading-relaxed mb-8 flex-1">
                Custom add-ins and plugins with production-grade error handling, batch processing, and sleek WPF interfaces. From IExternalCommand to full transaction management.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-[11px] font-mono text-text-2 group-hover:border-white/20 transition-colors">C#</span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-[11px] font-mono text-text-2 group-hover:border-white/20 transition-colors">.NET 4.8+</span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-[11px] font-mono text-text-2 group-hover:border-white/20 transition-colors">WPF</span>
              </div>
              
              <div className="flex items-center gap-2.5 text-[12px] font-bold text-text-1 bg-gradient-to-r from-brand/10 to-transparent border border-brand/20 px-4 py-2.5 rounded-xl mt-auto w-max">
                <svg className="text-brand" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Autodesk Certified Professional
              </div>
            </div>
            </SpotlightCard>
            </div>
          </Reveal>

          {/* Card 2 — Visual Programming (aligned with others, no translate offset) */}
          <Reveal delay={200} className="h-full">
            <div className="h-full p-[3px] rounded-[2rem] bg-white/[0.03] ring-1 ring-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
            <SpotlightCard className="h-full rounded-[calc(2rem-3px)]" spotlightColor="rgba(58,90,128,0.15)">
              <div className="group bg-[#0A0A0C] border border-white/5 rounded-[calc(2rem-3px)] p-8 lg:p-10 flex flex-col hover:bg-[#0F0F13] hover:border-brand/30 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(58,90,128,0.15)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] h-full relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-brand/50 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"></div>
              
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:text-brand transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:shadow-[0_0_20px_rgba(58,90,128,0.25)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              </div>
              
              <div className="w-full h-1 bg-white/5 rounded-full mb-8 overflow-hidden">
                <div className="h-full relative" style={{ width: '96%', background: 'linear-gradient(to right, #3A5A80, #6B8EBD)' }}></div>
              </div>
              
              <h3 className="font-heading text-xl font-bold text-white mb-4">Visual Programming</h3>
              <p className="text-[15px] text-text-2 leading-relaxed mb-8 flex-1">
                Enterprise Dynamo scripts and Python nodes for parametric design automation, parameter validation, and repetitive task elimination &mdash; built for scalability.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-[11px] font-mono text-text-2 group-hover:border-white/20 transition-colors">Dynamo</span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-[11px] font-mono text-text-2 group-hover:border-white/20 transition-colors">Python</span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-[11px] font-mono text-text-2 group-hover:border-white/20 transition-colors">Parametric Design</span>
              </div>
            </div>
            </SpotlightCard>
            </div>
          </Reveal>

          {/* Card 3 — BIM Coordination (unified brand accent) */}
          <Reveal delay={300} className="h-full">
            <div className="h-full p-[3px] rounded-[2rem] bg-white/[0.03] ring-1 ring-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
            <SpotlightCard className="h-full rounded-[calc(2rem-3px)]" spotlightColor="rgba(58,90,128,0.15)">
              <div className="group bg-[#0A0A0C] border border-white/5 rounded-[calc(2rem-3px)] p-8 lg:p-10 flex flex-col hover:bg-[#0F0F13] hover:border-brand/30 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(58,90,128,0.12)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] h-full relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-brand/50 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"></div>
              
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:text-brand transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:shadow-[0_0_20px_rgba(58,90,128,0.2)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              </div>
              
              <div className="w-full h-1 bg-white/5 rounded-full mb-8 overflow-hidden">
                <div className="h-full relative" style={{ width: '85%', background: 'linear-gradient(to right, #3A5A80, #6B8EBD)' }}></div>
              </div>
              
              <h3 className="font-heading text-xl font-bold text-white mb-4">BIM Coordination</h3>
              <p className="text-[15px] text-text-2 leading-relaxed mb-8 flex-1">
                Clash detection workflows, 4D simulation setup, and automated data dashboards that transform raw Navisworks exports into actionable project metrics.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-[11px] font-mono text-text-2 group-hover:border-white/20 transition-colors">Navisworks</span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-[11px] font-mono text-text-2 group-hover:border-white/20 transition-colors">Clash Detection</span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-[11px] font-mono text-text-2 group-hover:border-white/20 transition-colors">Data Dashboards</span>
              </div>
            </div>
            </SpotlightCard>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
