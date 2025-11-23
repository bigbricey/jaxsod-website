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
    excerpt: 'Is DIY sod installation worth the risk? Discover why professional installation ensures a healthier lawn, saves you back-breaking labor, and prevents costly mistakes.',
    date: '2024-10-15',
    category: 'Installation Tips',
    readTime: '10 min read',
  },
  {
    slug: 'choosing-right-sod-florida',
    title: 'Choosing the Right Sod for Your Florida Lawn: The Ultimate Guide',
    excerpt: 'St. Augustine, Zoysia, Bahia, or Bermuda? Don\'t guess. Our comprehensive guide breaks down the pros, cons, and shade tolerance of every major Florida grass type.',
    date: '2024-10-08',
    category: 'Sod Types',
    readTime: '12 min read',
  },
  {
    slug: 'soil-preparation-for-sod',
    title: 'The Hidden Foundation: Soil Preparation for Sod Installation',
    excerpt: 'Why does some sod thrive while others fail? The secret lies underground. Learn the professional steps for soil preparation that guarantee rooting success.',
    date: '2024-09-30',
    category: 'Installation Tips',
    readTime: '11 min read',
  },
  {
    slug: 'new-sod-care-guide',
    title: 'Complete Care Guide for New Sod',
    excerpt: 'Master the art of establishing your new lawn. A comprehensive day-by-day guide to watering, mowing, and protecting your investment for the first 30 days and beyond.',
    date: '2024-09-22',
    category: 'Lawn Care',
    readTime: '7 min read',
  },
  {
    slug: 'when-to-install-sod-florida',
    title: 'Timing is Everything: The Best Time to Install Sod in Jacksonville',
    excerpt: 'Spring, Summer, Fall, or Winter? We break down the pros and cons of installing sod in every season in Northeast Florida.',
    date: '2024-09-15',
    category: 'Installation Tips',
    readTime: '9 min read',
  },
  {
    slug: 'sod-cost-factors',
    title: 'The Real Cost of Sod Installation: A Transparent Pricing Guide',
    excerpt: 'How much does sod installation actually cost in Jacksonville? We peel back the layers of pricing, explaining everything from pallet costs to site access.',
    date: '2024-09-08',
    category: 'Planning',
    readTime: '10 min read',
  },
  {
    slug: 'commercial-vs-residential-sod',
    title: 'Commercial vs. Residential Sod Installation: Understanding the Differences',
    excerpt: 'Is a commercial sod project just a big residential one? Not quite. Explore the unique challenges of commercial landscaping and strict compliance standards.',
    date: '2024-09-01',
    category: 'Commercial',
    readTime: '11 min read',
  },
  {
    slug: 'sod-vs-seed',
    title: 'Sod vs. Seed: The Battle for Your Lawn',
    excerpt: 'Is it better to pay for sod or save money with seed? We compare the two methods head-to-head on cost, time, weed control, and success rate.',
    date: '2024-08-25',
    category: 'Planning',
    readTime: '10 min read',
  },
  {
    slug: 'erosion-control-with-sod',
    title: 'Stop the Slide: Using Sod for Instant Erosion Control',
    excerpt: 'Is your soil washing away with every rainstorm? Learn why sod is the most effective engineering solution for stabilizing slopes, swales, and lake banks.',
    date: '2024-08-18',
    category: 'Solutions',
    readTime: '8 min read',
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
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full"
              >
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                      {article.category}
                    </span>
                    <span className="text-secondary-500">{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-secondary-900 leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-secondary-600 mb-4 leading-relaxed flex-grow">{article.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-secondary-200 mt-auto">
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

          {/* Contact CTA */}
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
