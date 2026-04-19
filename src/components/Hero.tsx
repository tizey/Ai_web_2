import { motion } from 'framer-motion'
import { ArrowUpRight, Play } from 'lucide-react'
import BlurText from './BlurText'

const NAV_LINKS = ['Home', 'Services', 'Work', 'Process', 'Pricing']
const PARTNERS = ['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma']

const ease = [0.16, 1, 0.3, 1] as const

function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center liquid-glass">
        <span className="text-white font-heading italic text-lg">S</span>
      </div>

      {/* Center nav links — desktop only */}
      <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1 gap-0.5">
        {NAV_LINKS.map((item) =>
          item === 'Pricing' ? (
            <a
              key={item}
              href="#"
              className="inline-flex items-center gap-1 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium font-body"
            >
              Get Started
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <a
              key={item}
              href="#"
              className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors rounded-full"
            >
              {item}
            </a>
          )
        )}
      </div>

      {/* Spacer for symmetry */}
      <div className="h-12 w-12" />
    </nav>
  )
}

export default function Hero() {
  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden" style={{ height: '1000px' }}>
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_39FK6IjsEkKkF7he27tKyECcTHY/hf_20260418_193040_0d2b8a32-dc18-4812-af22-cb96d725e28e.mp4"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />

        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
          style={{
            height: '300px',
            background: 'linear-gradient(to bottom, transparent, black)',
          }}
        />

        {/* Content */}
        <div
          className="relative z-20 flex flex-col items-center text-center px-6"
          style={{ paddingTop: '150px' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="liquid-glass rounded-full px-1 py-1 inline-flex items-center gap-2 mb-8"
          >
            <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
              New
            </span>
            <span className="text-white/90 text-sm font-body pr-2">
              Introducing AI-powered web design.
            </span>
          </motion.div>

          {/* Heading */}
          <div className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.85] tracking-[-4px] mb-6 text-center">
            <div><BlurText text="The Website Your" delay={100} direction="bottom" by="words" /></div>
            <div><BlurText text="Brand Deserves" delay={250} direction="bottom" by="words" /></div>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease }}
            className="text-sm md:text-base text-white font-body font-light leading-tight max-w-md mb-8"
          >
            Stunning design. Blazing performance. Built by AI, refined by experts.
            This is web design, wildly reimagined.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease }}
            className="flex items-center gap-4"
          >
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-white font-body font-medium text-sm inline-flex items-center gap-2 hover:bg-white/10 transition-colors">
              Get Started
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="text-white font-body font-light text-sm inline-flex items-center gap-2 hover:text-white/80 transition-colors">
              <Play className="w-4 h-4 fill-white" />
              Watch the Film
            </button>
          </motion.div>

          {/* Partners bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4, ease }}
            className="mt-auto pt-16 flex flex-col items-center gap-6"
            style={{ marginTop: '80px' }}
          >
            <div className="liquid-glass rounded-full px-4 py-1.5">
              <span className="text-white/60 text-xs font-body">
                Trusted by the teams behind
              </span>
            </div>
            <div className="flex items-center gap-12 md:gap-16">
              {PARTNERS.map((name) => (
                <span
                  key={name}
                  className="text-2xl md:text-3xl font-heading italic text-white"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
