import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FiCalendar, FiClock, FiTag, FiArrowLeft } from 'react-icons/fi'
import { getArticleBySlugWithHtml, getAllArticleSlugs, getAllArticles } from '@/lib/articles'
import ArticleCategories from '@/components/ArticleCategories'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlugWithHtml(params.slug)

  if (!article) {
    return {}
  }

  return {
    title: article.title,
    description: article.excerpt,
    keywords: `${article.category}, ${article.title}, sod installation, Jacksonville, Florida`,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url: `https://jaxsod.com/articles/${article.slug}`,
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlugWithHtml(params.slug)

  if (!article) {
    notFound()
  }

  // Get all articles for sidebar
  const allArticles = getAllArticles()

  return (
    <div className="bg-secondary-50 min-h-screen">
      <div className="container-custom section-padding">

        {/* Header Image Full Width */}
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8 shadow-lg">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden h-fit">

            {/* Wrapper for padding */}
            <div className="p-8 md:p-12">
              {/* Metadata Badges */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-secondary-600">
                <div className="flex items-center gap-1">
                  <FiCalendar className="text-primary-600" />
                  <span>{new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiClock className="text-primary-600" />
                  <span>{Math.max(1, Math.ceil(article.wordCount / 200))} min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiTag className="text-primary-600" />
                  <span>{article.category}</span>
                </div>
              </div>

              {/* Title & Excerpt */}
              <h1 className="heading-lg mb-6 text-secondary-900">{article.title}</h1>
              <p className="text-xl italic text-secondary-700 border-l-4 border-primary-300 pl-4 mb-8 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Article Content - Rendered HTML */}
              <article
                className="prose prose-lg max-w-none prose-headings:text-primary-800 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-secondary-700 prose-p:leading-relaxed prose-a:text-primary-600 prose-a:font-semibold hover:prose-a:text-primary-700 prose-strong:text-secondary-900 prose-ul:my-4 prose-li:my-1"
                dangerouslySetInnerHTML={{ __html: article.contentHtml }}
              />

              {/* Author/CTA Box */}
              <div className="mt-12 p-8 bg-primary-50 rounded-lg border border-primary-200 text-center">
                <h3 className="text-2xl font-bold text-primary-800 mb-3">Ready to Transform Your Lawn?</h3>
                <p className="text-secondary-700 mb-6 max-w-2xl mx-auto">
                  Stop guessing and start growing. Our team at Jax Sod has 37+ years of experience helping Jacksonville homeowners create the lawn of their dreams.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/contact" className="btn-primary">
                    Get Your Free Quote
                  </Link>
                  <a href="tel:9049011457" className="btn-outline bg-white">
                    Call (904) 901-1457
                  </a>
                </div>
              </div>

              {/* Back Link */}
              <div className="mt-8 border-t border-secondary-200 pt-8">
                <Link href="/articles" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-800 transition-colors">
                  <FiArrowLeft />
                  Back to All Articles
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories Widget */}
            <ArticleCategories articles={allArticles} />
          </div>
        </div>
      </div>
    </div>
  )
}
