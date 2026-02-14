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

    if (categoryNews.length === 0 && !['crime', 'politics', 'business', 'culture', 'sports'].includes(slug)) {
        notFound();
    }

    const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

    return (
        <div className="container mx-auto px-4 py-12 min-h-[60vh]">
            {/* Category Header */}
            <div className="mb-12">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4">
                    <span>Weazel News Department</span>
                    <span className="w-12 h-px bg-gray-200"></span>
                    <span>{categoryNews.length} Articles</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-header font-black uppercase italic mb-6">
                    {categoryName}
                </h1>
                <p className="text-gray-500 max-w-2xl font-medium leading-relaxed">
                    The most comprehensive coverage of {categoryName.toLowerCase()} in San Andreas. Our reporters are on the streets 24/7 to bring you the truth.
                </p>
            </div>

            <div className="border-t-4 border-black pt-12">
                {categoryNews.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                        {categoryNews.map((article) => (
                            <NewsCard key={article.slug} article={article} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-surface-light border-2 border-dashed border-gray-200">
                        <h3 className="text-2xl font-header font-black mb-2 uppercase">Silence in the City</h3>
                        <p className="text-gray-400">No recent articles found in the {categoryName} category.</p>
                    </div>
                )}
            </div>

            {/* Teaser for other category */}
            <div className="mt-20 p-10 bg-weazel-yellow border-4 border-black">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-black">
                    <div>
                        <h3 className="text-3xl font-header font-black uppercase italic leading-none mb-2">Want to work for us?</h3>
                        <p className="font-bold opacity-75">Weazel News is always looking for courageous reporters and informants.</p>
                    </div>
                    <button className="bg-black text-white px-10 py-3 font-header font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
}
