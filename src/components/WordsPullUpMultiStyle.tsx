import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Segment {
  text: string
  className: string
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[]
  delay?: number
  wrapperClassName?: string
}

export default function WordsPullUpMultiStyle({
  segments,
  delay = 0,
  wrapperClassName = '',
}: WordsPullUpMultiStyleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const words = segments.flatMap((seg) =>
    seg.text
      .split(' ')
      .filter(Boolean)
      .map((word) => ({ word, className: seg.className }))
  )

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center gap-x-[0.22em] gap-y-[0.1em] ${wrapperClassName}`}>
      {words.map(({ word, className }, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`inline-block ${className}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  )
}
