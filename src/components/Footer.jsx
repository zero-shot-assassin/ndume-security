import { Link } from 'react-router-dom'
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const services = [
  'Manned Guarding',
  'Event Security',
  'Mobile Patrols',
  'Alarm Response',
  'Risk Assessment',
  'CCTV Installation & Monitoring',
  'Access Control Systems',
]

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4 group">
            <div className="bg-gold-500 rounded-lg p-1.5">
              <Shield size={20} className="text-navy-900" strokeWidth={2.5} />
            </div>
            <div className="leading-none">
              <span className="font-heading font-extrabold text-white text-lg tracking-tight block">NDUME</span>
              <span className="text-gold-500 text-[10px] font-semibold tracking-[0.2em] uppercase block">SECURITY</span>
            </div>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Kenya's most trusted private security partner. Protecting lives, assets, and business operations across Nairobi and beyond since 2008.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-navy-700 hover:bg-gold-500 flex items-center justify-center transition-colors duration-200"
              >
                <Icon size={15} className="text-white hover:text-navy-900" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5 border-b border-gold-500 pb-2 inline-block">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-gold-600">›</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5 border-b border-gold-500 pb-2 inline-block">
            Our Services
          </h4>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s}>
                <Link
                  to="/services"
                  className="text-sm text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-gold-600">›</span> {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5 border-b border-gold-500 pb-2 inline-block">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex gap-3">
              <MapPin size={16} className="text-gold-500 shrink-0 mt-0.5" />
              <span>7th Floor, Westlands Commerce Centre,<br />Waiyaki Way, Westlands,<br />Nairobi, Kenya</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-gold-500 shrink-0" />
              <div>
                <a href="tel:+254700123456" className="hover:text-gold-400 transition-colors block">+254 700 123 456</a>
                <a href="tel:+254733456789" className="hover:text-gold-400 transition-colors block">+254 733 456 789</a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-gold-500 shrink-0" />
              <a href="mailto:info@ndumesecurity.co.ke" className="hover:text-gold-400 transition-colors">
                info@ndumesecurity.co.ke
              </a>
            </li>
          </ul>
          <div className="mt-5 bg-navy-700 rounded-lg p-3 text-xs text-gray-400">
            <span className="text-gold-400 font-semibold block mb-1">24/7 Emergency Line</span>
            <a href="tel:+254700123456" className="text-white font-bold text-lg hover:text-gold-400 transition-colors">
              +254 700 123 456
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Ndume Security Limited. All rights reserved.</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold-400 transition-colors">PSRA Licence No. PSRA/2008/0471</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
