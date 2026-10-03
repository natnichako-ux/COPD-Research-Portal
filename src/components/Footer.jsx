import { Link } from 'react-router-dom'
import { site } from '../data/site'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/cultural-sites', label: 'Cultural Sites' },
  { to: '/traditions', label: 'Traditions' },
  { to: '/festivals', label: 'Festivals' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-24">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
              <span className="text-white text-xs font-bold">Geo</span>
            </div>
            <span className="font-bold text-white">{site.brandName}</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">{site.nameTh}</p>
          <p className="text-gray-500 text-xs leading-relaxed">{site.address}</p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-[11px] font-bold tracking-[3px] uppercase text-gray-500 mb-4">Navigation</p>
          <ul className="space-y-2.5">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[11px] font-bold tracking-[3px] uppercase text-gray-500 mb-4">Contact</p>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {site.phone}
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {site.email}
            </li>
          </ul>
          <div className="flex gap-3 mt-6">
            {[
              { href: site.social.facebook, label: 'FB' },
              { href: site.social.line,     label: 'LINE' },
              { href: site.social.youtube,  label: 'YT' },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-[10px] font-bold text-gray-400 hover:border-slate-400 hover:text-slate-300 transition-all duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-5 text-gray-600 text-xs">
        © {new Date().getFullYear()} {site.nameTh}. All rights reserved.
      </div>
    </footer>
  )
}
