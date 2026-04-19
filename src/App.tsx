import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import Benefits from './components/Benefits'
import AboutSection from './components/AboutSection'
import FeaturedVideoSection from './components/FeaturedVideoSection'
import ExpertiseSection from './components/ExpertiseSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-black">
      <div className="relative z-10">
        <Hero />
        <HowItWorks />
        <Stats />
        <Benefits />
        <AboutSection />
        <FeaturedVideoSection />
        <ExpertiseSection />
        <Footer />
      </div>
    </div>
  )
}
