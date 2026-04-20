import { Link } from 'react-router-dom'
import {
  Users, Camera, Car, Bell, ClipboardList, Lock, Eye,
  CheckCircle, ArrowRight, Phone, Shield
} from 'lucide-react'

const services = [
  {
    id: 'manned-guarding',
    icon: Users,
    title: 'Manned Guarding',
    tagline: 'Disciplined. Visible. Effective.',
    description: `Our manned guarding service forms the cornerstone of physical security at your premises. Every Ndume Security officer is carefully selected, thoroughly vetted through criminal background checks, and trained to a minimum of 240 hours at our PSRA-accredited training facility.

Officers are deployed in full Ndume uniform, equipped with radios, incident report pads, and clearly defined post orders tailored to your site. We conduct regular supervisory visits — both scheduled and unannounced — to maintain standards and accountability.`,
    features: [
      'PSRA-licensed officers with full vetting documentation',
      'Customised post orders for each deployment',
      'Uniformed day and night shifts — 8-hour or 12-hour rotations',
      'Dedicated supervisor assigned to every contract',
      'Monthly client performance reports',
      'Available for single-site or multi-site contracts',
    ],
    suitable: 'Corporate offices, banks, hospitals, factories, retail outlets, embassies, and residential estates.',
  },
  {
    id: 'cctv',
    icon: Camera,
    title: 'CCTV Installation & Monitoring',
    tagline: 'See Everything. Miss Nothing.',
    description: `Ndume Security's technology division delivers complete CCTV solutions from initial site survey to commissioning and ongoing 24/7 remote monitoring. We work with leading brands including Hikvision, Dahua, and Bosch, deploying HD and 4K cameras, PTZ units, thermal imaging devices, and AI-powered analytics systems.

Our monitoring command centre in Westlands, Nairobi is staffed around the clock by trained surveillance operators who respond to alerts in real time, escalating incidents to on-ground teams or Kenya Police Service as required.`,
    features: [
      'Free site survey and system design',
      'HD/4K cameras including outdoor weatherproof units',
      'PTZ and AI-analytics capable systems',
      'Cloud and local NVR storage options',
      '24/7 remote monitoring from our Nairobi command centre',
      'SMS and email real-time alert notifications',
      'Monthly footage audit reports',
    ],
    suitable: 'Retail stores, warehouses, apartment blocks, schools, petrol stations, banks, and construction sites.',
  },
  {
    id: 'mobile-patrols',
    icon: Car,
    title: 'Mobile Patrols',
    tagline: 'Constant Presence. Unpredictable Routes.',
    description: `Our mobile patrol service provides a visible, deterrent security presence across your property or across multiple sites without the cost of full-time stationed guards. Our clearly marked Ndume Security patrol vehicles conduct both scheduled and randomised visits, ensuring that no pattern can be anticipated by potential intruders.

Officers complete written patrol reports at each visit, which are compiled and shared with clients digitally through our client portal. GPS-tracked vehicles ensure accountability and verifiable patrol records.`,
    features: [
      'Fleet of GPS-tracked, branded patrol vehicles',
      'Scheduled and randomised patrol routes',
      'Written and digital patrol reports per visit',
      'Access to armed response vehicle if triggered',
      'Coverage across Nairobi, Kiambu, Machakos, and Kajiado',
      'Available as standalone service or complement to guarding',
    ],
    suitable: 'Industrial parks, agricultural properties, construction sites, residential clusters, and commercial strips.',
  },
  {
    id: 'alarm-response',
    icon: Bell,
    title: 'Alarm Response',
    tagline: 'Fast. Armed. Reliable.',
    description: `When your alarm activates — whether from intruder detection, panic button, or perimeter breach — Ndume's armed response team is dispatched immediately. Our units are strategically positioned across Nairobi for maximum coverage and minimum response time.

We work with all major alarm panel brands including Texecom, DSC, and Paradox, and can integrate our monitoring with your existing alarm infrastructure. Licensed firearms are carried by all armed response officers in compliance with the Firearms Act (Cap. 114) of Kenya.`,
    features: [
      'Average response time under 8 minutes in Nairobi',
      'Licensed armed response officers',
      'Integration with all major alarm panel brands',
      '24/7 monitoring desk linked to response fleet',
      'Panic button response for personal and vehicle alarms',
      'Incident report submitted within 2 hours of every response',
    ],
    suitable: 'Residences, SME offices, retail outlets, pharmacies, and any CCTV or alarm-monitored property.',
  },
  {
    id: 'risk-assessment',
    icon: ClipboardList,
    title: 'Risk Assessment',
    tagline: 'Know Your Vulnerabilities Before Threats Do.',
    description: `A thorough risk assessment is the foundation of any effective security strategy. Ndume Security's certified security consultants conduct comprehensive physical and operational security audits of your premises, identifying vulnerabilities in access control, perimeter security, lighting, CCTV coverage, staffing, and emergency response protocols.

The deliverable is a detailed Security Risk Assessment Report with prioritised, costed recommendations — giving you the intelligence to invest in the right security measures, not just more of them.`,
    features: [
      'Physical security inspection of entire premises',
      'Threat and vulnerability analysis against local risk profile',
      'CCTV and access control gap analysis',
      'Emergency response and evacuation procedure review',
      'Written report with prioritised, costed recommendations',
      'Follow-up consultation to implement findings',
    ],
    suitable: 'New businesses setting up in Kenya, organisations post-incident, large estates, schools, NGOs, and embassies.',
  },
  {
    id: 'event-security',
    icon: Eye,
    title: 'Event Security',
    tagline: 'Zero Incidents. Total Confidence.',
    description: `From corporate galas at Nairobi's five-star hotels to public concerts at KICC, Ndume Security has the experience and manpower to keep your event safe. We provide a fully integrated event security solution that begins with pre-event risk planning and ends with post-event incident reporting.

Our event security teams are specifically trained in crowd management, access control, VIP close protection, and emergency evacuation procedures. We liaise directly with Kenya Police and venue management to ensure a coordinated, seamless operation.`,
    features: [
      'Pre-event security planning and site recce',
      'Uniformed and plain-clothes event officers',
      'Perimeter control and guest screening',
      'VIP and dignitary close protection',
      'Coordination with Kenya Police Service',
      'Post-event security debrief and incident report',
    ],
    suitable: 'Corporate events, wedding receptions, concerts, public rallies, product launches, diplomatic functions.',
  },
  {
    id: 'access-control',
    icon: Lock,
    title: 'Access Control Systems',
    tagline: 'Control Who Enters. Know Who Was There.',
    description: `Ndume Security designs and installs professional access control systems that manage and restrict entry to your facilities with precision. From basic key card readers to biometric fingerprint systems and IP-based smart locks, we deploy solutions scaled to your organisation's size and security requirements.

All systems generate detailed access logs accessible through a web dashboard — giving you a real-time and historical record of every entry and exit. Integration with CCTV and alarm systems is standard in all our installations.`,
    features: [
      'Biometric fingerprint and facial recognition readers',
      'Proximity card and PIN access systems',
      'Boom barrier and turnstile installation',
      'Intercom and video door phone systems',
      'Access log dashboard — web and mobile accessible',
      'Integration with CCTV and alarm infrastructure',
    ],
    suitable: 'Office buildings, factories, server rooms, hospitals, schools, apartment complexes, and gated communities.',
  },
]

export default function Services() {
  return (
    <>
      {/* PAGE HEADER */}
      <section
        className="pt-40 pb-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(6,13,33,0.92), rgba(6,13,33,0.88)), url('https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1600&q=80')`,
        }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gold-400 font-semibold uppercase tracking-widest text-sm mb-3">What We Offer</p>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-6xl mb-5">
            Our Security Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Seven specialist service lines designed to protect what matters most — your people, your assets, and your peace of mind.
          </p>
        </div>
      </section>

      {/* SERVICES NAV */}
      <section className="bg-navy-800 sticky top-[73px] z-40 border-b border-navy-700 hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-0 overflow-x-auto">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-gray-400 hover:text-gold-400 text-xs font-medium px-5 py-3.5 whitespace-nowrap border-b-2 border-transparent hover:border-gold-500 transition-all duration-200"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL SECTIONS */}
      <div className="bg-white">
        {services.map((service, idx) => {
          const Icon = service.icon
          const isEven = idx % 2 === 0
          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-20 ${isEven ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center shrink-0">
                        <Icon size={22} className="text-gold-400" />
                      </div>
                      <div>
                        <p className="text-gold-600 font-semibold text-xs uppercase tracking-widest">{service.tagline}</p>
                        <h2 className="font-heading font-bold text-navy-800 text-2xl md:text-3xl">{service.title}</h2>
                      </div>
                    </div>
                    <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-7">
                      {service.description.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                    <div className="bg-navy-50 border-l-4 border-gold-500 rounded-r-lg p-4 mb-7">
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Best suited for:</p>
                      <p className="text-gray-700 text-sm">{service.suitable}</p>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-900 font-bold px-7 py-3 rounded text-sm tracking-wide uppercase transition-all duration-200"
                    >
                      Enquire About This Service <ArrowRight size={15} />
                    </Link>
                  </div>

                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="bg-navy-900 rounded-2xl p-7 text-white">
                      <h4 className="font-heading font-bold text-gold-400 text-sm uppercase tracking-widest mb-5">
                        Key Features
                      </h4>
                      <ul className="space-y-3.5">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                            <CheckCircle size={16} className="text-gold-500 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 pt-6 border-t border-navy-700">
                        <p className="text-gray-400 text-xs mb-3">Speak to a security consultant</p>
                        <a
                          href="tel:+254700123456"
                          className="flex items-center gap-2 text-gold-400 hover:text-gold-300 font-bold text-lg transition-colors"
                        >
                          <Phone size={18} /> +254 700 123 456
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* PROCESS */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold-500 font-semibold uppercase tracking-widest text-sm mb-2">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Our Engagement Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Contact us to discuss your security needs. We listen, ask the right questions, and schedule a site visit.' },
              { step: '02', title: 'Site Assessment', desc: 'Our consultant conducts a free physical security survey of your premises at no charge or obligation.' },
              { step: '03', title: 'Custom Proposal', desc: 'Within 48 hours, we deliver a tailored security plan with transparent pricing in Kenyan Shillings.' },
              { step: '04', title: 'Deployment', desc: 'Upon contract execution, we deploy within the agreed timeline — typically 48–72 hours for standard contracts.' },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-16 h-16 bg-gold-500 text-navy-900 rounded-full flex items-center justify-center font-heading font-extrabold text-xl mx-auto mb-4 shadow-lg">
                  {p.step}
                </div>
                <h4 className="font-heading font-bold text-white mb-2">{p.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold-500 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Shield size={36} className="text-navy-900 mx-auto mb-4" />
          <h2 className="font-heading font-extrabold text-navy-900 text-3xl mb-4">
            Get a Tailored Security Quote
          </h2>
          <p className="text-navy-700 mb-8">
            Free site survey. No obligation. Proposals in Kenyan Shillings within 48 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-700 text-white font-bold px-10 py-4 rounded text-sm tracking-wide uppercase transition-colors"
          >
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
