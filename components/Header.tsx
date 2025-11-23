'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiPhone, FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/sod-types', label: 'Sod Types' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/faq', label: 'FAQ' },
    { href: '/service-areas', label: 'Service Areas' },
    { href: '/about', label: 'About' },
    { href: '/articles', label: 'Articles' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar with phone */}
      <div className="bg-primary-600 text-white">
        <div className="container-custom py-2">
          <div className="flex justify-between items-center text-sm">
            <span className="font-medium">37+ Years of Professional Sod Installation</span>
            <a
              href="tel:9049011457"
              className="flex items-center gap-2 hover:text-primary-100 transition-colors"
            >
              <FiPhone className="text-lg" />
              <span className="font-semibold">(904) 901-1457</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-700">
            Jax Sod
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-2xl text-secondary-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-secondary-100 overflow-y-auto max-h-[calc(100vh-100px)]">
          <div className="container-custom py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondary-700 hover:text-primary-600 font-medium transition-colors py-3 border-b border-gray-100 last:border-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link
                href="/contact"
                className="btn-primary w-full text-center block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
