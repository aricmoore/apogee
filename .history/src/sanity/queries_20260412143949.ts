import { client } from './client'
import type { Article, Event } from './types'

export async function getAllArticles(): Promise<Article[]> {
  return client.fetch(`
    *[_type == "article"] | order(publishDate desc) {
      _id, title, slug, author, publishDate, category, excerpt, heroImage
    }
  `)
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  return client.fetch(`
    *[_type == "article" && slug.current == $slug][0] {
      _id, title, slug, author, publishDate, category, heroImage, body
    }
  `, { slug })
}

export async function getAllEvents(): Promise<Event[]> {
  return client.fetch(`
    *[_type == "event"] | order(date asc) {
      _id, title, date, location, description, externalLink
    }
  `)
}