import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CulturalSites from './pages/MoranI'
import GetisOrd from './pages/GetisOrd'
import Compare from './pages/Compare'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cultural-sites" element={<CulturalSites />} />
          <Route path="/traditions" element={<GetisOrd />} />
          <Route path="/festivals" element={<Compare />} />
          <Route path="/explore" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
