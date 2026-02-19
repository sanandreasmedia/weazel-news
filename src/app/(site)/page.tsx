import { mockNews } from '@/lib/mockNews';
import HeroStory from '@/components/HeroStory';
import LatestList from '@/components/LatestList';
import NewsCard from '@/components/NewsCard';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';

export default function HomePage() {
    // Main Story
    const heroArticle = mockNews.find(n => n.isBreaking) || mockNews[0];

    // Top Stories (Next 3)
    const topStories = mockNews.filter(n => n.slug !== heroArticle.slug).slice(0, 3);

    // Category News
    const crimeNews = mockNews.filter(n => n.category === 'crime').slice(0, 4);
    const politicsNews = mockNews.filter(n => n.category === 'politics').slice(0, 4);

    return (
        <div className="max-container py-12">
            {/* Lead Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                <div className="lg:col-span-8">
                    <HeroStory article={heroArticle} />
                </div>
                <div className="lg:col-span-4 lg:border-l lg:border-border lg:pl-12">
                    <LatestList />
                </div>
            </div>

            {/* Top Stories Grid */}
            <div className="mb-20">
                <SectionHeader title="Top Stories" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {topStories.map((news) => (
                        <NewsCard key={news.slug} article={news} />
                    ))}
                </div>
            </div>

            {/* Category Blocks */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Crime Section */}
                <div>
                    <SectionHeader title="Crime" href="/category/crime" />
                    <div className="flex flex-col">
                        {crimeNews.map((news) => (
                            <Link
                                key={news.slug}
                                href={`/news/${news.slug}`}
                                className="group flex justify-between py-4 border-b border-border last:border-0"
                            >
                                <div className="max-w-[70%]">
                                    <h4 className="text-sm font-bold leading-snug group-hover:text-red transition-colors mb-1">
                                        {news.title}
                                    </h4>
                                    <p className="text-xs text-muted font-bold uppercase tracking-widest">
                                        {new Date(news.publishedAt).toLocaleDateString()}
                                    </p>
                                </div>
                                <div className="w-20 h-14 overflow-hidden bg-muted/10 grayscale-[0.5] group-hover:grayscale-0 transition-all">
                                    <img src={news.image} alt="" className="w-full h-full object-cover" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Politics Section */}
                <div>
                    <SectionHeader title="Politics" href="/category/politics" />
                    <div className="flex flex-col">
                        {politicsNews.map((news) => (
                            <Link
                                key={news.slug}
                                href={`/news/${news.slug}`}
                                className="group flex justify-between py-4 border-b border-border last:border-0"
                            >
                                <div className="max-w-[70%]">
                                    <h4 className="text-sm font-bold leading-snug group-hover:text-red transition-colors mb-1">
                                        {news.title}
                                    </h4>
                                    <p className="text-xs text-muted font-bold uppercase tracking-widest">
                                        {new Date(news.publishedAt).toLocaleDateString()}
                                    </p>
                                </div>
                                <div className="w-20 h-14 overflow-hidden bg-muted/10 grayscale-[0.5] group-hover:grayscale-0 transition-all">
                                    <img src={news.image} alt="" className="w-full h-full object-cover" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
