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
          <h1 className="heading-xl">The Ultimate Guide to Jacksonville Sod: Expert Installation & Selection</h1>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary-800">Your Complete Resource for North Florida Lawns</h2>
            <p className="text-xl text-secondary-700 leading-relaxed">
              Choosing the right sod for your Jacksonville home is a significant investment. Unlike other regions, Northeast Florida
              sits in a unique climate zone (USDA Zone 9a/9b) where distinct environmental pressures—from salt spray at the beaches
              to intense humidity in Mandarin—dictate which grasses thrive and which fail.
            </p>
            <p className="text-lg text-secondary-700">
              At Jax Sod, we specialize in <strong>professional site preparation and soil smoothing</strong> to ensure your new lawn
              has the perfect foundation. We don't just sell grass; we install solutions. This guide details the specific traits
              of our proven sod varieties and the critical maintenance factors you need to know.
            </p>
          </section>
        </div>

        {/* Feature Image */}
        <div className="overflow-hidden rounded-xl shadow-md border border-secondary-100">
          <Image
            src={sodTypesImage}
            alt="Lush, healthy sod installation in Jacksonville"
            width={1400}
            height={700}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* SOD TYPE 1: St. Augustine */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-secondary-900 border-b border-secondary-200 pb-4">
            1. St. Augustine Sod
          </h2>
          <div className="prose prose-lg text-secondary-700 max-w-none space-y-6">
            <p>
              St. Augustine is the dominant turfgrass for residential lawns throughout Jacksonville and St. Johns County.
              Known for its wide, dark green blades and dense growth habit, it creates that classic "Florida lawn" look
              that creates instant curb appeal. It is highly adapted to our warm, humid subtropical climate.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">Floratam St. Augustine</h3>
              <p className="mb-4"><em>The standard for full sun areas.</em></p>
              <p>
                Floratam is the most widely planted cultivar of St. Augustine grass. It is vigorous, coarse-textured, and
                aggressive, which helps it recover from wear. However, it has one critical weakness: <strong>it requires full sun.</strong>
                Floratam needs a minimum of 6-8 hours of direct sunlight daily. If planted in established neighborhoods with
                dense tree canopies, it will eventually thin out.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">Shade Tolerant St. Augustine</h3>
              <p className="mb-4"><em>The solution for lower light environments.</em></p>
              <p>
                For properties with oak trees, fence lines, or structural shading, we install specialized shade-tolerant St. Augustine varieties.
                These hybrids are bred to perform better in "filtered light" conditions where standard Floratam would fail.
                While no grass grows in pitch black darkness, these varieties are the best option for keeping a uniform St. Augustine
                look across a property that has mixed sun and shade zones.
              </p>
            </div>
          </div>
        </section>

        {/* SOD TYPE 2: Zoysia */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-secondary-900 border-b border-secondary-200 pb-4">
            2. Zoysia Sod
          </h2>
          <div className="prose prose-lg text-secondary-700 max-w-none">
            <p>
              Zoysia generally appeals to homeowners looking for a "step up" in texture. It is extremely dense and feels
              soft and carpet-like under bare feet, making it a favorite for families with young children.
            </p>
            <p>
              It offers excellent visual appeal and has become a popular alternative to St. Augustine in newer subdivisions.
              Its vegetative growth habit allows it to choke out weeds effectively once established. It is a premium choice
              that provides a manicured, high-end aesthetic to any property.
            </p>
          </div>
        </section>

        {/* SOD TYPE 3: Bermuda */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-secondary-900 border-b border-secondary-200 pb-4">
            3. Bermuda Sod
          </h2>
          <div className="prose prose-lg text-secondary-700 max-w-none">
            <p>
              Bermuda is the premier choice for durability. It is the same grass used on golf courses and sports fields
              because of its incredible ability to recover from traffic. If you have active dogs or use your backyard
              as a soccer field, Bermuda is likely your best option.
            </p>
            <p>
              It is a full-sun grass that thrives in heat. While it goes dormant (turns brown) in the winter slightly
              faster than other varieties, its spring green-up is vigorous and rapid.
            </p>
          </div>
        </section>

        {/* SOD TYPE 4: Bahia */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-secondary-900 border-b border-secondary-200 pb-4">
            4. Bahia Sod
          </h2>
          <div className="prose prose-lg text-secondary-700 max-w-none">
            <p>
              Bahia grass is the utilitarian workhorse of the South. While it lacks the density and dark green color
              of St. Augustine, it possesses a deep, extensive root system that makes it incredibly drought tolerant.
            </p>
            <p>
              This makes it the ideal choice for large acreages, roadsides, and properties without irrigation systems.
              It effectively stabilizes soil and provides green cover with minimal inputs.
            </p>
          </div>
        </section>

        {/* --- AUTHORITY SECTION: Chinch Bugs --- */}
        <section className="bg-primary-50 p-8 rounded-xl space-y-6 border border-primary-100">
          <h2 className="text-3xl font-bold text-secondary-900">
            Critical Knowledge: Chinch Bugs & Pests
          </h2>
          <div className="prose prose-lg text-secondary-700 max-w-none">
            <p>
              In Florida, the Southern Chinch Bug is the number one enemy of St. Augustine lawns. These tiny pests
              (less than 1/5th of an inch long) thrive in hot, dry weather. They insert a needle-like beak into the
              grass blade and suck out the juices while injecting a toxin that kills the plant.
            </p>
            <p>
              <strong>Signs of Damage:</strong> Damage often looks like drought stress—large yellow or brown patches
              that spread rapidly, usually starting near driveways or sidewalks where radiant heat is highest.
            </p>
            <p>
              We also see <strong>Sod Webworms</strong> and <strong>Armyworms</strong>, which chew on the grass blades
              rather than sucking the sap. The best defense is a healthy, well-watered lawn, but chemical intervention
              is often necessary during peak summer months.
            </p>
          </div>
        </section>

        {/* --- AUTHORITY SECTION: Salt Tolerance --- */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-secondary-900 border-b border-secondary-200 pb-4">
            Understanding Salt Tolerance (Coastal vs. Inland)
          </h2>
          <div className="prose prose-lg text-secondary-700 max-w-none">
            <p>
              If you live in Atlantic Beach, Neptune Beach, Jacksonville Beach, or Ponte Vedra, salt spray is a silent killer.
              Airborne salt from the ocean can desiccate (dry out) sensitive plants. Irrgiation using well water in these areas
              can also have higher salinity levels.
            </p>
            <p>
              <strong>St. Augustine grass has excellent salt tolerance</strong>, which is why it is the standard for
              oceanfront properties. Bermuda grass also handles salt relatively well. Bahia and distinct ornamental grasses
              often struggle if the salinity is too high. When we consult on a coastal property, we always factor the
              "salt line" into our recommendations.
            </p>
          </div>
        </section>

        {/* --- AUTHORITY SECTION: Watering Guide --- */}
        <section className="bg-secondary-50 p-8 rounded-xl space-y-6 border border-secondary-100">
          <h2 className="text-3xl font-bold text-secondary-900">
            Watering New Sod (The First 30 Days)
          </h2>
          <div className="prose prose-lg text-secondary-700 max-w-none">
            <p>
              The success of your investment falls almost entirely on one factor: <strong>Water</strong>.
              New sod has had its root system sliced short. It cannot seek out moisture on its own.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Days 1-14:</strong> The soil must be kept moist. This usually means watering daily, sometimes
                twice a day in extreme summer heat. The goal is to prevent the sod pads from shrinking or turning gray/blue
                (signs of wilt).
              </li>
              <li>
                <strong>Days 15-30:</strong> As the roots begin to knit into the soil (you can test this by gently
                tugging on a corner of a sod piece), you can begin to taper off the frequency.
              </li>
            </ul>
            <p className="mt-4 font-semibold text-primary-800">
              A Warning on Irrigation: A "quick shower" with a hose is rarely enough. We recommend a verified,
              functioning in-ground irrigation system or a rigorous schedule of heavy sprinkler usage to ensure deep saturation.
            </p>
          </div>
        </section>

        {/* Maintenance Note */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-secondary-900">
            Long-Term Maintenance
          </h2>
          <p className="text-lg text-secondary-700">
            We install your sod professionally to industry standards. Once established, maintenance is key to longevity.
            We recommend hiring a professional lawn care service to maintain the correct mowing height, fertilization schedule,
            and pest control program for your specific grass type.
          </p>
        </section>

        {/* Call to Action */}
        <div className="bg-primary-600 text-white rounded-xl p-10 flex flex-col gap-6 text-center">
          <h2 className="heading-lg">Ready for a Transformation?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get the expert advice your property deserves. Contact Jax Sod today for a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary bg-white text-primary-700 hover:text-primary-800">
              Get a Free Quote
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
