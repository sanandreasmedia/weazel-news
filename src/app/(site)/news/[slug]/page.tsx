import { mockNews } from '@/lib/mockNews';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import SectionHeader from '@/components/SectionHeader';

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

    const wordCount = article.content?.split(/\s+/).length || 0;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    const relatedArticles = mockNews
        .filter(n => n.category === article.category && n.slug !== article.slug)
        .slice(0, 3);

    return (
        <article className="max-container py-12">
            <header className="max-w-[800px] mb-12">
                <div className="flex items-center gap-3 mb-6">
                    <Link
                        href={`/category/${article.category}`}
                        className="text-[10px] font-bold uppercase tracking-widest text-red hover:underline"
                    >
                        {article.category}
                    </Link>
                    <span className="w-1 h-1 bg-border rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
                        {new Date(article.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                </div>

                <h1 className="editorial-headline text-4xl md:text-6xl text-fg mb-8">
                    {article.title}
                </h1>

                <p className="text-xl md:text-2xl text-muted font-serif leading-relaxed italic mb-8 border-l border-border pl-6">
                    {article.excerpt}
                </p>

                <div className="flex items-center gap-6 text-[10px] font-bold text-fg uppercase tracking-widest border-y border-border py-4">
                    <span>By {article.author}</span>
                    <span className="w-1 h-1 bg-border rounded-full" />
                    <span>{readingTime} MIN READ</span>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-8">
                    <div className="aspect-video relative overflow-hidden mb-12 bg-muted/10">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="object-cover w-full h-full grayscale-[0.1]"
                        />
                    </div>

                    <div
                        className="editorial-body prose prose-lg max-w-none text-fg/90
                                prose-headings:font-sans prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-widest prose-headings:text-xs
                                prose-blockquote:border-red prose-blockquote:bg-red/5 prose-blockquote:px-8 prose-blockquote:py-2 prose-blockquote:font-serif
                                prose-strong:font-bold prose-strong:text-fg
                                prose-a:text-red hover:prose-a:underline transition-all"
                        dangerouslySetInnerHTML={{ __html: article.content || '' }}
                    />

                    <div className="mt-16 pt-8 border-t border-border flex flex-wrap gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Tags</span>
                        {article.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-fg hover:text-red transition-colors cursor-pointer">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                <aside className="lg:col-span-4 space-y-12">
                    <div className="bg-fg text-white p-8">
                        <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Newsletter</h3>
                        <p className="text-white/60 text-xs mb-6 font-serif">Get the latest Los Santos updates directly to your inbox. Professional journalism, no rumors.</p>
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full bg-white/10 border-b border-white/20 px-0 py-3 text-sm mb-6 outline-none focus:border-red transition-colors"
                        />
                        <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-red transition-colors">
                            Subscribe →
                        </button>
                    </div>

                    <div className="sticky top-32">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-muted border-b border-border pb-2">Share Story</h3>
                        <div className="flex flex-col gap-4">
                            <button className="text-xs font-bold uppercase tracking-widest text-fg hover:text-red text-left transition-colors">Bleeter</button>
                            <button className="text-xs font-bold uppercase tracking-widest text-fg hover:text-red text-left transition-colors">Lifeinvader</button>
                            <button className="text-xs font-bold uppercase tracking-widest text-fg hover:text-red text-left transition-colors">Copy Link</button>
                        </div>
                    </div>
                </aside>
            </div>

            {relatedArticles.length > 0 && (
                <section className="mt-24 pt-16 border-t border-fg">
                    <SectionHeader title={`More in ${article.category}`} href={`/category/${article.category}`} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {relatedArticles.map((rel) => (
                            <NewsCard key={rel.slug} article={rel} />
                        ))}
                    </div>
                </section>
            )}
        </article>
    );
}
