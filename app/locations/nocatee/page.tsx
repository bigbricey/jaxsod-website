import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Link from 'next/link'
import { FiCheckCircle, FiMapPin, FiPhone } from 'react-icons/fi'

export const metadata: Metadata = {
    title: 'Sod Installation in Nocatee, FL | Jax Sod',
    description: 'Premium sod installation for Nocatee homes. Specializing in new construction lawns, active lifestyle properties, and upscale finishes for this master-planned community.',
    keywords: 'sod installation Nocatee FL, sod Nocatee, lawn installation Ponte Vedra, new construction sod Nocatee, premium lawn installation',
}

export default function NocateePage() {
    return (
        <>
            <Hero
                title="Sod Installation in Nocatee, FL"
                subtitle="Serving 32081 & Nocatee Master-Planned Community"
                description="Premium sod installation for one of Florida's fastest-growing communities. We help Nocatee homeowners achieve the lawn their neighborhood deserves."
                ctaText="Get Free Quote"
                ctaLink="/contact"
                backgroundImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
            />

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="heading-lg mb-4">Premium Sod Services for Nocatee Homeowners</h2>
                                <p className="text-lg text-secondary-700 mb-4">
                                    Nocatee is one of the top-selling master-planned communities in the nation, and for good reason. With its amenity centers, trails, and active lifestyle focus, homeowners here expect excellence in every aspect of their property—including the lawn.
                                </p>
                                <p className="text-secondary-700 mb-4">
                                    At Jax Sod, we've installed sod for hundreds of Nocatee homes across every village—from Twenty Mile to Greenleaf and Crosswater. Whether you're finishing a new build or replacing a tired builder-grade lawn, we deliver the premium look that Nocatee homeowners expect.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Tailored for Nocatee Properties</h3>
                                <p className="text-secondary-700 mb-4">
                                    Nocatee homes often share common characteristics that we've mastered:
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>New Construction Finish:</strong> Builder sod is often rushed and uses the cheapest variety. Many Nocatee homeowners call us 1-2 years after closing when the original lawn starts to fail. We replace it with premium, properly installed sod that lasts.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Active Lifestyle Grass:</strong> With Nocatee's trails, pools, and amenity centers, families here live outdoors. We recommend Empire Zoysia or durable St. Augustine varieties that handle the wear of active households.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>HOA & CDD Standards:</strong> Nocatee's community associations maintain high standards. Our installations meet or exceed those expectations, and we can coordinate if architectural approval is needed.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Our Installation Process</h3>
                                <p className="text-secondary-700 mb-4">
                                    We bring premium standards to every Nocatee installation.
                                </p>
                                <ol className="list-decimal pl-5 space-y-2 text-secondary-700 marker:text-primary-600 marker:font-bold">
                                    <li><strong>Site Assessment:</strong> We evaluate your yard's sun exposure, irrigation system, and any damage from the original installation.</li>
                                    <li><strong>Old Turf Removal:</strong> We strip out the failed or tired grass completely, giving your new sod a fresh start.</li>
                                    <li><strong>Ground Preparation:</strong> We smooth and prep the soil, addressing any settling that occurred after construction.</li>
                                    <li><strong>Premium Sod Installation:</strong> We install farm-fresh sod with meticulous attention to seams and edges.</li>
                                    <li><strong>Rolling & Watering:</strong> We finish with rolling for root contact and provide detailed care instructions.</li>
                                </ol>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-secondary-50 p-8 rounded-lg border border-secondary-100 sticky top-24">
                                <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
                                    <FiMapPin className="text-primary-600" />
                                    Serving Nocatee
                                </h3>
                                <p className="text-secondary-600 mb-6">
                                    We install sod throughout the Nocatee community, including:
                                </p>
                                <ul className="space-y-2 text-secondary-700 mb-8">
                                    <li>• Twenty Mile</li>
                                    <li>• Crosswater</li>
                                    <li>• Greenleaf</li>
                                    <li>• Austin Park</li>
                                    <li>• Willowcove</li>
                                    <li>• Tidewater</li>
                                    <li>• Del Webb Nocatee</li>
                                </ul>

                                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                                    <p className="font-semibold text-secondary-900 mb-2">Ready for a premium lawn?</p>
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
                    <h2 className="heading-lg mb-6">Upgrade Your Nocatee Lawn Today</h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Your home in Nocatee deserves a lawn that matches the community's premium standards. Contact Jax Sod for a free consultation.
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
