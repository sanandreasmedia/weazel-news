import { client } from '@/sanity/lib/client';
import { articlesQuery } from '@/sanity/lib/queries';
import HeroStory from '@/components/HeroStory';
import LatestList from '@/components/LatestList';
import NewsCard from '@/components/NewsCard';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';

export const revalidate = 60; // Revalidate every minute

export default async function HomePage() {
    let articles = [];
    let error = false;

    try {
        articles = await client.fetch(articlesQuery);
    } catch (e) {
        console.error('Sanity fetch error:', e);
        error = true;
    }

    if (error || !articles || articles.length === 0) {
        return (
            <div className="container-weazel py-20 text-center">
                <h1 className="text-2xl font-black uppercase mb-4">Connection to Weazel Intelligence Lost</h1>
                <p className="text-muted text-sm uppercase tracking-widest">Unable to retrieve latest dispatches. Investigation in progress.</p>
                {/* For development/demo, we could fall back to mockNews here if desired */}
            </div>
        );
    }

    // Main Story
    const heroArticle = articles.find((n: any) => n.isBreaking) || articles[0];

    // Top Stories (Next 3)
    const topStories = articles.filter((n: any) => n.slug !== heroArticle.slug).slice(0, 3);

    // Latest Briefing (excluding top ones)
    const latestBriefing = articles.slice(0, 6);

    // Category News
    const crimeNews = articles.filter((n: any) => n.category === 'crime').slice(0, 4);
    const politicsNews = articles.filter((n: any) => n.category === 'politics').slice(0, 4);

    return (
        <div className="container-weazel py-12 md:py-20 flex flex-col gap-24">
            {/* Lead Section */}
            <section>
                <HeroStory article={heroArticle} />
            </section>

            {/* Latest Section */}
            <section className="bg-white">
                <LatestList articles={latestBriefing} />
            </section>

            {/* Top Stories Grid */}
            <div className="mb-16">
                <SectionHeader title="Top Stories" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {topStories.map((news: any) => (
                        <NewsCard key={news.slug} article={news} />
                    ))}
                </div>
            </div>

            {/* Category Blocks */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
                {/* Crime Section */}
                <div>
                    <SectionHeader title="Crime" href="/category/crime" />
                    <div className="flex flex-col">
                        {crimeNews.map((news: any) => (
                            <Link
                                key={news.slug}
                                href={`/news/${news.slug}`}
                                className="group flex justify-between py-5 border-b border-border last:border-0"
                            >
                                <div className="max-w-[75%]">
                                    <h4 className="text-xs font-bold leading-snug group-hover:text-red transition-colors mb-2 text-fg">
                                        {news.title}
                                    </h4>
                                    <p className="text-[9px] text-muted font-bold uppercase tracking-widest">
                                        {new Date(news.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </p>
                                </div>
                                <div className="w-24 h-16 overflow-hidden bg-muted/10">
                                    <img
                                        src={urlForImage(news.heroImage).url()}
                                        alt=""
                                        className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all"
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Politics Section */}
                <div>
                    <SectionHeader title="Politics" href="/category/politics" />
                    <div className="flex flex-col">
                        {politicsNews.map((news: any) => (
                            <Link
                                key={news.slug}
                                href={`/news/${news.slug}`}
                                className="group flex justify-between py-5 border-b border-border last:border-0"
                            >
                                <div className="max-w-[75%]">
                                    <h4 className="text-xs font-bold leading-snug group-hover:text-red transition-colors mb-2 text-fg">
                                        {news.title}
                                    </h4>
                                    <p className="text-[9px] text-muted font-bold uppercase tracking-widest">
                                        {new Date(news.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </p>
                                </div>
                                <div className="w-24 h-16 overflow-hidden bg-muted/10">
                                    <img
                                        src={urlForImage(news.heroImage).url()}
                                        alt=""
                                        className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all"
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
