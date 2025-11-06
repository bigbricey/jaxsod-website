import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Jax Sod - How we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="heading-lg mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-secondary-600 mb-6">
            <strong>Last Updated:</strong> October 2024
          </p>

          <section className="mb-8">
            <h2 className="heading-sm mb-4">Introduction</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              Jax Sod ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website
              or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-sm mb-4">Information We Collect</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-secondary-700">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Property address and project details when you request a quote</li>
              <li>Website usage data and analytics</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="heading-sm mb-4">How We Use Your Information</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-secondary-700">
              <li>Provide quotes and respond to service inquiries</li>
              <li>Schedule and complete sod installation projects</li>
              <li>Communicate about your project and our services</li>
              <li>Improve our website and services</li>
              <li>Send periodic emails about our services (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="heading-sm mb-4">Information Sharing</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share
              information with trusted service providers who assist us in operating our website and
              conducting our business, provided they agree to keep this information confidential.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-sm mb-4">Data Security</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              We implement reasonable security measures to protect your personal information. However, no
              method of transmission over the Internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-sm mb-4">Your Rights</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-secondary-700">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="heading-sm mb-4">Contact Us</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-secondary-50 p-6 rounded-lg">
              <p className="text-secondary-700 mb-2">
                <strong>Jax Sod</strong>
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
