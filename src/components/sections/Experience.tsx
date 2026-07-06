'use client';

import Reveal from '@/components/ui/Reveal';

const experiences = [
  {
    id: 1,
    date: 'Apr 2025 — Present',
    role: 'BIM Automation Engineer',
    company: 'Independent Consultant',
    description: 'Architecting custom Revit API plugins, scalable Dynamo systems, and full-stack coordination dashboards for leading AEC firms. Focused strictly on replacing manual data entry with production-grade automation.',
    tags: ['Revit API', 'C# / WPF', 'Dynamo', 'React / Next.js']
  },
  {
    id: 2,
    date: 'Jan 2025 — Present',
    role: 'BIM Coordinator',
    company: 'Multi-discipline Construction Projects',
    description: 'Directing clash detection workflows, MEP coordination, and data extraction pipelines across large-scale commercial projects using Navisworks and custom telemetry tools.',
    tags: ['Navisworks', 'Clash Detection', '4D Simulation']
  },
  {
    id: 3,
    date: 'Jul 2024 — Dec 2024',
    role: 'BIM Technician',
    company: 'Engineering Consultancy',
    description: 'Managed 3D structural modeling and documentation in Revit. Identified manual drafting bottlenecks and developed the initial batch of Python and Dynamo automation scripts that catalyzed the firm\'s transition into automated BIM delivery.',
    tags: ['Revit', 'Dynamo', 'Python']
  }
];

export default function Experience() {
  return (
    <section className="relative py-32 bg-[#050507] overflow-hidden" id="experience">
      {/* Isometric Dot Matrix Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      {/* Subtle Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[40%] right-[5%] w-[40%] h-[40%] rounded-full bg-[radial-gradient(circle,var(--color-glow-subtle)_0%,transparent_60%)] blur-[100px]"></div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 w-full relative z-10">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-2 font-bold">Background</span>
            </div>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight text-white">
              Experience
            </h2>
          </div>
        </Reveal>
        
        <div className="relative flex flex-col gap-6 md:block">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="md:sticky mb-6 md:mb-24 last:mb-0 w-full"
              style={{ 
                top: `calc(120px + ${index * 1.5}rem)`,
                zIndex: index + 1
              }}
            >
              <Reveal delay={index * 100}>
                {/* Double-Bezel Card */}
                <div className="p-[3px] rounded-[2rem] bg-white/[0.03] ring-1 ring-white/[0.08] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] bg-[#050507]">
                  <div className="rounded-[calc(2rem-3px)] bg-[var(--color-bg-card)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] p-8 lg:p-10 border border-white/5 relative overflow-hidden group transition-colors hover:bg-[#0F0F13]">
                    
                    {/* Hover Glow Accent */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white relative z-10">{exp.role}</h3>
                      <div className="text-[13px] font-mono font-semibold text-brand/90 relative z-10 bg-brand/10 px-3 py-1 rounded-full w-max border border-brand/20">
                        {exp.date}
                      </div>
                    </div>
                    
                    <p className="text-[16px] text-text-2 mb-6 font-medium relative z-10">{exp.company}</p>
                    <p className="text-[15px] text-text-3 leading-relaxed mb-8 relative z-10">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-[#050507] border border-white/10 rounded-md text-[12px] font-mono text-text-2 shadow-sm">
                          {tag}
                        </span>
                      ))}
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
