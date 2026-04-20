import { Link } from 'react-router-dom'
import {
  Building2, Home, ShoppingBag, HardHat, Landmark,
  CheckCircle, ArrowRight, Shield
} from 'lucide-react'

const industries = [
  {
    id: 'corporate',
    icon: Building2,
    title: 'Corporate & Commercial',
    subtitle: 'Protecting Business Operations Across Nairobi',
    description: `Kenya's corporate sector operates in a high-stakes environment — from Upperhill's financial towers to Westlands' tech parks and the CBD's commercial corridors. Ndume Security provides integrated security solutions designed specifically for office buildings, financial institutions, tech companies, NGOs, and multinational corporations.

We understand that corporate security is not just about physical protection — it is about maintaining an environment where your people feel safe and your operations run without disruption. Our officers are trained in corporate etiquette and customer service alongside their security protocols.`,
    challenges: [
      'Tailgating and unauthorised access to restricted floors',
      'After-hours intrusion in commercial buildings',
      'Theft of IT equipment and sensitive documents',
      'Parking bay and vehicle security',
      'Workplace incident management and emergency response',
    ],
    solutions: [
      'Uniformed reception and access control officers',
      'Biometric and keycard access control installation',
      'CCTV monitoring of all common areas and entry points',
      'After-hours patrols and lock-up procedures',
      'Incident reporting and security audit trails',
    ],
    clients: 'Banks, law firms, NGOs, insurance companies, tech hubs, and multinational offices.',
    bgImage: 'https://images.pexels.com/photos/5466279/pexels-photo-5466279.jpeg?auto=compress&cs=tinysrgb&w=1200&h=700&dpr=1',
  },
  {
    id: 'residential',
    icon: Home,
    title: 'Residential Estates',
    subtitle: 'Keeping Families Safe in Gated Communities and Apartments',
    description: `From Karen's prestigious gated communities to Kileleshwa's apartment complexes, Ndume Security provides residential security services that give homeowners and tenants genuine peace of mind. We are trusted by some of Nairobi's most prominent residential estates.

Our residential security model combines stationed guards, mobile patrols, CCTV monitoring, and access control to create multiple layers of protection. We work closely with estate management committees and residents' associations to ensure our operations align with community expectations.`,
    challenges: [
      'Unauthorised entry through pedestrian gates',
      'Vehicle theft and carjacking attempts',
      'Domestic worker and contractor vetting',
      'Perimeter fence breaches',
      'Residential burglary and break-ins',
    ],
    solutions: [
      'Day and night stationed guards at all entry points',
      'Boom gate and visitor management systems',
      'Perimeter CCTV with night vision cameras',
      'Branded patrol vehicles for estate rounds',
      'Residents\' emergency panic response service',
    ],
    clients: 'Gated estates, apartment blocks, townhouse complexes, and high-net-worth private residences.',
    bgImage: 'https://images.pexels.com/photos/7714709/pexels-photo-7714709.jpeg?auto=compress&cs=tinysrgb&w=1200&h=700&dpr=1',
  },
  {
    id: 'retail',
    icon: ShoppingBag,
    title: 'Retail & Hospitality',
    subtitle: 'Loss Prevention and Customer Safety for Kenyan Businesses',
    description: `Nairobi's retail sector — from Westgate and Garden City to the countless standalone shops and supermarket chains across the city — faces persistent security challenges including shoplifting, internal theft, and increasingly sophisticated fraud. Ndume Security's retail specialists are trained in loss prevention, plainclothes surveillance, and customer de-escalation.

We strike the critical balance between visible deterrence and welcoming customer environments. Our officers enhance the shopping experience by being helpful, approachable, and professionally attentive.`,
    challenges: [
      'Shoplifting and organised retail crime',
      'Internal staff theft',
      'Cash handling and ATM security',
      'Crowd management during peak retail periods',
      'After-hours break-in prevention',
    ],
    solutions: [
      'Uniformed and plainclothes loss prevention officers',
      'CCTV system design and monitoring for retail layouts',
      'Cash escort and cash-in-transit liaison',
      'Staff security awareness training',
      'After-hours alarm response and locking services',
    ],
    clients: 'Supermarkets, shopping malls, hotels, restaurants, petrol stations, and fashion retail chains.',
    bgImage: 'https://images.pexels.com/photos/34345216/pexels-photo-34345216.jpeg?auto=compress&cs=tinysrgb&w=1200&h=700&dpr=1',
  },
  {
    id: 'construction',
    icon: HardHat,
    title: 'Construction & Industrial',
    subtitle: 'Protecting High-Value Assets and Personnel on Active Sites',
    description: `Construction sites present some of the most complex security challenges in Kenya — high-value materials, heavy machinery, a rotating workforce of contractors and casual labourers, and often remote locations with poor natural lighting. Material theft and equipment vandalism are among the leading causes of project cost overruns in Kenyan construction.

Ndume Security specialises in construction site security, providing vetted guards, mobile patrols, and CCTV solutions specifically designed for active sites in Nairobi, Athi River, Ruiru, Thika, and Kikuyu.`,
    challenges: [
      'Theft of building materials (steel, copper, cement)',
      'Unauthorised access by non-contracted workers',
      'Plant and machinery theft',
      'Vandalism during non-working hours',
      'Worker welfare and on-site incident management',
    ],
    solutions: [
      'Armed and unarmed guards for all entry and exit points',
      'Contractor and worker identity verification system',
      'Solar-powered CCTV for off-grid sites',
      'Mobile patrol coverage for large site perimeters',
      'Material inventory security protocols',
    ],
    clients: 'Property developers, civil engineering contractors, quarrying operations, and manufacturing plants.',
    bgImage: 'https://images.pexels.com/photos/7714736/pexels-photo-7714736.jpeg?auto=compress&cs=tinysrgb&w=1200&h=700&dpr=1',
  },
  {
    id: 'government',
    icon: Landmark,
    title: 'Government & Public Sector',
    subtitle: 'Discreet, Compliant, and Mission-Critical Security',
    description: `Government facilities, statutory bodies, public hospitals, and educational institutions operate under unique security mandates — balancing public access with the protection of critical infrastructure, sensitive information, and government personnel. Ndume Security has extensive experience delivering security solutions within Kenya's public sector procurement framework.

Our officers assigned to government and institutional contracts receive additional training in national security protocol awareness, document control, and dignitary protection procedures.`,
    challenges: [
      'Controlling public access to sensitive facilities',
      'Protection of government officials and dignitaries',
      'Document and asset security in administrative offices',
      'Large-scale perimeter security for institutional grounds',
      'Compliance with government security directives',
    ],
    solutions: [
      'PSRA-compliant uniformed officers with security clearance',
      'Access control and visitor management for public institutions',
      'VIP and dignitary close protection services',
      'CCTV and perimeter monitoring for large compounds',
      'Compliance reporting aligned with government procurement standards',
    ],
    clients: 'County governments, parastatals, public hospitals, universities, and national government agencies.',
    bgImage: 'https://images.pexels.com/photos/7714723/pexels-photo-7714723.jpeg?auto=compress&cs=tinysrgb&w=1200&h=700&dpr=1',
  },
]

export default function Industries() {
  return (
    <>
      {/* PAGE HEADER */}
      <section
        className="pt-40 pb-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(6,13,33,0.90), rgba(6,13,33,0.85)), url('https://images.pexels.com/photos/7714702/pexels-photo-7714702.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1')`,
        }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gold-400 font-semibold uppercase tracking-widest text-sm mb-3">Sector Expertise</p>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-6xl mb-5">
            Industries We Serve
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Security challenges differ across sectors. Our tailored approaches mean you get a solution built for your industry — not a one-size-fits-all deployment.
          </p>
        </div>
      </section>

      {/* INDUSTRY NAV */}
      <section className="bg-navy-800 sticky top-[73px] z-40 border-b border-navy-700 hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-0 overflow-x-auto">
            {industries.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="text-gray-400 hover:text-gold-400 text-xs font-medium px-6 py-3.5 whitespace-nowrap border-b-2 border-transparent hover:border-gold-500 transition-all duration-200"
              >
                {ind.title.split(' ')[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY SECTIONS */}
      {industries.map((ind, idx) => {
        const Icon = ind.icon
        const isEven = idx % 2 === 0
        return (
          <section
            key={ind.id}
            id={ind.id}
            className={`py-20 ${isEven ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-start`}>
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-gold-400" />
                    </div>
                    <div>
                      <p className="text-gold-600 font-semibold text-xs uppercase tracking-widest">{ind.subtitle}</p>
                      <h2 className="font-heading font-bold text-navy-800 text-2xl md:text-3xl">{ind.title}</h2>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-6">
                    {ind.description.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  <div className="bg-navy-50 border-l-4 border-gold-500 rounded-r-lg p-4 mb-6 text-sm text-gray-700">
                    <span className="font-semibold text-gray-800">Typical Clients: </span>{ind.clients}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-900 font-bold px-7 py-3 rounded text-sm tracking-wide uppercase transition-all duration-200"
                  >
                    Get a Quote <ArrowRight size={15} />
                  </Link>
                </div>

                <div className={isEven ? '' : 'lg:order-1'}>
                  <div className="grid grid-cols-1 gap-5">
                    {/* Challenges */}
                    <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                      <h4 className="font-heading font-bold text-red-700 text-sm uppercase tracking-widest mb-4">
                        Common Security Challenges
                      </h4>
                      <ul className="space-y-2.5">
                        {ind.challenges.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-red-400 font-bold shrink-0 mt-0.5">×</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Solutions */}
                    <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                      <h4 className="font-heading font-bold text-green-700 text-sm uppercase tracking-widest mb-4">
                        Ndume Solutions
                      </h4>
                      <ul className="space-y-2.5">
                        {ind.solutions.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Shield size={36} className="text-gold-500 mx-auto mb-4" />
          <h2 className="font-heading font-extrabold text-white text-3xl mb-4">
            Don't See Your Industry?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            We tailor security solutions for any sector. Contact our team and we'll design a programme around your specific operational environment and risk profile.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-10 py-4 rounded text-sm tracking-wide uppercase transition-colors"
          >
            Talk to a Security Consultant <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
