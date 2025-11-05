import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'
import { FiPhone, FiMapPin, FiClock, FiMail } from 'react-icons/fi'

export const metadata: Metadata = {
    title: 'Contact Us | Get Free Quote | Sod Installation Jacksonville | (904) 901-1457',
    description: 'Get a free sod installation quote in Jacksonville, FL. Call (904) 901-1457 or fill out our contact form. 37+ years experience. Licensed & insured. Fast response time.',
    keywords: 'contact Jax Sod, free sod quote Jacksonville, sod installation estimate, Jacksonville sod company contact, get sod quote, call for sod installation',
    openGraph: {
          title: 'Contact Jax Sod Inc | Free Quote for Sod Installation',
          description: 'Get your free quote today. Call (904) 901-1457 or contact us online.',
          type: 'website',
          locale: 'en_US',
          siteName: 'Jax Sod Inc',
    },
}
export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get Your Free Quote Today"
        subtitle="Contact Us"
        description="Ready to transform your lawn? Contact Jax Sod Inc for a free, no-obligation quote. We're here to answer your questions and help you create the perfect lawn."
        ctaText="Call (904) 901-1457"
        ctaLink="tel:9049011457"
        backgroundImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000"
        height="medium"
      />

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-md mb-6">Request a Free Quote</h2>
              <p className="text-secondary-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a detailed quote
                for your sod installation project.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="heading-md mb-6">Contact Information</h2>
              <p className="text-secondary-600 mb-8">
                Prefer to speak with us directly? Give us a call or visit us during business hours.
                We're always happy to answer your questions.
              </p>

              <div className="space-y-6 mb-12">
                {/* Phone */}
                <div className="flex items-start gap-4 bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
                  <FiPhone className="text-primary-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-secondary-900 mb-2">Phone</h3>
                    <a
                      href="tel:9049011457"
                      className="text-lg text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      (904) 901-1457
                    </a>
                    <p className="text-sm text-secondary-600 mt-1">
                      Call us for immediate assistance
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 bg-secondary-50 p-6 rounded-lg border-l-4 border-secondary-400">
                  <FiMapPin className="text-secondary-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-secondary-900 mb-2">Service Area</h3>
                    <p className="text-secondary-700">
                      Jacksonville, FL<br />
                      and surrounding areas
                    </p>
                    <p className="text-sm text-secondary-600 mt-1">
                      Serving Northeast Florida
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 bg-secondary-50 p-6 rounded-lg border-l-4 border-secondary-400">
                  <FiClock className="text-secondary-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-secondary-900 mb-2">Business Hours</h3>
                    <div className="text-secondary-700 space-y-1">
                      <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                      <p>Saturday: 8:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Contact Us Box */}
              <div className="bg-primary-600 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Why Choose Jax Sod?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>37+ years of professional experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Sod installation specialists - it's all we do</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Free consultation and detailed quotes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Licensed, insured, and locally owned</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-lg text-secondary-600 mb-12 text-center">
              Quick answers to common questions about our services
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">How quickly can you provide a quote?</h3>
                <p className="text-secondary-600">
                  We typically respond to quote requests within 24 hours and can often schedule an
                  on-site consultation within a few days.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Do you offer free estimates?</h3>
                <p className="text-secondary-600">
                  Yes! We provide free, no-obligation quotes for all sod installation projects,
                  including an on-site consultation to assess your property.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">What areas do you service?</h3>
                <p className="text-secondary-600">
                  We serve Jacksonville and surrounding areas throughout Northeast Florida. Contact
                  us to confirm we service your specific location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">How long does installation take?</h3>
                <p className="text-secondary-600">
                  Most residential projects are completed in 1-2 days, depending on the size and
                  complexity. We'll provide a timeline with your quote.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">What if I have more questions?</h3>
                <p className="text-secondary-600">
                  We're always happy to answer questions! Call us at{' '}
                  <a href="tel:9049011457" className="text-primary-600 font-semibold hover:text-primary-700">
                    (904) 901-1457
                  </a>{' '}
                  or fill out the contact form above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Transform Your Lawn?</h2>
            <p className="text-xl mb-8 opacity-90">
              Don't wait - contact us today and take the first step toward a beautiful new lawn.
            </p>
            <a href="tel:9049011457" className="btn-secondary text-xl px-10 py-4">
              Call (904) 901-1457 Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
