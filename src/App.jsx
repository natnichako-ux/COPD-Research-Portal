import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CulturalSites from './pages/CulturalSites'
import Traditions from './pages/Traditions'
import Festivals from './pages/Festivals'
import Explore from './pages/Explore'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/"               element={<Home />} />
          <Route path="/cultural-sites" element={<CulturalSites />} />
          <Route path="/traditions"     element={<Traditions />} />
          <Route path="/festivals"      element={<Festivals />} />
          <Route path="/explore"        element={<Explore />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
