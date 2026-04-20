import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Shield, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const isActive = (path) =>
    location.pathname === path ? 'text-gold-400' : 'text-gray-200 hover:text-gold-400'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-navy-900 shadow-2xl' : 'bg-navy-900/95'
      }`}
    >
      {/* Top bar */}
      <div className="bg-navy-700 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center text-xs text-gray-300">
          <span>Licenced by the Private Security Regulatory Authority (PSRA) – Kenya</span>
          <a href="tel:+254725290785" className="flex items-center gap-1 hover:text-gold-400 transition-colors">
            <Phone size={12} />
            <span>24/7 Emergency: +254 725 290 785</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-gold-500 rounded-lg p-1.5 group-hover:bg-gold-400 transition-colors">
            <Shield size={22} className="text-navy-900" strokeWidth={2.5} />
          </div>
          <div className="leading-none">
            <span className="font-heading font-extrabold text-white text-xl tracking-tight block">
              NDUME
            </span>
            <span className="text-gold-500 text-[10px] font-semibold tracking-[0.2em] uppercase block -mt-0.5">
              SECURITY
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${isActive(link.path)} font-medium text-sm tracking-wide transition-colors duration-200`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-5 py-2.5 rounded text-sm tracking-wide uppercase transition-colors duration-200"
          >
            Get a Quote
          </Link>
          <button
            className="lg:hidden text-white hover:text-gold-400 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-navy-800 border-t border-navy-600 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${isActive(link.path)} py-3 px-2 text-sm font-medium border-b border-navy-700 last:border-0 transition-colors`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-3 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-5 py-3 rounded text-sm tracking-wide uppercase text-center transition-colors"
            >
              Get a Quote
            </Link>
          </nav>
          <div className="mt-4 pt-4 border-t border-navy-700 text-gray-400 text-xs">
            <a href="tel:+254725290785" className="flex items-center gap-2 hover:text-gold-400">
              <Phone size={13} /> 24/7 Emergency: +254 725 290 785
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
