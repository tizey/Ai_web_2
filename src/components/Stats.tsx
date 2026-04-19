const MAP_DOTS = [
  // North America — actual cities
  { x: 219, y: 102, label: 'New York' },
  { x: 128, y: 115, label: 'Los Angeles' },
  { x: 191, y: 99,  label: 'Chicago' },
  { x: 208, y: 95,  label: 'Toronto' },
  { x: 167, y: 145, label: 'Mexico City' },
  // South America
  { x: 276, y: 234, label: 'São Paulo' },
  { x: 251, y: 257, label: 'Buenos Aires' },
  // Europe
  { x: 372, y: 79,  label: 'London' },
  { x: 377, y: 85,  label: 'Paris' },
  { x: 400, y: 77,  label: 'Berlin' },
  { x: 409, y: 63,  label: 'Stockholm' },
  { x: 394, y: 62,  label: 'Oslo' },
  { x: 424, y: 61,  label: 'Helsinki' },
  { x: 382, y: 78,  label: 'Amsterdam' },
  { x: 415, y: 78,  label: 'Warsaw' },
  { x: 364, y: 102, label: 'Madrid' },
  { x: 398, y: 99,  label: 'Rome' },
  // Middle East & Africa
  { x: 486, y: 134, label: 'Dubai' },
  { x: 469, y: 135, label: 'Riyadh' },
  { x: 437, y: 124, label: 'Cairo' },
  { x: 379, y: 172, label: 'Lagos' },
  { x: 430, y: 240, label: 'Johannesburg' },
  // South & Southeast Asia
  { x: 523, y: 146, label: 'Mumbai' },
  { x: 532, y: 127, label: 'Delhi' },
  { x: 580, y: 157, label: 'Bangkok' },
  { x: 587, y: 183, label: 'Singapore' },
  // East Asia
  { x: 613, y: 103, label: 'Beijing' },
  { x: 623, y: 121, label: 'Shanghai' },
  { x: 635, y: 108, label: 'Seoul' },
  { x: 661, y: 112, label: 'Tokyo' },
  // Australia
  { x: 685, y: 255, label: 'Sydney' },
]

function WorldMap() {
  return (
    <div className="relative mx-auto" style={{ maxWidth: '70%' }}>
      <svg viewBox="0 0 744 371" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <image href="/images/world-map.svg" width="744" height="371" />
        {MAP_DOTS.map((dot, i) => (
          <rect key={i} x={dot.x - 3} y={dot.y - 3} width="6" height="6" fill="#ef4444" rx="1" />
        ))}
      </svg>
    </div>
  )
}

const stats = [
  { label: 'Satisfied clients', value: '1,204,507' },
  { label: 'Failure rate', value: '0.000019%' },
]

export default function Stats() {
  return (
    <section className="relative px-6 lg:px-16 overflow-hidden" style={{ paddingTop: '300px', paddingBottom: '300px' }}>
      {/* Background image */}
      <img
        src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_39FK6IjsEkKkF7he27tKyECcTHY%2Fhf_20260418_191912_3a64a084-3b3e-466c-8c1f-4688389be60f.png&w=1920&q=85"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-64 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, black, transparent)' }} />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, black, transparent)' }} />
      <div className="relative z-20 rounded-3xl overflow-hidden"
        style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.08)' }}>

        {/* Top: main metric */}
        <div className="px-10 md:px-16 pt-10 md:pt-14 pb-10 border-b border-white/10">
          <div className="flex items-center gap-2.5 mb-8">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-sm flex-shrink-0" />
            <span className="text-white/55 text-xs tracking-[0.25em] uppercase font-body font-light">
              Websites Designed &amp; Launched
            </span>
          </div>
          <span className="text-[7rem] md:text-[10rem] lg:text-[12rem] font-heading text-white leading-none tracking-tight">
            4,910+
          </span>
        </div>

        {/* Middle: world map */}
        <div className="px-10 md:px-16 py-10 border-b border-white/10">
          <div className="flex items-center gap-2.5 mb-8">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-sm flex-shrink-0" />
            <span className="text-white/55 text-xs tracking-[0.25em] uppercase font-body font-light">
              Client Locations Worldwide
            </span>
          </div>
          <WorldMap />
        </div>

        {/* Bottom: two metrics */}
        <div className="grid grid-cols-2 divide-x divide-white/10">
          {stats.map(({ label, value }) => (
            <div key={label} className="px-10 md:px-16 py-10 md:py-14">
              <div className="flex items-start gap-2.5 mb-8">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-sm flex-shrink-0 mt-1" />
                <span className="text-white/55 text-xs tracking-[0.25em] uppercase font-body font-light leading-snug">
                  {label}
                </span>
              </div>
              <span className="text-5xl md:text-7xl lg:text-8xl font-heading text-white leading-none tracking-tight">
                {value}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
