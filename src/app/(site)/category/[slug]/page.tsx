import { mockNews } from '@/lib/mockNews';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import NewsCard from '@/components/NewsCard';
import SectionHeader from '@/components/SectionHeader';

interface CategoryPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    const { slug } = await params;
    const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

    return {
        title: `${categoryName} | Weazel News`,
        description: `Latest news and updates from the ${categoryName} department in Los Santos.`,
    };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params;
    const categoryNews = mockNews.filter(n => n.category === slug);

    if (categoryNews.length === 0 && !['crime', 'politics', 'business', 'culture', 'sports', 'home'].includes(slug)) {
        notFound();
    }

    const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

    return (
        <div className="max-container py-12 min-h-[60vh]">
            {/* Category Header */}
            <header className="mb-16 border-b border-fg pb-12">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-4">
                    <span>Department</span>
                    <span className="w-8 h-px bg-border"></span>
                    <span>{categoryNews.length} Articles</span>
                </div>
                <h1 className="editorial-headline text-5xl md:text-8xl text-fg mb-6 capitalize">
                    {categoryName}
                </h1>
                <p className="text-xl text-muted font-serif leading-relaxed max-w-2xl">
                    Comprehensive coverage of {categoryName.toLowerCase()} across Los Santos and San Andreas. Professional reporting, verified sources.
                </p>
            </header>

            <div>
                {categoryNews.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {categoryNews.map((article) => (
                            <NewsCard key={article.slug} article={article} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 border border-border">
                        <h3 className="text-lg font-bold uppercase tracking-widest mb-2">Silence in the City</h3>
                        <p className="text-muted font-serif">No recent articles found in the {categoryName} department.</p>
                    </div>
                )}
            </div>

            {/* Newsletter Promo */}
            <div className="mt-24 p-12 bg-fg text-white">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-2xl font-bold uppercase tracking-widest leading-none mb-4">Weazel Intelligence</h3>
                        <p className="text-white/60 font-serif">Get exclusive reports from the {categoryName} beat delivered to your inbox.</p>
                    </div>
                    <button className="text-[10px] font-bold uppercase tracking-[0.3em] border border-white/20 px-8 py-4 hover:bg-white hover:text-fg transition-all">
                        Join the Network
                    </button>
                </div>
            </div>
        </div>
    );
}
