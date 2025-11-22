import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import Link from 'next/link'
import { FiHome, FiCheckCircle, FiBriefcase, FiAward, FiClock, FiUsers, FiArrowRightCircle } from 'react-icons/fi'

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
  const sodVarieties = [
    {
      name: 'St. Augustine',
      image:
        'https://images.unsplash.com/photo-1441123100240-f9f3f77ed41b?auto=format&fit=crop&w=600&q=80&ixlib=rb-4.0.3',
      bullets: [
        'Thrives in coastal areas with humidity and salt exposure',
        'Ideal for shady spots and established neighborhoods',
      ],
    },
    {
      name: 'Zoysia',
      image:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80&ixlib=rb-4.0.3',
      bullets: [
        'Loves sun and handles heavy foot traffic for active yards',
        'Dense growth pattern keeps Jacksonville lawns looking manicured',
      ],
    },
    {
      name: 'Bermuda',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80&ixlib=rb-4.0.3',
      bullets: [
        'Excellent for full-sun properties and sports-friendly spaces',
        'Recovers quickly from wear in high-traffic areas',
      ],
    },
    {
      name: 'Bahia',
      image:
        'https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?auto=format&fit=crop&w=600&q=80&ixlib=rb-4.0.3',
      bullets: [
        'Budget-friendly option with strong drought tolerance',
        'Great for larger lots and utility areas around Jacksonville',
      ],
    },
  ]

  const galleryImages = [
    'https://images.unsplash.com/photo-1598032895004-2f6c8df1424c?auto=format&fit=crop&w=700&q=80&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?auto=format&fit=crop&w=700&q=80&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=700&q=80&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?auto=format&fit=crop&w=700&q=80&ixlib=rb-4.0.3',
  ]

  const processSteps = [
    {
      title: 'Property assessment & measurements',
      description: 'We walk your site, note sunlight and drainage, and capture accurate square footage for precise pricing.',
    },
    {
      title: 'Remove old turf and fix grade/drainage',
      description: 'Existing grass is cleared out and trouble spots are leveled so water flows correctly.',
    },
    {
      title: 'Prepare and level the soil',
      description: 'We amend the soil as needed, smooth it out, and set a firm base for root contact.',
    },
    {
      title: 'Lay, stagger, and roll the sod for tight seams',
      description: 'Fresh sod is laid in a running pattern, seams are tightened, and the lawn is rolled for full soil contact.',
    },
    {
      title: 'Walk-through and custom watering / after-care plan',
      description: 'Before we leave, we review your new lawn and provide a watering and mowing schedule tailored to your yard.',
    },
  ]

  const quickFaqs = [
    {
      question: 'How quickly can you install after a quote?',
      answer: 'Most Jacksonville projects start within 1-2 weeks depending on scope and weather.',
    },
    {
      question: 'Do you help choose the right sod?',
      answer: 'Yes, we match varieties to your sun, shade, and foot-traffic needs.',
    },
    {
      question: 'What prep is included?',
      answer: 'Removal, grading, soil smoothing, and rolling are part of every installation.',
    },
  ]

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
        backgroundImage="https://images.unsplash.com/photo-1598032895004-2f6c8df1424c?auto=format&fit=crop&w=2000&q=80&ixlib=rb-4.0.3"
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

      {/* Our Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-3">Our 5-Step Sod Installation Process</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Proper prep and correct installation are what make a new lawn actually succeed. Here's how we build durable, healthy turf for Jacksonville properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900">{step.title}</h3>
                </div>
                <p className="text-secondary-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary-50">
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

      {/* Sod Varieties Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
            <div>
              <h2 className="heading-lg mb-3">Sod Varieties That Thrive in Northeast Florida</h2>
              <p className="text-lg text-secondary-600 max-w-2xl">
                Choose from proven grasses that handle Jacksonville's heat, humidity, and coastal conditions. We help you pick the best match for your property.
              </p>
            </div>
            <Link href="/sod-types" className="btn-primary self-start">
              View All Sod Types
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sodVarieties.map((variety) => (
              <div key={variety.name} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <Image
                    src={variety.image}
                    alt={`${variety.name} sod in Jacksonville`}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{variety.name}</h3>
                <ul className="space-y-2 text-secondary-700">
                  {variety.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Quote CTA Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="heading-lg mb-4">Get Your Free Custom Quote</h2>
              <p className="text-lg text-secondary-700 mb-6">
                Every sod installation project is unique. We tailor recommendations for your square footage, sunlight, and soil so you know exactly what will make your lawn thrive.
              </p>
              <div>
                <p className="text-secondary-900 font-semibold mb-3">What's included in your quote:</p>
                <ul className="space-y-3 text-secondary-700">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                    <span>Free on-site property assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                    <span>Detailed pricing breakdown with no hidden fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                    <span>Expert recommendations for sod type and care</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="section-padding pb-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h2 className="heading-lg mb-2">See Our Recent Installs</h2>
              <p className="text-secondary-600">Real Jacksonville lawns we've installed.</p>
            </div>
            <Link href="/gallery" className="btn-outline self-start">
              View Gallery
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <Link key={`${image}-${index}`} href="/gallery" className="group block overflow-hidden rounded-lg shadow-sm">
                <Image
                  src={image}
                  alt={`Jax Sod installation gallery image ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Link */}
      <section className="container-custom pb-4">
        <div className="bg-secondary-50 border border-secondary-100 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-secondary-700 font-medium">Want to see more feedback? Read additional reviews.</p>
          <Link href="/reviews" className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800">
            Read Reviews
            <FiArrowRightCircle />
          </Link>
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

      {/* FAQ Teaser */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-6">
            <div className="space-y-2">
              <h2 className="heading-lg">Frequently Asked Questions</h2>
              <p className="text-secondary-700 max-w-3xl">Quick answers for Jacksonville homeowners and property managers. Explore the full FAQ for more details.</p>
            </div>
            <Link href="/faq" className="btn-outline self-start">View all FAQs</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickFaqs.map((item) => (
              <div key={item.question} className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="font-semibold text-secondary-900 mb-2">{item.question}</h3>
                <p className="text-secondary-700">{item.answer}</p>
              </div>
            ))}
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
