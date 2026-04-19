import { motion, MotionValue, useTransform } from 'framer-motion'

interface AnimatedLetterProps {
  char: string
  scrollYProgress: MotionValue<number>
  index: number
  totalChars: number
}

export default function AnimatedLetter({
  char,
  scrollYProgress,
  index,
  totalChars,
}: AnimatedLetterProps) {
  const charProgress = index / totalChars
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, charProgress - 0.1), Math.min(1, charProgress + 0.05)],
    [0.2, 1]
  )

  if (char === ' ') {
    return <span style={{ display: 'inline', whiteSpace: 'pre' }}> </span>
  }

  return <motion.span style={{ opacity }}>{char}</motion.span>
}
