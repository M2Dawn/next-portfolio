import Reveal from '@/components/ui/Reveal';

const experiences = [
  {
    period: "Apr 2025 — Present",
    role: "BIM Automation Engineer",
    company: "Independent Consultant",
    description: "Architecting custom Revit API plugins, scalable Dynamo systems, and full-stack coordination dashboards for leading AEC firms. Focused strictly on replacing manual data entry with production-grade automation.",
    tags: ["Revit API", "C# / WPF", "Dynamo", "React / Next.js"]
  },
  {
    period: "Jan 2025 — Present",
    role: "BIM Coordinator",
    company: "Multi-discipline Construction Projects",
    description: "Directing clash detection workflows, MEP coordination, and data extraction pipelines across large-scale commercial projects using Navisworks and custom telemetry tools.",
    tags: ["Navisworks", "Clash Detection", "4D Simulation"]
  },
  {
    period: "Jul 2024 — Dec 2024",
    role: "BIM Technician",
    company: "Engineering Consultancy",
    description: "Managed 3D structural modeling and documentation in Revit. Identified manual drafting bottlenecks and developed the initial batch of Python and Dynamo automation scripts that catalyzed the firm's transition into automated BIM delivery.",
    tags: ["Revit", "Dynamo", "Python"]
  }
];

export default function Experience() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden" id="experience">
      
      {/* Background - Isometric Dot Matrix */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)'
        }}
      ></div>

      <div className="max-w-[1000px] mx-auto px-6 w-full relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
            <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-2 font-bold">Background</span>
          </div>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight mb-20 text-white">
            Experience
          </h2>
        </Reveal>
        
        {/* Stacked Cards Container */}
        <div className="relative flex flex-col gap-8 pb-10">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="sticky top-24 md:top-32 w-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{
                top: `calc(6rem + ${index * 1.5}rem)`,
                zIndex: index + 10
              }}
            >
              <Reveal delay={index * 100}>
                {/* Double-Bezel Card Design */}
                <div className="group relative p-[2px] rounded-3xl bg-white/[0.02] border border-white/5 shadow-2xl backdrop-blur-2xl overflow-hidden hover:border-brand/20 transition-all duration-500">
                  
                  {/* Subtle inner card glow */}
                  <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-brand/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="bg-[#0A0A0A] rounded-[calc(1.5rem-2px)] p-8 md:p-10 h-full w-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col md:flex-row gap-6 md:gap-12">
                    
                    {/* Left Column: Period & Company */}
                    <div className="md:w-1/3 shrink-0">
                      <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[12px] font-mono font-semibold text-brand mb-4">
                        {exp.period}
                      </div>
                      <h4 className="text-[15px] text-text-2 font-medium leading-snug">
                        {exp.company}
                      </h4>
                    </div>

                    {/* Right Column: Role & Description */}
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-light transition-colors duration-500">{exp.role}</h3>
                      <p className="text-[15px] text-text-3 leading-relaxed mb-8">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, tIndex) => (
                          <span key={tIndex} className="px-3 py-1.5 bg-[#121212] border border-white/5 rounded-md text-[12px] font-mono text-text-2 shadow-inner">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

