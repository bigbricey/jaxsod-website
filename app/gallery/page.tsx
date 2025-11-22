import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Project Gallery | Jax Sod – Jacksonville',
  description:
    'See Jacksonville-area sod installation projects by Jax Sod, including residential, commercial, and lawn renovation work.',
}

const residentialImages = [
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3',
]

const commercialImages = [
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3',
]

const renovationImages = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3',
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
