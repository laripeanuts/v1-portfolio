import {defineField, defineType} from 'sanity'

export const social = defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the social network',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link address',
      type: 'url',
    }),
  ],
})
