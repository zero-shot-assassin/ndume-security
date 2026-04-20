import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Briefcase, MapPin, Clock, ChevronRight, Send, CheckCircle,
  Shield, Users, Award, Heart
} from 'lucide-react'

const openings = [
  {
    id: 1,
    title: 'Security Officer – Manned Guarding',
    location: 'Nairobi (Various Sites)',
    type: 'Full-time',
    shift: 'Day & Night Shifts Available',
    category: 'Operations',
    description: 'We are seeking disciplined, physically fit Security Officers to be deployed at corporate, residential, and retail client sites across Nairobi. Successful candidates will undergo Ndume\'s in-house training programme before deployment.',
    requirements: [
      'KCSE Certificate (minimum Grade D+)',
      'Valid PSRA Security Officer Licence',
      'Age: 20 – 40 years',
      'Physical fitness and clean medical record',
      'National ID and Certificate of Good Conduct (not older than 12 months)',
      'Previous security experience preferred but not mandatory',
    ],
  },
  {
    id: 2,
    title: 'CCTV Surveillance Operator',
    location: 'Westlands, Nairobi (Head Office)',
    type: 'Full-time',
    shift: 'Rotating Shifts (24/7 Operations)',
    category: 'Technology',
    description: 'Join our 24/7 monitoring command centre as a CCTV Surveillance Operator. You will monitor live feeds from client sites, respond to alerts, and coordinate with on-ground response teams. This is a technology-forward role in a modern operations environment.',
    requirements: [
      'KCSE Certificate Grade C or above',
      'Certificate or Diploma in ICT, Security Studies, or related field',
      'Experience operating CCTV systems (Hikvision/Dahua preferred)',
      'Strong attention to detail and situational awareness',
      'Ability to work 12-hour rotating shifts including nights and weekends',
      'PSRA Licence advantageous',
    ],
  },
  {
    id: 3,
    title: 'Armed Response Officer',
    location: 'Nairobi (Mobile – Patrol Fleet)',
    type: 'Full-time',
    shift: 'Night Shifts with Day Cover',
    category: 'Operations',
    description: 'Armed Response Officers are the frontline of Ndume\'s rapid reaction capability. You will operate from a marked response vehicle, responding to triggered alarms and panic activations across assigned zones in Nairobi. This is a high-accountability role requiring calmness under pressure.',
    requirements: [
      'Valid PSRA Security Officer Licence (Armed)',
      'Valid Firearms Certificate — Kenyan authorities',
      'Kenya Defence Forces, GSU, or Kenya Police Service background strongly preferred',
      'Valid Class BCE driving licence',
      'Age: 25 – 45 years',
      'Clean Certificate of Good Conduct',
      'First Aid Certificate (St. John\'s Ambulance or Red Cross)',
    ],
  },
  {
    id: 4,
    title: 'Security Systems Technician',
    location: 'Nairobi & Environs',
    type: 'Full-time',
    shift: 'Monday – Saturday, 8am – 5pm',
    category: 'Technology',
    description: 'We are expanding our technology division and require experienced Security Systems Technicians for CCTV, access control, and alarm system installations across Nairobi and surrounding counties. You will work with leading brands including Hikvision, Dahua, and Bosch.',
    requirements: [
      'Diploma or Degree in Electrical/Electronic Engineering or ICT',
      'Minimum 2 years\' experience in CCTV/access control installation',
      'Proficiency with Hikvision, Dahua, ZKTeco systems',
      'Valid Class B driving licence',
      'Ability to work at heights and in varied site conditions',
      'Good client-facing communication skills',
    ],
  },
  {
    id: 5,
    title: 'Security Supervisor',
    location: 'Nairobi (Multiple Sites)',
    type: 'Full-time',
    shift: 'Day Shift (with occasional evenings)',
    category: 'Management',
    description: 'Security Supervisors at Ndume are responsible for overseeing teams of 5–20 officers across assigned client accounts. You will conduct site visits, manage daily briefings, handle incident reports, and serve as the operational link between field teams and head office.',
    requirements: [
      'KCSE Certificate Grade C or above',
      'PSRA Supervisor Licence',
      'Minimum 3 years\' security industry experience, including supervisory role',
      'Strong written and verbal communication (Swahili & English)',
      'Proficiency in report writing and incident documentation',
      'Certificate of Good Conduct',
    ],
  },
  {
    id: 6,
    title: 'Security Consultant (Sales)',
    location: 'Westlands, Nairobi',
    type: 'Full-time',
    shift: 'Monday – Friday, 8am – 5pm',
    category: 'Commercial',
    description: 'Join our commercial team as a Security Consultant responsible for generating new business, conducting client site surveys, and presenting tailored security proposals. You will manage the full sales cycle from prospecting to contract execution.',
    requirements: [
      'Diploma or Degree in Business, Marketing, or Security Management',
      'Minimum 2 years\' B2B sales experience (security industry preferred)',
      'Excellent presentation and negotiation skills',
      'Understanding of security products and services',
      'Valid driving licence',
      'Self-motivated with a proven track record of achieving sales targets',
    ],
  },
]

const benefits = [
  { icon: Shield, title: 'NSSF & NHIF', desc: 'Full statutory contributions from day one of employment.' },
  { icon: Award, title: 'Career Development', desc: 'Funded training, PSRA certification upgrades, and promotion pathways.' },
  { icon: Users, title: 'Team Culture', desc: 'A disciplined, respectful, and supportive workplace built on military values.' },
  { icon: Heart, title: 'Medical Cover', desc: 'Inpatient and outpatient medical cover for all permanent staff.' },
]

export default function Careers() {
  const [selected, setSelected] = useState(null)
  const [appForm, setAppForm] = useState({ name: '', email: '', phone: '', position: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleApply = (job) => {
    setSelected(job)
    setAppForm({ ...appForm, position: job.title })
    window.scrollTo({ top: document.getElementById('application-form').offsetTop - 100, behavior: 'smooth' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* PAGE HEADER */}
      <section
        className="pt-40 pb-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(6,13,33,0.90), rgba(6,13,33,0.85)), url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80')`,
        }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gold-400 font-semibold uppercase tracking-widest text-sm mb-3">Join Our Team</p>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-6xl mb-5">Careers at Ndume</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            We are building Kenya's most professional security workforce. If you are disciplined, dependable, and driven — we want to hear from you.
          </p>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold uppercase tracking-widest text-sm mb-2">Why Ndume?</p>
            <h2 className="text-3xl font-heading font-bold text-white">More Than a Job. A Career.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="bg-navy-800 rounded-xl p-6 text-center border border-navy-700">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-navy-900" />
                  </div>
                  <h4 className="font-heading font-bold text-white mb-2">{b.title}</h4>
                  <p className="text-gray-400 text-sm">{b.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold-600 font-semibold uppercase tracking-widest text-sm mb-2">Open Positions</p>
            <h2 className="text-3xl font-heading font-bold text-navy-800">Current Vacancies</h2>
            <p className="text-gray-600 mt-3 text-sm">Updated April 2025. Nairobi-based roles unless otherwise stated.</p>
          </div>

          <div className="space-y-5">
            {openings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-xs font-semibold bg-navy-100 text-navy-700 px-2.5 py-0.5 rounded-full">
                          {job.category}
                        </span>
                        <span className="text-xs font-semibold bg-gold-100 text-gold-700 px-2.5 py-0.5 rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-navy-800 text-xl mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} className="text-gold-500" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} className="text-gold-500" /> {job.shift}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{job.description}</p>

                      <details className="group">
                        <summary className="text-gold-600 hover:text-gold-700 font-semibold text-sm cursor-pointer flex items-center gap-1 list-none">
                          View Requirements <ChevronRight size={14} className="group-open:rotate-90 transition-transform" />
                        </summary>
                        <ul className="mt-3 space-y-1.5 pl-4">
                          {job.requirements.map((r) => (
                            <li key={r} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle size={13} className="text-gold-500 shrink-0 mt-0.5" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </details>
                    </div>

                    <div className="shrink-0">
                      <button
                        onClick={() => handleApply(job)}
                        className="flex items-center gap-2 bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-900 font-bold px-6 py-3 rounded-lg text-sm tracking-wide uppercase transition-all duration-200"
                      >
                        Apply Now <ChevronRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="application-form" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-gold-600 font-semibold uppercase tracking-widest text-sm mb-2">Apply Online</p>
            <h2 className="text-3xl font-heading font-bold text-navy-800">Submit Your Application</h2>
            {selected && (
              <div className="mt-4 inline-flex items-center gap-2 bg-gold-50 border border-gold-300 text-gold-700 rounded-full px-4 py-1.5 text-sm font-semibold">
                <Briefcase size={14} /> Applying for: {selected.title}
              </div>
            )}
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
              <CheckCircle size={56} className="text-green-500 mx-auto mb-5" />
              <h3 className="font-heading font-bold text-green-800 text-2xl mb-3">Application Submitted!</h3>
              <p className="text-green-700 text-sm max-w-md mx-auto">
                Thank you for your interest in Ndume Security. Our HR team reviews applications within 5 business days. Shortlisted candidates will be contacted via phone and email.
              </p>
              <Link to="/" className="mt-6 inline-block text-gold-600 hover:text-gold-700 font-semibold text-sm">
                ← Return to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl border border-gray-200 p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={appForm.name}
                    onChange={(e) => setAppForm({ ...appForm, name: e.target.value })}
                    placeholder="e.g. Peter Njoroge"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={appForm.phone}
                    onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                    placeholder="+254 7XX XXX XXX"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">Email Address *</label>
                <input
                  type="email"
                  required
                  value={appForm.email}
                  onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">Position Applying For *</label>
                <select
                  required
                  value={appForm.position}
                  onChange={(e) => setAppForm({ ...appForm, position: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition bg-white"
                >
                  <option value="">Select position...</option>
                  {openings.map((j) => (
                    <option key={j.id} value={j.title}>{j.title}</option>
                  ))}
                  <option value="General Application">General Application (No specific vacancy)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                  Cover Letter / Motivation
                </label>
                <textarea
                  rows={5}
                  value={appForm.message}
                  onChange={(e) => setAppForm({ ...appForm, message: e.target.value })}
                  placeholder="Tell us about your relevant experience, why you want to join Ndume Security, and what makes you a strong candidate..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition resize-none bg-white"
                />
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-800">
                <strong>Please note:</strong> Shortlisted candidates will be required to present originals of: National ID, KCSE Certificate, PSRA Licence, Certificate of Good Conduct, and any other relevant qualifications at interview.
              </div>

              <button
                type="submit"
                className="w-full bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-900 font-bold py-3.5 rounded-lg text-sm tracking-wide uppercase transition-all flex items-center justify-center gap-2"
              >
                <Send size={16} /> Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      {/* GENERAL ENQUIRIES */}
      <section className="py-12 bg-navy-900 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-gray-400 text-sm mb-2">Don't see a suitable vacancy?</p>
          <h3 className="font-heading font-bold text-white text-xl mb-4">
            Send Us a General Application
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            We are always growing. Send your CV and a brief cover note to{' '}
            <a href="mailto:careers@ndumesecurity.co.ke" className="text-gold-400 hover:text-gold-300 font-semibold">
              careers@ndumesecurity.co.ke
            </a>{' '}
            and we will keep your profile on file for future opportunities.
          </p>
        </div>
      </section>
    </>
  )
}
