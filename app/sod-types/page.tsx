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
          <h1 className="heading-xl">The Ultimate Guide to Jacksonville Sod: Choosing the Right Grass for North Florida</h1>
          <p className="text-xl text-secondary-700 leading-relaxed">
            Selecting the perfect sod is one of the most important investments you can make for your property.
            In Jacksonville, our unique climate—blazing summers, high humidity, salt air, and occasional cold snaps—means
            classic northern grasses just won't cut it. To get a lawn that thrives, you need to match the specific
            grass variety to your property's sunlight, soil type, and your personal maintenance preferences.
          </p>
          <p className="text-lg text-secondary-700">
            At Jax Sod, we don't just drop off pallets; we help you navigate these choices. Below is our comprehensive
            guide to the four major sod families we install across Northeast Florida: St. Augustine, Zoysia, Bermuda, and Bahia.
          </p>
        </div>

        {/* Feature Image */}
        <div className="overflow-hidden rounded-xl shadow-md border border-secondary-100">
          <Image
            src={sodTypesImage}
            alt="Lush green St. Augustine sod installed in a Jacksonville backyard"
            width={1400}
            height={700}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* SOD TYPE 1: St. Augustine */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-secondary-900 border-b border-secondary-200 pb-4">
            1. St. Augustine Grass: The Florida Standard
          </h2>
          <div className="prose prose-lg text-secondary-700 max-w-none">
            <p>
              St. Augustine is arguably the most popular grass choice for Jacksonville homeowners. Its broad, flat blades
              create a lush, dark green carpet that feels dense and spongy underfoot. It loves the heat and humidity of
              our coastal climate and has excellent salt tolerance, making it ideal for homes in Jacksonville Beach,
              Ponte Vedra, and Atlantic Beach.
            </p>
            <h3 className="text-2xl font-semibold text-secondary-800 mt-6">Varieties Matter: Floratam vs. Seville</h3>
            <p>
              Not all St. Augustine is the same. The two most common cultivars we encounter are **Floratam** and **Seville**,
              and confusing them can lead to disappointing results.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Floratam:</strong> This is the "King of the South." It is robust, aggressive, and requires
                <strong> full sun</strong> (at least 6-8 hours daily). Floratam has been engineered to resist common viral
                issues like SAD (St. Augustine Decline) and is somewhat more resistant to chinch bugs than older varieties.
                However, it has <em>zero</em> tolerance for shade. If you plant Floratam under a large oak tree, it will thin out and die.
              </li>
              <li>
                <strong>Seville:</strong> If you have a yard with moderate shade from large trees or fences, Seville is your
                problem-solver. It is a "dwarf" variety with a slightly finer texture and lighter green hue. Most importantly,
                it has the best shade tolerance of the St. Augustine family. It typically thrives with as little as 4 hours
                of sunlight, making it the go-to choice for established Jacksonville neighborhoods with canopy roads.
              </li>
            </ul>
            <p className="mt-4">
              <strong>Maintenance Profile:</strong> St. Augustine grows vigorously in the summer and typically requires mowing
              every 5-7 days. It prefers a high cut (3-4 inches), which helps shade the soil and retain moisture.
            </p>
          </div>
        </section>

        {/* SOD TYPE 2: Zoysia */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-secondary-900 border-b border-secondary-200 pb-4">
            2. Zoysia Grass: The "Barefoot" Luxury Choice
          </h2>
          <div className="prose prose-lg text-secondary-700 max-w-none">
            <p>
              If St. Augustine is the workhorse, Zoysia is the luxury vehicle. In recent years, Zoysia has exploded in popularity
              among Jacksonville homeowners looking for that "golf course" look. It has a finer blade than St. Augustine
              and grows incredibly effectively laterally, creating a dense, carpet-like mat that naturally chokes out weeds.
            </p>
            <p>
              One of the main selling points of Empire Zoysia or similar cultivars is the "barefoot feel." It is soft and
              doesn't itch, making it perfect for families with young children or pets who play in the yard.
            </p>
            <h3 className="text-2xl font-semibold text-secondary-800 mt-6">The Cost of Luxury</h3>
            <p>
              It is important to note that Zoysia is typically a higher price point option compared to St. Augustine.
              The pallet cost is generally higher, but many homeowners find the investment worth it for the aesthetic appeal.
            </p>
            <p>
              It is heavily advertised as "maintenance-free," but that is a myth. While it is drought-tough once established,
              Zoysia still needs water. In fact, if Zoysia gets too parched, it will go dormant and turn brown as a defense mechanism
              quicker than other grasses (though it usually bounces back). It also requires a sharp mower blade; the grass
              fibers are tough, and a dull blade will tear the grass tips, leaving a white/brown haze over the lawn.
            </p>
          </div>
        </section>

        {/* SOD TYPE 3: Bermuda */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-secondary-900 border-b border-secondary-200 pb-4">
            3. Bermuda Grass: The Athlete's Turf
          </h2>
          <div className="prose prose-lg text-secondary-700 max-w-none">
            <p>
              Bermuda grass is the alpha species of sports fields and golf courses. It is built for abuse.
              If you have three large dogs that run wind sprints in your backyard all day, standard St. Augustine will
              likely get torn up. Bermuda, however, has an aggressive root structure (rhizomes and stolons) that allows
              it to recover from damage faster than almost any other warm-season grass.
            </p>
            <h3 className="text-2xl font-semibold text-secondary-800 mt-6">High Maintenance Required</h3>
            <p>
              The catch with Bermuda is maintenance. It is not a "plant it and forget it" grass. To look like a golf course
              fairway, it needs to be mowed very low and very often—sometimes twice a week during peak summer growth.
            </p>
            <p>
              It also has high nutritional needs, requiring regular fertilizer to maintain that deep green color.
              If you neglect Bermuda, it tends to look thin and stringy. But for the homeowner who loves working in the
              yard and wants a manicured, high-performance turf, it is unbeatable. Note: Bermuda requires <strong>full, unfiltered sun</strong>.
              It has very poor shade tolerance.
            </p>
          </div>
        </section>

        {/* SOD TYPE 4: Bahia */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-secondary-900 border-b border-secondary-200 pb-4">
            4. Bahia Grass: The Rural Workhorse
          </h2>
          <div className="prose prose-lg text-secondary-700 max-w-none">
            <p>
              Bahia is the utility player of Florida grasses. You likely recognize it from roadsides and pastures.
              It is not designed to be a "show lawn" grass. It has a lighter green color, an open growth habit, and
              produces distinctive "V-shaped" seed heads that pop up quickly after mowing.
            </p>
            <h3 className="text-2xl font-semibold text-secondary-800 mt-6">Why Choose Bahia?</h3>
            <p>
              So why do people install it? <strong>Durability and price.</strong> Bahia is excellent for large lots (1 acre+),
              rural properties, or roadsides where irrigation is non-existent. It has a deep root system that makes it incredibly
              drought-tolerant. It can survive on natural rainfall alone in Jacksonville once established.
            </p>
            <p>
              It is also the most budget-friendly sod per pallet. If you are trying to cover a large area to prevent
              erosion and don't need a manicured look, Argentine Bahia is the standard choice. We typically assume
              Bahia installations will not have in-ground irrigation systems.
            </p>
          </div>
        </section>

        {/* COMMON PROBLEMS */}
        <section className="bg-secondary-50 p-8 rounded-xl space-y-6 border border-secondary-100">
          <h2 className="text-3xl font-bold text-secondary-900">
            Common Jacksonville Lawn Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-secondary-700">
            <div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Chinch Bugs</h3>
              <p>
                The arch-nemesis of St. Augustine grass. These tiny insects suck the moisture out of the grass blades,
                leaving behind dry, yellow patches that look like drought damage. They love hot, dry spots near driveways.
                We recommend preventative pest control, especially in summer.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Salt Tolerance</h3>
              <p>
                If you live "beaches side" (Atlantic Beach, Neptune, Jax Beach), salt spray is a real factor.
                St. Augustine is your best bet here. Zoysia has moderate tolerance, while Bahia might struggle if the
                soil salinity is too high.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Watering Rules</h3>
              <p>
                New sod <strong>MUST</strong> be watered. For the first 14-21 days, the soil needs to be kept moist while roots establish.
                After that, Jacksonville follows strict St. Johns River Water Management District rules (usually 1-2 days per week depending on the season).
                Deep, infrequent watering promotes deep roots!
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-primary-600 text-white rounded-xl p-10 flex flex-col gap-6 text-center">
          <h2 className="heading-lg">Not sure which grass is right for you?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            You don't have to guess. Our experts can walk your property, measure the shade levels, test the soil,
            and recommend the perfect variety for your specific home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary bg-white text-primary-700 hover:text-primary-800">
              Schedule On-Site Consult
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
