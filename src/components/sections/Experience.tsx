import Reveal from '@/components/ui/Reveal';

const roles = [
  {
    period: 'Apr 2025 — Present',
    title: 'BIM Automation Engineer',
    company: 'Independent Consultant',
    description: 'Architecting custom Revit API plugins, scalable Dynamo systems, and full-stack coordination dashboards for leading AEC firms. Focused strictly on replacing manual data entry with production-grade automation.',
    tags: ['Revit API', 'C# / WPF', 'Dynamo', 'React / Next.js'],
    featured: true,
  },
  {
    period: 'Jan 2025 — Present',
    title: 'BIM Coordinator',
    company: 'Multi-discipline Construction Projects',
    description: 'Directing clash detection workflows, MEP coordination, and data extraction pipelines across large-scale commercial projects using Navisworks and custom telemetry tools.',
    tags: ['Navisworks', 'Clash Detection', '4D Simulation'],
    featured: false,
  },
  {
    period: 'Jul 2024 — Dec 2024',
    title: 'BIM Technician',
    company: 'Engineering Consultancy',
    description: "Managed 3D structural modeling and documentation in Revit. Identified manual drafting bottlenecks and developed the initial batch of Python and Dynamo automation scripts that catalyzed the firm's transition into automated BIM delivery.",
    tags: ['Revit', 'Dynamo', 'Python'],
    featured: false,
  },
];

export default function Experience() {
  return (
    <section className="relative py-32 bg-[#050507] overflow-hidden" id="experience">

      <div className="max-w-[1000px] mx-auto px-6 w-full relative z-10">

        {/* Section header */}
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
            <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-2 font-bold">Background</span>
          </div>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight mb-16 text-white">
            Experience
          </h2>
        </Reveal>

        {/* Stacked role cards — no timeline dots/line */}
        <Reveal delay={100}>
          <div className="flex flex-col gap-4">
            {roles.map((role, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                  role.featured
                    ? 'bg-[#0D0D11] border-brand/20 hover:border-brand/40 hover:shadow-[0_0_40px_rgba(91,141,243,0.08)]'
                    : 'bg-[#0A0A0C] border-white/5 hover:bg-[#0F0F13] hover:border-white/10'
                }`}
              >
                {/* Featured accent line */}
                {role.featured && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent"></div>
                )}

                <div className="p-7 lg:p-8 flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                  {/* Date — oversized mono, left column */}
                  <div className="shrink-0 md:w-[160px]">
                    <span className={`text-[12px] font-mono font-semibold tracking-wide leading-relaxed ${role.featured ? 'text-brand' : 'text-text-3 group-hover:text-text-2 transition-colors'}`}>
                      {role.period}
                    </span>
                  </div>

                  {/* Content — right column */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-heading text-xl font-bold mb-1 transition-colors ${role.featured ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                      {role.title}
                    </h3>
                    <p className={`text-[14px] font-medium mb-4 ${role.featured ? 'text-text-2' : 'text-text-3 group-hover:text-text-2 transition-colors'}`}>
                      {role.company}
                    </p>
                    <p className="text-[14px] text-text-3 leading-relaxed mb-5">
                      {role.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {role.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-[11px] font-mono text-text-3 group-hover:text-text-2 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
