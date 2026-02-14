import { mockNews } from '@/lib/mockNews';
import HeroStory from '@/components/HeroStory';
import LatestList from '@/components/LatestList';
import NewsCard from '@/components/NewsCard';
import SectionHeader from '@/components/SectionHeader';
import SpotlightSection from '@/components/SpotlightSection';

export default function HomePage() {
    // Main Story (First breaking or just the first)
    const heroArticle = mockNews.find(n => n.isBreaking) || mockNews[0];

    // Trending News (Next 3)
    const trendingNews = mockNews.filter(n => n.slug !== heroArticle.slug).slice(0, 3);

    // Crime Section
    const crimeNews = mockNews.filter(n => n.category === 'crime').slice(0, 4);

    // Politics Section
    const politicsNews = mockNews.filter(n => n.category === 'politics').slice(0, 4);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Top Section: Hero + Latest */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                <div className="lg:col-span-2">
                    <HeroStory article={heroArticle} />
                </div>
                <div className="lg:col-span-1">
                    <LatestList />
                </div>
            </div>

            {/* Trending Section */}
            <div className="mb-16">
                <SectionHeader title="Trending Topics" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trendingNews.map((news) => (
                        <NewsCard key={news.slug} article={news} />
                    ))}
                </div>
            </div>

            {/* Spotlight Section */}
            <SpotlightSection />

            {/* Crime Section */}
            <div className="mb-16 border-t-8 border-black pt-8">
                <SectionHeader title="Crime & Justice" href="/category/crime" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {crimeNews.map((news) => (
                        <NewsCard key={news.slug} article={news} />
                    ))}
                </div>
            </div>

            {/* Politics Section */}
            <div className="mb-16 border-t-8 border-weazel-yellow pt-8">
                <SectionHeader title="Politics & Power" href="/category/politics" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {politicsNews.map((news) => (
                        <NewsCard key={news.slug} article={news} />
                    ))}
                </div>
            </div>

            {/* Culture Section (Small teaser) */}
            <div className="bg-surface-dark text-white p-8 md:p-12 mb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-4xl text-weazel-yellow mb-2">Vinewood Life</h2>
                        <p className="text-gray-400 max-w-md">Inside the glitz and glamour of Los Santos. Fashion, Art, and the latest from the movie capital of the world.</p>
                    </div>
                    <button className="bg-weazel-yellow text-black px-8 py-3 font-header font-black uppercase tracking-widest hover:bg-white transition-all whitespace-nowrap">
                        Explore Culture
                    </button>
                </div>
            </div>
        </div>
    );
}
