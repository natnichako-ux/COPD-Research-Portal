import Hero from '../components/Hero'
import PlaceCard from '../components/PlaceCard'
import SectionHeader from '../components/SectionHeader'
import { places } from '../data/places'

const featured = places.filter((p) => p.featured)

export default function Home() {
  return (
    <main>
      <Hero />

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
