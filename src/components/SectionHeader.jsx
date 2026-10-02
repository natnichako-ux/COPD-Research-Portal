import { Link } from 'react-router-dom'

export default function SectionHeader({ titleTh, titleEn, seeAllHref, center = false }) {
  return (
    <div className={`flex items-end justify-between mb-10 ${center ? 'flex-col items-center text-center' : ''}`}>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-px bg-slate-500" />
          <p className="text-slate-600 text-[11px] font-bold tracking-[3px] uppercase">
            {titleEn}
          </p>
        </div>
        <h2
          className="text-2xl font-bold text-gray-900"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {titleTh}
        </h2>
      </div>

      {seeAllHref && (
        <Link
          to={seeAllHref}
          className="group flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200 shrink-0 ml-6"
        >
          ดูทั้งหมด
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      )}
    </div>
  )
}
