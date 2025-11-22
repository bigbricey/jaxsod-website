import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'
import { FiHome, FiBriefcase, FiCheckCircle, FiTool, FiClock, FiDollarSign } from 'react-icons/fi'

export const metadata: Metadata = {
    title: 'Sod Installation Services Jacksonville | Residential & Commercial | Jax Sod',
    description: 'Expert sod installation services in Jacksonville. Residential & commercial projects, soil preparation, quality sod varieties. Fast installation, transparent pricing. Get free estimate today!',
    keywords: 'sod installation services Jacksonville, residential sod installation, commercial sod installation, sod installation company, professional sod installers, Jacksonville lawn services',
    openGraph: {
          title: 'Professional Sod Installation Services in Jacksonville | Jax Sod',
          description: 'Residential and commercial sod installation services throughout Jacksonville and Northeast Florida.',
          type: 'website',
          locale: 'en_US',
          siteName: 'Jax Sod',
    },
}
export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Professional Sod Installation Services"
        subtitle="Residential & Commercial"
        description="From single-family homes to large commercial properties, we provide expert sod installation throughout Jacksonville and surrounding areas."
        ctaText="Get Free Quote"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2000"
        height="medium"
      />

      {/* Main Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Services</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Specialized sod installation services for every need
            </p>
            <p className="text-secondary-600 max-w-3xl mx-auto mt-4">
              Need help selecting the right grass? Visit our{' '}
              <Link href="/sod-types" className="text-primary-600 font-semibold hover:text-primary-700">sod types guide</Link>, see finished lawns in our{' '}
              <Link href="/gallery" className="text-primary-600 font-semibold hover:text-primary-700">project gallery</Link>, and read{' '}
              <Link href="/reviews" className="text-primary-600 font-semibold hover:text-primary-700">customer reviews</Link> from across Jacksonville.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Residential */}
            <div id="residential" className="scroll-mt-24">
              <ServiceCard
                icon={<FiHome />}
                title="Residential Sod Installation"
                description="Create the perfect lawn for your home with professional sod installation. Whether you're building a new home, replacing an old lawn, or enhancing your landscape, we have the expertise to deliver outstanding results."
                features={[
                  'New construction lawns',
                  'Complete lawn replacement',
                  'Front yard and backyard installation',
                  'Landscape renovation',
                  'Erosion control solutions',
                  'Sod repair and patching',
                ]}
              />
              <div className="mt-6 bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
                <h4 className="font-bold text-secondary-900 mb-2">Perfect for homeowners who want:</h4>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start gap-2">
                    <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                    <span>Instant curb appeal and property value increase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                    <span>A beautiful, healthy lawn without waiting for seed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                    <span>Expert guidance on sod variety and care</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Commercial */}
            <div id="commercial" className="scroll-mt-24">
              <ServiceCard
                icon={<FiBriefcase />}
                title="Commercial Sod Installation"
                description="Large-scale sod installation for commercial properties. We handle projects of all sizes, from small business locations to sprawling industrial complexes, with the same attention to detail and quality."
                features={[
                  'Office buildings and complexes',
                  'Retail and shopping centers',
                  'Hotels and hospitality',
                  'Industrial properties',
                  'Apartment and condo communities',
                  'Municipal and government facilities',
                ]}
              />
              <div className="mt-6 bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
                <h4 className="font-bold text-secondary-900 mb-2">Commercial advantages:</h4>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start gap-2">
                    <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                    <span>Large-scale project experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                    <span>Flexible scheduling to minimize business disruption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                    <span>Competitive pricing for large projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Installation Process</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              A proven process perfected over 37+ years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Consultation</h3>
              <p className="text-secondary-600">
                Free on-site consultation to assess your property, discuss your needs, and provide an accurate quote.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Preparation</h3>
              <p className="text-secondary-600">
                Proper soil preparation including grading, removal of old grass or debris, and soil amendments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Installation</h3>
              <p className="text-secondary-600">
                Professional installation of premium sod with careful attention to seams, edges, and proper laying techniques.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Care Instructions</h3>
              <p className="text-secondary-600">
                Detailed instructions and ongoing support to ensure your new lawn thrives for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional Installation Matters */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Why Professional Installation Matters</h2>
              <p className="text-lg text-secondary-600 mb-6">
                Sod installation isn't just about laying grass. It requires expertise in soil preparation,
                proper grading, variety selection, and installation techniques that ensure long-term success.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                      <FiTool className="text-xl" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900 mb-1">Expert Soil Preparation</h4>
                    <p className="text-secondary-600">
                      Proper grading and soil amendments for optimal root establishment
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                      <FiCheckCircle className="text-xl" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900 mb-1">Quality Sod Selection</h4>
                    <p className="text-secondary-600">
                      We source premium sod varieties suited to Florida's climate
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                      <FiClock className="text-xl" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900 mb-1">Time & Cost Efficient</h4>
                    <p className="text-secondary-600">
                      Avoid costly mistakes and get it done right the first time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 p-8 rounded-lg border-2 border-primary-200">
              <h3 className="text-2xl font-bold mb-6 text-secondary-900">What's Included</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0 text-xl" />
                  <span className="text-secondary-700">Free on-site consultation and quote</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0 text-xl" />
                  <span className="text-secondary-700">Complete soil preparation and grading</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0 text-xl" />
                  <span className="text-secondary-700">Premium quality sod</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0 text-xl" />
                  <span className="text-secondary-700">Professional installation by experienced crew</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0 text-xl" />
                  <span className="text-secondary-700">Site cleanup and debris removal</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0 text-xl" />
                  <span className="text-secondary-700">Detailed care and maintenance instructions</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0 text-xl" />
                  <span className="text-secondary-700">Follow-up support and guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FiDollarSign className="text-5xl text-primary-600 mx-auto mb-6" />
            <h2 className="heading-lg mb-6">Get Your Custom Quote</h2>
            <p className="text-lg text-secondary-600 mb-8">
              Every project is unique, and we provide honest, detailed quotes with no hidden fees.
              Pricing depends on factors including property size, site conditions, sod variety,
              and any necessary preparation work.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-secondary-700 mb-4">
                <strong>Contact us for accurate pricing tailored to your specific project</strong>
              </p>
              <p className="text-sm text-secondary-600">
                We'll provide a detailed quote based on your property's unique requirements,
                including site assessment, sod type, and any special considerations.
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today for a free consultation and quote. Let's create the lawn you've always wanted.
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
