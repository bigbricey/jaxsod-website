import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'
import { FiHome, FiCheckCircle, FiBriefcase, FiAward, FiClock, FiUsers } from 'react-icons/fi'

// SEO Metadata
export const metadata = {
    title: 'Professional Sod Installation Jacksonville FL | 37+ Years | Jax Sod',
    description: 'Professional sod installation in Jacksonville, FL since 1988. 37+ years experience installing residential & commercial lawns. Free quotes. Licensed & insured. Call (904) 901-1457.',
    keywords: 'sod installation Jacksonville, professional sod installation, Jacksonville sod company, residential sod installation, commercial sod installation, sod installation near me, Jacksonville lawn installation',
    openGraph: {
          title: 'Professional Sod Installation in Jacksonville, FL | Jax Sod',
          description: 'Transform your property with expert sod installation. 37+ years of experience serving Jacksonville.',
          type: 'website',
          locale: 'en_US',
          siteName: 'Jax Sod',
    },
}


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Professional Sod Installation in Jacksonville, FL"
        subtitle="37+ Years of Excellence"
        description="Transform your property with expert sod installation services. We specialize in residential and commercial projects throughout Jacksonville and surrounding areas."
        ctaText="Get Free Quote"
        ctaLink="/contact"
        secondaryCtaText="View Services"
        secondaryCtaLink="/services"
        backgroundImage="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2000"
      />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Why Choose Jax Sod?</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Three decades of expertise delivering beautiful, healthy lawns across Jacksonville
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <FiAward className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">37+ Years Experience</h3>
              <p className="text-secondary-600">
                Since 1988, we've been Jacksonville's trusted sod installation specialists
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <FiCheckCircle className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Installation Specialists</h3>
              <p className="text-secondary-600">
                We focus exclusively on sod installation - it's what we do best
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <FiUsers className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Residential & Commercial</h3>
              <p className="text-secondary-600">
                From family homes to large commercial properties, we handle it all
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <FiClock className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Installation</h3>
              <p className="text-secondary-600">
                Efficient service that gets your lawn looking great quickly
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <FiCheckCircle className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Guaranteed</h3>
              <p className="text-secondary-600">
                Premium sod varieties and professional installation techniques
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <FiBriefcase className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Licensed & Insured</h3>
              <p className="text-secondary-600">
                Fully licensed, insured, and committed to your satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Services</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Professional sod installation services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ServiceCard
              icon={<FiHome />}
              title="Residential Sod Installation"
              description="Transform your home's curb appeal with a lush, green lawn. Perfect for new construction, lawn replacement, or landscape renovations."
              features={[
                'Front and backyard installation',
                'New construction lawns',
                'Lawn replacement and renovation',
                'Erosion control',
              ]}
              link="/services#residential"
              linkText="Learn More"
            />

            <ServiceCard
              icon={<FiBriefcase />}
              title="Commercial Sod Installation"
              description="Large-scale sod installation for commercial properties, including office complexes, retail centers, and industrial parks."
              features={[
                'Office buildings and complexes',
                'Retail and shopping centers',
                'Hotels and resorts',
                'Industrial properties',
              ]}
              link="/services#commercial"
              linkText="Learn More"
            />
          </div>

          <div className="text-center">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Get Quote CTA Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Get Your Free Custom Quote</h2>
            <p className="text-lg text-secondary-600 mb-8">
              Every sod installation project is unique. We provide detailed, accurate quotes based on your
              specific property requirements, including size, site conditions, and sod variety selection.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-secondary-700 mb-4">
                <strong>What's included in your quote:</strong>
              </p>
              <ul className="space-y-3 text-left max-w-lg mx-auto">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-secondary-700">
                    Free on-site property assessment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-secondary-700">
                    Detailed pricing breakdown with no hidden fees
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-secondary-700">
                    Expert recommendations for sod type and care
                  </span>
                </li>
              </ul>
            </div>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Request Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">What Our Customers Say</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Michael Thompson"
              location="Jacksonville, FL"
              rating={5}
              text="Jax Sod did an amazing job on our front and back yards. The crew was professional, efficient, and the lawn looks fantastic. Highly recommend!"
              date="September 2024"
            />
            <TestimonialCard
              name="Sarah Martinez"
              location="Jacksonville Beach, FL"
              rating={5}
              text="After 37 years in business, you can tell they know what they're doing. Our new sod is thriving and the installation was quick and clean."
              date="August 2024"
            />
            <TestimonialCard
              name="David Chen"
              location="Mandarin, FL"
              rating={5}
              text="Best decision we made for our new construction home. The sod looks beautiful and the team was very knowledgeable about care and maintenance."
              date="July 2024"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Transform Your Lawn?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free, no-obligation quote from Jacksonville's sod installation experts.
              With over 37 years of experience, we'll help you create the perfect lawn.
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
