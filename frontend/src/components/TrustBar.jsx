"use client";

const CLIENTS = [
  { name: "NOVA LABS", tag: "AI & Tech" },
  { name: "ORBIT STUDIO", tag: "Creative SaaS" },
  { name: "VERTEX CAPITAL", tag: "Fintech" },
  { name: "LUMEN HEALTH", tag: "Digital Health" },
  { name: "APEX MEDIA", tag: "YouTube Network" },
  { name: "NEXA PROTOCOL", tag: "Web3" },
  { name: "CYBERSPACE", tag: "E-Commerce" },
  { name: "AURA VISUALS", tag: "Lifestyle" },
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-[#000000] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
          Trusted by ambitious brands, creators & businesses
        </p>
      </div>

      {/* Infinite Scrolling Logo Ticker */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left/Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#000000] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-12 sm:gap-16 whitespace-nowrap py-2">
          {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-gradient-to-r group-hover:from-[#fef08a] group-hover:to-[#c5a059] transition-colors" />
              <span className="font-serif font-normal text-lg sm:text-xl tracking-wide text-zinc-300 group-hover:text-white transition-colors duration-200">
                {client.name}
              </span>
              <span className="text-[10px] text-[#c5a059] font-sans uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                [{client.tag}]
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
