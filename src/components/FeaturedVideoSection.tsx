import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function FeaturedVideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })

  return (
    <section ref={ref} className="bg-black pt-6 md:pt-10 pb-20 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden"
        style={{ aspectRatio: '16 / 9', margin: '0 50px' }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex items-end justify-between">
          <div className="liquid-glass rounded-2xl px-5 py-4 max-w-xs">
            <p className="text-white/50 text-xs tracking-widest uppercase font-body mb-1.5">
              Our Approach
            </p>
            <p className="text-white font-body text-sm leading-snug">
              Where AI precision meets human creativity — every detail, perfected.
            </p>
          </div>

          <button className="liquid-glass rounded-full px-4 py-2.5 text-white font-body text-sm font-medium inline-flex items-center gap-2 hover:bg-white/10 transition-colors flex-shrink-0 ml-4">
            Explore more
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </section>
  )
}
