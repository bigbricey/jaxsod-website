import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Link from 'next/link'
import { FiCheck, FiInfo } from 'react-icons/fi'

export const metadata: Metadata = {
    title: 'Sod Installation Cost Jacksonville, FL | 2024 Pricing Guide',
    description: 'How much does sod installation cost in Jacksonville? Learn about pricing factors, average costs per square foot, and get a free quote from Jax Sod.',
    keywords: 'sod installation cost Jacksonville, sod prices Jacksonville fl, cost to sod yard, sod pallets price, St. Augustine sod price',
}

export default function PricingPage() {
    return (
        <>
            <Hero
                title="2024 Sod Installation Pricing Guide"
                subtitle="Transparent Pricing"
                description="Understanding the costs behind professional sod installation in Northeast Florida."
                ctaText="Get a Custom Quote"
                ctaLink="/contact"
                backgroundImage="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=2000"
                height="medium"
            />

            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* Intro */}
                        <div className="text-secondary-700 text-lg leading-relaxed">
                            <p className="mb-6">
                                One of the most common questions we get is, <strong>"How much will it cost to sod my yard?"</strong>
                            </p>
                            <p>
                                The honest answer is that every yard is unique. While we can give ranges, the final price depends on
                                accessibility, the condition of your current soil, and the specific variety of grass you choose.
                                Below is a straightforward guide to help you budget for your project.
                            </p>
                        </div>

                        {/* Cost Factors */}
                        <div className="space-y-6">
                            <h2 className="heading-md border-b border-secondary-200 pb-3">What Goes Into the Price?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
                                    <h3 className="font-bold text-xl text-secondary-900 mb-3">1. Site Preparation</h3>
                                    <p className="text-secondary-600">
                                        This is often the biggest variable. Does your old grass need to be removed? Is there debris, roots,
                                        or uneven grading? Proper prep is critical for sod survival, and labor costs reflect the difficulty
                                        of clearing the land.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
                                    <h3 className="font-bold text-xl text-secondary-900 mb-3">2. Accessibility</h3>
                                    <p className="text-secondary-600">
                                        Can we get our machinery into the backyard? If we have to wheelbarrow materials by hand through
                                        a small gate, the labor time roughly doubles compared to a wide-open front yard access.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
                                    <h3 className="font-bold text-xl text-secondary-900 mb-3">3. Sod Variety</h3>
                                    <p className="text-secondary-600">
                                        Bahia is generally the most budget-friendly option. St. Augustine (Floratam) is the standard mid-range choice,
                                        while Zoysia and certified shade variations are premium products with higher pallet costs.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
                                    <h3 className="font-bold text-xl text-secondary-900 mb-3">4. Square Footage</h3>
                                    <p className="text-secondary-600">
                                        We benefit from economies of scale. Generally, the larger the project, the lower the cost per square foot
                                        becomes, as mobilization costs are spread out over a larger area.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Why Quote vs Price List */}
                        <div className="bg-primary-50 rounded-xl p-8 border border-primary-100">
                            <h2 className="heading-md text-primary-800 mb-4 flex items-center gap-3">
                                <FiInfo /> Why We Don't Post a Fixed Price List
                            </h2>
                            <p className="text-secondary-700 mb-6">
                                Giving a fixed "per pallet" price online is misleading because it ignores the labor of installation.
                                A pallet dropped in a driveway is very different from a pallet installed, rolled, and cut-in around flower beds.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 items-center">
                                <div className="flex-1">
                                    <p className="font-semibold text-secondary-900 mb-2">The fastest way to get a price?</p>
                                    <p className="text-secondary-700">
                                        Text your Name, Address, and "Estimate" to our office line. We can often look up property records
                                        or schedule a fly-by quickly.
                                    </p>
                                </div>
                                <a href="tel:9049011457" className="btn-primary whitespace-nowrap">
                                    Text (904) 901-1457
                                </a>
                            </div>
                        </div>

                        {/* Value Prop */}
                        <div className="space-y-6">
                            <h2 className="heading-md">The "Cheap Sod" Warning</h2>
                            <p className="text-secondary-700 leading-relaxed">
                                In Jacksonville, you will find "tailgate installers" offering rock-bottom prices.
                                Usually, they are saving money by:
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    'Skipping proper ground prep',
                                    'Using dried-out or "old" sod',
                                    'Not rolling the sod for soil contact',
                                    'Lacking insurance or licensing'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-secondary-700 p-3 bg-white rounded border border-secondary-100">
                                        <span className="text-red-500 font-bold">✕</span> {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-secondary-700 mt-4">
                                At Jax Sod, we do it right the first time. We are fully licensed and insured, protecting your property
                                and giving you peace of mind.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-secondary-900 text-white text-center">
                <div className="container-custom">
                    <h2 className="heading-lg mb-6">Get An Exact Price for Your Project</h2>
                    <p className="text-xl text-secondary-200 mb-8 max-w-2xl mx-auto">
                        No guessing games. Contact us today for a professional, transparent estimate tailored to your yard.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary">
                            Request Custom Quote
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
