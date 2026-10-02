import Hero from '../components/Hero'
import PlaceCard from '../components/PlaceCard'
import SectionHeader from '../components/SectionHeader'
import MapSection from '../components/MapSection'
import { places } from '../data/places'
import { Link } from 'react-router-dom'

const featured = places.filter((p) => p.featured)

const stats = [
  { value: '—', label: 'สถานที่ท่องเที่ยว', labelEn: 'Attractions' },
  { value: '—', label: 'ประเพณี', labelEn: 'Traditions' },
  { value: '—', label: 'เทศกาลต่อปี', labelEn: 'Festivals / Year' },
  { value: '—', label: 'ปีประวัติศาสตร์', labelEn: 'Years of History' },
]

export default function Home() {
  return (
    <main>
      <Hero />
      <MapSection />

      {/* Stats strip */}
      <div className="bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-white text-2xl font-bold">{s.value}</p>
              <p className="text-slate-200 text-xs mt-0.5">{s.labelEn}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured places */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeader
          titleTh="สถานที่แนะนำ"
          titleEn="Featured Places"
          seeAllHref="/explore"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger animate-fade-up">
          {featured.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </section>

      {/* Explore CTA — split layout */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-slate-800 rounded-3xl overflow-hidden flex flex-col md:flex-row">
          {/* Text side */}
          <div className="flex-1 p-10 md:p-14 flex flex-col justify-center">
            <p className="text-slate-300 text-[11px] font-bold tracking-[3px] uppercase mb-3">
              Explore the Municipality
            </p>
            <h2
              className="text-white text-3xl font-bold leading-tight mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Discover Every Corner of Sila
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-sm">
              Placeholder — add a short teaser paragraph inviting visitors to explore all sights, traditions, and festivals.
            </p>
            <Link
              to="/explore"
              className="group self-start inline-flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-slate-900/50"
            >
              Start Exploring
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Image grid side */}
          <div className="md:w-80 grid grid-cols-2 gap-1 p-1">
            {places.slice(0, 4).map((p) => (
              <div key={p.id} className="overflow-hidden rounded-lg aspect-square">
                <img
                  src={p.image}
                  alt={p.nameEn}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Map */}
      <MapSection />
    </main>
  )
}
