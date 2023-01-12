import {defineConfig} from 'vite'

export default defineConfig({
  define: {
    'process.env': {
      NEXT_PUBLIC_SANITY_DATASET: 'production',
      NEXT_PUBLIC_SANITY_PROJECT_ID: '1tginiq8',
      NEXT_PUBLIC_SANITY_BASE_URL: 'http://http://localhost:3333/',
    },
  },
})
