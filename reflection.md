# IMY 210 Assignment 3 Reflection
25199902 - Mpho Makwela

## GitHub Repository
https://github.com/codedwithmpho/imy210_assignment3_2026

## Commands to Run This Project
cd imy-assignment3
npm install
npm run dev

### Reflection
I built a blog website using NuxtJS. The homepage shows all blog posts with a category filter, there is a search page, and a single post page that displays full content.

The biggest challenge was Strapi. It kept giving me a 'sharp' library error on my Windows ARM64 laptop. I tried fixing it for a while but eventually decided to create a mock API endpoint in Nuxt's server/api folder instead. This taught me that an API is just data — it doesn't matter if it comes from Strapi or a local file, the frontend code is the same.

I learned how Nuxt routing works with the [id].vue pattern, how to use useFetch to get data, and how computed properties update automatically when filters change.

The styling was fun! I tried to match a warm honey vibe with serif fonts and earth tones.