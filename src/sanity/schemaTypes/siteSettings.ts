import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'featuredArticle',
      title: 'Featured Article',
      type: 'reference',
      to: [{ type: 'article' }],
      description: 'The article displayed in the hero on the homepage.',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    }
  }
})