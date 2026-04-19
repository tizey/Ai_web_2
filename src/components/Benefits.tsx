function CubeOne() {
  return (
    <svg viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50,8 L84,26 L50,44 L16,26 Z" stroke="#ef4444" strokeWidth="1.2" fill="rgba(239,68,68,0.04)" />
      <path d="M16,26 L16,62 L50,80 L50,44 Z" stroke="#ef4444" strokeWidth="1.2" fill="rgba(239,68,68,0.02)" />
      <path d="M50,44 L50,80 L84,62 L84,26 Z" stroke="#ef4444" strokeWidth="1.2" fill="rgba(239,68,68,0.06)" />
    </svg>
  )
}

function CubeTwo() {
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bottom cube */}
      <path d="M50,50 L80,65 L50,80 L20,65 Z" stroke="#ef4444" strokeWidth="1.2" fill="rgba(239,68,68,0.04)" />
      <path d="M20,65 L20,95 L50,110 L50,80 Z" stroke="#ef4444" strokeWidth="1.2" fill="rgba(239,68,68,0.02)" />
      <path d="M50,80 L50,110 L80,95 L80,65 Z" stroke="#ef4444" strokeWidth="1.2" fill="rgba(239,68,68,0.06)" />
      {/* Top cube (smaller, offset) */}
      <path d="M50,12 L74,24 L50,36 L26,24 Z" stroke="#ef4444" strokeWidth="1.2" fill="rgba(239,68,68,0.04)" />
      <path d="M26,24 L26,48 L50,60 L50,36 Z" stroke="#ef4444" strokeWidth="1.2" fill="rgba(239,68,68,0.02)" />
      <path d="M50,36 L50,60 L74,48 L74,24 Z" stroke="#ef4444" strokeWidth="1.2" fill="rgba(239,68,68,0.06)" />
    </svg>
  )
}

function CubeThree() {
  return (
    <svg viewBox="0 0 132 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left cube — short */}
      <path d="M22,58 L42,48 L62,58 L42,68 Z" stroke="#ef4444" strokeWidth="1.2" fill="rgba(239,68,68,0.04)" />
      <path d="M22,58 L22,78 L42,88 L42,68 Z" stroke="#ef4444" strokeWidth="1.2" fill="rgba(239,68,68,0.02)" />
      <path d="M42,68 L42,88 L62,78 L62,58 Z" stroke="#ef4444" strokeWidth="1.2" fill="rgba(239,68,68,0.06)" />
      {/* Mid cube — medium */}
      <path d="M52,38 L72,28 L92,38 L72,48 Z" stroke="#ef4444" strokeWidth="1.2" fill="rgba(239,68,68,0.04)" />
      <path d="M52,38 L52,68 L72,78 L72,48 Z" stroke="#ef4444" strokeWidth="1.2" fill="rgba(239,68,68,0.02)" />
      <path d="M72,48 L72,78 L92,68 L92,38 Z" stroke="#ef4444" strokeWidth="1.2" fill="rgba(239,68,68,0.06)" />
      {/* Right cube — tall */}
      <path d="M82,14 L102,4 L122,14 L102,24 Z" stroke="#ef4444" strokeWidth="1.2" fill="rgba(239,68,68,0.04)" />
      <path d="M82,14 L82,58 L102,68 L102,24 Z" stroke="#ef4444" strokeWidth="1.2" fill="rgba(239,68,68,0.02)" />
      <path d="M102,24 L102,68 L122,58 L122,14 Z" stroke="#ef4444" strokeWidth="1.2" fill="rgba(239,68,68,0.06)" />
    </svg>
  )
}

function CornerBrackets() {
  return (
    <>
      {/* Top-right */}
      <svg className="absolute top-3 right-3 w-5 h-5" viewBox="0 0 20 20" fill="none">
        <path d="M20,0 L20,20" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
        <path d="M0,0 L20,0" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
      </svg>
      {/* Bottom-left */}
      <svg className="absolute bottom-3 left-3 w-5 h-5" viewBox="0 0 20 20" fill="none">
        <path d="M0,20 L0,0" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
        <path d="M20,20 L0,20" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
      </svg>
    </>
  )
}

const CARDS = [
  { label: 'AI-POWERED DESIGN', Icon: CubeOne },
  { label: 'LAUNCHED IN DAYS', Icon: CubeTwo },
  { label: 'BUILT TO CONVERT', Icon: CubeThree },
]

export default function Benefits() {
  return (
    <section className="bg-black px-6 lg:px-16 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <h2 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight mb-8">
            You don't have to wait<br />
            6 months and pay 10 engineers<br />
            for your dream website anymore.
          </h2>
          <p className="text-white/50 font-body font-light text-sm md:text-base leading-relaxed max-w-sm">
            AI handles the design, the code, and the launch — while our team ensures every detail is flawless from day one.
          </p>
        </div>

        {/* Right: stacked cards */}
        <div className="flex flex-col gap-3">
          {CARDS.map(({ label, Icon }) => (
            <div
              key={label}
              className="relative flex items-center justify-between px-8 py-7 rounded-xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span className="text-white/75 font-body text-xs tracking-[0.25em] uppercase">
                {label}
              </span>
              <div className="w-20 h-16 flex-shrink-0 opacity-80" style={{ marginRight: '50px' }}>
                <Icon />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
