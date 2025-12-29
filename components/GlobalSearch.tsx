'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FiSearch, FiX, FiArrowRight } from 'react-icons/fi'
import { articles } from '@/data/articles'

export default function GlobalSearch() {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    // Filter articles based on search query
    const results = useMemo(() => {
        if (query.length < 2) return []
        const lowerQuery = query.toLowerCase()
        return articles.filter(article =>
            article.title.toLowerCase().includes(lowerQuery) ||
            article.excerpt.toLowerCase().includes(lowerQuery) ||
            article.category.toLowerCase().includes(lowerQuery)
        ).slice(0, 5) // Limit to 5 results for quick search
    }, [query])

    // Open search with keyboard shortcut
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // CMD/CTRL + K to open search
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault()
                setIsOpen(true)
            }
            // Escape to close
            if (e.key === 'Escape') {
                setIsOpen(false)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isOpen])

    // Close and reset when navigating
    const handleResultClick = () => {
        setIsOpen(false)
        setQuery('')
    }

    // Go to articles page with search query
    const handleSearchAll = () => {
        if (query) {
            router.push(`/articles?q=${encodeURIComponent(query)}`)
            setIsOpen(false)
            setQuery('')
        }
    }

    return (
        <>
            {/* Search Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 text-secondary-600 hover:text-primary-600 transition-colors"
                aria-label="Search articles"
            >
                <FiSearch className="text-xl" />
                <span className="hidden md:inline text-sm font-medium">Search</span>
                <kbd className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium text-secondary-500 bg-secondary-100 rounded">
                    ⌘K
                </kbd>
            </button>

            {/* Search Modal Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[100] flex items-start justify-center pt-[10vh]"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Search Input */}
                        <div className="flex items-center gap-3 p-4 border-b border-secondary-200">
                            <FiSearch className="text-xl text-secondary-400 flex-shrink-0" />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search lawn care articles, tips, and guides..."
                                className="flex-1 text-lg outline-none placeholder-secondary-400"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleSearchAll()
                                }}
                            />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-secondary-100 rounded"
                            >
                                <FiX className="text-xl text-secondary-500" />
                            </button>
                        </div>

                        {/* Quick Results */}
                        {results.length > 0 && (
                            <div className="max-h-80 overflow-y-auto">
                                {results.map((article) => (
                                    <Link
                                        key={article.slug}
                                        href={`/articles/${article.slug}`}
                                        onClick={handleResultClick}
                                        className="flex items-start gap-4 p-4 hover:bg-secondary-50 transition-colors border-b border-secondary-100 last:border-none"
                                    >
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-secondary-900 mb-1">
                                                {article.title}
                                            </h4>
                                            <p className="text-sm text-secondary-600 line-clamp-2">
                                                {article.excerpt}
                                            </p>
                                        </div>
                                        <FiArrowRight className="text-secondary-400 flex-shrink-0 mt-1" />
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* No Results */}
                        {query.length >= 2 && results.length === 0 && (
                            <div className="p-8 text-center text-secondary-600">
                                <p className="mb-2">No articles found for "{query}"</p>
                                <p className="text-sm">Try different keywords or browse all articles</p>
                            </div>
                        )}

                        {/* Footer */}
                        <div className="p-4 bg-secondary-50 border-t border-secondary-200 flex items-center justify-between text-sm">
                            <span className="text-secondary-500">
                                {query.length < 2 ? 'Type to search...' : `${results.length} result${results.length !== 1 ? 's' : ''}`}
                            </span>
                            {query && (
                                <button
                                    onClick={handleSearchAll}
                                    className="text-primary-600 font-medium hover:text-primary-700 flex items-center gap-1"
                                >
                                    View all results <FiArrowRight />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
