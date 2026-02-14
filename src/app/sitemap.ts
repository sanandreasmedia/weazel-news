import { MetadataRoute } from 'next';
import { mockNews } from '@/lib/mockNews';

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://weazel-news.com';

    const categories = ['crime', 'politics', 'business', 'culture', 'sports'];

    // Base routes
    const routes = ['', '/search'].map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
    }));

    // Category routes
    const categoryRoutes = categories.map((cat) => ({
        url: `${siteUrl}/category/${cat}`,
        lastModified: new Date(),
        changeFrequency: 'hourly' as const,
        priority: 0.8,
    }));

    // News routes
    const newsRoutes = mockNews.map((article) => ({
        url: `${siteUrl}/news/${article.slug}`,
        lastModified: new Date(article.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...categoryRoutes, ...newsRoutes];
}
