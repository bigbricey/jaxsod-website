export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://jaxsod.com',
    name: 'Jax Sod',
    image: 'https://jaxsod.com/logo.png',
    description: 'Professional sod installation services in Jacksonville, FL with 37+ years of experience. Residential and commercial sod installation specialists.',
    url: 'https://jaxsod.com',
    telephone: '+19049011457',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'serving Jacksonville area',
      addressLocality: 'Jacksonville',
      addressRegion: 'FL',
      postalCode: '32256',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.3322,
      longitude: -81.6557,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '14:00',
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Jacksonville',
        '@id': 'https://en.wikipedia.org/wiki/Jacksonville,_Florida',
      },
      {
        '@type': 'City',
        name: 'Jacksonville Beach',
      },
      {
        '@type': 'City',
        name: 'Atlantic Beach',
      },
      {
        '@type': 'City',
        name: 'Neptune Beach',
      },
      {
        '@type': 'City',
        name: 'Ponte Vedra',
      },
    ],
    sameAs: [
      // Add social media profiles when available
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '150',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sod Installation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Sod Installation',
            description: 'Professional sod installation for homes and residential properties',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Sod Installation',
            description: 'Large-scale sod installation for commercial properties',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
