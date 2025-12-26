import { MetadataRoute } from 'next';
import codesData from '@/data/codes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://huntyzombies.codes';

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ];

  // Generate routes for each month in the archive
  const codeRoutes = codesData.map((data) => ({
    url: `${baseUrl}/codes/${data.year}/${data.month}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const, // Past months change less frequently
    priority: 0.8,
  }));

  return [...routes, ...codeRoutes];
}
