import Reveal from '@/components/ui/Reveal';
import SpotlightCard from '@/components/ui/SpotlightCard';

export default function Experience() {
  return (
    <section className="relative py-32 bg-[#050507] overflow-hidden" id="experience">
      
      {/* Background removed for cleaner obsidian look */}

      {/* Subtle Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[40%] right-[5%] w-[40%] h-[40%] rounded-full bg-[radial-gradient(circle,var(--color-glow-subtle)_0%,transparent_60%)] blur-[100px]"></div>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 w-full relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
            <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-2 font-bold">Background</span>
          </div>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight mb-16 text-white">
            Experience
          </h2>
        </Reveal>
        
        <div className="relative pl-10 md:pl-12 max-w-[700px]">
          {/* Glowing Vertical Line */}
          <div className="absolute left-0 top-3 bottom-0 w-px bg-gradient-to-b from-brand via-white/10 to-transparent"></div>

          <div className="relative pb-16">
            <Reveal delay={100}>
              {/* Glowing Dot with Pulse */}
              <div className="absolute -left-[45px] md:-left-[53px] top-1.5 flex items-center justify-center w-[11px] h-[11px]">
                <div className="absolute w-[22px] h-[22px] rounded-full bg-brand/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                <div className="relative w-full h-full rounded-full bg-brand shadow-[0_0_12px_rgba(34,72,163,0.8)] border-2 border-[#050507]"></div>
              </div>
              
              {/* Premium Spotlight Card */}
              <SpotlightCard className="rounded-[1.5rem]" spotlightColor="rgba(34,72,163,0.15)">
                <div className="group bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-6 lg:p-8 hover:bg-[#0F0F13] hover:border-brand/30 transition-all duration-500 shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors duration-300">BIM Automation Engineer</h3>
                      <p className="text-[14px] text-text-2 font-medium">Independent Consultant</p>
                    </div>
                    <span className="self-start shrink-0 text-[10px] font-mono font-bold uppercase tracking-wider text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full">
                      Apr 2025 — Present
                    </span>
                  </div>
                  <p className="text-[14px] text-text-3 leading-relaxed mb-6">
                    Architecting custom Revit API plugins, scalable Dynamo systems, and full-stack coordination dashboards for leading AEC firms. Focused strictly on replacing manual data entry with production-grade automation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">Revit API</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">C# / WPF</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">Dynamo</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">React / Next.js</span>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

          <div className="relative pb-16">
            <Reveal delay={200}>
              {/* Subtle Dot */}
              <div className="absolute -left-[43px] md:-left-[51px] top-1.5 w-[7px] h-[7px] rounded-full bg-white/20 border-2 border-[#050507]"></div>
              
              {/* Premium Spotlight Card */}
              <SpotlightCard className="rounded-[1.5rem]" spotlightColor="rgba(34,72,163,0.15)">
                <div className="group bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-6 lg:p-8 hover:bg-[#0F0F13] hover:border-brand/30 transition-all duration-500 shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors duration-300">BIM Coordinator</h3>
                      <p className="text-[14px] text-text-2 font-medium">Multi-discipline Construction Projects</p>
                    </div>
                    <span className="self-start shrink-0 text-[10px] font-mono font-bold uppercase tracking-wider text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full">
                      Jan 2025 — Present
                    </span>
                  </div>
                  <p className="text-[14px] text-text-3 leading-relaxed mb-6">
                    Directing clash detection workflows, MEP coordination, and data extraction pipelines across large-scale commercial projects using Navisworks and custom telemetry tools.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">Navisworks</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">Clash Detection</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">4D Simulation</span>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

          <div className="relative pb-16">
            <Reveal delay={300}>
              {/* Subtle Dot */}
              <div className="absolute -left-[43px] md:-left-[51px] top-1.5 w-[7px] h-[7px] rounded-full bg-white/20 border-2 border-[#050507]"></div>
              
              {/* Premium Spotlight Card */}
              <SpotlightCard className="rounded-[1.5rem]" spotlightColor="rgba(34,72,163,0.15)">
                <div className="group bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-6 lg:p-8 hover:bg-[#0F0F13] hover:border-brand/30 transition-all duration-500 shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors duration-300">BIM Technician</h3>
                      <p className="text-[14px] text-text-2 font-medium">Engineering Consultancy</p>
                    </div>
                    <span className="self-start shrink-0 text-[10px] font-mono font-bold uppercase tracking-wider text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full">
                      Jul 2024 — Dec 2024
                    </span>
                  </div>
                  <p className="text-[14px] text-text-3 leading-relaxed mb-6">
                    Managed 3D structural modeling and documentation in Revit. Identified manual drafting bottlenecks and developed the initial batch of Python and Dynamo automation scripts that catalyzed the firm&apos;s transition into automated BIM delivery.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">Revit</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">Dynamo</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">Python</span>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
