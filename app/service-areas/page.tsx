import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Service Areas | Jax Sod – Jacksonville Sod Installation',
  description: 'Sod installation service areas across Jacksonville, Mandarin, the Beaches, Orange Park, St. Augustine, Ponte Vedra, and nearby communities.',
}

const areas = [
  {
    heading: 'Jacksonville & Mandarin',
    bullets: [
      'Residential lawn replacements and new builds with tailored sod varieties',
      'Surface smoothing for established neighborhoods',
      'Fast turnaround for front and back yard transformations',
    ],
  },
  {
    heading: 'Jacksonville Beach & Atlantic Beach',
    bullets: [
      'Coastal-friendly sod selections that handle salt and humidity',
      'Rental and vacation property upgrades with clean installation',
      'Irrigation-friendly prep to keep lawns thriving in sandy soils',
    ],
  },
  {
    heading: 'Orange Park & Fleming Island',
    bullets: [
      'HOA-ready installs with careful access planning',
      'Commercial and office park projects with minimal disruption',
      'Family-friendly lawns built to handle play and pets',
    ],
  },
  {
    heading: 'St. Augustine & St. Johns County',
    bullets: [
      'New construction sod installation with builder coordination',
      'Historic home lawn refreshes with proper surface smoothing',
      'Estate lots and acreage projects with budget-smart options',
    ],
  },
  {
    heading: 'Ponte Vedra & Nocatee',
    bullets: [
      'Premium varieties and manicured finishes for curb appeal',
      'Athletic-ready Bermuda and Zoysia installs for active households',
      'Detailed after-care plans to keep lawns lush year-round',
    ],
  },
]

export default function ServiceAreasPage() {
  return (
    <div className="section-padding">
      <div className="container-custom space-y-12">
        <div className="space-y-4 max-w-3xl">
          <h1 className="heading-xl">Service Areas</h1>
          <p className="text-lg text-secondary-700">
            We primarily serve Jacksonville and nearby communities and frequently travel for larger residential, commercial, and HOA projects. If you are in Northeast Florida, there is a good chance we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area) => (
            <div key={area.heading} className="bg-white p-6 rounded-lg shadow-md space-y-3">
              <h2 className="text-2xl font-bold text-secondary-900">{area.heading}</h2>
              <ul className="space-y-2 text-secondary-700">
                {area.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary-600" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-primary-50 border border-primary-100 rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <h2 className="heading-md">Not sure if you’re in our service area?</h2>
            <p className="text-secondary-700">Tell us about your project and location. We’ll confirm quickly and share the best installation plan for your property.</p>
          </div>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
