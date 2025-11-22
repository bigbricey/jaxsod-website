import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sod Installation FAQ | Jax Sod – Jacksonville, FL',
  description:
    'Answers to common sod installation questions in Jacksonville: cost, prep, watering, timing, grass types, and service areas.',
}

const faqSections = [
  {
    heading: 'Planning & Pricing',
    items: [
      {
        question: 'How much does sod installation cost in Jacksonville?',
        answer:
          'Pricing depends on square footage, site prep, and sod variety. We provide detailed, line-item quotes after a quick assessment so you know exactly what is included.',
      },
      {
        question: 'Do you provide free on-site quotes?',
        answer: 'Yes. We visit your property, measure accurately, and review sunlight, access, and drainage before sharing a written estimate.',
      },
      {
        question: 'Are you licensed and insured?',
        answer: 'Jax Sod is fully licensed and insured in Florida. Safety, quality, and compliance are part of every project.',
      },
    ],
  },
  {
    heading: 'Preparation & Installation',
    items: [
      {
        question: 'What do I need to do to prepare my yard?',
        answer:
          'We handle removal, grading, and soil prep. Please clear personal items and note any irrigation details so we can protect your system.',
      },
      {
        question: 'Do you remove old grass and fix low spots?',
        answer:
          'Yes. We strip existing turf, address low or uneven areas, and level the soil so the new sod roots evenly and drains properly.',
      },
      {
        question: 'Which sod type is best for my yard?',
        answer:
          'It depends on sun, shade, foot traffic, and irrigation. We commonly install St. Augustine, Zoysia, Bermuda, and Bahia and recommend the best fit during your quote.',
      },
      {
        question: 'How soon can I walk on the new sod?',
        answer:
          'Light foot traffic is fine after installation for watering. Plan for 2–3 weeks before normal use so roots can establish.',
      },
    ],
  },
  {
    heading: 'Watering & After-Care',
    items: [
      {
        question: 'How often should I water after installation?',
        answer:
          'For the first 10–14 days, water daily or as directed in your custom care plan. Then transition to a deeper, less frequent schedule as roots knit.',
      },
      {
        question: 'Do you offer commercial sod installation?',
        answer:
          'Yes. We install sod for office parks, retail centers, HOAs, and sports-friendly spaces across Northeast Florida.',
      },
      {
        question: 'What areas around Jacksonville do you serve?',
        answer:
          'We serve Jacksonville, Mandarin, the Beaches, Orange Park, Fleming Island, St. Augustine, Ponte Vedra, and surrounding communities. Reach out if you are nearby.',
      },
    ],
  },
  {
    heading: 'Scheduling & Logistics',
    items: [
      {
        question: 'How soon can you start?',
        answer:
          'Most projects begin within 1–2 weeks after approval, depending on sod availability and weather. We coordinate a date that works for you.',
      },
      {
        question: 'Do you work weekends?',
        answer: 'Saturday installations are available based on schedule and weather. We will confirm timing during your quote review.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="section-padding">
      <div className="container-custom space-y-12">
        <div className="space-y-4 max-w-3xl">
          <h1 className="heading-xl">Sod Installation Frequently Asked Questions</h1>
          <p className="text-lg text-secondary-700">
            This guide is for Jacksonville homeowners and property managers planning a new lawn. If you have a question that is not covered, reach out and we’ll answer it directly.
          </p>
        </div>

        <div className="space-y-10">
          {faqSections.map((section) => (
            <div key={section.heading} className="space-y-4">
              <h2 className="heading-md">{section.heading}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item) => (
                  <div key={item.question} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-secondary-900 mb-2">{item.question}</h3>
                    <p className="text-secondary-700 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary-600 text-white rounded-xl p-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 max-w-2xl">
            <h2 className="heading-lg">Still have questions?</h2>
            <p className="text-lg opacity-90">We’re happy to talk through your property and provide a custom plan.</p>
          </div>
          <Link href="/contact" className="btn-secondary bg-white text-primary-700 hover:text-primary-800">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
