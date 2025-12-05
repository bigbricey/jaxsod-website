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
          <h1 className="heading-xl">The Complete Guide to Sod Types for Jacksonville, FL Lawns</h1>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary-800">Choosing the Right Grass for North Florida's Climate</h2>
            <p className="text-xl text-secondary-700 leading-relaxed">
              Living in Jacksonville (Zone 9a/9b) presents a unique challenge for lawns. We don't have the tropical consistency of Miami,
              but we certainly aren't Georgia either. Our lawns have to survive blazing summer heat, sandy soil that drains nutrients quickly,
              salt spray at the beaches, and the occasional freeze in January.
            </p>
            <p className="text-lg text-secondary-700">
              At Jax Sod, we believe in using the right tool for the job. You can't just throw "cheap grass" on a shady lawn and expect it to live.
              Below is our definitive guide to the proven sod varieties that actually work in Northeast Florida.
            </p>
          </section>
        </div>

        {/* Feature Image */}
        <div className="overflow-hidden rounded-xl shadow-md border border-secondary-100">
          <Image
            src={sodTypesImage}
            alt="St. Augustine Floratam sod installed on a sunny Jacksonville lawn"
            width={1400}
            height={700}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* SOD TYPE 1: St. Augustine */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-secondary-900 border-b border-secondary-200 pb-4">
            St. Augustine Grass: The King of Jacksonville Lawns
          </h2>
          <div className="prose prose-lg text-secondary-700 max-w-none space-y-6">
            <p>
              St. Augustine is the standard for a reason. It produces that thick, blue-green blade that feels lush to walk on.
              Critically, quality St. Augustine (like Floratam and Palmetto) is grown on a <strong>muck base</strong>. This organic,
              nutrient-rich soil layer travels with the sod, giving it a moisture "safety net" that helps it establish faster than
              sand-based grasses.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">Floratam St. Augustine</h3>
              <p className="mb-4"><em>The standard for full sun.</em></p>
              <p>
                Floratam is the "Florida Standard." It is aggressive, robust, and loves the heat.
                However, it has strict sunlight requirements. <strong>Floratam needs 8-10 hours of sunlight daily.</strong>
                If you put Floratam in a shady corner, it will thin out and die. It's that simple.
              </p>
              <p className="mt-2">
                <strong>Best For:</strong> Wide open backyards, new construction with few trees, and full-sun front lawns.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">Palmetto St. Augustine</h3>
              <p className="mb-4"><em>The superior choice for shade.</em></p>
              <p>
                When a yard has oak trees or privacy fences casting shadows, we switch to Palmetto (often referred to generically as "shade sod").
                Unlike the harder-to-get Seville allowing for special orders, Palmetto is a reliable, proven performer in Northeast Florida.
                It maintains excellent color and, most importantly, can survive on <strong>6-8 hours of sunlight</strong>.
              </p>
              <p className="mt-2">
                <strong>Why we use it:</strong> It has a slightly finer texture than Floratam but still retains that classic St. Augustine look.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Critical Care: Chinch Bugs</h3>
              <p>
                The #1 enemy of St. Augustine in Jacksonville is the Chinch Bug. These pests love hot, dry patches (often near driveways)
                and suck the life out of the grass. We strongly recommend a preventative pest control plan, especially during the dry summer months.
              </p>
            </div>
          </div>
        </section>

        {/* SOD TYPE 2: Zoysia */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-secondary-900 border-b border-secondary-200 pb-4">
            Zoysia Grass: The "Golf Course" Look
          </h2>
          <div className="prose prose-lg text-secondary-700 max-w-none space-y-6">
            <p>
              Zoysia is gaining massive popularity for its carpet-like feel and "barefoot" softness. Unlike St. Augustine,
              <strong>Zoysia is a sand-based sod</strong>.
            </p>

            <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
              <h3 className="text-xl font-bold text-primary-800 mb-2">A Surprising Performer in Shade</h3>
              <p>
                While often touted for sun, we've seen Zoysia thrive in surprisingly shady areas where other grasses failed.
                We've installed it in yards with heavy oak canopies where it out-performed traditional options.
                Empire Zoysia, in particular, has robust chinch bug resistance compared to St. Augustine.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-secondary-900 mt-6">St. Augustine vs. Zoysia: The Breakdown</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-secondary-200">
                    <th className="py-3 font-bold text-secondary-900">Feature</th>
                    <th className="py-3 font-bold text-secondary-900">St. Augustine</th>
                    <th className="py-3 font-bold text-secondary-900">Empire Zoysia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-secondary-100">
                  <tr>
                    <td className="py-3 text-secondary-700">Feel</td>
                    <td className="py-3 text-secondary-700">Thick, spongy</td>
                    <td className="py-3 text-secondary-700">Soft, carpet-like</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-secondary-700">Base Soil</td>
                    <td className="py-3 text-secondary-700">Muck (Organic)</td>
                    <td className="py-3 text-secondary-700">Sand</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-secondary-700">Installation</td>
                    <td className="py-3 text-secondary-700">Seams disappear in ~3 weeks</td>
                    <td className="py-3 text-secondary-700">Tight seams, takes longer to blend</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-secondary-700">Mowing</td>
                    <td className="py-3 text-secondary-700">High setting (3-4")</td>
                    <td className="py-3 text-secondary-700">Lower setting, requires sharp blade</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SOD TYPE 3: Bermuda */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-secondary-900 border-b border-secondary-200 pb-4">
            Bermuda Grass: For High-Traffic & Sport Families
          </h2>
          <div className="prose prose-lg text-secondary-700 max-w-none">
            <p>
              Bermuda is the choice for durability. If you have big dogs or kids playing soccer, St. Augustine will eventually wear down.
              Bermuda has aggressive rhizomes that repair damage quickly.
            </p>
            <h3 className="text-xl font-bold text-secondary-900 mt-4">The "High Maintenance" Warning</h3>
            <p>
              Bermuda is not for the "lazy" lawn owner. It looks best when mowed low and often—sometimes twice a week in summer.
              It is also sand-based and needs a specific installation pattern, as the seams can be visible for months if not
              laid expertly with a focus on tight joints. It requires <strong>full sun</strong> and has poor shade tolerance.
            </p>
          </div>
        </section>

        {/* SOD TYPE 4: Bahia */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-secondary-900 border-b border-secondary-200 pb-4">
            Bahia Grass: The Budget-Friendly Option
          </h2>
          <div className="prose prose-lg text-secondary-700 max-w-none">
            <p>
              Let's be honest: Bahia is basically a weed that we learned to live with. It is the grass you see on the side of I-95 in Jacksonville.
            </p>
            <p>
              It falls apart when you handle it, it comes with weeds in it naturally, and it looks distinctively "rural."
              So why do we sell it? <strong>Because it survives without irrigation.</strong>
            </p>
            <p>
              If you have a 1-acre lot, a retention pond bank, or a rental property where you know nobody is going to water it, Bahia is the answer.
              It sets down deep roots and survives on rainfall and "cow pasture" conditions. Just don't expect it to look like a manicured lawn.
            </p>
          </div>
        </section>

        {/* MAINTENANCE CALENDAR */}
        <section className="bg-secondary-50 p-8 rounded-xl space-y-6 border border-secondary-100">
          <h2 className="text-3xl font-bold text-secondary-900">
            Seasonal Maintenance Checklist for Jacksonville
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-secondary-700">
            <div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Spring (March-May)</h3>
              <p>
                <strong>Wake Up:</strong> As soil temps rise, the grass wakes up. This is time for a "weed and feed" pre-emergent to stop weeds before summer rain hits.
                Watch out for late frosts!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Summer (June-Sept)</h3>
              <p>
                <strong>Pest Defense:</strong> This is Chinch Bug and Sod Webworm season.
                <strong>Fungus:</strong> With our humidity, Grey Leaf Spot can appear. Don't water in the evenings; let the grass dry out before nightfall.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Winter Dormancy</h3>
              <p>
                <strong>Brown is Normal:</strong> In Jacksonville, warm-season grasses go dormant (turn brown) after the first freeze.
                <strong>Do NOT Fertilize:</strong> You will just feed winter weeds. Let the lawn sleep until March.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-secondary-900 border-b border-secondary-200 pb-4">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <h3 className="font-bold text-lg text-secondary-900 mb-2">What is the best grass for shade in Jacksonville?</h3>
              <p className="text-secondary-700">
                Palmetto St. Augustine is the proven winner. It handles the filtered light under our oak canopies better than Floratam.
                Zoysia is also a surprisingly strong contender for shady spots.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <h3 className="font-bold text-lg text-secondary-900 mb-2">Can I lay sod in the winter?</h3>
              <p className="text-secondary-700">
                Yes! In fact, roots continue to establish even when the top growth is dormant.
                You actually need to water <em>less</em> in winter, making it an easier installation for some homeowners.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <h3 className="font-bold text-lg text-secondary-900 mb-2">How much does a pallet of sod cost in Jax?</h3>
              <p className="text-secondary-700">
                Prices fluctuate seasonally and by fuel costs. Generally, Bahia is the cheapest, followed by Floratam St. Augustine,
                with Zoysia and Palmetto being premium options. <Link href="/contact" className="text-primary-600 underline">Contact us for today's pricing.</Link>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <h3 className="font-bold text-lg text-secondary-900 mb-2">What happens if I don't water new sod?</h3>
              <p className="text-secondary-700">
                It dies. Quickly. Muck-based sod (St. Augustine) has a small buffer, but sand-based sod (Zoysia/Bermuda) can dry out in a single hot afternoon if not watered immediately upon installation.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-primary-600 text-white rounded-xl p-10 flex flex-col gap-6 text-center">
          <h2 className="heading-lg">Get the Right Grass for Your Property</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Don't guess with your investment. We know exactly which varieties work in Atlantic Beach sand versus Mandarin loam.
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
