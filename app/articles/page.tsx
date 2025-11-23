import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Link from 'next/link'
import { FiCalendar, FiArrowRight } from 'react-icons/fi'

export const metadata: Metadata = {
    title: 'Sod Installation Articles & Tips | Jax Sod Jacksonville',
    description: 'Expert sod installation tips, lawn care advice, and best practices from Jacksonville\'s sod specialists. 37+ years of experience helping homeowners create beautiful lawns.',
    keywords: 'sod installation tips, lawn care advice Jacksonville, sod maintenance guide, best sod for Florida, sod installation guide, lawn care blog',
    openGraph: {
          title: 'Sod Installation Tips & Expert Advice | Jax Sod',
          description: 'Expert insights and practical advice from 37+ years of sod installation experience in Jacksonville.',
          type: 'website',
          locale: 'en_US',
          siteName: 'Jax Sod',
    },
}
interface Article {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
}

const articles: Article[] = [
  {
    slug: 'benefits-of-professional-sod-installation',
    title: 'The Benefits of Professional Sod Installation vs. DIY',
    excerpt: 'Discover why professional sod installation delivers better results, saves time, and provides long-term value compared to DIY approaches.',
    date: '2024-10-15',
    category: 'Installation Tips',
    readTime: '5 min read',
  },
  {
    slug: 'choosing-right-sod-florida',
    title: 'Choosing the Right Sod for Your Florida Lawn',
    excerpt: 'Learn about the best sod varieties for Florida\'s climate, including St. Augustine, Bahia, and Zoysia grass options.',
    date: '2024-10-08',
    category: 'Sod Types',
    readTime: '7 min read',
  },
  {
    slug: 'soil-preparation-for-sod',
    title: 'Proper Ground Preparation for Sod Installation',
    excerpt: 'The secret to a healthy, thriving lawn starts with proper ground preparation. Here\'s what you need to know.',
    date: '2024-09-30',
    category: 'Installation Tips',
    readTime: '6 min read',
  },
  {
    slug: 'new-sod-care-guide',
    title: 'Complete Care Guide for New Sod',
    excerpt: 'Essential watering, mowing, and maintenance tips for the first 30 days after sod installation.',
    date: '2024-09-22',
    category: 'Lawn Care',
    readTime: '8 min read',
  },
  {
    slug: 'when-to-install-sod-florida',
    title: 'Best Time to Install Sod in Jacksonville',
    excerpt: 'Timing matters when installing sod. Learn about the best seasons for sod installation in Northeast Florida.',
    date: '2024-09-15',
    category: 'Installation Tips',
    readTime: '5 min read',
  },
  {
    slug: 'sod-cost-factors',
    title: 'Understanding Sod Installation Costs',
    excerpt: 'What factors affect the cost of sod installation? A transparent look at pricing from site preparation to final installation.',
    date: '2024-09-08',
    category: 'Planning',
    readTime: '6 min read',
  },
  {
    slug: 'commercial-vs-residential-sod',
    title: 'Commercial vs. Residential Sod Installation: Key Differences',
    excerpt: 'How large-scale commercial sod installation differs from residential projects in scope, planning, and execution.',
    date: '2024-09-01',
    category: 'Commercial',
    readTime: '7 min read',
  },
  {
    slug: 'sod-vs-seed',
    title: 'Sod vs. Seed: Which is Right for Your Property?',
    excerpt: 'Compare the pros and cons of sod installation versus seeding to determine the best choice for your lawn.',
    date: '2024-08-25',
    category: 'Planning',
    readTime: '6 min read',
  },
  {
    slug: 'erosion-control-with-sod',
    title: 'Using Sod for Erosion Control',
    excerpt: 'How professional sod installation can solve erosion problems on slopes and challenging terrain.',
    date: '2024-08-18',
    category: 'Solutions',
    readTime: '5 min read',
  },
]

export default function ArticlesPage() {
  return (
    <>
      <Hero
        title="Sod Installation Tips & Expert Advice"
        subtitle="Articles & Resources"
        description="Learn from Jacksonville's sod installation experts. Discover tips, tricks, and best practices for beautiful, healthy lawns."
        ctaText="Get Free Quote"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2000"
        height="medium"
      />

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Latest Articles</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Expert insights and practical advice from 37+ years of sod installation experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                      {article.category}
                    </span>
                    <span className="text-secondary-500">{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-secondary-900 leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-secondary-600 mb-4 leading-relaxed">{article.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-secondary-200">
                    <div className="flex items-center gap-2 text-sm text-secondary-500">
                      <FiCalendar />
                      <time dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>

                    {/* CORRECTED LINK HERE: */}
                    <Link 
                      href={`/articles/${article.slug}`} 
                      className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center gap-2"
                    >
                      Read More
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* REMOVED the "Note: Individual article pages are coming soon" placeholder */}
          <div className="mt-12 text-center">
             <Link href="/contact" className="btn-primary inline-block">
                Contact Us with Questions
              </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Article Categories</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Browse articles by topic
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-3xl font-bold text-primary-600 mb-2">4</div>
              <div className="font-semibold text-secondary-900">Installation Tips</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
              <div className="font-semibold text-secondary-900">Planning</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-3xl font-bold text-primary-600 mb-2">1</div>
              <div className="font-semibold text-secondary-900">Lawn Care</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-3xl font-bold text-primary-600 mb-2">1</div>
              <div className="font-semibold text-secondary-900">Commercial</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Have Questions About Sod Installation?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our team of experts is here to help. Get personalized advice for your specific property
              and lawn needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
              <a href="tel:9049011457" className="btn-secondary">
                Call (904) 901-1457
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
