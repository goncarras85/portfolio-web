import HeroSection from './components/HeroSection'
import TechStack from './components/TechStack'
import FeaturedProjects from './components/FeaturedProjects'
import CareerTimeline from './components/CareerTimeline'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <HeroSection />
      <TechStack />
      <FeaturedProjects />
      <CareerTimeline />
      <Footer />
    </div>
  )
}

export default App
