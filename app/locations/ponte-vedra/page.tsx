import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Link from 'next/link'
import { FiCheckCircle, FiMapPin, FiPhone, FiSun } from 'react-icons/fi'

export const metadata: Metadata = {
    title: 'Sod Installation in Ponte Vedra, FL | Jax Sod',
    description: 'Expert sod installation in Ponte Vedra and Ponte Vedra Beach. We provide salt-tolerant sod varieties like Zoysia and St. Augustine for coastal properties.',
    keywords: 'sod installation Ponte Vedra, Ponte Vedra Beach sod, salt tolerant sod, Zoysia Ponte Vedra, St. Augustine Ponte Vedra, Nocatee sod installation',
}

export default function PonteVedraPage() {
    return (
        <>
            <Hero
                title="Sod Installation in Ponte Vedra, FL"
                subtitle="Serving Ponte Vedra Beach, Nocatee & Palm Valley"
                description="Premium sod installation services tailored for coastal environments and sandy soils in Ponte Vedra."
                ctaText="Get Free Quote"
                ctaLink="/contact"
                backgroundImage="https://images.unsplash.com/photo-1576014131341-fe1486cb2475?auto=format&fit=crop&w=2000&q=80"
            />

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="heading-lg mb-4">Coastal Sod Solutions for Ponte Vedra</h2>
                                <p className="text-lg text-secondary-700 mb-4">
                                    Living in Ponte Vedra offers a beautiful coastal lifestyle, but it presents unique challenges for lawn care. The combination of sandy soil, salt spray, and intense sun requires a specialized approach to sod installation. At Jax Sod, we understand exactly what it takes to establish a lush, green lawn east of the Intracoastal.
                                </p>
                                <p className="text-secondary-700 mb-4">
                                    From the oceanfront estates of Ponte Vedra Boulevard to the manicured communities of Nocatee and Sawgrass, we deliver premium results. We don't just install grass; we engineer a growing environment that helps your lawn withstand the coastal elements.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Mastering Sandy Soil & Salt</h3>
                                <p className="text-secondary-700 mb-4">
                                    The soil in Ponte Vedra is predominantly sandy, which drains water very quickly and holds fewer nutrients. Without the right preparation, new sod can dry out and fail rapidly.
                                </p>
                                <div className="bg-secondary-50 p-6 rounded-lg border-l-4 border-primary-600 mb-6">
                                    <h4 className="font-bold text-secondary-900 mb-2 flex items-center gap-2">
                                        <FiSun className="text-primary-600" />
                                        The "Coastal Challenge"
                                    </h4>
                                    <p className="text-secondary-700">
                                        Salt spray can burn sensitive grass blades, and rapid drainage can leave roots thirsty. We combat this by selecting the right genetics and improving the soil structure before a single piece of sod is laid.
                                    </p>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Salt-Tolerant Varieties:</strong> We highly recommend specific strains of St. Augustine and Zoysia that have proven salt tolerance. These varieties can handle the occasional sea breeze without turning brown.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Organic Soil Amendments:</strong> Because sandy soil lacks organic matter, we often amend the installation site to improve water retention. This helps your lawn stay hydrated longer between watering cycles.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                        <span className="text-secondary-700"><strong>Irrigation Calibration:</strong> In sandy soil, short, frequent watering is often less effective than deep soaking. We help you calibrate your irrigation system to encourage deep root growth, which is essential for drought resistance.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Why Choose Jax Sod in Ponte Vedra?</h3>
                                <p className="text-secondary-700 mb-4">
                                    We are a licensed and insured company with a reputation for excellence in high-end residential and commercial projects.
                                </p>
                                <p className="text-secondary-700 mb-4">
                                    Whether you are renovating a landscape in The Plantation or installing a new lawn in a Nocatee neighborhood, we treat your property with the utmost respect. Our crews are efficient, clean, and professional, ensuring that your driveway and walkways are left spotless after the job is done.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-secondary-50 p-8 rounded-lg border border-secondary-100 sticky top-24">
                                <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
                                    <FiMapPin className="text-primary-600" />
                                    Serving Ponte Vedra
                                </h3>
                                <p className="text-secondary-600 mb-6">
                                    We provide full-service installation throughout the beaches area:
                                </p>
                                <ul className="space-y-2 text-secondary-700 mb-8">
                                    <li>• Ponte Vedra Beach</li>
                                    <li>• Sawgrass</li>
                                    <li>• Nocatee</li>
                                    <li>• Palm Valley</li>
                                    <li>• South Jacksonville Beach</li>
                                </ul>

                                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                                    <p className="font-semibold text-secondary-900 mb-2">Get a quote for your project</p>
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
                    <h2 className="heading-lg mb-6">Upgrade Your Coastal Landscape</h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Experience the difference of professional installation designed for Ponte Vedra's unique environment.
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
