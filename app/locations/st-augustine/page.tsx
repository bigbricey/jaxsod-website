import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Link from 'next/link'
import { FiCheckCircle, FiMapPin, FiPhone } from 'react-icons/fi'

export const metadata: Metadata = {
    title: 'Sod Installation in St. Augustine, FL | Jax Sod',
    description: 'Professional sod installation in St. Augustine and St. Johns County. Specializing in historic home lawns, new construction, and estate properties.',
    keywords: 'sod installation St. Augustine FL, sod St. Johns County, lawn installation St. Augustine, St. Augustine grass installation, new construction sod',
}

export default function StAugustinePage() {
    return (
        <>
            <Hero
                title="Sod Installation in St. Augustine, FL"
                subtitle="Serving 32080, 32084, 32086 & St. Johns County"
                description="Transform your property with professional sod installation tailored for St. Augustine's historic neighborhoods and thriving new developments."
                ctaText="Get Free Quote"
                ctaLink="/contact"
                backgroundImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=80"
            />

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="heading-lg mb-4">Expert Sod Services for St. Augustine & St. Johns County</h2>
                                <p className="text-lg text-secondary-700 mb-4">
                                    From the cobblestone streets of the nation's oldest city to the bustling new developments in St. Johns County, the greater St. Augustine area presents a diverse landscape with unique lawn care needs. At Jax Sod, we understand that a historic cottage near the Lighthouse requires a different approach than a new build in Julington Creek Plantation.
                                </p>
                                <p className="text-secondary-700 mb-4">
                                    Whether you're refreshing a tired lawn in Davis Shores, completing a new home in World Golf Village, or need sod for an estate property in Ponte Vedra, our team has the experience and local knowledge to deliver a lawn that thrives.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Serving Historic and New St. Augustine</h3>
                                <p className="text-secondary-700 mb-4">
                                    The St. Augustine area has exploded with growth, but older neighborhoods still have distinct needs. Here's how we approach both:
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Historic Homes:</strong> Older properties often have established oak canopies and unique lot shapes. We carefully work around root systems and recommend shade-tolerant varieties like Palmetto St. Augustine.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>New Construction:</strong> We partner with builders throughout St. Johns County to install sod on tight schedules. From World Golf Village to Aberdeen, we know the process and can coordinate with your builder's timeline.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Estate & Acreage:</strong> Large lot properties benefit from our volume pricing and our ability to scale crews for big jobs. We've installed acres of sod for homes throughout St. Johns County.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Our Installation Process</h3>
                                <p className="text-secondary-700 mb-4">
                                    We bring the same professional standards to every St. Augustine project, large or small.
                                </p>
                                <ol className="list-decimal pl-5 space-y-2 text-secondary-700 marker:text-primary-600 marker:font-bold">
                                    <li><strong>Site Assessment:</strong> We visit your property to measure, assess soil conditions, and identify shade patterns from mature trees.</li>
                                    <li><strong>Old Turf Removal:</strong> We strip away old grass and weeds, hauling all debris offsite.</li>
                                    <li><strong>Ground Preparation:</strong> We smooth the surface and address any drainage issues at the surface level to ensure proper sod contact.</li>
                                    <li><strong>Fresh Sod Installation:</strong> We deliver farm-fresh sod and install it the same day for maximum freshness and rooting success.</li>
                                    <li><strong>Rolling & Watering:</strong> We compress the sod to eliminate air pockets and provide detailed care instructions for your new lawn.</li>
                                </ol>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-secondary-50 p-8 rounded-lg border border-secondary-100 sticky top-24">
                                <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
                                    <FiMapPin className="text-primary-600" />
                                    Serving St. Augustine Area
                                </h3>
                                <p className="text-secondary-600 mb-6">
                                    We proudly serve communities throughout St. Johns County, including:
                                </p>
                                <ul className="space-y-2 text-secondary-700 mb-8">
                                    <li>• Downtown St. Augustine</li>
                                    <li>• Davis Shores</li>
                                    <li>• St. Augustine Beach</li>
                                    <li>• World Golf Village</li>
                                    <li>• Julington Creek</li>
                                    <li>• CR-210 Corridor</li>
                                </ul>

                                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                                    <p className="font-semibold text-secondary-900 mb-2">Ready for a new lawn?</p>
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
                    <h2 className="heading-lg mb-6">Transform Your St. Augustine Lawn Today</h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Whether you're restoring a historic property or finishing a new build, Jax Sod delivers beautiful, lasting results. Contact us for a free consultation.
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
