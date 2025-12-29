import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Link from 'next/link'
import { FiCheckCircle, FiMapPin, FiPhone } from 'react-icons/fi'

export const metadata: Metadata = {
    title: 'Sod Installation in Atlantic Beach, FL | Jax Sod',
    description: 'Professional sod installation for Atlantic Beach properties. Salt-tolerant grass varieties and coastal expertise for this charming beach community.',
    keywords: 'sod installation Atlantic Beach FL, sod Atlantic Beach, coastal lawn installation, beach home sod, salt tolerant grass Atlantic Beach',
}

export default function AtlanticBeachPage() {
    return (
        <>
            <Hero
                title="Sod Installation in Atlantic Beach, FL"
                subtitle="Serving 32233 & Mayport Area"
                description="Transform your Atlantic Beach property with professional sod installation designed for our unique coastal village atmosphere."
                ctaText="Get Free Quote"
                ctaLink="/contact"
                backgroundImage="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=2000&q=80"
            />

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="heading-lg mb-4">Expert Sod Services for Atlantic Beach Homeowners</h2>
                                <p className="text-lg text-secondary-700 mb-4">
                                    Atlantic Beach has a character all its own—a laid-back coastal village with tree-lined streets, historic cottages, and a strong sense of community. The lawns here face the same coastal challenges as Jacksonville Beach, but often with more shade from established oak canopies.
                                </p>
                                <p className="text-secondary-700 mb-4">
                                    At Jax Sod, we've helped Atlantic Beach homeowners from Selva Marina to Bull Park find the perfect balance of salt tolerance and shade performance. Whether you're near Town Center or closer to Mayport, we understand your yard's specific needs.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Atlantic Beach's Unique Challenges</h3>
                                <p className="text-secondary-700 mb-4">
                                    This coastal community presents a distinctive combination of conditions:
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Salt + Shade:</strong> Unlike the more exposed beach properties, Atlantic Beach has mature tree cover that creates shade. We often recommend Palmetto St. Augustine—salt-tolerant AND shade-tolerant, a rare combination.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Historic Lot Challenges:</strong> Many Atlantic Beach homes were built decades ago on smaller lots with established landscaping. We're experienced at working carefully around mature trees and existing beds without disruption.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Sandy Coastal Soil:</strong> Like all beach communities, the soil here is sandy and drains quickly. We ensure proper root-to-soil contact and provide guidance on irrigation timing to keep your new lawn healthy.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Our Installation Process</h3>
                                <p className="text-secondary-700 mb-4">
                                    We adapt our process to Atlantic Beach's specific conditions.
                                </p>
                                <ol className="list-decimal pl-5 space-y-2 text-secondary-700 marker:text-primary-600 marker:font-bold">
                                    <li><strong>Site Assessment:</strong> We evaluate shade patterns from existing trees and assess salt exposure based on your distance from the ocean.</li>
                                    <li><strong>Old Turf Removal:</strong> We carefully remove old grass, working around tree roots and established landscaping.</li>
                                    <li><strong>Ground Preparation:</strong> We smooth the sandy surface and ensure proper contact for new roots.</li>
                                    <li><strong>Fresh Sod Installation:</strong> We install farm-fresh sod with precision cuts around trees, beds, and walkways.</li>
                                    <li><strong>Rolling & Watering:</strong> We compress the sod for rooting and provide care instructions tailored to coastal conditions.</li>
                                </ol>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-secondary-50 p-8 rounded-lg border border-secondary-100 sticky top-24">
                                <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
                                    <FiMapPin className="text-primary-600" />
                                    Serving Atlantic Beach
                                </h3>
                                <p className="text-secondary-600 mb-6">
                                    We proudly serve all Atlantic Beach neighborhoods, including:
                                </p>
                                <ul className="space-y-2 text-secondary-700 mb-8">
                                    <li>• Selva Marina</li>
                                    <li>• Bull Park</li>
                                    <li>• Atlantic Beach Town Center</li>
                                    <li>• Oceanwalk</li>
                                    <li>• Mayport</li>
                                    <li>• West Atlantic Beach</li>
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
                    <h2 className="heading-lg mb-6">Transform Your Atlantic Beach Lawn Today</h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Your coastal village home deserves a lawn that thrives in the salt air and shade. Contact Jax Sod for a free consultation.
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
