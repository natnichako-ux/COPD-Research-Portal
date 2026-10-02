const categoryColors = {
  temple:  'bg-slate-700/20 text-slate-200 border-slate-500/30',
  museum:  'bg-blue-500/20 text-blue-200 border-blue-400/30',
  park:    'bg-emerald-500/20 text-emerald-200 border-emerald-400/30',
  gallery: 'bg-amber-500/20 text-amber-200 border-amber-400/30',
  market:  'bg-rose-500/20 text-rose-200 border-rose-400/30',
}

export default function PlaceCard({ place, size = 'normal' }) {
  const badge = categoryColors[place.category] ?? 'bg-white/20 text-white/80 border-white/20'
  const imgH = size === 'large' ? 'h-60' : 'h-52'

  return (
    <article
      className={`group relative block rounded-2xl overflow-hidden ${imgH}`}
    >
      {/* Image */}
      <img
        src={place.image}
        alt={place.nameEn}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />

      {/* Always-visible gradient at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Category badge — top left */}
      <span
        className={`absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm ${badge}`}
      >
        {place.category}
      </span>

      {/* Bottom content — slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out">
        <h3 className="text-white font-bold text-base leading-snug drop-shadow">
          {place.nameTh}
        </h3>
        <p className="text-white/60 text-xs mt-0.5 mb-2">{place.nameEn}</p>

        {/* Description — hidden until hover */}
        <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-400 ease-out">
          <p className="text-white/75 text-xs line-clamp-2 mb-2 leading-relaxed">
            {place.description}
          </p>
        </div>
      </div>

      {/* Hover ring */}
      <div className="absolute inset-0 rounded-2xl ring-2 ring-slate-500/0 group-hover:ring-slate-400/50 transition-all duration-300" />
    </article>
  )
}
