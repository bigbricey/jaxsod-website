import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Project Gallery | Jax Sod – Jacksonville',
  description:
    'See Jacksonville-area sod installation projects by Jax Sod, including residential, commercial, and lawn renovation work.',
}

const residentialImages = [
  'https://images.unsplash.com/flagged/photo-1570129476769-2e011141ab76?auto=format&fit=crop&w=900&q=80&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1600585154340-0ef3c08c0632?auto=format&fit=crop&w=900&q=80&ixlib=rb-4.0.3',
]

const commercialImages = [
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1504643039591-52948e9bc5c1?auto=format&fit=crop&w=900&q=80&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80&ixlib=rb-4.0.3',
]

const renovationImages = [
  'https://images.unsplash.com/photo-1501696461442-503a91226402?auto=format&fit=crop&w=900&q=80&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=crop&w=900&q=80&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80&ixlib=rb-4.0.3',
]

const GallerySection = ({ title, images }: { title: string; images: string[] }) => (
  <section className="space-y-6">
    <div className="space-y-2">
      <h2 className="heading-lg">{title}</h2>
      <p className="text-secondary-600">Professional sod installations tailored to {title.toLowerCase()} needs.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, idx) => (
        <div key={`${title}-${idx}`} className="overflow-hidden rounded-lg shadow-md bg-secondary-50">
          <Image
            src={image}
            alt={`${title} project ${idx + 1}`}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
          />
        </div>
      ))}
    </div>
  </section>
)

export default function GalleryPage() {
  return (
    <div className="section-padding">
      <div className="container-custom space-y-12">
        <div className="space-y-4 max-w-3xl">
          <h1 className="heading-xl">Project Gallery</h1>
          <p className="text-lg text-secondary-700">
            Explore a selection of recent sod installations around Jacksonville. From residential front yards to commercial entryways,
            we deliver healthy lawns that are ready to enjoy on day one.
          </p>
        </div>

        <GallerySection title="Residential" images={residentialImages} />
        <GallerySection title="Commercial" images={commercialImages} />
        <GallerySection title="Lawn Renovation" images={renovationImages} />

        <div className="bg-primary-50 border border-primary-100 rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <h2 className="heading-md">Like what you see?</h2>
            <p className="text-secondary-700">Tell us about your property and we’ll plan a sod installation that matches these results.</p>
          </div>
          <Link href="/contact" className="btn-primary">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
