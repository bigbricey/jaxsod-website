import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import SodCalculator from '@/components/SodCalculator'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Sod Calculator | Estimate Square Footage & Pallets | Jax Sod',
    description: 'Use our free sod calculator to estimate how much sod you need for your project. Calculate square footage and pallets needed for your Jacksonville lawn.',
    keywords: 'sod calculator, grass calculator, how much sod do I need, calculate square footage for sod, sod pallet calculator',
}

export default function CalculatorPage() {
    return (
        <>
            <Hero
                title="Sod Project Calculator"
                subtitle="Plan Your New Lawn"
                description="Easily calculate how much sod you need for your project. Enter your dimensions below to get an instant estimate."
                ctaText="Get a Quote"
                ctaLink="/contact"
                backgroundImage="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=2000"
                height="medium"
            />

            <section className="section-padding bg-secondary-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        {/* Calculator Component */}
                        <SodCalculator />

                        {/* How to Measure Guide */}
                        <div className="mt-16 bg-white rounded-xl shadow-md p-8">
                            <h2 className="heading-md mb-6">How to Measure Your Lawn</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                                        <div>
                                            <h3 className="font-bold text-lg text-secondary-900">Break it Down</h3>
                                            <p className="text-secondary-600">Divide your yard into simple rectangles or squares. Treat front, back, and side yards as separate areas.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                                        <div>
                                            <h3 className="font-bold text-lg text-secondary-900">Measure Length & Width</h3>
                                            <p className="text-secondary-600">Measure the length and width of each section in feet. Round up to the nearest foot.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                                        <div>
                                            <h3 className="font-bold text-lg text-secondary-900">Account for Curves</h3>
                                            <p className="text-secondary-600">For curved beds or irregular shapes, imagine a rectangle that encompasses the entire area. It's better to have slightly too much than not enough.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-secondary-100 rounded-lg p-6 text-center">
                                    <h3 className="font-bold text-secondary-800 mb-2">Need Help Measuring?</h3>
                                    <p className="text-secondary-600 mb-4 text-sm">
                                        Measuring complex shapes can be tricky. If you're unsure, we can help!
                                    </p>
                                    <Link href="/contact" className="btn-outline text-sm w-full sm:w-auto">
                                        Schedule a Measurement
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
