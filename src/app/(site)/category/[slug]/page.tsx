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
        <div className="container-weazel py-10 md:py-16 min-h-[60vh]">
            {/* Category Header */}
            <header className="mb-16 border-b-2 border-fg pb-12">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-muted mb-6">
                    <span>Department</span>
                    <span className="w-12 h-px bg-border"></span>
                    <span>{categoryNews.length} Records Found</span>
                </div>
                <h1 className="headline-xl text-fg mb-8 capitalize">
                    {categoryName}
                </h1>
                <p className="text-xl text-muted font-bold italic leading-relaxed max-w-2xl border-l-4 border-muted/20 pl-6">
                    Official dispatch from the {categoryName.toLowerCase()} beat. Localized reporting, verified sources.
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
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4">No Dispatches Available</h3>
                        <p className="text-muted text-xs uppercase tracking-widest font-bold">Investigation in progress.</p>
                    </div>
                )}
            </div>

            {/* Newsletter Promo */}
            <div className="mt-24 p-12 bg-fg text-white">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div>
                        <h3 className="text-lg font-black uppercase tracking-[0.3em] leading-none mb-4">Broadcast Alert</h3>
                        <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Get official {categoryName.toLowerCase()} briefs delivered securely.</p>
                    </div>
                    <button className="text-[10px] font-black uppercase tracking-[0.4em] border border-white/20 px-10 py-5 hover:bg-white hover:text-fg transition-all">
                        ESTABLISH CONNECTION
                    </button>
                </div>
            </div>
        </div>
    );
}
