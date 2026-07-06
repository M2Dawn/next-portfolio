import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

export default function NotFound() {
  return (
    <div className="relative min-h-[100svh] flex flex-col items-center justify-center bg-[#050507] overflow-hidden px-6">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(239,68,68,0.08)_0%,transparent_60%)] blur-[100px]"></div>
      </div>
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        <Reveal>
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 text-[11px] md:text-[13px] font-semibold tracking-wide text-text-1 mb-8 px-4 py-2 rounded-full bg-white/[0.03] border border-red-500/20 backdrop-blur-xl shadow-[0_0_20px_rgba(239,68,68,0.1)]">
            <span className="relative flex h-2.5 w-2.5 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shadow-[0_0_8px_#ef4444]"></span>
            </span>
            System Error: Route Not Found
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-[clamp(6rem,15vw,10rem)] font-extrabold leading-none tracking-tighter mb-4">
            <span className="relative bg-[linear-gradient(to_right,#EF4444,#F87171,#FCA5A5,#EF4444)] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-text drop-shadow-sm">
              404
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">
            Missing Element Detected
          </h2>
          <p className="text-[1.05rem] md:text-[1.15rem] text-text-2 leading-relaxed mb-10 max-w-md mx-auto font-medium">
            The page or model component you are looking for has been moved, deleted, or never existed in the current project database.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <Link href="/" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-white/5 border border-white/10 transition-all duration-300 overflow-hidden shadow-[0_0_40px_rgba(91,141,243,0.15)] hover:shadow-[0_0_60px_rgba(91,141,243,0.35)] hover:-translate-y-1">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand via-[#8b5cf6] to-brand opacity-90 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10 flex items-center gap-2">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Return to Base
            </span>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
