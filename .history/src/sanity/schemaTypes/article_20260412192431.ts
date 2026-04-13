import { defineField, defineType } from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'author', type: 'string' }),
    defineField({ name: 'publishDate', type: 'date' }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
				list: ['Launch', 'Defense', 'Technology', 'Policy', 'Science', 'Industry']
			}
    }),
    defineField({ name: 'excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'heroImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] }),
  ],
  preview: { select: { title: 'title', subtitle: 'author' } }
})