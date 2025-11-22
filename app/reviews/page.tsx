import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Customer Reviews | Jax Sod – Jacksonville Sod Installation',
  description:
    'Read customer reviews for Jax Sod. 37+ years installing residential and commercial lawns across Jacksonville with five-star feedback.',
}

const testimonials = [
  {
    name: 'Chris A. – Mandarin, FL',
    quote:
      'They handled everything from removal to final watering instructions. The lawn was flawless in a day and they respected our property throughout.',
  },
  {
    name: 'Lauren S. – Jacksonville Beach, FL',
    quote:
      'Great communication and a crew that clearly specializes in sod. Our coastal yard finally has thick, green grass.',
  },
  {
    name: 'Marcus R. – Southside, FL',
    quote:
      'We manage several rentals and Jax Sod is our go-to. Pricing is fair, scheduling is fast, and the installs hold up to heavy use.',
  },
  {
    name: 'Priya K. – San Marco, FL',
    quote:
      'They leveled out drainage issues and matched us with the right variety for partial shade. The follow-up care plan was so helpful.',
  },
  {
    name: 'Evan T. – Nocatee, FL',
    quote:
      'Professional from start to finish. The sod seams are tight and the crew rolled everything for great soil contact.',
  },
  {
    name: 'Olivia M. – St. Augustine, FL',
    quote:
      'We wanted a durable lawn for kids and dogs. They recommended Zoysia and it looks incredible even with heavy traffic.',
  },
  {
    name: 'Devon H. – Orange Park, FL',
    quote:
      'On time, neat, and transparent. They walked us through watering and mowing so we knew exactly what to expect.',
  },
  {
    name: 'Janet P. – Riverside, FL',
    quote:
      'Our HOA was thrilled with the upgrade. Jax Sod’s team was polite, organized, and cleaned up thoroughly.',
  },
]

export default function ReviewsPage() {
  return (
    <div className="section-padding">
      <div className="container-custom space-y-12">
        <div className="space-y-4 max-w-3xl">
          <h1 className="heading-xl">Customer Reviews</h1>
          <p className="text-lg text-secondary-700">
            Most of our work comes from referrals and repeat customers. Here’s what homeowners, property managers, and business owners around Jacksonville say about partnering with Jax Sod.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-md space-y-3">
              <div className="text-primary-600 font-semibold">★★★★★</div>
              <p className="text-secondary-700 leading-relaxed">“{testimonial.quote}”</p>
              <p className="text-secondary-900 font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary-600 text-white rounded-xl p-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 max-w-2xl">
            <h2 className="heading-lg">Worked with Jax Sod? Leave a Review</h2>
            <p className="text-lg opacity-90">Your feedback helps Jacksonville homeowners and businesses choose a sod installer they can trust.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="https://g.page/r/JaxSodReview" className="btn-secondary bg-white text-primary-700 hover:text-primary-800">
              Leave a Google Review
            </Link>
            <Link href="/" className="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-primary-700">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
