import type { PortableTextBlock } from 'sanity'

export interface Article {
  _id: string
  title: string
  slug: { current: string }
  author: string
  publishDate: string
  category: string
  excerpt: string
  heroImage: {
    asset: { _ref: string }
    hotspot?: { x: number; y: number }
  }
  body: PortableTextBlock[]
}

export interface Event {
  _id: string
  title: string
  slug: { current: string }
  date: string
  endDate?: string
  location: string
  venue: string
  address?: string
  category: string
  description: string
  heroImage?: {
    asset: { _ref: string }
    hotspot?: { x: number; y: number }
  }
  externalLink?: string
  featured?: boolean
  soldOut?: boolean
}