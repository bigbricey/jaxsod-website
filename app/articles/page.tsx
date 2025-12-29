import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Link from 'next/link'
import ArticleSearch from '@/components/ArticleSearch'
import ArticleCategories from '@/components/ArticleCategories'
import { Suspense } from 'react'
import { getAllArticles } from '@/lib/articles'

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
  robots: {
    index: true,
    follow: true,
  },
}


export default function ArticlesPage() {
  const articles = getAllArticles()

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

      {/* Interactive Article Search & Grid */}
      <Suspense fallback={<div className="container-custom py-12 text-center">Loading articles...</div>}>
        <ArticleSearch articles={articles} />
      </Suspense>

      {/* Article Categories Widget */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ArticleCategories articles={articles} />
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
