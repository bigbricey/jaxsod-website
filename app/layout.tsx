import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Jax Sod Inc - Professional Sod Installation in Jacksonville, FL',
    template: '%s | Jax Sod Inc'
  },
  description: 'Professional sod installation services in Jacksonville, FL with 37+ years of experience. Residential and commercial sod installation specialists. Call (904) 901-1457 for a free quote.',
  keywords: ['sod installation Jacksonville', 'Jacksonville sod', 'sod installer', 'lawn installation', 'Florida sod', 'residential sod', 'commercial sod'],
  authors: [{ name: 'Jax Sod Inc' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxsod.com',
    siteName: 'Jax Sod Inc',
    title: 'Professional Sod Installation in Jacksonville, FL | Jax Sod Inc',
    description: '37+ years of professional sod installation services in Jacksonville, FL. Residential and commercial specialists.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jax Sod Inc - Professional Sod Installation',
    description: '37+ years of expert sod installation in Jacksonville, FL',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
