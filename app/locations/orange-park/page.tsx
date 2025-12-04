import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Link from 'next/link'
import { FiCheckCircle, FiMapPin, FiPhone, FiLayers } from 'react-icons/fi'

export const metadata: Metadata = {
    title: 'Sod Installation in Orange Park, FL | Jax Sod',
    description: 'Professional sod installation in Orange Park, Fleming Island, and Clay County. We specialize in durable lawns for clay soils and active families.',
    keywords: 'sod installation Orange Park, Clay County sod, Fleming Island sod, Zoysia Orange Park, Bermuda grass Orange Park, lawn replacement Clay County',
}

export default function OrangeParkPage() {
    return (
        <>
            <Hero
                title="Sod Installation in Orange Park, FL"
                subtitle="Serving Orange Park, Fleming Island & Clay County"
                description="Durable, beautiful sod installation services designed to thrive in Orange Park's clay-rich soils."
                ctaText="Get Free Quote"
                ctaLink="/contact"
                backgroundImage="https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=2000&q=80"
            />

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="heading-lg mb-4">Reliable Sod Installation for Clay County</h2>
                                <p className="text-lg text-secondary-700 mb-4">
                                    Orange Park and the surrounding Clay County areas offer spacious lots and family-friendly neighborhoods. However, the soil conditions west of the St. Johns River can be distinct from the rest of Jacksonville. At Jax Sod, we specialize in installing lawns that handle the unique "gumbo" clay and compaction issues often found in Orange Park.
                                </p>
                                <p className="text-secondary-700 mb-4">
                                    Whether you're in Fleming Island, Oakleaf, or the heart of Orange Park, we provide comprehensive sod services. We help you choose a grass variety that stands up to kids, pets, and the Florida heat while looking great year-round.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Handling Clay Soil & Drainage</h3>
                                <p className="text-secondary-700 mb-4">
                                    Unlike the beaches, Orange Park often deals with heavier clay soils that hold water. While this can be good for drought tolerance, it can also lead to drainage problems and root rot if not managed correctly.
                                </p>
                                <div className="bg-secondary-50 p-6 rounded-lg border-l-4 border-primary-600 mb-6">
                                    <h4 className="font-bold text-secondary-900 mb-2 flex items-center gap-2">
                                        <FiLayers className="text-primary-600" />
                                        The Clay Soil Advantage
                                    </h4>
                                    <p className="text-secondary-700">
                                        Clay soil is nutrient-rich but can become compacted. Our installation process focuses on aeration and proper grading to ensure your new sod can establish a deep, healthy root system.
                                    </p>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Drainage Grading:</strong> Before laying sod, we grade the surface to ensure water flows away from your home's foundation and doesn't pool in the middle of your yard. This is critical in clay-heavy areas.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Durable Varieties:</strong> For active families in Orange Park, we often recommend Zoysia or Bermuda grasses. These varieties recover quickly from foot traffic and form a dense mat that crowds out weeds.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Soil Conditioning:</strong> We may recommend adding a layer of sand or organic compost to break up heavy clay surfaces, improving aeration and root penetration for the new sod.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Complete Lawn Transformation</h3>
                                <p className="text-secondary-700 mb-4">
                                    Our team handles every aspect of the project. We don't just drop off pallets of grass; we provide a full turnkey service.
                                </p>
                                <p className="text-secondary-700 mb-4">
                                    This includes removing your old, patchy lawn, treating for any existing pests or weeds, preparing the base, and installing the new sod with precision. We leave your property clean and your new lawn ready to grow. We also provide detailed care instructions specifically for the clay soil conditions in your area.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-secondary-50 p-8 rounded-lg border border-secondary-100 sticky top-24">
                                <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
                                    <FiMapPin className="text-primary-600" />
                                    Serving Orange Park
                                </h3>
                                <p className="text-secondary-600 mb-6">
                                    We serve homeowners and businesses throughout Clay County:
                                </p>
                                <ul className="space-y-2 text-secondary-700 mb-8">
                                    <li>• Orange Park</li>
                                    <li>• Fleming Island</li>
                                    <li>• Oakleaf Plantation</li>
                                    <li>• Middleburg</li>
                                    <li>• Green Cove Springs</li>
                                </ul>

                                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                                    <p className="font-semibold text-secondary-900 mb-2">Get a free estimate</p>
                                    <a href="tel:9049011457" className="flex items-center justify-center gap-2 text-2xl font-bold text-primary-600 hover:text-primary-700 mb-4">
                                        <FiPhone />
                                        (904) 901-1457
                                    </a>
                                    <Link href="/contact" className="btn-primary w-full block">
                                        Get Free Quote
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-primary-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="heading-lg mb-6">Ready for a Better Lawn?</h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Trust the experts who understand Orange Park's soil and climate. Get your free quote today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-outline">
                            Request Estimate
                        </Link>
                        <a href="tel:9049011457" className="btn-secondary">
                            Call (904) 901-1457
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
