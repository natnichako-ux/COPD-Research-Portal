import Hero from '../components/Hero'
import PlaceCard from '../components/PlaceCard'
import SectionHeader from '../components/SectionHeader'
import { places } from '../data/places'

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
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger animate-fade-up">
          {featured.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </section>

    </main>
  )
}
