import { useRef } from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Publications from '../components/Publications'
import Awards from '../components/Awards'
import Contact from '../components/Contact'

const Home = () => {
  const introRef = useRef(null)
  const experienceRef = useRef(null)
  const educationRef = useRef(null)
  const projectsRef = useRef(null)
  const publicationsRef = useRef(null)
  const awardsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (section) => {
    const refs = {
      intro: introRef,
      experience: experienceRef,
      education: educationRef,
      projects: projectsRef,
      publications: publicationsRef,
      awards: awardsRef,
      contact: contactRef
    }

    refs[section]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={scrollToSection} />
      <main className="container mx-auto px-4 py-10 max-w-6xl">
        <div ref={introRef}><Intro /></div>
        <div ref={experienceRef}><Experience /></div>
        <div ref={educationRef}><Education /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={publicationsRef}><Publications /></div>
        <div ref={awardsRef}><Awards /></div>
        <div ref={contactRef}><Contact /></div>
      </main>
    </div>
  )
}

export default Home

