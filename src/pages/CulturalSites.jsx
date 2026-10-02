import PlaceCard from '../components/PlaceCard'
import SectionHeader from '../components/SectionHeader'
import { places } from '../data/places'

const culturalCategories = ['temple', 'museum', 'gallery']
const cultural = places.filter((p) => culturalCategories.includes(p.category))

export default function CulturalSites() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <SectionHeader
        titleTh="สถานที่วัฒนธรรม"
        titleEn="Cultural Sites"
        seeAllHref="/explore"
      />
      <p className="text-gray-400 text-sm max-w-xl mb-14 -mt-4">
        Placeholder — add a short introduction about the cultural heritage sites of เทศบาลเมืองศิลา.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger animate-fade-up">
        {cultural.map((place) => (
          <PlaceCard key={place.id} place={place} size="large" />
        ))}
      </div>
    </main>
  )
}
