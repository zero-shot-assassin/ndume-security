import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Shield } from 'lucide-react'

const services = [
  'Manned Guarding',
  'CCTV Installation & Monitoring',
  'Mobile Patrols',
  'Alarm Response',
  'Risk Assessment',
  'Event Security',
  'Access Control Systems',
  'Other',
]

export default function Contact() {
  const [quoteForm, setQuoteForm] = useState({
    name: '', company: '', phone: '', email: '', service: '', locations: '', message: '',
  })
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [quoteSubmitted, setQuoteSubmitted] = useState(false)
  const [contactSubmitted, setContactSubmitted] = useState(false)

  const handleQuote = (e) => {
    e.preventDefault()
    setQuoteSubmitted(true)
  }

  const handleContact = (e) => {
    e.preventDefault()
    setContactSubmitted(true)
  }

  return (
    <>
      {/* PAGE HEADER */}
      <section
        className="pt-40 pb-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(6,13,33,0.90), rgba(6,13,33,0.85)), url('https://images.pexels.com/photos/7714695/pexels-photo-7714695.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1')`,
        }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gold-400 font-semibold uppercase tracking-widest text-sm mb-3">Reach Us</p>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-6xl mb-5">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Our team is available 24 hours a day, 7 days a week. For emergencies, call our operations line immediately.
          </p>
        </div>
      </section>

      {/* CONTACT INFO STRIP */}
      <section className="bg-navy-800 py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Phone,
              label: '24/7 Emergency',
              value: '+254 725 290 785',
              link: 'tel:+254725290785',
            },
            {
              icon: Phone,
              label: 'Office Line',
              value: '+254 733 456 789',
              link: 'tel:+254733456789',
            },
            {
              icon: Mail,
              label: 'Email',
              value: 'info@ndumesecurity.co.ke',
              link: 'mailto:info@ndumesecurity.co.ke',
            },
            {
              icon: Clock,
              label: 'Office Hours',
              value: 'Mon–Fri: 8am – 6pm',
              link: null,
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-navy-900" />
                </div>
                <div>
                  <p className="text-gold-400 text-xs font-semibold uppercase tracking-wide">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="text-white font-semibold text-sm hover:text-gold-400 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-semibold text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* FORMS + INFO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-14">

          {/* QUOTE FORM */}
          <div className="lg:col-span-3">
            <p className="text-gold-600 font-semibold uppercase tracking-widest text-sm mb-2">Free of Charge</p>
            <h2 className="text-3xl font-heading font-bold text-navy-800 mb-2">Request a Security Quote</h2>
            <p className="text-gray-600 text-sm mb-8">
              Fill in your details below. One of our consultants will contact you within 4 business hours to arrange a free site survey and tailor a security proposal.
            </p>

            {quoteSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="font-heading font-bold text-green-800 text-xl mb-2">Quote Request Received!</h3>
                <p className="text-green-700 text-sm">
                  Thank you for your inquiry. A Ndume Security consultant will reach you within 4 business hours. For urgent matters, call <a href="tel:+254725290785" className="font-bold underline">+254 725 290 785</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuote} className="bg-white rounded-2xl shadow-lg p-8 space-y-5 border border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                      placeholder="e.g. James Kariuki"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                      Company / Organisation
                    </label>
                    <input
                      type="text"
                      value={quoteForm.company}
                      onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                      placeholder="e.g. Equity Group Holdings"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={quoteForm.phone}
                      onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                      placeholder="+254 7XX XXX XXX"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                      placeholder="you@company.co.ke"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                    Service Required *
                  </label>
                  <select
                    required
                    value={quoteForm.service}
                    onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition bg-white"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                    Site / Location(s)
                  </label>
                  <input
                    type="text"
                    value={quoteForm.locations}
                    onChange={(e) => setQuoteForm({ ...quoteForm, locations: e.target.value })}
                    placeholder="e.g. Westlands, Nairobi – 3 floors, 200 staff"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    rows={4}
                    value={quoteForm.message}
                    onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                    placeholder="Describe your security requirements, number of guards needed, shift hours, or any specific concerns..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3.5 rounded-lg text-sm tracking-wide uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Submit Quote Request
                </button>

                <p className="text-gray-400 text-xs text-center">
                  By submitting this form, you consent to Ndume Security contacting you regarding your inquiry. We do not share your data with third parties.
                </p>
              </form>
            )}
          </div>

          {/* CONTACT INFO SIDEBAR */}
          <div className="lg:col-span-2 space-y-6">
            {/* Office Info */}
            <div className="bg-navy-900 rounded-2xl p-7 text-white">
              <Shield size={28} className="text-gold-400 mb-4" />
              <h3 className="font-heading font-bold text-xl mb-4">Nairobi Head Office</h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <MapPin size={16} className="text-gold-500 shrink-0 mt-0.5" />
                  <div className="text-gray-300">
                    7th Floor, Westlands Commerce Centre<br />
                    Waiyaki Way, Westlands<br />
                    P.O. Box 47213-00100<br />
                    Nairobi, Kenya
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone size={16} className="text-gold-500 shrink-0" />
                  <div>
                    <a href="tel:+254700123456" className="text-gray-300 hover:text-gold-400 transition-colors block">+254 700 123 456 (24/7 Emergency)</a>
                    <a href="tel:+254733456789" className="text-gray-300 hover:text-gold-400 transition-colors block">+254 733 456 789 (Office)</a>
                    <a href="tel:+254202345678" className="text-gray-300 hover:text-gold-400 transition-colors block">+254 20 234 5678 (Landline)</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail size={16} className="text-gold-500 shrink-0" />
                  <div>
                    <a href="mailto:info@ndumesecurity.co.ke" className="text-gray-300 hover:text-gold-400 transition-colors block">info@ndumesecurity.co.ke</a>
                    <a href="mailto:quotes@ndumesecurity.co.ke" className="text-gray-300 hover:text-gold-400 transition-colors block">quotes@ndumesecurity.co.ke</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock size={16} className="text-gold-500 shrink-0" />
                  <div className="text-gray-300">
                    <div>Mon – Fri: 8:00am – 6:00pm</div>
                    <div>Saturday: 9:00am – 1:00pm</div>
                    <div className="text-gold-400 font-semibold mt-1">Operations: 24/7/365</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Contact Form */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-7">
              <h3 className="font-heading font-bold text-navy-800 text-lg mb-4">Quick Message</h3>
              {contactSubmitted ? (
                <div className="text-center py-4">
                  <CheckCircle size={36} className="text-green-500 mx-auto mb-3" />
                  <p className="text-green-700 font-semibold text-sm">Message sent! We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleContact} className="space-y-4">
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Your Name *"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
                  />
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="Email Address *"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
                  />
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    placeholder="+254 7XX XXX XXX"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
                  />
                  <textarea
                    rows={3}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Your message... *"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-navy-900 hover:bg-navy-700 text-white font-bold py-3 rounded-lg text-sm tracking-wide uppercase transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={14} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-0">
        <div className="w-full h-[400px]">
          <iframe
            title="Ndume Security Nairobi Office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8208286012977!2d36.80147031475396!3d-1.2676869990699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0x7d3c93c5c7dc4f77!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1699000000000!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}
