import { ArrowUpRight } from 'lucide-react'

function StackIcon({ variant }: { variant: 'light' | 'red' | 'dark' }) {
  const top = variant === 'light' ? 'rgba(255,255,255,0.2)' : variant === 'red' ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.3)'
  const mid = variant === 'light' ? 'rgba(255,255,255,0.35)' : variant === 'red' ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.6)'
  const bot = variant === 'light' ? '#ef4444' : 'rgba(255,255,255,0.9)'
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="0" y="0" width="36" height="10" rx="1" fill={top} />
      <rect x="0" y="13" width="36" height="10" rx="1" fill={mid} />
      <rect x="0" y="26" width="36" height="10" rx="1" fill={bot} />
    </svg>
  )
}

const CARDS = [
  {
    variant: 'light' as const,
    title: 'Design & Branding',
    items: ['Custom UI/UX design', 'Brand identity & visual system', 'Motion & micro-interactions', 'Responsive across all devices'],
    bg: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    textColor: 'text-white',
    subtextColor: 'text-white/50',
  },
  {
    variant: 'red' as const,
    title: 'Development & Launch',
    items: ['Frontend built for performance', 'CMS & API integration', 'SEO-ready architecture', 'Deployed in days, not months'],
    bg: '#ef4444',
    border: '1px solid transparent',
    textColor: 'text-white',
    subtextColor: 'text-white/70',
  },
  {
    variant: 'dark' as const,
    title: 'Growth & Support',
    items: ['Analytics & conversion tracking', 'A/B testing setup', 'Ongoing performance audits', 'Dedicated post-launch support'],
    bg: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.1)',
    textColor: 'text-white',
    subtextColor: 'text-white/50',
  },
]

export default function ExpertiseSection() {
  return (
    <section className="bg-black px-6 lg:px-16 pt-24 md:pt-32 pb-24 md:pb-32">

      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-[1.0] tracking-tight max-w-lg">
          Technical<br />expertise included
        </h2>
        <a
          href="#"
          className="hidden md:inline-flex items-center gap-2 text-white font-body text-base font-medium tracking-widest uppercase hover:text-white/70 transition-colors mt-2"
        >
          Contact Us
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>

      <p className="text-white/40 font-body text-sm md:text-base mb-12 md:mb-16 max-w-sm">
        Design consultation, development support,<br />
        and ongoing care — no extra fees.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl p-8 flex flex-col"
            style={{ background: card.bg, border: card.border, minHeight: '420px' }}
          >
            <div className="mb-10">
              <StackIcon variant={card.variant} />
            </div>

            <h3 className={`font-heading text-3xl md:text-4xl leading-[1.05] tracking-tight mb-8 ${card.textColor}`}>
              {card.title}
            </h3>

            <ul className="space-y-2 mt-auto">
              {card.items.map((item) => (
                <li key={item} className={`font-body text-sm flex items-start gap-2 ${card.subtextColor}`}>
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  )
}
