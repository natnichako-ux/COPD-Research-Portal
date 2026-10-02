import { useEffect } from 'react'

const itemId = 'dd4b2f25487d4a37a45093ba6acd026d'
const mapLink = `https://www.arcgis.com/home/item.html?id=${itemId}`

export default function MapSection() {
  useEffect(() => {
    if (!document.querySelector('script[data-arcgis-sdk]')) {
      const script = document.createElement('script')
      script.type = 'module'
      script.src = 'https://js.arcgis.com/5.0/'
      script.dataset.arcgisSdk = 'true'
      document.body.appendChild(script)
    }
  }, [])

  useEffect(() => {
    let mounted = true
    async function onGoto(e) {
      const { lon, lat } = e.detail || {}
      if (typeof lon !== 'number' || typeof lat !== 'number') return

      // wait for SDK to load
      if (!window.$arcgis) {
        await new Promise((res) => {
          const s = document.querySelector('script[data-arcgis-sdk]')
          if (!s) return res()
          s.addEventListener('load', res)
        })
      }

      const viewElement = document.querySelector('arcgis-map')
      if (!viewElement) return

      const Graphic = await window.$arcgis.import("@arcgis/core/Graphic.js")
      const Point = await window.$arcgis.import("@arcgis/core/geometry/Point.js")
      const SimpleMarkerSymbol = await window.$arcgis.import("@arcgis/core/symbols/SimpleMarkerSymbol.js")
      const SimpleLineSymbol = await window.$arcgis.import("@arcgis/core/symbols/SimpleLineSymbol.js")

      const point = new Point({ longitude: lon, latitude: lat })
      const outline = new SimpleLineSymbol({ color: 'white', width: 2 })
      const symbol = new SimpleMarkerSymbol({ style: 'circle', size: 14, color: '#ff4d4f', outline })
      const graphic = new Graphic({ geometry: point, symbol })

      // clear previous graphics and add new
      try {
        viewElement.graphics.removeAll && viewElement.graphics.removeAll()
        viewElement.graphics.add && viewElement.graphics.add(graphic)
      } catch (err) {
        // ignore
      }

      // set center/zoom
      try {
        viewElement.center = { longitude: lon, latitude: lat }
        viewElement.zoom = 15
      } catch (err) {}
    }

    window.addEventListener('arcgis:goto', onGoto)
    return () => {
      mounted = false
      window.removeEventListener('arcgis:goto', onGoto)
    }
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl shadow-slate-900/10 h-[90vh] min-h-[560px]">
        <arcgis-map className="absolute inset-0 w-full h-full" item-id={itemId}>
          <arcgis-zoom slot="top-left"></arcgis-zoom>
          <arcgis-search slot="top-right"></arcgis-search>
          <arcgis-expand slot="bottom-left">
            <arcgis-legend></arcgis-legend>
          </arcgis-expand>
        </arcgis-map>

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-x-0 top-0 px-6 pt-8">
          <div className="max-w-7xl mx-auto flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-px bg-white/70" />
                <p className="text-white/80 text-[11px] font-bold tracking-[3px] uppercase">Product</p>
              </div>
              <h2
                className="text-3xl font-bold text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Wheat production - 1997 to 2024
              </h2>
            </div>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 shrink-0 ml-6"
            >
              View in ArcGIS
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <p className="absolute right-6 bottom-4 text-white/70 text-xs">
          © ArcGIS
        </p>
      </div>
    </section>
  )
}
