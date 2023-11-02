import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://angova.io',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://angova.io/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://angova.io/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
      },
      {
        url: 'https://angova.io/login',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      }
  ]
}