import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Jax Sod</h3>
            <p className="text-secondary-300 mb-4">
              Jacksonville's trusted sod installation specialists for over 37 years.
              Professional residential and commercial services.
            </p>
            <p className="text-secondary-300">
              Serving Jacksonville, Mandarin, Jacksonville Beach, Orange Park, Fleming Island, St. Augustine, Ponte Vedra and surrounding Northeast Florida communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/sod-types" className="text-secondary-400 hover:text-white transition-colors">
                  Sod Types
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-secondary-400 hover:text-white transition-colors">
                  Calculator
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-secondary-300">
              <li>Residential Sod Installation</li>
              <li>Commercial Sod Installation</li>
              <li>Sod Replacement</li>
              <li>Lawn Renovation</li>
              <li>Professional Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiPhone className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:9049011457" className="text-secondary-300 hover:text-primary-400 transition-colors">
                    (904) 901-1457
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-primary-400 mt-1 flex-shrink-0" />
                <div className="text-secondary-300">
                  Jacksonville, FL
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiClock className="text-primary-400 mt-1 flex-shrink-0" />
                <div className="text-secondary-300">
                  Mon-Fri: 7:00 AM - 5:00 PM<br />
                  Sat: 8:00 AM - 2:00 PM
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-400">
            <p>
              &copy; {currentYear} Jax Sod. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
