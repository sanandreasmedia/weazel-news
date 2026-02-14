import { mockNews } from '@/lib/mockNews';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import NewsCard from '@/components/NewsCard';

interface NewsPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = mockNews.find(n => n.slug === slug);

    if (!article) return { title: 'Article Not Found' };

    return {
        title: `${article.title} | Weazel News`,
        description: article.excerpt,
        openGraph: {
            images: [article.image],
        },
    };
}

export default async function NewsArticlePage({ params }: NewsPageProps) {
    const { slug } = await params;
    const article = mockNews.find(n => n.slug === slug);

    if (!article) {
        notFound();
    }

    // Calculate reading time (rough Heuristic)
    const wordCount = article.content?.split(/\s+/).length || 0;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    const relatedArticles = mockNews
        .filter(n => n.category === article.category && n.slug !== article.slug)
        .slice(0, 3);

    return (
        <article className="container mx-auto px-4 py-8 max-w-5xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
                <Link href="/" className="hover:text-weazel-yellow transition-colors">Home</Link>
                <span>/</span>
                <Link href={`/category/${article.category}`} className="hover:text-weazel-yellow transition-colors">{article.category}</Link>
                <span>/</span>
                <span className="text-gray-600 truncate">{article.title}</span>
            </nav>

            {/* Header */}
            <header className="mb-12">
                <div className="flex gap-2 mb-6">
                    <span className="bg-black text-weazel-yellow text-[10px] font-black px-2 py-0.5 uppercase">
                        {article.category}
                    </span>
                    {article.isBreaking && (
                        <span className="bg-breaking text-white text-[10px] font-black px-2 py-0.5 uppercase animate-pulse">
                            Breaking News
                        </span>
                    )}
                </div>

                <h1 className="text-4xl md:text-6xl font-header font-black leading-tight mb-6">
                    {article.title}
                </h1>

                <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed mb-8 border-l-4 border-weazel-yellow pl-6">
                    {article.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-gray-400 uppercase border-y border-gray-100 py-4">
                    <div className="flex items-center gap-2">
                        <span className="text-black">By {article.author}</span>
                    </div>
                    <span>•</span>
                    <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        {readingTime} min read
                    </span>
                </div>
            </header>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    {/* Featured Image */}
                    <div className="aspect-video relative overflow-hidden mb-10 shadow-2xl">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Article Text */}
                    <div
                        className="prose prose-lg max-w-none text-gray-800 leading-loose
              prose-headings:font-header prose-headings:font-black prose-headings:uppercase
              prose-blockquote:border-weazel-yellow prose-blockquote:bg-surface-light prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:italic
              prose-strong:text-black prose-a:text-weazel-yellow-dark hover:prose-a:text-black transition-colors"
                        dangerouslySetInnerHTML={{ __html: article.content || '' }}
                    />

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
                        <span className="text-[10px] font-black uppercase text-gray-400 mr-2 flex items-center">Tags:</span>
                        {article.tags.map(tag => (
                            <span key={tag} className="bg-surface-light text-gray-600 text-[10px] font-bold px-3 py-1 uppercase tracking-tight hover:bg-weazel-yellow hover:text-black transition-colors cursor-pointer">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-1 space-y-12">
                    <div className="bg-black text-white p-6">
                        <h3 className="font-header font-black text-weazel-yellow text-xl mb-4 italic uppercase">Weazel Newsletter</h3>
                        <p className="text-gray-400 text-xs mb-6 font-medium">Get the latest Los Santos rumors directly to your burner phone. We confirm what you suspect.</p>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full bg-white/10 border-none px-4 py-3 text-sm mb-3 outline-none focus:ring-2 focus:ring-weazel-yellow"
                        />
                        <button className="w-full bg-weazel-yellow text-black font-header font-black py-3 uppercase tracking-widest text-sm hover:bg-white transition-colors">
                            Subscribe
                        </button>
                    </div>

                    <div className="sticky top-24">
                        <div className="bg-surface-light p-6 border-b-4 border-black">
                            <h3 className="font-header font-black text-xl mb-6 uppercase">Share the word</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <button className="bg-[#1877F2] text-white py-2 text-[10px] font-black uppercase">Bleeter</button>
                                <button className="bg-[#1DA1F2] text-white py-2 text-[10px] font-black uppercase">Lifeinvader</button>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            {/* More like this */}
            {relatedArticles.length > 0 && (
                <section className="mt-20 pt-20 border-t-8 border-black">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-3xl font-header font-black uppercase italic">More from {article.category}</h2>
                        <Link href={`/category/${article.category}`} className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">View All →</Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedArticles.map((rel) => (
                            <NewsCard key={rel.slug} article={rel} />
                        ))}
                    </div>
                </section>
            )}
        </article>
    );
}
