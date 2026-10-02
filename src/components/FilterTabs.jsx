export default function FilterTabs({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onChange(cat.key)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
            active === cat.key
              ? 'bg-slate-800 text-white shadow-sm shadow-slate-200'
              : 'bg-gray-100 text-gray-500 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          {cat.labelEn}
        </button>
      ))}
    </div>
  )
}
