import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FiCalendar, FiClock, FiTag, FiArrowLeft } from 'react-icons/fi'

// --- ARTICLE DATA & CONTENT ---
interface Article {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  content: JSX.Element // Using JSX.Element for rich content paragraphs
  image: string
}

// 1. Centralized Article Data (The actual content for your blog posts)
const articlesData: Article[] = [
  {
    slug: 'benefits-of-professional-sod-installation',
    title: 'The Benefits of Professional Sod Installation vs. DIY',
    excerpt: 'Discover why professional sod installation delivers better results, saves time, and provides long-term value compared to DIY approaches.',
    date: '2024-10-15',
    category: 'Installation Tips',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1543336496-d419e7284b3d?q=80&w=1200&auto=format&fit=crop',
    content: (
      <>
        <p>While a DIY sod installation might seem like a cost-saving measure, the reality is that professional expertise significantly outweighs the perceived savings.</p>
        <p>A professional service, like Jax Sod, ensures that the three critical elements—soil preparation, seamless installation, and immediate care—are executed perfectly. This expertise minimizes the risk of costly failures, such as uneven patches, gaps, or poor rooting, which often plague amateur jobs. We guarantee tight seams, optimal soil contact, and the correct surface smoothing (not grading!) necessary for long-term lawn health.</p>
        <p>Furthermore, we handle the logistics of sourcing, transporting, and quickly laying the highly perishable sod. Choosing professional installation is choosing instant curb appeal and a healthy, durable lawn from day one.</p>
      </>
    ),
  },
  {
    slug: 'choosing-right-sod-florida',
    title: 'Choosing the Right Sod for Your Florida Lawn',
    excerpt: 'Learn about the best sod varieties for Florida\'s climate, including St. Augustine, Bahia, and Zoysia grass options.',
    date: '2024-10-08',
    category: 'Sod Types',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1598032895004-2f6c8df1424c?q=80&w=1200&auto=format&fit=crop',
    content: (
      <>
        <p>Florida's climate is unique, presenting challenges like intense sun, high humidity, and sandy soil. Choosing the wrong grass variety can mean years of struggling maintenance.</p>
        <h3 className="heading-sm mt-8 mb-4">Key Florida Sod Types:</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>St. Augustine:</strong> Excellent for coastal properties due to its salt tolerance and ability to thrive in partial shade. It requires consistent watering but creates a lush, plush feel.</li>
          <li><strong>Zoysia:</strong> Known for its dense, carpet-like appearance and resistance to heavy foot traffic. It's a premium choice that performs well in full sun and handles wear better than St. Augustine.</li>
          <li><strong>Bermuda:</strong> A sun-loving workhorse, ideal for wide-open commercial spaces or sports-friendly yards. It has rapid recovery but requires regular mowing and fertilization.</li>
          <li><strong>Bahia:</strong> The low-maintenance champion. Highly drought-tolerant and budget-friendly, making it great for large lots and utility areas where intensive care is not an option.</li>
        </ul>
        <p>Our team assesses your property's specific conditions (sun, shade, traffic) to recommend the perfect match.</p>
      </>
    ),
  },
  {
    slug: 'soil-preparation-for-sod',
    title: 'Proper Ground Preparation for Sod Installation',
    excerpt: 'The secret to a healthy, thriving lawn starts with proper ground preparation. Here\'s what you need to know.',
    date: '2024-09-30',
    category: 'Installation Tips',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1549492474-0ed05f63d6d0?q=80&w=1200&auto=format&fit=crop',
    content: (
      <>
        <p>Sod installation is only as successful as the surface it's laid upon. For Jacksonville, proper ground preparation is arguably the most critical step.</p>
        <h3 className="heading-sm mt-8 mb-4">Our Preparation Includes:</h3>
        <ol className="list-decimal pl-6 space-y-3">
          <li><strong>Old Turf Removal:</strong> Stripping the existing grass and weeds completely to eliminate competition for nutrients and moisture.</li>
          <li><strong>Surface Smoothing:</strong> Raking and rolling the area to create a smooth, firm, and uniform surface, ensuring the sod pieces fit snugly and make full contact with the soil. *We focus on surface smoothing, not deep-level land grading or engineering.*</li>
          <li><strong>Soil Amendment (if needed):</strong> While we do not add topsoil unless specified, we work with the existing base to optimize the rooting environment.</li>
        </ol>
        <p>This meticulous preparation prevents air pockets, which dry out new roots, and ensures the new lawn establishes quickly and evenly.</p>
      </>
    ),
  },
  {
    slug: 'new-sod-care-guide',
    title: 'Complete Care Guide for New Sod',
    excerpt: 'Master the art of establishing your new lawn. A comprehensive day-by-day guide to watering, mowing, and protecting your investment for the first 30 days and beyond.',
    date: '2024-09-22',
    category: 'Lawn Care',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1693776472225-be367ccf88b7?q=80&w=1200&auto=format&fit=crop',
    content: (
      <>
        <p>Congratulations on your new lawn! You have invested in an instant landscape upgrade that adds value and beauty to your property. However, the difference between a lawn that thrives for decades and one that fails in the first month comes down to one thing: <strong>care during the establishment period</strong>.</p>
        <p>When sod is harvested, the majority of its root system is cut off. It arrives at your home in a state of shock, with only a shallow layer of roots to support it. The first 30 days are a race against time to help the grass regenerate these roots into your native soil before the stored energy in the leaves runs out.</p>
        <p>This comprehensive guide goes beyond the basics, offering a detailed roadmap to ensure your new sod transitions from a fragile transplant to a permanent, resilient lawn.</p>

        <h3 className="heading-sm mt-8 mb-4">Phase 1: The Critical First 14 Days (Watering Focus)</h3>
        <p>Water is the single most critical variable. During this phase, you are not watering the soil deep down; you are keeping the sod pad and the top inch of soil wet. The roots are short, so the water needs to be right at the surface.</p>

        <h4 className="text-lg font-semibold mt-6 mb-2">Day 0: The "Soak-In"</h4>
        <p>The moment a piece of sod hits the ground, the clock starts ticking. You should not wait until the entire project is finished to start watering.</p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Immediate Action:</strong> As soon as a section (approx. 500 sq ft) is laid, water it.</li>
          <li><strong>Saturation Level:</strong> Water until the sod is "squishy" to the step. You want the water to penetrate through the sod pad and moisten the soil beneath. This eliminates air pockets and ensures the roots have immediate access to moisture.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-6 mb-2">Days 1-7: The "Life Support" Phase</h4>
        <p>For the first week, your goal is to never let the leaves dry out. If the leaves dry out, the plant shuts down root production to save energy, which is the opposite of what we want.</p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Frequency:</strong> Water 2 to 3 times per day.
            <ul className="list-circle pl-6 mt-1 text-sm text-secondary-600">
              <li><em>7:00 AM:</em> Heavy cycle (replace overnight moisture loss).</li>
              <li><em>12:00 PM:</em> Light cooling cycle (prevents midday wilt).</li>
              <li><em>3:00 PM:</em> Light cycle (ensures moisture for the evening).</li>
            </ul>
          </li>
          <li><strong>Duration:</strong> 15-20 minutes for rotary heads (large oscillating sprinklers) or 5-10 minutes for fixed spray heads.</li>
          <li><strong>Warning Signs:</strong> Look for "footprinting." If you walk on the grass and the blades don't spring back up, it's low on water. Also, watch for a blue-gray tint or curling leaves—these are distress signals requiring immediate hand-watering.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-6 mb-2">Days 8-14: Root Encouragement</h4>
        <p>By the second week, tiny white feeder roots should be initiating. Now we change tactics. We want to force those roots to go <em>down</em> to find water.</p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Frequency:</strong> Drop to once per day, strictly in the early morning (before 8 AM).</li>
          <li><strong>Duration:</strong> Increase the time to 30-45 minutes per zone. This "deep watering" pushes moisture further into the soil profile.</li>
          <li><strong>Why Morning?</strong> Watering in the evening leaves the grass wet all night, which is a perfect recipe for fungal diseases like Large Patch or Grey Leaf Spot, especially in Florida's humid climate.</li>
        </ul>

        <div className="bg-primary-50 p-6 border-l-4 border-primary-500 my-8 rounded-r-lg">
          <p className="font-bold text-lg text-primary-900 mb-2">Pro Tip: The Screwdriver Test</p>
          <p className="text-primary-800">Irrigation systems are not perfect. Wind can drift spray, and heads can get clogged. Don't assume; verify.</p>
          <p className="text-primary-800 mt-2">Take a 6-inch screwdriver and push it into the ground in various spots (especially corners and near driveways). It should slide in like it's going into butter. If you hit hard resistance, that spot is dry. Hand-water these "hot spots" immediately.</p>
        </div>

        <h3 className="heading-sm mt-8 mb-4">Phase 2: Weeks 3 & 4 (The Transition)</h3>
        <p>Congratulations, you've made it through the most dangerous period. Now we transition the lawn to "real world" conditions.</p>

        <h4 className="text-lg font-semibold mt-6 mb-2">The "Tug Test"</h4>
        <p>Before changing your routine, perform a tug test. Go to a few different areas, grab a handful of grass, and gently pull upwards. You should feel significant resistance, meaning the roots have anchored into the soil. If the sod lifts up like a carpet, continue the Day 8-14 watering schedule for another week.</p>

        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Watering Schedule:</strong> Switch to every other day (3-4 days a week).</li>
          <li><strong>Volume:</strong> Maintain the deep watering duration (45+ minutes). Shallow, frequent watering creates a "lazy" root system that stays near the surface, making your lawn vulnerable to drought later.</li>
          <li><strong>Observation:</strong> Continue to monitor for hot spots. Concrete driveways reflect heat, so the grass bordering them often dries out faster than the center of the lawn.</li>
        </ul>

        <h3 className="heading-sm mt-8 mb-4">Mowing: The First Cut</h3>
        <p>Mowing is traumatic for grass. It reduces the leaf surface area available for photosynthesis. For new sod, it can be disastrous if done too early.</p>

        <h4 className="text-lg font-semibold mt-6 mb-2">When to Mow</h4>
        <p>Wait at least 3 weeks (21 days). Do not mow until your "tug test" confirms the sod is firmly rooted. If the roots aren't set, the suction from the mower can lift the sod right off the ground, destroying your progress.</p>

        <h4 className="text-lg font-semibold mt-6 mb-2">Best Practices for the First Mow</h4>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Height Matters:</strong> Set your mower to the <em>highest possible setting</em>. You are just giving it a light trim. Scalping new sod causes shock and exposes the soil to sunlight, encouraging weed seeds to germinate.</li>
          <li><strong>Sharp Blades Only:</strong> A dull blade tears the grass rather than slicing it. This leaves ragged tips that turn brown and become entry points for disease. If your blade hasn't been sharpened this season, do it before touching your new sod.</li>
          <li><strong>The 1/3rd Rule:</strong> Never remove more than 1/3rd of the grass blade at once. If the grass has grown to 6 inches, don't cut it lower than 4 inches. If you need to go lower, wait 3 days and mow again.</li>
          <li><strong>Bag vs. Mulch:</strong> For the first few mows, bag the clippings. Heavy clumps of wet grass left on the surface can smother the young sod underneath.</li>
        </ul>

        <h3 className="heading-sm mt-8 mb-4">Traffic and Compaction</h3>
        <p>It is tempting to run out and play on the new green carpet, but the soil underneath is soft and muddy from the heavy watering schedule.</p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Stay Off:</strong> Keep foot traffic to an absolute minimum for the first 3 weeks. Walking on saturated soil causes compaction, which squeezes out the oxygen pockets that roots need to survive.</li>
          <li><strong>Pet Control:</strong> This is crucial. Large dogs running can tear the seams apart. Furthermore, dog urine is high in nitrogen and salts, which will instantly burn the tender new grass. Walk pets elsewhere or hose down the spot immediately after they go.</li>
        </ul>

        <h3 className="heading-sm mt-8 mb-4">Fertilization & Chemicals: The Waiting Game</h3>
        <p>A common mistake is "loving the lawn to death" with too many products.</p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>No Nitrogen Yet:</strong> Your sod was likely fertilized at the farm before harvest. Adding high-nitrogen fertilizer to a rootless plant causes leaf growth at the expense of root growth. Wait at least 30 to 60 days before the first light feeding.</li>
          <li><strong>Ban the Herbicides:</strong> Do not use weed killers, crabgrass preventers, or "Weed and Feed" products for at least 3 months. These chemicals work by inhibiting plant growth—exactly what you don't want right now. Hand-pull any weeds that pop up in the seams.</li>
        </ul>

        <h3 className="heading-sm mt-8 mb-4">Troubleshooting Common Issues</h3>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-secondary-900">Problem: Brown/Yellow Edges at the Seams</p>
            <p><strong>Diagnosis:</strong> Underwatering. The edges of the sod roll are the first to dry out.</p>
            <p><strong>Solution:</strong> Increase watering time and hand-water the seams. Walk the lines to press them down if they have curled up.</p>
          </div>
          <div>
            <p className="font-semibold text-secondary-900">Problem: Sod feels mushy, smells like rotten eggs, or has black slime at the base.</p>
            <p><strong>Diagnosis:</strong> Overwatering / Poor Drainage. The roots are drowning and rotting.</p>
            <p><strong>Solution:</strong> Skip a watering cycle. Let the surface dry out slightly. Ensure your sprinklers aren't overlapping too heavily in that spot.</p>
          </div>
          <div>
            <p className="font-semibold text-secondary-900">Problem: Circular brown patches that expand rapidly.</p>
            <p><strong>Diagnosis:</strong> Fungus (likely Brown Patch or Grey Leaf Spot), often caused by watering late in the evening.</p>
            <p><strong>Solution:</strong> Switch watering to early morning only. You may need a fungicide application—consult a professional before applying.</p>
          </div>
        </div>

        <p className="mt-8 p-4 bg-secondary-100 rounded-lg text-secondary-800 italic">
          Remember: Sod is a living product. No two lawns are identical. Monitor your grass daily, adjust based on the weather (skip watering if it rains heavily!), and give it the time it needs to establish. A little patience now guarantees a stunning lawn for years to come.
        </p>
      </>
    ),
  },
  {
    slug: 'when-to-install-sod-florida',
    title: 'Best Time to Install Sod in Jacksonville',
    excerpt: 'Timing matters when installing sod. Learn about the best seasons for sod installation in Northeast Florida.',
    date: '2024-09-15',
    category: 'Installation Tips',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1506087965909-548c783c501f?q=80&w=1200&auto=format&fit=crop',
    content: (
      <>
        <p>The best time to install sod in Northeast Florida is during the **Spring (March to May)** and **Early Fall (September to October)**. These seasons offer warmer soil temperatures for quick rooting without the intense heat stress of deep summer.</p>
        <p>However, sod can technically be installed year-round in Florida. If installing in summer, expect higher water bills and more intense monitoring to prevent wilting. If installing in winter, rooting will be slower, but there is less risk of burning the new grass.</p>
        <p>The key is rapid installation, regardless of the season. The sooner the sod is laid on prepared soil and watered, the better its chances of success.</p>
      </>
    ),
  },
  {
    slug: 'sod-cost-factors',
    title: 'Understanding Sod Installation Costs',
    excerpt: 'What factors affect the cost of sod installation? A transparent look at pricing from site preparation to final installation.',
    date: '2024-09-08',
    category: 'Planning',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1582236314815-467464010a37?q=80&w=1200&auto=format&fit=crop',
    content: (
      <>
        <p>The cost of sod installation depends on several key variables, not just the square footage of the sod itself:</p>
        <h3 className="heading-sm mt-8 mb-4">Pricing Factors:</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Sod Variety:</strong> Premium grasses like Zoysia typically cost more per pallet than standard St. Augustine or Bahia.</li>
          <li><strong>Site Accessibility:</strong> Properties requiring long wheelbarrow runs from the street, or properties with challenging access, increase labor time and cost.</li>
          <li><strong>Current Ground Condition:</strong> If the existing lawn is heavily overgrown or requires extensive debris removal, the preparation cost will be higher.</li>
          <li><strong>Quantity:</strong> Like most raw materials, sod is cheaper per square foot when purchased in high volume for large commercial jobs.</li>
        </ul>
        <p>We provide comprehensive, fixed-price quotes after a detailed site assessment so you know the full cost upfront, with no surprises.</p>
      </>
    ),
  },
  {
    slug: 'commercial-vs-residential-sod',
    title: 'Commercial vs. Residential Sod Installation: Key Differences',
    excerpt: 'How large-scale commercial sod installation differs from residential projects in scope, planning, and execution.',
    date: '2024-09-01',
    category: 'Commercial',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1574360341763-7186193796d8?q=80&w=1200&auto=format&fit=crop',
    content: (
      <>
        <p>While the actual act of laying sod is the same, commercial projects involve significant differences in logistics and planning compared to residential work.</p>
        <h3 className="heading-sm mt-8 mb-4">Commercial Considerations:</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>**Scale and Equipment:** Commercial sites often require specialized equipment for large volumes of sod and a significantly larger crew for faster completion.</li>
          <li>**Traffic and Durability:** Sod choice focuses heavily on durability, requiring high-traffic varieties like Bermuda or tough Zoysias suitable for common areas and parking lot medians.</li>
          <li>**Coordination:** We work closely with general contractors, project managers, and HOA boards to meet strict timelines and site rules.</li>
          <li>**Permitting and Access:** Navigating commercial site logistics often involves coordinating large deliveries and managing public access/safety during installation.</li>
        </ul>
        <p>Jax Sod has decades of experience managing the complexity and scale required for successful commercial landscaping projects.</p>
      </>
    ),
  },
  {
    slug: 'sod-vs-seed',
    title: 'Sod vs. Seed: Which is Right for Your Property?',
    excerpt: 'Compare the pros and cons of sod installation versus seeding to determine the best choice for your lawn.',
    date: '2024-08-25',
    category: 'Planning',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1579893457597-94a319f390d4?q=80&w=1200&auto=format&fit=crop',
    content: (
      <>
        <p>When starting a new lawn, the choice is typically between laying sod or sowing seed. For most Jacksonville homeowners looking for instant results, sod is the clear winner.</p>
        <h3 className="heading-sm mt-8 mb-4">Why Sod Often Wins in Florida:</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>**Instant Lawn:** Sod provides a mature, complete lawn immediately, offering instant curb appeal. Seed requires months of dedicated care before reaching maturity.</li>
          <li>**Weed Resistance:** Sod, when laid correctly, immediately creates a dense barrier against weeds, whereas seed is highly vulnerable to weed invasion during germination.</li>
          <li>**Erosion Control:** Sod locks the soil into place immediately, making it the best choice for properties on slopes or areas prone to heavy rain.</li>
        </ul>
        <p>While seeding is cheaper initially, the labor, risk of failure, and time commitment often make sod a better long-term investment.</p>
      </>
    ),
  },
  {
    slug: 'erosion-control-with-sod',
    title: 'Using Sod for Erosion Control',
    excerpt: 'How professional sod installation can solve erosion problems on slopes and challenging terrain.',
    date: '2024-08-18',
    category: 'Solutions',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1522031758509-08a632c021ed?q=80&w=1200&auto=format&fit=crop',
    content: (
      <>
        <p>In areas of Northeast Florida with slopes, heavy rain runoff, or loose, sandy soil, erosion is a significant issue. Sod is one of the most effective and instant solutions for stabilizing exposed ground.</p>
        <p>Unlike seed, which can wash away before germination, sod provides an immediate, solid root mat that binds the soil. We install the sod in a strategic, offset pattern across slopes, using stakes if necessary, to ensure the new lawn acts as a protective blanket against surface runoff.</p>
        <p>When dealing with erosion, proper preparation is still key, focusing on light surface smoothing to prevent water channeling before the sod is laid.</p>
      </>
    ),
  },
]

// 2. Function to retrieve the article data by slug
const getArticleBySlug = (slug: string): Article | undefined => {
  return articlesData.find((article) => article.slug === slug)
}

// 3. Dynamic Metadata Generation (Essential for SEO of individual articles)
type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {}
  }

  return {
    title: article.title,
    description: article.excerpt,
    keywords: `${article.category}, ${article.title}, sod installation, Jacksonville, Florida`,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url: `https://jaxsod.com/articles/${article.slug}`,
    },
  }
}

// 4. Component to render the individual article page
export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="bg-secondary-50 min-h-screen">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Image */}
          <div className="relative h-64">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Area */}
          <div className="p-8 md:p-12">
            {/* Metadata Badges */}
            <div className="flex items-center space-x-4 mb-4 text-sm text-secondary-600">
              <div className="flex items-center gap-1">
                <FiCalendar className="text-primary-600" />
                <span>{new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}</span>
              </div>
              <div className="flex items-center gap-1">
                <FiClock className="text-primary-600" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <FiTag className="text-primary-600" />
                <span>{article.category}</span>
              </div>
            </div>

            {/* Title & Excerpt */}
            <h1 className="heading-lg mb-6 text-secondary-900">{article.title}</h1>
            <p className="text-xl italic text-secondary-700 border-l-4 border-primary-300 pl-4 mb-8">
              {article.excerpt}
            </p>

            {/* Article Content */}
            <div className="prose max-w-none text-secondary-800 leading-relaxed space-y-6">
              {article.content}
            </div>

            {/* Author/CTA Box */}
            <div className="mt-12 p-6 bg-primary-50 rounded-lg border border-primary-200">
                <h3 className="text-xl font-bold text-primary-800 mb-3">Ask the Experts at Jax Sod</h3>
                <p className="text-secondary-700 mb-4">
                  Need personalized advice about your sod installation? Contact our team of specialists directly.
                </p>
                <Link href="/contact" className="btn-primary">
                  Get a Free Quote
                </Link>
            </div>

            {/* Back Link */}
            <div className="mt-8">
                <Link href="/articles" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-800 transition-colors">
                    <FiArrowLeft />
                    Back to All Articles
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
