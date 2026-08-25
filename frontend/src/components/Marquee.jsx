"use client";

const WORDS = [
  "DESIGN",
  "DEVELOP",
  "CREATE",
  "EDIT",
  "BRAND",
  "GROW",
  "INNOVATE",
  "ANIMATE",
];

export default function Marquee() {
  return (
    <div className="py-6 bg-[#000000] border-y border-white/10 relative overflow-hidden select-none">
      {/* Glow highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />

      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {[...WORDS, ...WORDS, ...WORDS, ...WORDS].map((word, idx) => (
          <div key={`${word}-${idx}`} className="flex items-center gap-8">
            <span className="font-serif font-normal text-2xl sm:text-3xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-[#c5a059] to-amber-200 hover:from-white hover:to-[#c5a059] transition-all cursor-default">
              {word}
            </span>
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#fef08a] to-[#c5a059]" />
          </div>
        ))}
      </div>
    </div>

  );
}
