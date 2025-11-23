import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Sod Types We Install in Jacksonville | Jax Sod',
  description:
    'Learn about the sod varieties Jax Sod installs across Jacksonville, including St. Augustine, Zoysia, Bermuda, and Bahia.',
}

const grassTypes = [
  {
    name: 'St. Augustine',
    bullets: [
      'Best for: Partial shade to full sun with coastal humidity',
      'Use cases: Established neighborhoods, homes near the river or beach',
      'Pros: Salt-tolerant, broad blades that create a plush feel underfoot',
      'Care notes: Prefers consistent moisture and seasonal fertilizer in Northeast Florida',
    ],
  },
  {
    name: 'Zoysia',
    bullets: [
      'Best for: Full sun to light shade with good drainage',
      'Use cases: High-end residential lawns, golf-inspired landscapes, active families',
      'Pros: Dense, carpet-like growth that resists weeds and looks manicured',
      'Care notes: Handles heavy traffic and recovers well with proper watering',
    ],
  },
  {
    name: 'Bermuda',
    bullets: [
      'Best for: Full sun and wide-open spaces',
      'Use cases: Sports-friendly yards, commercial properties, and open common areas',
      'Pros: Fast recovery from wear, great for pets and play',
      'Care notes: Responds well to regular mowing and thrives in summer heat',
    ],
  },
  {
    name: 'Bahia',
    bullets: [
      'Best for: Full sun with minimal irrigation needs',
      'Use cases: Larger lots, budget-conscious projects, utility areas',
      'Pros: Tough, drought-tolerant, and resilient in sandy Jacksonville soils',
      'Care notes: Lower maintenance option that still benefits from seasonal nutrition',
    ],
  },
]

const sodTypesImage =
  'https://images.unsplash.com/photo-1598032895004-2f6c8df1424c?auto=format&fit=crop&w=1400&q=80&ixlib=rb-4.0.3'

export default function SodTypesPage() {
  return (
    <div className="section-padding">
      <div className="container-custom space-y-12">
        <div className="space-y-4 max-w-3xl">
          <h1 className="heading-xl">Sod Types We Install in Jacksonville</h1>
          <p className="text-lg text-secondary-700">
            Jacksonville lawns face coastal breezes, summer heat, and a mix of sun and shade. Jax Sod helps you choose the right
            variety so your grass thrives from day one—whether you need shade tolerance, durability, or a manicured look.
          </p>
          <p className="text-secondary-700">
            Once you choose a variety, our{' '}<Link href="/services" className="text-primary-600 font-semibold hover:text-primary-700">professional sod installation</Link>{' '}team handles prep, grading, and rolling. Have questions?{' '}<Link href="/contact" className="text-primary-600 font-semibold hover:text-primary-700">Contact us</Link> for tailored recommendations.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl shadow-md border border-secondary-100">
          <Image
            src={sodTypesImage}
            alt="Fresh sod being installed on a prepared lawn"
            width={1400}
            height={700}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {grassTypes.map((type) => (
            <div key={type.name} className="bg-white p-8 rounded-lg shadow-md border border-secondary-100 space-y-4">
              <h2 className="text-2xl font-bold text-secondary-900">{type.name}</h2>
              <ul className="space-y-3 text-secondary-700">
                {type.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary-600" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-primary-600 text-white rounded-xl p-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 max-w-3xl">
            <h2 className="heading-lg">Ready to choose the best sod for your property?</h2>
            <p className="text-lg opacity-90">
              Tell us about your yard and we’ll recommend the right variety for Jacksonville’s climate, along with a detailed installation plan.
            </p>
          </div>
          <Link href="/contact" className="btn-secondary bg-white text-primary-700 hover:text-primary-800">
            Get a Free Sod Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
