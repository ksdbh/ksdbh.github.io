import type { MetadataRoute } from 'next';
import { caseStudyIndex } from '@/content/projects';
import { siteConfig } from '@/content/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/about/', '/work/'];
  return [
    ...routes.map((route) => ({ url: `${siteConfig.url}${route}` })),
    ...caseStudyIndex.map(({ slug }) => ({ url: `${siteConfig.url}/work/${slug}/` })),
  ];
}
