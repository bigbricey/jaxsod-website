import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Link from 'next/link'
import { FiCheckCircle, FiMapPin, FiPhone } from 'react-icons/fi'

export const metadata: Metadata = {
    title: 'Sod Installation in Jacksonville Beach, FL | Jax Sod',
    description: 'Professional sod installation for Jacksonville Beach homes. Salt-tolerant St. Augustine and drought-resistant varieties perfect for coastal properties and sandy soils.',
    keywords: 'sod installation Jacksonville Beach FL, sod replacement Jax Beach, St. Augustine sod beach, coastal lawn installation, sod near the ocean Jacksonville',
}

export default function JacksonvilleBeachPage() {
    return (
        <>
            <Hero
                title="Sod Installation in Jacksonville Beach, FL"
                subtitle="Serving 32250, 32240 & Coastal Communities"
                description="Transform your beachside property with professional sod installation designed for Northeast Florida's unique coastal environment."
                ctaText="Get Free Quote"
                ctaLink="/contact"
                backgroundImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
            />

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="heading-lg mb-4">Expert Sod Services for Jacksonville Beach Homeowners</h2>
                                <p className="text-lg text-secondary-700 mb-4">
                                    Living near the ocean in Jacksonville Beach comes with stunning views and a relaxed lifestyle—but it also presents unique challenges for maintaining a healthy lawn. Salt spray, sandy soil, intense sun exposure, and coastal winds can quickly stress or kill the wrong type of grass.
                                </p>
                                <p className="text-secondary-700 mb-4">
                                    At Jax Sod, we have decades of experience helping Jacksonville Beach homeowners—from beachfront properties on 1st Street to family homes near Beaches Town Center—select and install sod varieties that not only survive but thrive in our coastal microclimate.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Conquering Coastal Lawn Challenges</h3>
                                <p className="text-secondary-700 mb-4">
                                    The Beaches present a unique set of conditions that require specialized knowledge. Here's how we address the most common issues:
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Salt Tolerance:</strong> We recommend Floratam St. Augustine for full-sun properties—it's one of the most salt-tolerant grasses available and handles the salt spray that blows off the Atlantic.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Sandy Soil Solutions:</strong> Beach sand drains instantly and holds almost no nutrients. Our installation process includes thorough soil prep and we advise on proper fertilization schedules to compensate for the rapid drainage.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Irrigation Coordination:</strong> Many beach homes have irrigation systems that need adjustment after sod installation. We coordinate the initial heavy watering schedule and can advise on long-term settings to keep your lawn green without wasting water.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Our Installation Process</h3>
                                <p className="text-secondary-700 mb-4">
                                    Our process is tailored for the sandy, fast-draining conditions of Jacksonville Beach properties.
                                </p>
                                <ol className="list-decimal pl-5 space-y-2 text-secondary-700 marker:text-primary-600 marker:font-bold">
                                    <li><strong>Site Assessment:</strong> We evaluate sun exposure, existing irrigation, and soil composition at your beach property.</li>
                                    <li><strong>Old Turf Removal:</strong> We remove existing grass and weeds, hauling everything away.</li>
                                    <li><strong>Ground Preparation:</strong> We smooth the sandy surface and remove debris that could interfere with the new sod's root-to-soil contact.</li>
                                    <li><strong>Fresh Sod Installation:</strong> We deliver and install farm-fresh sod immediately, custom-cutting around palms, dune plantings, and outdoor living areas.</li>
                                    <li><strong>Rolling & Watering:</strong> We roll the lawn to eliminate air pockets and provide a customized watering schedule for coastal conditions.</li>
                                </ol>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-secondary-50 p-8 rounded-lg border border-secondary-100 sticky top-24">
                                <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
                                    <FiMapPin className="text-primary-600" />
                                    Serving Jacksonville Beach
                                </h3>
                                <p className="text-secondary-600 mb-6">
                                    We are proud to serve the entire Jacksonville Beach community, including:
                                </p>
                                <ul className="space-y-2 text-secondary-700 mb-8">
                                    <li>• South Jax Beach</li>
                                    <li>• North Jax Beach</li>
                                    <li>• Beaches Town Center</li>
                                    <li>• Oceanfront / A1A Corridor</li>
                                    <li>• Beach Haven</li>
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
                    <h2 className="heading-lg mb-6">Transform Your Jacksonville Beach Lawn Today</h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Don't let sandy soil or salt spray stop you from having the best yard on your block. Contact Jax Sod for a free consultation.
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
