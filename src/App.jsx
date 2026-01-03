import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CV from './pages/CV'
import Gallery from './pages/Gallery'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  )
}

export default App

