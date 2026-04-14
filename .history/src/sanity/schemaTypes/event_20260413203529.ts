import { defineField, defineType } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'date', type: 'datetime', validation: r => r.required() }),
    defineField({ name: 'endDate', type: 'datetime' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'venue', type: 'string' }),
    defineField({ name: 'address', type: 'string' }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: ['Nightlife', 'Festival', 'Conference', 'Fireside Chat', 'Expo', 'Symposium', 'Reception']
      }
    }),
    defineField({ name: 'description', type: 'text', rows: 4 }),
    defineField({ name: 'heroImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'externalLink', type: 'url' }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'soldOut', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'venue' }
  }
})