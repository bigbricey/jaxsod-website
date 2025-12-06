'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import { articles } from '@/data/articles'
import { FiChevronRight, FiFolder } from 'react-icons/fi'

export default function ArticleCategories() {
    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = {}
        articles.forEach(article => {
            counts[article.category] = (counts[article.category] || 0) + 1
        })
        return counts
    }, [])

    // Sort categories by count (descending) then alphabetically
    const sortedCategories = Object.entries(categoryCounts).sort((a, b) => {
        if (b[1] !== a[1]) return b[1] - a[1]
        return a[0].localeCompare(b[0])
    })

    return (
        <div className="bg-white rounded-lg shadow-md border border-secondary-200 overflow-hidden">
            <div className="bg-secondary-50 p-4 border-b border-secondary-200">
                <h3 className="font-bold text-lg text-secondary-900 flex items-center gap-2">
                    <FiFolder className="text-primary-600" />
                    Article Categories
                </h3>
                <p className="text-xs text-secondary-500 mt-1">Browse articles by topic</p>
            </div>
            <div className="divide-y divide-secondary-100">
                {sortedCategories.map(([category, count]) => (
                    <Link
                        key={category}
                        href={`/articles?category=${encodeURIComponent(category)}`}
                        className="flex items-center justify-between p-4 hover:bg-primary-50 transition-colors group"
                    >
                        <span className="text-secondary-700 font-medium group-hover:text-primary-700 transition-colors">
                            {category}
                        </span>
                        <div className="flex items-center gap-3">
                            <span className="bg-secondary-100 text-secondary-600 py-0.5 px-2 rounded-full text-xs font-bold group-hover:bg-primary-100 group-hover:text-primary-700">
                                {count}
                            </span>
                            <FiChevronRight className="text-secondary-400 group-hover:text-primary-500" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
