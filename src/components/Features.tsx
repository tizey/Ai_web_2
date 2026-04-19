import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const CARD_EASE = [0.22, 1, 0.36, 1] as const

interface FeatureCard {
  type: 'video' | 'content'
  videoSrc?: string
  iconSrc?: string
  number?: string
  title?: string
  items?: string[]
}

const CARDS: FeatureCard[] = [
  {
    type: 'video',
    videoSrc:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
  },
  {
    type: 'content',
    iconSrc:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    number: '01',
    title: 'Project Storyboard.',
    items: [
      'Visual scene planning and layout',
      'Shot-by-shot storyboard editor',
      'Collaborative frame annotations',
      'Export to PDF or presentation',
    ],
  },
  {
    type: 'content',
    iconSrc:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    number: '02',
    title: 'Smart Critiques.',
    items: [
      'AI-powered frame-by-frame analysis',
      'Contextual creative notes and feedback',
      'Native Figma and Adobe integrations',
    ],
  },
  {
    type: 'content',
    iconSrc:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    number: '03',
    title: 'Immersion Capsule.',
    items: [
      'Deep focus with notification silencing',
      'Curated ambient soundscapes for flow',
      'Smart schedule syncing with your calendar',
    ],
  },
]

export default function Features() {
  const gridRef = useRef(null)
  const isInView = useInView(gridRef, { once: true, margin: '-100px' })

  return (
    <section className="relative min-h-screen bg-black py-20 md:py-32 px-4 md:px-6 overflow-hidden">

      {/* Noise overlay */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10 md:mb-14 text-center">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Studio-grade workflows for visionary creators.',
                  className: 'text-[#E1E0CC]',
                },
              ]}
            />
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Built for pure vision. Powered by art.',
                  className: 'text-gray-500',
                },
              ]}
              delay={0.2}
            />
          </div>
        </div>

        {/* Cards grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]"
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              className="h-full min-h-[280px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: CARD_EASE,
              }}
            >
              {card.type === 'video' ? (
                <VideoCard src={card.videoSrc!} />
              ) : (
                <ContentCard
                  iconSrc={card.iconSrc!}
                  number={card.number!}
                  title={card.title!}
                  items={card.items!}
                />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

function VideoCard({ src }: { src: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden h-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-5 sm:p-6">
        <p className="font-medium text-base sm:text-lg" style={{ color: '#E1E0CC' }}>
          Your creative canvas.
        </p>
      </div>
    </div>
  )
}

function ContentCard({
  iconSrc,
  number,
  title,
  items,
}: {
  iconSrc: string
  number: string
  title: string
  items: string[]
}) {
  return (
    <div className="bg-[#212121] rounded-2xl p-5 sm:p-6 flex flex-col h-full">
      {/* Icon */}
      <img
        src={iconSrc}
        alt=""
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover flex-shrink-0"
      />

      {/* Spacer */}
      <div className="flex-1" />

      {/* Number + Title */}
      <div className="mb-4">
        <p className="text-gray-500 text-xs font-mono mb-1.5">{number}</p>
        <h3 className="font-medium text-base sm:text-lg" style={{ color: '#E1E0CC' }}>
          {title}
        </h3>
      </div>

      {/* Checklist */}
      <ul className="space-y-2.5 mb-6">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <Check className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
            <span className="text-gray-400 text-xs leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      {/* Learn more */}
      <button className="group flex items-center gap-1.5 text-sm transition-all duration-200 hover:gap-3" style={{ color: '#E1E0CC' }}>
        <span>Learn more</span>
        <ArrowRight className="w-3.5 h-3.5 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
      </button>
    </div>
  )
}
