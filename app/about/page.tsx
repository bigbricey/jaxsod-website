import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Link from 'next/link'
import { FiAward, FiCheckCircle, FiMapPin, FiUsers } from 'react-icons/fi'

export const metadata: Metadata = {
    title: 'About Jax Sod | Jacksonville\'s Sod Installation Experts Since 2001',
    description: 'Learn about Jacksonville\'s trusted sod installation specialists since 2001. 37+ years experience, family-owned, licensed & insured. We focus exclusively on sod installation.',
    keywords: 'about Jax Sod, Jacksonville sod company, sod installation specialists, family-owned sod company, licensed sod installer Jacksonville, 37 years experience',
    openGraph: {
          title: 'About Jax Sod | 37+ Years of Sod Installation Excellence',
          description: 'Family-owned and operated since 2001. Jacksonville\'s premier sod installation specialists.',
          type: 'website',
          locale: 'en_US',
          siteName: 'Jax Sod',
    },
}
export default function AboutPage() {
  return (
    <>
      <Hero
        title="37+ Years of Sod Installation Excellence"
        subtitle="About Jax Sod"
        description="Since 2001, we've been Jacksonville's premier sod installation specialists, dedicated to creating beautiful, healthy lawns throughout Northeast Florida."
        ctaText="Get Free Quote"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=2000"
        height="medium"
      />

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Our Story</h2>
              <div className="space-y-4 text-secondary-700 leading-relaxed">
                <p>
                  Jax Sod has been serving Jacksonville and surrounding areas since 2001. What started as a dedicated, professional operation has grown into one of Northeast Florida's most trusted names in professional sod installation.
                </p>
                <p>
                  Unlike companies that try to do everything, we've chosen to specialize exclusively
                  in sod installation. This focused approach means we've perfected our craft,
                  developing techniques and expertise that only comes from years of dedicated
                  experience.
                </p>
                <p>
                  Every member of our team shares a commitment to quality and customer satisfaction.
                  We understand that your lawn is more than just grass—it's an investment in your
                  property's value and your quality of life. That's why we approach every project,
                  big or small, with the same level of professionalism and attention to detail.
                </p>
                <p>
                  Today, thousands of homes and businesses across Jacksonville feature lawns
                  installed by Jax Sod. Our reputation is built on honesty, quality work,
                  and the success of our customers' lawns.
                </p>
                <p>
                  Curious where we work or what people are saying? Explore our{' '}
                  <Link href="/service-areas" className="text-primary-600 font-semibold hover:text-primary-700">service areas</Link>{' '}
                  and read recent <Link href="/reviews" className="text-primary-600 font-semibold hover:text-primary-700">reviews</Link> from Jacksonville neighbors.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <FiAward className="text-3xl text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">37+ Years of Experience</h3>
                    <p className="text-secondary-700">
                      Since 2001, we've installed sod on thousands of properties throughout
                      Jacksonville and Northeast Florida.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <FiCheckCircle className="text-3xl text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Installation Specialists</h3>
                    <p className="text-secondary-700">
                      We focus exclusively on sod installation, making us true experts in our field.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <FiUsers className="text-3xl text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Family-Owned Values</h3>
                    <p className="text-secondary-700">
                      As a family-owned business, we treat every customer like family and every
                      property like our own.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Why Choose Jax Sod?</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              What sets us apart from other sod installation companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <FiCheckCircle className="text-primary-600 text-2xl" />
                Focused Expertise
              </h3>
              <p className="text-secondary-600">
                We don't spread ourselves thin trying to offer every landscaping service. Our sole
                focus is sod installation, and we've mastered it over 37+ years.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <FiCheckCircle className="text-primary-600 text-2xl" />
                Quality Materials
              </h3>
              <p className="text-secondary-600">
                We source only premium sod varieties that are proven to thrive in Florida's climate.
                Your lawn starts with the best possible foundation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <FiCheckCircle className="text-primary-600 text-2xl" />
                Experienced Team
              </h3>
              <p className="text-secondary-600">
                Our crew members are trained professionals who understand proper installation
                techniques, soil preparation, and the nuances of different sod varieties.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <FiCheckCircle className="text-primary-600 text-2xl" />
                Customer-First Approach
              </h3>
              <p className="text-secondary-600">
                We're not satisfied until you're thrilled with your new lawn. From the first
                consultation to follow-up support, we're here for you.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <FiCheckCircle className="text-primary-600 text-2xl" />
                Honest Pricing
              </h3>
              <p className="text-secondary-600">
                No hidden fees, no surprises. We provide detailed, transparent quotes and stick to
                them. You'll know exactly what to expect.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <FiCheckCircle className="text-primary-600 text-2xl" />
                Licensed & Insured
              </h3>
              <p className="text-secondary-600">
                We're fully licensed and insured, giving you peace of mind that your property is
                protected and the work is backed by professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <FiMapPin className="text-5xl text-primary-600 mx-auto mb-6" />
              <h2 className="heading-lg mb-4">Serving Jacksonville & Beyond</h2>
              <p className="text-lg text-secondary-600">
                We proudly serve residential and commercial customers throughout Northeast Florida
              </p>
            </div>

            <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-center">Our Service Areas Include:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-secondary-700">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-primary-600 flex-shrink-0" />
                  <span>Jacksonville</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-primary-600 flex-shrink-0" />
                  <span>Jacksonville Beach</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-primary-600 flex-shrink-0" />
                  <span>Atlantic Beach</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-primary-600 flex-shrink-0" />
                  <span>Neptune Beach</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-primary-600 flex-shrink-0" />
                  <span>Ponte Vedra</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-primary-600 flex-shrink-0" />
                  <span>Mandarin</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-primary-600 flex-shrink-0" />
                  <span>San Marco</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-primary-600 flex-shrink-0" />
                  <span>Riverside</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-primary-600 flex-shrink-0" />
                  <span>Avondale</span>
                </div>
              </div>
              <p className="text-secondary-600 mt-6 text-center">
                Don't see your area listed? <Link href="/contact" className="text-primary-600 font-semibold hover:text-primary-700">Contact us</Link> to inquire about service availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Experience the Jax Sod Difference</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who trust Jax Sod for their lawn installation needs.
              Get your free quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-outline">
                Get Free Quote
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
