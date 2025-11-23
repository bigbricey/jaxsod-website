import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Project Gallery | Jax Sod – Jacksonville',
  description: 'See Jacksonville-area sod installation projects by Jax Sod, including residential, commercial, and lawn renovation work.'
}

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1595757872761-992fd6d3ab25?auto=format&fit=crop&w=800&q=80',
    alt: 'Lush Zoysia sod installation in a residential backyard',
    category: 'Residential'
  },
  {
    src: 'https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=800&q=80',
    alt: 'Close-up of premium St. Augustine grass texture',
    category: 'Sod Types'
  },
  {
    src: 'https://images.unsplash.com/photo-1593617589445-a9cb66fbae15?auto=format&fit=crop&w=800&q=80',
    alt: 'Manicured backyard with freshly installed sod',
    category: 'Residential'
  },
  {
    src: 'https://images.unsplash.com/photo-1597040827713-24d4c7e4b0e2?auto=format&fit=crop&w=800&q=80',
    alt: 'Professional sod installation process',
    category: 'Commercial'
  },
  {
    src: 'https://images.unsplash.com/photo-1509218541462-aa68e407d0ca?auto=format&fit=crop&w=800&q=80',
    alt: 'Lawn renovation project in Jacksonville',
    category: 'Renovation'
  },
  {
    src: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80',
    alt: 'Perfectly finished commercial lawn project',
    category: 'Commercial'
  }
]

export default function GalleryPage() {
  return (
    <div className="section-padding">
      <div className="container-custom space-y-12">
        <div className="space-y-4 max-w-3xl mx-auto text-center">
          <h1 className="heading-xl">Our Work</h1>
          <p className="text-lg text-secondary-700">
            Browse our portfolio of recent sod installations. From lush residential lawns to durable commercial landscapes,
            we take pride in transforming outdoor spaces across Jacksonville.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, idx) => (
            <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md bg-gray-100">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-medium text-sm drop-shadow-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary-50 border border-primary-100 rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-12">
          <div className="space-y-2 max-w-2xl">
            <h2 className="heading-md">Ready to transform your lawn?</h2>
            <p className="text-secondary-700">
              Contact us today for a free quote and let us bring this level of quality to your property.
            </p>
          </div>
          <Link href="/contact" className="btn-primary whitespace-nowrap">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
