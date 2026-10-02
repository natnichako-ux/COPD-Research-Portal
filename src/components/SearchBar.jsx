import { useState, useEffect, useRef } from 'react'
import { suggest, findAddressCandidates } from '../lib/arcgisGeocode'

export default function SearchBar({ value, onChange, placeholder = 'Search...' }) {
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)
  const containerRef = useRef()
  const apiKey = import.meta.env.VITE_ARCGIS_API_KEY

  useEffect(() => {
    if (!value || value.length < 2) {
      setItems([])
      return
    }

    let active = true
    const t = setTimeout(async () => {
      const s = await suggest(value, apiKey, 6)
      if (active) {
        setItems(s)
        setOpen(s.length > 0)
      }
    }, 250)

    return () => {
      active = false
      clearTimeout(t)
    }
  }, [value])

  useEffect(() => {
    function onDoc(e) {
      if (!containerRef.current) return
      if (!containerRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  async function selectSuggestion(sug) {
    const candidates = await findAddressCandidates(sug.text, apiKey, 1)
    if (candidates && candidates.length > 0) {
      const c = candidates[0]
      // dispatch global event for map to listen
      window.dispatchEvent(new CustomEvent('arcgis:goto', { detail: { lon: c.location.x, lat: c.location.y, text: c.address || c.attributes?.Match_addr } }))
      onChange && onChange(c.address || sug.text)
      setOpen(false)
      setItems([])
    }
  }

  return (
    <div className="relative" ref={containerRef}>
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
        onFocus={() => setOpen(items.length > 0)}
      />

      {open && items.length > 0 && (
        <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-sm z-50 max-h-60 overflow-auto">
          {items.map((it) => (
            <li
              key={it.magicKey || it.text}
              onClick={() => selectSuggestion(it)}
              className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {it.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
