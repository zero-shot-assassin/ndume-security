import { Link } from 'react-router-dom'
import { Shield, Target, Eye, Heart, CheckCircle, ArrowRight, Award } from 'lucide-react'

const leadership = [
  {
    name: 'Col. (Rtd.) David Mwangi',
    title: 'Chief Executive Officer',
    bio: 'A retired Kenya Army Colonel with 28 years of distinguished military service. David founded Ndume Security in 2008 with a mission to bring military-grade discipline and professionalism to the private security sector in Kenya.',
    initials: 'DM',
  },
  {
    name: 'Grace Wanjiku',
    title: 'Chief Operations Officer',
    bio: 'Grace holds an MSc in Security Management from the University of Nairobi and brings 15 years of experience in corporate security operations. She oversees deployment, training, and quality assurance across all contracts.',
    initials: 'GW',
  },
  {
    name: 'Samuel Otieno',
    title: 'Head of Technology & Surveillance',
    bio: 'A certified CCTV systems integrator and former Kenya Police Service ICT specialist. Samuel leads all technology deployments including CCTV, access control, and our 24/7 monitoring command centre.',
    initials: 'SO',
  },
  {
    name: 'Fatuma Hassan',
    title: 'Head of Client Relations',
    bio: 'With a background in corporate communications and a Diploma in Security Management, Fatuma ensures every client receives responsive, professional service from initial consultation through ongoing contract management.',
    initials: 'FH',
  },
]

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'We operate with transparency, honesty, and ethical discipline at every level of our organisation. Our officers are held to the same standards we promise our clients.',
  },
  {
    icon: Target,
    title: 'Precision',
    desc: 'Security failures are rarely acceptable. We plan meticulously, train rigorously, and execute with the precision that our clients\' safety demands.',
  },
  {
    icon: Eye,
    title: 'Vigilance',
    desc: 'Our officers are trained to maintain situational awareness and threat assessment at all times — never complacent, always prepared.',
  },
  {
    icon: Heart,
    title: 'Community',
    desc: 'We are a Kenyan company that employs Kenyans and serves Kenyan communities. We invest in local talent and contribute to a safer nation.',
  },
]

const milestones = [
  { year: '2008', event: 'Ndume Security founded in Nairobi with a team of 12 officers.' },
  { year: '2011', event: 'Awarded first corporate contract with a Nairobi-based multinational bank.' },
  { year: '2014', event: 'Launched 24/7 CCTV Monitoring Command Centre in Westlands.' },
  { year: '2016', event: 'Expanded mobile patrol fleet to 40 vehicles across Nairobi County.' },
  { year: '2018', event: 'ISO 9001:2015 Quality Management Certification achieved.' },
  { year: '2020', event: 'Crossed 300+ active client contracts milestone.' },
  { year: '2022', event: 'Launched Access Control & Smart Security integration division.' },
  { year: '2024', event: 'Expanded operations to Kiambu, Machakos, Kajiado, and Nakuru counties.' },
]

export default function About() {
  return (
    <>
      {/* PAGE HEADER */}
      <section
        className="pt-40 pb-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(6,13,33,0.90), rgba(6,13,33,0.85)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')`,
        }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gold-400 font-semibold uppercase tracking-widest text-sm mb-3">Who We Are</p>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-6xl mb-5">
            About Ndume Security
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Over 16 years of protecting Kenya's people, assets, and institutions. Built on military discipline. Driven by community purpose.
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-gold-600 font-semibold uppercase tracking-widest text-sm mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800 mb-6">
                From Military Service to National Security
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Ndume Security was founded in 2008 by Colonel (Rtd.) David Mwangi following a distinguished 28-year career in the Kenya Army. Recognising a critical gap in professional, disciplined private security services across Nairobi, he assembled a founding team of twelve vetted officers and established operations from a modest office in Industrial Area.
                </p>
                <p>
                  The name <strong className="text-navy-800">Ndume</strong> — Swahili for "bull" — was chosen deliberately. It represents strength, steadfastness, and the protective instinct. These qualities are not just brand words at Ndume; they are operational standards embedded in every training module, deployment protocol, and client interaction.
                </p>
                <p>
                  Today, Ndume Security employs over 500 trained officers, operates a 24/7 command centre, maintains a fleet of 60+ patrol vehicles, and serves more than 300 clients across corporate, residential, retail, government, and construction sectors.
                </p>
                <p>
                  We are fully licensed by the Private Security Regulatory Authority (PSRA) and comply with all provisions of the Private Security Industry Regulation Act, 2016. Our operations are guided by the highest standards of professional conduct, employee welfare, and community responsibility.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80"
                alt="Ndume Security Command Centre"
                className="rounded-2xl w-full object-cover h-[480px] shadow-xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-navy-900 text-white rounded-xl p-5 shadow-2xl max-w-[200px]">
                <Award size={28} className="text-gold-500 mb-2" />
                <div className="font-heading font-bold text-lg leading-tight">ISO 9001:2015</div>
                <div className="text-gray-400 text-xs mt-1">Quality Management Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold-600 font-semibold uppercase tracking-widest text-sm mb-2">Our Foundation</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800">Mission, Vision & Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {/* Mission */}
            <div className="bg-navy-900 text-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-5">
                <Target size={24} className="text-navy-900" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-4 text-gold-400">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To protect the lives, property, and operations of our clients through highly trained personnel, advanced security technology, and intelligence-driven strategies — delivered with integrity, discipline, and a commitment to Kenyan communities.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gold-500 rounded-2xl p-8">
              <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mb-5">
                <Eye size={24} className="text-gold-400" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-4 text-navy-900">Our Vision</h3>
              <p className="text-navy-800 leading-relaxed">
                To be East Africa's most respected and trusted security services provider — recognised for excellence in human capital, operational innovation, and our positive impact on national safety and employment.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-gold-400" />
                  </div>
                  <h4 className="font-heading font-bold text-navy-800 text-lg mb-3">{v.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold-500 font-semibold uppercase tracking-widest text-sm mb-2">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">16 Years of Growth</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold-600/30 transform md:-translate-x-px"></div>
            <div className="space-y-8">
              {milestones.map((m, idx) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`hidden md:block md:w-1/2 ${idx % 2 === 0 ? 'pr-10 text-right' : 'pl-10 text-left'}`}>
                    <div className="text-gray-300 text-sm leading-relaxed">{m.event}</div>
                  </div>
                  <div className="relative z-10 w-12 h-12 bg-gold-500 text-navy-900 rounded-full flex items-center justify-center font-heading font-extrabold text-xs shrink-0 md:mx-auto shadow-lg">
                    {m.year.slice(2)}
                  </div>
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pl-10' : 'md:pr-10 md:text-right'}`}>
                    <div className="font-heading font-bold text-gold-400 text-lg mb-1">{m.year}</div>
                    <div className="text-gray-300 text-sm leading-relaxed md:hidden">{m.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold-600 font-semibold uppercase tracking-widest text-sm mb-2">Our People</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800">Leadership Team</h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Ndume Security is led by experienced professionals with backgrounds in military service, law enforcement, and corporate security management.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person) => (
              <div key={person.name} className="text-center group">
                <div className="w-24 h-24 bg-navy-800 group-hover:bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-5 transition-colors duration-300 shadow-lg">
                  <span className="font-heading font-extrabold text-2xl text-gold-400 group-hover:text-navy-900 transition-colors">
                    {person.initials}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-navy-800 text-lg">{person.name}</h3>
                <p className="text-gold-600 text-sm font-semibold mb-3">{person.title}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-heading font-bold text-navy-800">Licences & Certifications</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'PSRA Licence', detail: 'Private Security Regulatory Authority – Licence No. PSRA/2008/0471' },
              { title: 'ISO 9001:2015', detail: 'Quality Management System certified by Bureau Veritas Kenya' },
              { title: 'Business Registration', detail: 'Registered under the Companies Act, Cap 486 – CR/2008/118734' },
              { title: 'KRA PIN', detail: 'Active Taxpayer – Kenya Revenue Authority PIN A002187234X' },
            ].map((cert) => (
              <div key={cert.title} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <CheckCircle size={20} className="text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-navy-800 text-sm">{cert.title}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{cert.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading font-extrabold text-white text-3xl mb-4">Partner With Kenya's Security Experts</h2>
          <p className="text-gray-400 mb-8">Contact us today for a free consultation and site security assessment.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-4 rounded text-sm tracking-wide uppercase transition-colors"
          >
            Get In Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
