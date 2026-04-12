export interface Article {
  _id: string
  title: string
  slug: { current: string }
  author: string
  publishDate: string
  category: string
  excerpt: string
  heroImage: any
  body: any[]
}

export interface Event {
  _id: string
  title: string
  date: string
  location: string
  description: string
  externalLink?: string
}