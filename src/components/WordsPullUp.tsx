import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface WordsPullUpProps {
  text: string
  className?: string
  delay?: number
  showAsterisk?: boolean
}

export default function WordsPullUp({
  text,
  className = '',
  delay = 0,
  showAsterisk = false,
}: WordsPullUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const words = text.split(' ').filter(Boolean)

  return (
    <span ref={ref} className={`inline-flex flex-wrap gap-x-[0.15em] ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        return (
          <span key={i} className="inline-block overflow-hidden pb-[0.1em]">
            <motion.span
              className="inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.9,
                delay: delay + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {isLast && showAsterisk ? (
                <span className="relative">
                  {word}
                  <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
                </span>
              ) : (
                word
              )}
            </motion.span>
          </span>
        )
      })}
    </span>
  )
}
