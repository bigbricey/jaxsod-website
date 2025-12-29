import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export interface Article {
    slug: string
    title: string
    excerpt: string
    date: string
    category: string
    wordCount: number
    image: string
    content: string
}

export interface ArticleWithHtml extends Article {
    contentHtml: string
}

export function getAllArticles(): Article[] {
    const fileNames = fs.readdirSync(articlesDirectory)
    const articles = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '')
            const fullPath = path.join(articlesDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, 'utf8')
            const { data, content } = matter(fileContents)

            return {
                slug,
                title: data.title,
                excerpt: data.excerpt,
                date: data.date,
                category: data.category,
                wordCount: data.wordCount || content.split(/\s+/).length,
                image: data.image,
                content,
            }
        })
        .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1))

    return articles
}

export async function getArticleBySlugWithHtml(slug: string): Promise<ArticleWithHtml | null> {
    try {
        const fullPath = path.join(articlesDirectory, `${slug}.mdx`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        // Convert markdown to HTML
        const processedContent = await remark()
            .use(html, { sanitize: false })
            .process(content)
        const contentHtml = processedContent.toString()

        return {
            slug,
            title: data.title,
            excerpt: data.excerpt,
            date: data.date,
            category: data.category,
            wordCount: data.wordCount || content.split(/\s+/).length,
            image: data.image,
            content,
            contentHtml,
        }
    } catch {
        return null
    }
}

export function getArticleBySlug(slug: string): Article | null {
    try {
        const fullPath = path.join(articlesDirectory, `${slug}.mdx`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
            slug,
            title: data.title,
            excerpt: data.excerpt,
            date: data.date,
            category: data.category,
            wordCount: data.wordCount || content.split(/\s+/).length,
            image: data.image,
            content,
        }
    } catch {
        return null
    }
}

export function getAllArticleSlugs(): string[] {
    const fileNames = fs.readdirSync(articlesDirectory)
    return fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => fileName.replace(/\.mdx$/, ''))
}
