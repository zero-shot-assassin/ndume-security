import { Link } from 'react-router-dom'
import {
  Shield, Users, Eye, Car, Bell, ClipboardList, Camera, Lock,
  ChevronRight, Award, CheckCircle, Phone, Star, ArrowRight,
  Building2, Home as HomeIcon, ShoppingBag, HardHat, Landmark
} from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Manned Guarding',
    desc: 'Highly trained, licensed security officers deployed at your premises around the clock. Our guards are vetted, uniformed, and operationally briefed to your specific needs.',
  },
  {
    icon: Camera,
    title: 'CCTV Installation & Monitoring',
    desc: 'End-to-end CCTV solutions — from site survey to installation and 24/7 remote monitoring. HD cameras, NVR systems, and real-time alerts tailored for Kenyan environments.',
  },
  {
    icon: Car,
    title: 'Mobile Patrols',
    desc: 'Marked patrol vehicles conducting scheduled and random checks across your properties in Nairobi and surrounding counties, ensuring visible deterrence.',
  },
  {
    icon: Bell,
    title: 'Alarm Response',
    desc: 'Industry-leading response times to triggered alarms. Our armed response units are strategically positioned across Nairobi for rapid dispatch.',
  },
  {
    icon: ClipboardList,
    title: 'Risk Assessment',
    desc: 'Comprehensive security audits conducted by certified specialists. We identify vulnerabilities and deliver actionable mitigation strategies.',
  },
  {
    icon: Lock,
    title: 'Access Control Systems',
    desc: 'Biometric readers, key card systems, and smart gate solutions — controlling who enters your facility and maintaining a full audit trail.',
  },
]

const stats = [
  { value: '16+', label: 'Years in Operation' },
  { value: '500+', label: 'Trained Officers' },
  { value: '300+', label: 'Clients Served' },
  { value: '24/7', label: 'Operational Cover' },
]

const testimonials = [
  {
    name: 'James Kariuki',
    title: 'Head of Operations, Equity Group Holdings',
    text: 'Ndume Security has been our trusted partner for over five years. Their officers are professional, disciplined, and always responsive. They understand corporate environments and act accordingly.',
    rating: 5,
  },
  {
    name: 'Amina Osman',
    title: 'Property Manager, Riviera Residences Kilimani',
    text: 'The peace of mind we have had since engaging Ndume is unmatched. Their patrols are consistent, their guards are courteous to residents, and their response time is exceptional.',
    rating: 5,
  },
  {
    name: 'Peter Njoroge',
    title: 'Site Manager, Axis Construction Ltd',
    text: 'Construction sites are high-risk environments. Ndume Security provided a tailored solution that drastically reduced our material losses and unauthorized access incidents.',
    rating: 5,
  },
]

const industries = [
  { icon: Building2, label: 'Corporate' },
  { icon: HomeIcon, label: 'Residential' },
  { icon: ShoppingBag, label: 'Retail' },
  { icon: HardHat, label: 'Construction' },
  { icon: Landmark, label: 'Government' },
]

const certifications = [
  'PSRA Licensed – Private Security Regulatory Authority',
  'KAM Member – Kenya Association of Manufacturers',
  'ISO 9001:2015 Quality Management Certified',
  'G4S-Trained Tactical Response Personnel',
]

const faqs = [
  {
    q: 'How quickly can Ndume Security deploy officers to my site?',
    a: 'For standard contracts, we deploy within 48–72 hours of contract signing. For emergency situations, we can deploy within 24 hours subject to availability.',
  },
  {
    q: 'Are your security officers licensed by PSRA?',
    a: 'Yes. All Ndume Security officers hold valid PSRA licences and undergo background checks, vetting, and refresher training every six months as required by Kenyan law.',
  },
  {
    q: 'Do you provide armed security?',
    a: 'Yes. We provide licensed armed response and armed escort services in compliance with the Firearms Act (Cap. 114) of Kenya. All armed officers are certified by the relevant authorities.',
  },
  {
    q: 'What counties do you operate in?',
    a: 'Our primary operations cover Nairobi, Kiambu, Machakos, Kajiado, and Nakuru counties. We can deploy to other counties upon request for contract clients.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Contact us via phone, email, or our online quote request form. One of our security consultants will conduct a site survey (at no charge) and provide a tailored proposal within 48 hours.',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(6,13,33,0.88), rgba(6,13,33,0.80)), url('https://images.pexels.com/photos/7714695/pexels-photo-7714695.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1')`,
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-32 pb-20">
          <div className="animate-fade-in-down inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <Shield size={14} />
            PSRA Licensed · Kenya Registered · Since 2008
          </div>
          <h1 className="animate-fade-in-up animation-delay-200 font-heading font-extrabold text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Guarding What
            <span className="text-gold-400 block">Matters Most.</span>
          </h1>
          <p className="animate-fade-in-up animation-delay-400 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Ndume Security is Kenya's foremost private security company. We protect corporations, residences, and government facilities with elite officers, cutting-edge technology, and unwavering commitment.
          </p>
          <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-4 rounded text-sm tracking-wide uppercase transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Request a Free Quote <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white/40 text-white hover:border-gold-400 hover:text-gold-400 font-bold px-8 py-4 rounded text-sm tracking-wide uppercase transition-colors duration-200"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-navy-900/90 backdrop-blur-sm border-t border-navy-700">
          <div className="max-w-5xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading font-extrabold text-gold-400 text-3xl">{s.value}</div>
                <div className="text-gray-400 text-xs uppercase tracking-wide mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="bg-navy-800 py-5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {certifications.map((c) => (
              <div key={c} className="flex items-center gap-2 text-gray-400 text-xs">
                <CheckCircle size={14} className="text-gold-500 shrink-0" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="reveal text-center mb-14">
            <p className="text-gold-600 font-semibold uppercase tracking-widest text-sm mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800 mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From physical guards to intelligent surveillance systems, Ndume Security delivers end-to-end protection designed for the Kenyan business landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="reveal bg-white rounded-xl p-7 shadow-md hover:shadow-xl border border-gray-100 hover:border-gold-300 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-navy-800 group-hover:bg-gold-500 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon size={22} className="text-gold-400 group-hover:text-navy-900 transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-navy-800 text-lg mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <Link
                    to="/services"
                    className="text-gold-600 hover:text-gold-700 text-sm font-semibold flex items-center gap-1 transition-colors"
                  >
                    Learn More <ChevronRight size={15} />
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white font-bold px-8 py-3.5 rounded text-sm tracking-wide uppercase transition-all duration-200"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY NDUME */}
      <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Shield size={600} className="absolute -right-40 -top-40 text-gold-400" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left">
              <p className="text-gold-500 font-semibold uppercase tracking-widest text-sm mb-3">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Security You Can Rely On — Day and Night
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Since 2008, Ndume Security has been the choice of Kenya's leading corporations, embassies, residential estates, and government agencies. We combine disciplined human capital with advanced technology to deliver security outcomes that matter.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Fully Vetted Officers', desc: 'Every officer undergoes criminal background checks, psychometric testing, and at least 240 hours of PSRA-certified training.' },
                  { title: 'Technology-Backed Operations', desc: 'Our command centre in Westlands, Nairobi runs 24/7 CCTV monitoring, GPS patrol tracking, and real-time incident reporting.' },
                  { title: 'Local Expertise', desc: 'We understand Kenya\'s unique security landscape — from CBD operations to Karen estates and industrial park challenges in Athi River.' },
                  { title: 'Rapid Emergency Response', desc: 'Our armed response units are deployed strategically across Nairobi for average response times under 8 minutes.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <CheckCircle size={20} className="text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-7 py-3.5 rounded text-sm tracking-wide uppercase transition-colors"
              >
                Our Story <ArrowRight size={16} />
              </Link>
            </div>
            <div className="reveal-right relative">
              <img
                src="https://images.pexels.com/photos/7714710/pexels-photo-7714710.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Professional security team"
                className="rounded-2xl w-full object-cover h-[420px] shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold-500 text-navy-900 rounded-xl p-5 shadow-xl">
                <div className="font-heading font-extrabold text-4xl">8 min</div>
                <div className="font-semibold text-sm">Avg. Alarm Response<br/>Time in Nairobi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold-600 font-semibold uppercase tracking-widest text-sm mb-2">Sectors We Protect</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800 mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We provide sector-specific security strategies tailored to the operational demands of each industry.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {industries.map(({ icon: Icon, label }) => (
              <Link
                key={label}
                to="/industries"
                className="flex flex-col items-center gap-3 w-36 bg-gray-50 hover:bg-navy-800 border border-gray-200 hover:border-navy-800 rounded-xl py-7 px-4 text-center transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-navy-100 group-hover:bg-gold-500 flex items-center justify-center transition-colors">
                  <Icon size={22} className="text-navy-700 group-hover:text-navy-900 transition-colors" />
                </div>
                <span className="font-semibold text-navy-800 group-hover:text-white text-sm transition-colors">{label}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/industries"
              className="text-gold-600 hover:text-gold-700 font-semibold text-sm inline-flex items-center gap-1"
            >
              Explore All Industries <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="reveal text-center mb-14">
            <p className="text-gold-600 font-semibold uppercase tracking-widest text-sm mb-2">Client Feedback</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800">
              Trusted by Kenya's Best
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="reveal bg-white rounded-xl p-7 shadow-md border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-navy-800 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold-600 font-semibold uppercase tracking-widest text-sm mb-2">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex justify-between items-center cursor-pointer px-6 py-5 font-semibold text-navy-800 hover:text-gold-600 transition-colors list-none">
                  {faq.q}
                  <ChevronRight
                    size={18}
                    className="text-gold-500 group-open:rotate-90 transition-transform duration-200 shrink-0"
                  />
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(6,13,33,0.92), rgba(6,13,33,0.92)), url('https://images.pexels.com/photos/7714723/pexels-photo-7714723.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1')`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Award size={40} className="text-gold-500 mx-auto mb-5" />
          <h2 className="font-heading font-extrabold text-white text-3xl md:text-5xl mb-5">
            Ready to Secure Your Premises?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Speak with one of our security consultants today. Free site survey, no obligation. We'll design a security plan built around your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-10 py-4 rounded text-sm tracking-wide uppercase transition-colors flex items-center justify-center gap-2"
            >
              Request a Free Quote <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+254700123456"
              className="border-2 border-white/40 hover:border-gold-400 text-white hover:text-gold-400 font-bold px-10 py-4 rounded text-sm tracking-wide uppercase transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={16} /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
