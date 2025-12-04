import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Link from 'next/link'
import { FiCheckCircle, FiMapPin, FiPhone } from 'react-icons/fi'

export const metadata: Metadata = {
    title: 'Sod Installation in Mandarin, FL | Jax Sod',
    description: 'Professional sod installation in Mandarin, FL. We specialize in St. Augustine and Zoysia lawns for Mandarin\'s established neighborhoods and shady properties.',
    keywords: 'sod installation Mandarin FL, sod replacement Mandarin, St. Augustine sod Mandarin, Zoysia sod Mandarin, lawn replacement Mandarin',
}

export default function MandarinPage() {
    return (
        <>
            <Hero
                title="Sod Installation in Mandarin, FL"
                subtitle="Serving 32223, 32258 & Surrounding Areas"
                description="Transform your property with professional sod installation designed for Mandarin's unique landscape and soil conditions."
                ctaText="Get Free Quote"
                ctaLink="/contact"
                backgroundImage="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2000&q=80"
            />

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="heading-lg mb-4">Expert Sod Services for Mandarin Homeowners</h2>
                                <p className="text-lg text-secondary-700 mb-4">
                                    Mandarin is known for its beautiful, established neighborhoods, towering oak trees, and riverfront properties. However, these same features can create challenges for maintaining a healthy lawn. At Jax Sod, we have decades of experience helping Mandarin homeowners navigate the specific conditions of this historic area.
                                </p>
                                <p className="text-secondary-700 mb-4">
                                    Whether you live off San Jose Boulevard, near Loretto Road, or in a riverfront estate, our team understands the local micro-climates. We don't just lay grass; we assess your property's shade levels, soil composition, and drainage to recommend the perfect sod variety that will thrive for years to come.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Addressing Mandarin's Soil & Shade</h3>
                                <p className="text-secondary-700 mb-4">
                                    One of the most common issues we see in Mandarin is the struggle to grow grass under the canopy of large oak trees. Many standard grasses fail in these low-light environments.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Shade-Tolerant Solutions:</strong> We often recommend specific cultivars of St. Augustine, such as Seville or Palmetto, which perform significantly better in the dappled shade found throughout Mandarin.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Soil Enrichment:</strong> While some parts of Mandarin have decent topsoil, others can be sandy or compacted. Our installation process includes thorough soil preparation to ensure your new sod has the nutrients and structure it needs to root deeply.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Drainage Correction:</strong> For properties near the St. Johns River or Julington Creek, moisture management is key. We grade the soil to prevent standing water that can lead to fungus and root rot.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Our Installation Process</h3>
                                <p className="text-secondary-700 mb-4">
                                    We take pride in a meticulous installation process that minimizes disruption to your daily life while maximizing results.
                                </p>
                                <ol className="list-decimal pl-5 space-y-2 text-secondary-700 marker:text-primary-600 marker:font-bold">
                                    <li><strong>Site Assessment:</strong> We visit your Mandarin home to measure, check shade patterns, and test the soil.</li>
                                    <li><strong>Old Turf Removal:</strong> We cleanly strip away old grass and weeds, hauling everything away.</li>
                                    <li><strong>Ground Preparation:</strong> We till and smooth the soil, adding amendments if necessary to correct pH or nutrient deficiencies common in the area.</li>
                                    <li><strong>Fresh Sod Installation:</strong> We deliver farm-fresh sod and install it immediately to prevent drying, cutting it tightly around trees, beds, and walkways.</li>
                                    <li><strong>Rolling & Watering:</strong> We roll the lawn to remove air pockets and provide clear watering instructions tailored to your specific grass type.</li>
                                </ol>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-secondary-50 p-8 rounded-lg border border-secondary-100 sticky top-24">
                                <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
                                    <FiMapPin className="text-primary-600" />
                                    Serving Mandarin
                                </h3>
                                <p className="text-secondary-600 mb-6">
                                    We are proud to serve the entire Mandarin community, including:
                                </p>
                                <ul className="space-y-2 text-secondary-700 mb-8">
                                    <li>• Beauclerc</li>
                                    <li>• Julington Creek</li>
                                    <li>• Loretto</li>
                                    <li>• San Jose</li>
                                    <li>• Fruit Cove (North)</li>
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
                    <h2 className="heading-lg mb-6">Transform Your Mandarin Lawn Today</h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Don't let shade or sandy soil stop you from having the best yard on the block. Contact Jax Sod for a free consultation.
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
