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
    excerpt: 'Essential watering, mowing, and maintenance tips for the first 30 days after sod installation.',
    date: '2024-09-22',
    category: 'Lawn Care',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1588722955523-289c4456570c?q=80&w=1200&auto=format&fit=crop',
    content: (
      <>
        <p>The first month is crucial for your new sod. The primary focus must be on **watering** to establish a deep root system. We will provide a custom watering schedule, but generally, you need to water heavily immediately after installation, and then frequently (but less volume) for the first 7-14 days.</p>
        <h3 className="heading-sm mt-8 mb-4">First 30 Days Checklist:</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>**Watering:** Keep the sod and the underlying soil moist (not saturated) at all times. Check corners and edges, as these dry out fastest.</li>
          <li>**Traffic:** Avoid all traffic—walking, playing, or mowing—for at least 2 to 3 weeks until the roots are firmly anchored.</li>
          <li>**First Mow:** After 3 weeks, you can perform the first mow, setting your mower blade high. Only trim the top third of the blade.</li>
          <li>**Fertilization:** Avoid fertilizing until the sod is fully rooted (usually after 30 days or based on our custom plan).</li>
        </ul>
        <p>Following this initial care plan is the key to transitioning from instant lawn to permanent landscape.</p>
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
