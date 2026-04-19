import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  direction?: 'bottom' | 'top'
  by?: 'words' | 'letters'
}

export default function BlurText({
  text,
  className = '',
  delay = 200,
  direction = 'bottom',
  by = 'words',
}: BlurTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const tokens = by === 'words' ? text.split(' ') : text.split('')
  const yInitial = direction === 'bottom' ? 50 : -50

  return (
    <span ref={ref} className={className}>
      {tokens.map((token, i) => (
        <motion.span
          key={i}
          initial={{ filter: 'blur(10px)', opacity: 0, y: yInitial }}
          animate={isVisible
            ? { filter: 'blur(0px)', opacity: 1, y: 0 }
            : { filter: 'blur(10px)', opacity: 0, y: yInitial }
          }
          transition={{
            duration: 0.7,
            delay: i * (delay / 1000),
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: 'inline-block' }}
        >
          {token}{by === 'words' && i < tokens.length - 1 ? '\u00a0' : ''}
        </motion.span>
      ))}
    </span>
  )
}
