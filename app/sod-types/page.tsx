import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Sod Types We Install in Jacksonville | Jax Sod',
  description:
    'Learn about the sod varieties Jax Sod installs across Jacksonville, including St. Augustine, Zoysia, Bermuda, and Bahia.',
  keywords: 'St. Augustine sod, Zoysia sod, Bermuda sod, Bahia sod, sod varieties Jacksonville, best sod for Florida, sod installation types',
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
  'https://images.unsplash.com/photo-1595757872761-992fd6d3ab25?auto=format&fit=crop&w=1400&q=80&ixlib=rb-4.0.3'

export default function SodTypesPage() {
  return (
    <div className="section-padding">
      <div className="container-custom space-y-16">
        {/* Header Section */}
        <div className="space-y-6 max-w-4xl">
          <h1 className="heading-xl">Professional Sod Installation Types in Jacksonville, FL</h1>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary-800">Finding the Perfect Grass for Your Lawn</h2>
            <p className="text-xl text-secondary-700 leading-relaxed">
              A beautiful lawn starts with choosing the right sod. In Jacksonville, our climate requires grass that can handle
              warm summers and mild winters. Whether you are looking for the lush look of St. Augustine or the durability of Bermuda,
              Jax Sod provides professional installation for all major varieties.
            </p>
            <p className="text-lg text-secondary-700">
              We help homeowners across Northeast Florida select the best option for their landscape.
              Below is an overview of the most popular sod types we install.
            </p>
          </section>
        </div>

        {/* Feature Image */}
        <div className="overflow-hidden rounded-xl shadow-md border border-secondary-100">
          <Image
            src={sodTypesImage}
            alt="Beautiful green lawn installation in Jacksonville"
            width={1400}
            height={700}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* SOD TYPE 1: St. Augustine */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-secondary-900 border-b border-secondary-200 pb-4">
            St. Augustine Sod
          </h2>
          <div className="prose prose-lg text-secondary-700 max-w-none space-y-6">
            <p>
              St. Augustine is the most widely used grass in Florida for residential homes. It is known for its wide blades
              and deep green color, creating a dense, lush appearance that boosts curb appeal instantly. It thrives in our
              humid subtropical climate.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">Floratam</h3>
              <p>
                Floratam is the standard St. Augustine variety for sunny lawns. It grows vigorously during the warm season
                and provides that classic, manicured Florida look. It requires plenty of direct sunlight to maintain its density and color.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">Palmetto</h3>
              <p>
                For landscapes with mature trees or partial shade, Palmetto St. Augustine is an excellent alternative.
                It offers the same beautiful appearance as Floratam but is better suited for areas that receive less direct sunlight throughout the day.
              </p>
            </div>
          </div>
        </section>

        {/* SOD TYPE 2: Zoysia */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-secondary-900 border-b border-secondary-200 pb-4">
            Zoysia Sod
          </h2>
          <div className="prose prose-lg text-secondary-700 max-w-none">
            <p>
              Zoysia is becoming a favorite for homeowners seeking a premium, soft-textured lawn.
              Often described as having a "carpet-like" feel, Zoysia is incredibly dense and feels great underfoot.
            </p>
            <p>
              <strong>Why Choose Zoysia?</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Visual Appeal:</strong> Offers a stunning, high-end look for front yards.</li>
              <li><strong>Comfort:</strong> Soft texture makes it ideal for families and pets.</li>
              <li><strong>Versatility:</strong> Performs well in a variety of landscapes across Jacksonville.</li>
            </ul>
          </div>
        </section>

        {/* SOD TYPE 3: Bermuda */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-secondary-900 border-b border-secondary-200 pb-4">
            Bermuda Sod
          </h2>
          <div className="prose prose-lg text-secondary-700 max-w-none">
            <p>
              Bermuda grass is synonymous with durability. It is the grass of choice for golf courses and sports fields
              because of its ability to withstand heavy foot traffic and recover quickly from wear.
            </p>
            <p>
              For active families or homes with frequent outdoor activity, Bermuda is a strong contender.
              It loves full sun and responds well to regular maintenance, rewarding homeowners with a resilient, fine-bladed turf.
            </p>
          </div>
        </section>

        {/* SOD TYPE 4: Bahia */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-secondary-900 border-b border-secondary-200 pb-4">
            Bahia Sod
          </h2>
          <div className="prose prose-lg text-secondary-700 max-w-none">
            <p>
              Bahia is a practical, resilient grass variety often used for larger properties, acreage, and areas where
              standard irrigation might not be available. It is naturally drought-tolerant and has a deep root system.
            </p>
            <p>
              While it has a different texture than St. Augustine, Bahia is valued for its hardiness.
              It is an excellent solution for stabilizing soil and providing green cover on large lots in the Jacksonville area.
            </p>
          </div>
        </section>

        {/* MAINTENANCE TIPS */}
        <section className="bg-secondary-50 p-8 rounded-xl space-y-6 border border-secondary-100">
          <h2 className="text-3xl font-bold text-secondary-900">
            Lawn Care Tips for Jacksonville
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-secondary-700">
            <div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Watering</h3>
              <p>
                Proper watering is essential for new sod establishment. Once established, follow local St. Johns River
                Water Management District guidelines found in your area.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Mowing</h3>
              <p>
                Regular mowing helps keep your lawn healthy and dense. Different grass types have optimal mowing heights,
                so check with our team for specific recommendations for your sod.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Fertilization</h3>
              <p>
                A seasonal fertilization program helps maintain color and vigor. In Northeast Florida, it is important to
                adjust care based on the growing season (Spring/Summer) versus the dormant season (Winter).
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-secondary-900 border-b border-secondary-200 pb-4">
            Common Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <h3 className="font-bold text-lg text-secondary-900 mb-2">Which grass is best for my home?</h3>
              <p className="text-secondary-700">
                The best grass depends on your specific property conditions, such as sunlight availability and soil type.
                Contact us for a personalized recommendation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <h3 className="font-bold text-lg text-secondary-900 mb-2">How much does sod installation cost?</h3>
              <p className="text-secondary-700">
                Pricing varies based on the size of the project, site preparation needs, and the type of sod selected.
                We offer free, no-obligation quotes to provide accurate pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-primary-600 text-white rounded-xl p-10 flex flex-col gap-6 text-center">
          <h2 className="heading-lg">Get Your Free Sod Quote</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Ready to transform your lawn? Contact Jacksonville's premier sod installation experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary bg-white text-primary-700 hover:text-primary-800">
              Contact Us
            </Link>
            <a href="tel:9049011457" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Call (904) 901-1457
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
