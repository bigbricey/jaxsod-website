'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { FiCalendar, FiArrowRight, FiSearch, FiX } from 'react-icons/fi'
import { articles } from '@/data/articles'

export default function ArticleSearch() {
    const searchParams = useSearchParams()
    const categoryParam = searchParams.get('category')
    const queryParam = searchParams.get('q')

    const [searchQuery, setSearchQuery] = useState(queryParam || '')
    const [selectedCategory, setSelectedCategory] = useState('All')

    // Update selected category when URL param changes
    useEffect(() => {
        if (categoryParam) {
            setSelectedCategory(categoryParam)
        } else {
            // Only reset to All if there is NO param (allows back button to work naturally)
            // But we don't want to force 'All' if user manually clicked 'All' previously
            // simpler logic: sync with param if present.
        }
    }, [categoryParam])

    // Extract unique categories dynamically
    const categories = useMemo(() => {
        const allCats = articles.map(article => article.category)
        return ['All', ...Array.from(new Set(allCats)).sort()]
    }, [])

    // Filter articles based on search query and category
    const filteredArticles = useMemo(() => {
        return articles.filter(article => {
            const matchesSearch =
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

            const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory

            return matchesSearch && matchesCategory
        })
    }, [searchQuery, selectedCategory])

    return (
        <section className="section-padding">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="heading-lg mb-4">Latest Articles</h2>
                    <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                        Expert insights and practical advice from 37+ years of sod installation experience
                    </p>
                </div>

                {/* Search and Filter Controls */}
                <div className="max-w-4xl mx-auto mb-12 space-y-6">
                    {/* Search Input */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiSearch className="h-5 w-5 text-secondary-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-10 py-3 border border-secondary-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 shadow-sm"
                            placeholder="Search articles by title or keyword..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setSearchQuery('')}
                            >
                                <FiX className="h-5 w-5 text-secondary-400 hover:text-secondary-600" />
                            </button>
                        )}
                    </div>

                    {/* Category Pills */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory === category
                                    ? 'bg-primary-600 text-white shadow-md'
                                    : 'bg-white text-secondary-600 border border-secondary-200 hover:bg-secondary-50 hover:border-secondary-300'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6 text-secondary-600 font-medium">
                    Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'result' : 'results'}
                </div>

                {/* Articles Grid */}
                {filteredArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map((article) => (
                            <article
                                key={article.slug}
                                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full"
                            >
                                {/* Image Placeholder - In real app we would use Next/Image with real URLs */}
                                {article.image && (
                                    <div className="h-48 overflow-hidden bg-secondary-200">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                )}

                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center gap-4 mb-3 text-sm">
                                        <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                                            {article.category}
                                        </span>
                                        <span className="text-secondary-500">{Math.max(1, Math.ceil(article.wordCount / 200))} min read</span>
                                    </div>

                                    <Link href={`/articles/${article.slug}`} className="block group hover:text-primary-600 transition-colors">
                                        <h3 className="text-xl font-bold mb-3 text-secondary-900 leading-tight group-hover:text-primary-600">
                                            {article.title}
                                        </h3>
                                    </Link>

                                    <p className="text-secondary-600 mb-4 leading-relaxed flex-grow">{article.excerpt}</p>

                                    <div className="flex items-center justify-between pt-4 border-t border-secondary-200 mt-auto">
                                        <div className="flex items-center gap-2 text-sm text-secondary-500">
                                            <FiCalendar />
                                            <time dateTime={article.date}>
                                                {new Date(article.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })}
                                            </time>
                                        </div>

                                        <Link
                                            href={`/articles/${article.slug}`}
                                            className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center gap-2"
                                        >
                                            Read More
                                            <FiArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-secondary-50 rounded-lg">
                        <h3 className="text-xl font-semibold text-secondary-900 mb-2">No articles found</h3>
                        <p className="text-secondary-600">Try adjusting your search terms or selecting a different category.</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                            className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Contact CTA */}
                <div className="mt-12 text-center">
                    <Link href="/contact" className="btn-primary inline-block">
                        Contact Us with Questions
                    </Link>
                </div>
            </div>
        </section>
    )
}
