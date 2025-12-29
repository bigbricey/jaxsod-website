import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Link from 'next/link'
import { FiCheckCircle, FiMapPin, FiPhone } from 'react-icons/fi'

export const metadata: Metadata = {
    title: 'Sod Installation in Fleming Island, FL | Jax Sod',
    description: 'Professional sod installation for Fleming Island homes. HOA-compliant installations, family-friendly lawns, and commercial projects in Clay County.',
    keywords: 'sod installation Fleming Island FL, sod Fleming Island, lawn installation Clay County, HOA sod installation, family lawn installation',
}

export default function FlemingIslandPage() {
    return (
        <>
            <Hero
                title="Sod Installation in Fleming Island, FL"
                subtitle="Serving 32003, 32068 & Clay County"
                description="Transform your Fleming Island property with professional sod installation designed for family living and HOA standards."
                ctaText="Get Free Quote"
                ctaLink="/contact"
                backgroundImage="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2000&q=80"
            />

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="heading-lg mb-4">Expert Sod Services for Fleming Island Families</h2>
                                <p className="text-lg text-secondary-700 mb-4">
                                    Fleming Island is known for its family-friendly communities, excellent schools, and active outdoor lifestyle. From Eagle Harbor to Pace Island, homeowners here expect lawns that can handle the demands of kids, pets, and weekend barbecues while still looking pristine.
                                </p>
                                <p className="text-secondary-700 mb-4">
                                    At Jax Sod, we've worked in nearly every subdivision in Fleming Island. We understand the HOA requirements, the local soil conditions, and what grass varieties perform best in this area's mix of sun and shade.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Built for Fleming Island Living</h3>
                                <p className="text-secondary-700 mb-4">
                                    Fleming Island properties have specific needs that we address with every installation:
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>HOA Compliance:</strong> Many Fleming Island communities have strict landscaping standards. We work within your HOA guidelines and can provide documentation for approval if needed. Our clean, professional installations pass even the strictest inspections.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Family & Pet-Friendly Grass:</strong> We often recommend Empire Zoysia for active families—it's incredibly durable, soft underfoot, and recovers quickly from wear. It's the "playground grass" of Northeast Florida.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Careful Access:</strong> Many Fleming Island homes have limited backyard access through fences or narrow side yards. Our crews are experienced at moving materials efficiently without damaging fences, landscaping, or pool decks.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Our Installation Process</h3>
                                <p className="text-secondary-700 mb-4">
                                    Every Fleming Island project follows our proven process for lasting results.
                                </p>
                                <ol className="list-decimal pl-5 space-y-2 text-secondary-700 marker:text-primary-600 marker:font-bold">
                                    <li><strong>Site Assessment:</strong> We visit your home to measure, check gate access, and evaluate your yard's specific conditions.</li>
                                    <li><strong>Old Turf Removal:</strong> We remove existing grass and weeds completely, leaving a clean slate.</li>
                                    <li><strong>Ground Preparation:</strong> We smooth the soil surface and address any bumps or debris for a level finish.</li>
                                    <li><strong>Fresh Sod Installation:</strong> We install farm-fresh sod with tight seams, cutting carefully around beds, trees, and play areas.</li>
                                    <li><strong>Rolling & Watering:</strong> We compress the sod for root contact and walk you through the care schedule.</li>
                                </ol>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-secondary-50 p-8 rounded-lg border border-secondary-100 sticky top-24">
                                <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
                                    <FiMapPin className="text-primary-600" />
                                    Serving Fleming Island
                                </h3>
                                <p className="text-secondary-600 mb-6">
                                    We proudly serve Fleming Island and surrounding Clay County communities:
                                </p>
                                <ul className="space-y-2 text-secondary-700 mb-8">
                                    <li>• Eagle Harbor</li>
                                    <li>• Pace Island</li>
                                    <li>• Fleming Island Plantation</li>
                                    <li>• Hibernia</li>
                                    <li>• Black Creek</li>
                                    <li>• Green Cove Springs</li>
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
                    <h2 className="heading-lg mb-6">Transform Your Fleming Island Lawn Today</h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Give your family a lawn they can actually use. Contact Jax Sod for a free consultation and see why Fleming Island homeowners trust us.
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
