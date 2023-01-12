import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  projectId: '1tginiq8',
  dataset: 'production',
  apiVersion: '2022-03-25',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
