import SectionHeader from '../components/SectionHeader'
import { festivals } from '../data/festivals'

const sorted = [...festivals].sort((a, b) => a.month - b.month)

export default function Compare() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <SectionHeader 
          titleTh="Descriptive Spatial Analysis" 
          titleEn="การวิเคราะห์ความสัมพันธ์เชิงพื้นที่" />
      <p className="text-gray-400 text-sm max-w-xl mb-14 -mt-4">
        Placeholder — add a short intro about the annual festivals celebrated in เทศบาลเมืองศิลา.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger animate-fade-up">
        {sorted.map((f) => (
          <div
            key={f.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image with date badge */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={f.image}
                alt={f.nameEn}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-3 left-3 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide">
                {f.dateLabel}
              </span>
            </div>

            <div className="p-5">
              <h3
                className="text-lg font-bold text-gray-900 mb-0.5 group-hover:text-slate-900 transition-colors duration-200"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {f.nameTh}
              </h3>
              <p className="text-gray-400 text-xs mb-3">{f.nameEn}</p>
              <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
