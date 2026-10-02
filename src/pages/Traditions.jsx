import SectionHeader from '../components/SectionHeader'
import { traditions } from '../data/traditions'

export default function Traditions() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <SectionHeader titleTh="ประเพณี" titleEn="Traditions" />
      <p className="text-gray-400 text-sm max-w-xl mb-16 -mt-4">
        Placeholder — add a short intro about the living traditions of เทศบาลเมืองศิลา.
      </p>

      <div className="space-y-20">
        {traditions.map((t, i) => (
          <div
            key={t.id}
            className={`flex flex-col md:flex-row gap-10 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Image */}
            <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-md">
              <div className="group overflow-hidden h-72">
                <img
                  src={t.image}
                  alt={t.nameEn}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Text */}
            <div className="md:w-1/2">
              <p className="text-slate-500 text-[11px] font-bold tracking-[3px] uppercase mb-3">
                {t.season}
              </p>
              <h2
                className="text-3xl font-bold text-gray-900 mb-2 leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {t.nameTh}
              </h2>
              <p className="text-gray-400 text-sm mb-5">{t.nameEn}</p>
              <div className="w-10 h-0.5 bg-slate-500 mb-5 rounded-full" />
              <p className="text-gray-600 text-sm leading-relaxed">{t.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
