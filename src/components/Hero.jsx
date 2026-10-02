import { Link } from 'react-router-dom'
import { hero } from '../data/hero'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] flex items-end overflow-hidden">
      {/* Background image */}
      <img
        src={hero.image}
        alt="Sila Hero"
        className="absolute inset-0 w-full h-full object-cover scale-100"
        style={{ animation: 'heroZoom 12s ease-out forwards' }}
      />

      {/* Layered gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
        <p
          className="text-amber-400 text-[11px]  tracking-[1px] uppercase mb-4 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          {hero.tagline}
        </p>

        <h1
          className="text-white font-bold leading-[1.1] mb-5 whitespace-pre-line animate-fade-up"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            animationDelay: '0.2s',
          }}
        >
          {hero.titleTh}
        </h1>
        <h2
          className="text-white leading-[1.1]  whitespace-pre-line animate-fade-up"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            animationDelay: '0.2s',
          }}
        >
          {hero.titleth}
        </h2>

        <p
          className="text-white/70 text-[15px] max-w-md leading-relaxed mb-9 animate-fade-up"
          style={{ animationDelay: '0.32s' }}
        >
          {hero.description}
        </p>

        <div
          className="flex items-center gap-5 animate-fade-up"
          style={{ animationDelay: '0.44s' }}
        >
          <Link
            to={hero.ctaPrimary.href}
            className="group inline-flex items-center gap-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-slate-800/40 hover:-translate-y-0.5"
          >
            {hero.ctaPrimary.label}
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <Link
            to={hero.ctaSecondary.href}
            className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 underline underline-offset-4 decoration-white/30 hover:decoration-white/70"
          >
            {hero.ctaSecondary.label}
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.05); }
          to   { transform: scale(1); }
        }
      `}</style>
    </section>
  )
}
