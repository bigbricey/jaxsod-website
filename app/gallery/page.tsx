import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Project Gallery | Jax Sod – Jacksonville',
  description:
    'See Jacksonville-area sod installation projects by Jax Sod, including residential, commercial, and lawn renovation work.',
}

const residentialImages = [
  {
    src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3',
    alt: 'Fresh sod installation at Jacksonville home – front yard',
  },
  {
    src: 'https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3',
    alt: 'New backyard lawn with installed sod',
  },
  {
    src: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3',
    alt: 'Residential front lawn after sod installation',
  },
]

const commercialImages = [
  {
    src: 'https://images.unsplash.com/photo-1523419400524-c6a145ee45f2?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3',
    alt: 'Commercial building entrance with new sod',
  },
  {
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3',
    alt: 'Office park lawn after sod installation',
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3',
    alt: 'Commercial greenspace with maintained turf',
  },
]

const renovationImages = [
  {
    src: 'https://images.unsplash.com/photo-1598032895004-2f6c8df1424c?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3',
    alt: 'Crew installing new sod during lawn renovation',
  },
  {
    src: 'https://images.unsplash.com/photo-1582719478248-6b389be1244e?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3',
    alt: 'Sod rolls being laid on prepared soil',
  },
  {
    src: 'https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3',
    alt: 'Lawn renovation after sod installation',
  },
]

const GallerySection = ({ title, images }: { title: string; images: { src: string; alt: string }[] }) => (
  <section className="space-y-6">
    <div className="space-y-2">
      <h2 className="heading-lg">{title}</h2>
      <p className="text-secondary-600">Professional sod installations tailored to {title.toLowerCase()} needs.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, idx) => (
        <div key={`${title}-${idx}`} className="overflow-hidden rounded-lg shadow-md bg-secondary-50">
          <Image
            src={image.src}
            alt={image.alt}
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
