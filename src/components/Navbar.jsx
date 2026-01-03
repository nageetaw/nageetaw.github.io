import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleHashClick = (e, hash) => {
    e.preventDefault()

    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Already on home page, just scroll
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="bg-primary text-white py-5">
      <div className="container mx-auto px-4">
        <nav>
          <ul className="flex flex-wrap justify-end gap-5 list-none">
            <li>
              <a
                href="#intro"
                onClick={(e) => handleHashClick(e, '#intro')}
                className="text-white no-underline font-medium hover:underline cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => handleHashClick(e, '#experience')}
                className="text-white no-underline font-medium hover:underline cursor-pointer"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={(e) => handleHashClick(e, '#education')}
                className="text-white no-underline font-medium hover:underline cursor-pointer"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleHashClick(e, '#projects')}
                className="text-white no-underline font-medium hover:underline cursor-pointer"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#publications"
                onClick={(e) => handleHashClick(e, '#publications')}
                className="text-white no-underline font-medium hover:underline cursor-pointer"
              >
                Publications
              </a>
            </li>
            <li>
              <a
                href="#rewards"
                onClick={(e) => handleHashClick(e, '#rewards')}
                className="text-white no-underline font-medium hover:underline cursor-pointer"
              >
                Awards
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleHashClick(e, '#contact')}
                className="text-white no-underline font-medium hover:underline cursor-pointer"
              >
                Contact
              </a>
            </li>
            {/* <li>
              <Link to="/gallery" className="text-white no-underline font-medium hover:underline">
                Gallery
              </Link>
            </li> */}
            <li>
              <Link to="/cv" className="text-white no-underline font-medium hover:underline">
                CV
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

