import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = ({ onNavigate }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleSectionClick = (e, section) => {
    e.preventDefault()

    // If on home page and onNavigate is provided, use it
    if (location.pathname === '/' && onNavigate) {
      onNavigate(section)
    } else {
      // If on another page, remember the section and navigate home.
      try {
        sessionStorage.setItem('scrollToSection', section)
      } catch {
        // ignore
      }
      navigate('/')
    }
  }

  return (
    <header className="bg-primary text-white py-5">
      <div className="container mx-auto px-4">
        <nav>
          <ul className="flex flex-wrap justify-end gap-5 list-none">
            <li>
              <button
                type="button"
                onClick={(e) => handleSectionClick(e, 'intro')}
                className="text-white no-underline font-medium hover:underline cursor-pointer"
              >
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={(e) => handleSectionClick(e, 'experience')}
                className="text-white no-underline font-medium hover:underline cursor-pointer"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={(e) => handleSectionClick(e, 'education')}
                className="text-white no-underline font-medium hover:underline cursor-pointer"
              >
                Education
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={(e) => handleSectionClick(e, 'projects')}
                className="text-white no-underline font-medium hover:underline cursor-pointer"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={(e) => handleSectionClick(e, 'publications')}
                className="text-white no-underline font-medium hover:underline cursor-pointer"
              >
                Publications
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={(e) => handleSectionClick(e, 'awards')}
                className="text-white no-underline font-medium hover:underline cursor-pointer"
              >
                Awards
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={(e) => handleSectionClick(e, 'contact')}
                className="text-white no-underline font-medium hover:underline cursor-pointer"
              >
                Contact
              </button>
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

