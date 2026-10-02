import { useState } from 'react'
import PlaceCard from '../components/PlaceCard'
import FilterTabs from '../components/FilterTabs'
import SearchBar from '../components/SearchBar'
import SectionHeader from '../components/SectionHeader'
import { places, categories } from '../data/places'

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = places.filter((p) => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory
    const matchSearch =
      query === '' ||
      p.nameTh.includes(query) ||
      p.nameEn.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <SectionHeader titleTh="สำรวจเมืองศิลา" titleEn="Explore the Municipality" />

      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <div className="sm:w-60">
          <SearchBar value={query} onChange={setQuery} placeholder="Search sights..." />
        </div>
        <FilterTabs categories={categories} active={activeCategory} onChange={setActiveCategory} />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-4xl mb-3">—</p>
          <p className="text-gray-400 text-sm">No results found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger animate-fade-up">
          {filtered.map((place) => (
            <PlaceCard key={place.id} place={place} size="large" />
          ))}
        </div>
      )}
    </main>
  )
}
