import { FiStar } from 'react-icons/fi'

interface TestimonialCardProps {
  name: string
  location: string
  rating: number
  text: string
  date: string
}

const TestimonialCard = ({ name, location, rating, text, date }: TestimonialCardProps) => {
  const starRow = '★'.repeat(Math.min(5, Math.max(1, rating)))

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      {/* Rating */}
      <div className="flex gap-1 mb-2" aria-label={`${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <FiStar
            key={i}
            className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-secondary-300'}`}
          />
        ))}
      </div>
      <div className="text-primary-600 font-semibold tracking-wide mb-3" aria-hidden>
        {starRow}
      </div>

      {/* Testimonial Text */}
      <p className="text-secondary-700 mb-4 leading-relaxed italic">"{text}"</p>

      {/* Author Info */}
      <div className="border-t border-secondary-200 pt-4">
        <p className="font-semibold text-secondary-900">{name}</p>
        <p className="text-sm text-secondary-600">{location}</p>
        <p className="text-xs text-secondary-500 mt-1">{date}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
