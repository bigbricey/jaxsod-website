import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Jax Sod Inc - Terms and conditions for using our website and services.',
}

export default function TermsPage() {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="heading-lg mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-secondary-600 mb-6">
            <strong>Last Updated:</strong> October 2024
          </p>

          <section className="mb-8">
            <h2 className="heading-sm mb-4">Agreement to Terms</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              By accessing or using the Jax Sod Inc website and services, you agree to be bound by these
              Terms of Service. If you disagree with any part of these terms, please do not use our website
              or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-sm mb-4">Services</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              Jax Sod Inc provides professional sod installation services for residential and commercial
              properties in Jacksonville, FL and surrounding areas. All services are subject to availability
              and our standard business practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-sm mb-4">Quotes and Pricing</h2>
            <ul className="list-disc pl-6 space-y-2 text-secondary-700">
              <li>All quotes are estimates based on the information provided</li>
              <li>Final pricing may vary based on actual site conditions</li>
              <li>Quotes are valid for 30 days from the date provided</li>
              <li>We reserve the right to adjust pricing if project scope changes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="heading-sm mb-4">Service Completion</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              We strive to complete all projects professionally and on schedule. However, completion times
              may be affected by weather conditions, site conditions, or other factors beyond our control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-sm mb-4">Customer Responsibilities</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              Customers are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-secondary-700">
              <li>Providing accurate property information and access</li>
              <li>Marking underground utilities before installation</li>
              <li>Following our care instructions for new sod</li>
              <li>Providing adequate water access during installation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="heading-sm mb-4">Warranties and Guarantees</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              While we guarantee professional installation, the health and success of sod depends on proper
              care and maintenance by the property owner. We are not responsible for sod failure due to
              inadequate watering, extreme weather, pests, or other factors beyond our control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-sm mb-4">Limitation of Liability</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              Jax Sod Inc shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use of our services or inability to use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-sm mb-4">Modifications</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective immediately
              upon posting to our website. Continued use of our services constitutes acceptance of modified
              terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-sm mb-4">Contact Information</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              For questions about these Terms of Service:
            </p>
            <div className="bg-secondary-50 p-6 rounded-lg">
              <p className="text-secondary-700 mb-2">
                <strong>Jax Sod Inc</strong>
              </p>
              <p className="text-secondary-700 mb-2">
                Phone: <a href="tel:9049011457" className="text-primary-600 hover:text-primary-700">(904) 901-1457</a>
              </p>
              <p className="text-secondary-700">
                Location: Jacksonville, FL
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-secondary-200">
            <Link href="/" className="text-primary-600 hover:text-primary-700 font-semibold">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
