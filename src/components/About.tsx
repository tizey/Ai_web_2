import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import AnimatedLetter from './AnimatedLetter'

const HEADING_SEGMENTS = [
  { text: 'I am Marcus Chen,', className: 'font-normal text-[#E1E0CC]' },
  { text: 'a self-taught director.', className: 'italic font-serif text-[#E1E0CC]' },
  {
    text: 'I have skills in color grading, visual effects, and narrative design.',
    className: 'font-normal text-[#E1E0CC]',
  },
]

const BODY_TEXT =
  'Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.'

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = BODY_TEXT.split('')
  const totalChars = chars.length

  return (
    <section ref={sectionRef} className="bg-black py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-2xl md:rounded-3xl px-6 md:px-12 lg:px-20 py-12 md:py-20 text-center">

        {/* Label */}
        <p className="text-primary text-[10px] sm:text-xs mb-10 md:mb-14 tracking-widest uppercase">
          Visual arts
        </p>

        {/* Main heading */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] sm:leading-[0.9] mb-12 md:mb-20">
          <WordsPullUpMultiStyle
            segments={HEADING_SEGMENTS}
            wrapperClassName="max-w-3xl mx-auto"
          />
        </div>

        {/* Scroll-animated body paragraph */}
        <p
          className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base"
          style={{ color: '#DEDBC8', lineHeight: 1.7 }}
        >
          {chars.map((char, i) => (
            <AnimatedLetter
              key={i}
              char={char}
              scrollYProgress={scrollYProgress}
              index={i}
              totalChars={totalChars}
            />
          ))}
        </p>

      </div>
    </section>
  )
}
