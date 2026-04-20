import { Link } from 'react-router-dom'
import { Shield, ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 bg-gold-500/20 border border-gold-500/40 rounded-full flex items-center justify-center mx-auto mb-6">
          <Shield size={36} className="text-gold-400" />
        </div>
        <p className="text-gold-500 font-semibold uppercase tracking-widest text-sm mb-3">Error 404</p>
        <h1 className="font-heading font-extrabold text-white text-4xl md:text-5xl mb-4 leading-tight">
          Page Not Found
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          The page you are looking for has been moved, removed, or does not exist. Let us help you find your way back.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-3.5 rounded text-sm tracking-wide uppercase transition-colors"
          >
            <Home size={16} /> Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-gold-400 text-white hover:text-gold-400 font-bold px-8 py-3.5 rounded text-sm tracking-wide uppercase transition-colors"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
