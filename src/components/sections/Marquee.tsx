const items = [
  "REVIT API",
  "DYNAMO",
  "C#",
  "PYTHON",
  "NAVISWORKS",
  "FORGE API",
  "WPF & XAML"
];

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-[#050507] py-12 md:py-16 relative border-b border-white/5">
      {/* Edge Gradients for smooth fade out */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#050507] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#050507] to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-full">
        <div className="flex animate-[marqueeScroll_30s_linear_infinite] whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, idx) => (
            <span key={idx} className="inline-flex items-center text-[1rem] md:text-[1.15rem] font-bold uppercase tracking-[0.15em] text-white/20 px-8 select-none">
              {item}
              <span className="text-brand/50 ml-16 text-[1rem]">✦</span>
            </span>
          ))}
        </div>
        <div aria-hidden="true" className="flex animate-[marqueeScroll_30s_linear_infinite] whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, idx) => (
            <span key={`dup-${idx}`} className="inline-flex items-center text-[1rem] md:text-[1.15rem] font-bold uppercase tracking-[0.15em] text-white/20 px-8 select-none">
              {item}
              <span className="text-brand/50 ml-16 text-[1rem]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

