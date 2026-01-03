import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Publications from '../components/Publications'
import Awards from '../components/Awards'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-10 max-w-6xl">
        <Intro />
        <Experience />
        <Education />
        <Projects />
        <Publications />
        <Awards />
        <Contact />
      </main>
    </div>
  )
}

export default Home

