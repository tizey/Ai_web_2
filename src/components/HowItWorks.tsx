const FEATURES = [
  { n: '01', text: 'AI analyses top-performing sites in your industry to inform every layout decision' },
  { n: '02', text: 'Pixel-perfect code delivered at launch speed — production-ready in days, not months' },
  { n: '03', text: 'Continuous optimisation driven by real user behaviour, clicks, and conversion data' },
]

const USE_CASES = [
  {
    title: 'SaaS & Startups',
    body: 'From pitch-ready landing pages to full marketing sites — conversion-optimised and shipped fast.',
    metric: '3.2× avg. conversion lift',
  },
  {
    title: 'E-commerce',
    body: 'AI-crafted storefronts built for purchase intent. Product pages and checkout flows that convert.',
    metric: '40% drop in bounce rate',
  },
  {
    title: 'Agencies',
    body: 'White-label delivery at scale. Ship client sites faster without expanding your team.',
    metric: '5-day average delivery',
  },
  {
    title: 'Personal Brands',
    body: 'Premium portfolios and bio sites that position you as the expert before a word is read.',
    metric: '98% client satisfaction',
  },
  {
    title: 'Enterprise',
    body: 'Large-scale design systems, microsites, and campaign pages built to brand and compliance standards.',
    metric: 'Enterprise-grade security',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-black px-6 lg:px-16 py-20">

      {/* Label */}
      <p className="text-white/35 text-xs tracking-[0.28em] uppercase font-body mb-16">
        How It Works
      </p>

      {/* Two-column */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-20 border-b border-white/10">

        {/* Left */}
        <div className="flex flex-col justify-between gap-12">
          <div>
            <h2 className="font-heading italic text-5xl md:text-6xl lg:text-[4.5rem] leading-[0.88] tracking-tight mb-8">
              <span className="text-white">Built by AI,</span>
              <br />
              <span className="text-white/30">refined by experts.</span>
            </h2>
            <p className="text-white/45 font-body font-light text-sm md:text-base leading-relaxed max-w-xs">
              Share your vision. Our AI handles wireframes, design, and code — while our team ensures every detail is flawless.
            </p>
          </div>
          <button className="self-start bg-white text-black rounded-full px-5 py-2.5 text-sm font-body font-medium hover:bg-white/90 transition-colors">
            Learn more about what AI can do
          </button>
        </div>

        {/* Right: numbered list */}
        <div className="flex flex-col justify-center divide-y divide-white/10">
          {FEATURES.map(({ n, text }) => (
            <div key={n} className="flex items-center justify-between py-7 gap-10">
              <p className="text-white/70 font-body font-light text-sm md:text-base leading-snug flex-1">
                {text}
              </p>
              <span className="text-white/20 font-body text-sm tabular-nums flex-shrink-0">{n}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Use cases */}
      <div className="pt-16">
        <p className="text-white/35 text-xs tracking-[0.28em] uppercase font-body mb-10">
          Common use cases our clients deploy
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {USE_CASES.map(({ title, body, metric }) => (
            <div
              key={title}
              className="bg-black p-7 flex flex-col justify-between min-h-[260px] hover:bg-white/5 transition-colors"
            >
              <div>
                <h3 className="text-white font-heading italic text-xl mb-3 leading-tight">{title}</h3>
                <p className="text-white/40 font-body font-light text-xs leading-relaxed">{body}</p>
              </div>
              <p className="text-white/55 font-body font-light text-xs mt-6 pt-6 border-t border-white/10">
                {metric}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
