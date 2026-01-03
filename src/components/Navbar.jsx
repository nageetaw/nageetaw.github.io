import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const handleHashClick = (e, hash) => {
    if (location.pathname !== '/') {
      return // Let Link handle navigation if not on home page
    }
    e.preventDefault()
    const element = document.querySelector(hash)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-primary text-white py-5">
      <div className="container mx-auto px-4">
        <nav>
          <ul className="flex flex-wrap justify-end gap-5 list-none">
            <li>
              <Link
                to="/#intro"
                onClick={(e) => handleHashClick(e, '#intro')}
                className="text-white no-underline font-medium hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#experience"
                onClick={(e) => handleHashClick(e, '#experience')}
                className="text-white no-underline font-medium hover:underline"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="/#education"
                onClick={(e) => handleHashClick(e, '#education')}
                className="text-white no-underline font-medium hover:underline"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="/#projects"
                onClick={(e) => handleHashClick(e, '#projects')}
                className="text-white no-underline font-medium hover:underline"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/#publications"
                onClick={(e) => handleHashClick(e, '#publications')}
                className="text-white no-underline font-medium hover:underline"
              >
                Publications
              </Link>
            </li>
            <li>
              <Link
                to="/#rewards"
                onClick={(e) => handleHashClick(e, '#rewards')}
                className="text-white no-underline font-medium hover:underline"
              >
                Awards
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                onClick={(e) => handleHashClick(e, '#contact')}
                className="text-white no-underline font-medium hover:underline"
              >
                Contact
              </Link>
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

