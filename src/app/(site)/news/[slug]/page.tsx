import { client } from '@/sanity/lib/client';
import { articleBySlugQuery, articlesByCategoryQuery } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import SectionHeader from '@/components/SectionHeader';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';

interface NewsPageProps {
    params: Promise<{ slug: string }>;
}

export const revalidate = 60; // Revalidate every minute

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = await client.fetch(articleBySlugQuery, { slug });

    if (!article) return { title: 'Article Not Found' };

    const imageUrl = article.heroImage ? urlForImage(article.heroImage).url() : '';

    return {
        title: `${article.title} | Weazel News`,
        description: article.excerpt,
        openGraph: {
            images: [imageUrl],
        },
    };
}

export default async function NewsArticlePage({ params }: NewsPageProps) {
    const { slug } = await params;

    let article;
    let relatedArticles = [];

    try {
        article = await client.fetch(articleBySlugQuery, { slug });
        if (article) {
            relatedArticles = await client.fetch(articlesByCategoryQuery, {
                category: article.category
            });
            relatedArticles = relatedArticles.filter((n: any) => n.slug !== slug).slice(0, 3);
        }
    } catch (e) {
        console.error('Sanity fetch error:', e);
    }

    if (!article) {
        notFound();
    }

    // Estimate reading time from block content roughly
    const textContent = article.body?.map((block: any) =>
        block._type === 'block' ? block.children?.map((c: any) => c.text).join(' ') : ''
    ).join(' ') || '';
    const wordCount = textContent.split(/\s+/).length || 0;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    const imageUrl = article.heroImage ? urlForImage(article.heroImage).url() : '';

    return (
        <article className="container-weazel py-10 md:py-16">
            <header className="max-w-[800px] mb-12">
                <div className="flex items-center gap-4 mb-8">
                    <Link
                        href={`/category/${article.category}`}
                        className="text-[10px] font-black uppercase tracking-[0.2em] text-red border-b border-red"
                    >
                        {article.category}
                    </Link>
                    <span className="w-1.5 h-1.5 bg-border rounded-full"></span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
                        {new Date(article.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                </div>

                <h1 className="headline-lg text-fg mb-10">
                    {article.title}
                </h1>

                <p className="text-xl text-muted font-bold leading-relaxed mb-10 border-l-4 border-fg pl-8 italic">
                    {article.excerpt}
                </p>

                <div className="flex items-center gap-8 text-[10px] font-black text-fg uppercase tracking-[0.2em] border-y border-border py-4">
                    <span>By {article.author}</span>
                    <span className="w-1.5 h-1.5 bg-border rounded-full"></span>
                    <span className="text-muted">{readingTime} MIN READ</span>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-8">
                    <div className="aspect-video relative overflow-hidden mb-12 bg-muted/10">
                        {imageUrl && (
                            <img
                                src={imageUrl}
                                alt={article.title}
                                className="object-cover w-full h-full grayscale-[0.2]"
                            />
                        )}
                    </div>

                    <div className="article-content prose prose-zinc max-w-none text-fg/90
                                prose-headings:text-fg prose-headings:font-black prose-headings:uppercase prose-headings:tracking-widest prose-headings:text-xs
                                prose-blockquote:border-red prose-blockquote:bg-red/5 prose-blockquote:px-8 prose-blockquote:py-4 prose-blockquote:text-lg prose-blockquote:font-bold prose-blockquote:text-fg
                                prose-strong:font-black prose-strong:text-fg
                                prose-a:text-red hover:prose-a:underline transition-all">
                        <PortableText value={article.body} />
                    </div>

                    {article.tags && article.tags.length > 0 && (
                        <div className="mt-20 pt-10 border-t border-border flex flex-wrap gap-6">
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted">Tags</span>
                            {article.tags.map((tag: any) => (
                                <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-fg hover:text-red transition-colors cursor-pointer border-b border-border hover:border-red">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <aside className="lg:col-span-4 space-y-16">
                    <div className="bg-fg text-white p-10">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6">Briefing</h3>
                        <p className="text-white/60 text-xs mb-8 font-medium leading-loose">Get exclusive Los Santos intelligence delivered directly to your secure device.</p>
                        <input
                            type="email"
                            placeholder="SECURE EMAIL"
                            className="w-full bg-white/10 border-b border-white/20 px-0 py-4 text-[10px] font-bold mb-8 outline-none focus:border-red transition-colors placeholder:text-white/20 uppercase tracking-widest"
                        />
                        <button className="text-[10px] font-black uppercase tracking-[0.4em] text-white hover:text-red transition-colors">
                            SUBSCRIBE →
                        </button>
                    </div>

                    <div className="sticky top-32">
                        <h3 className="text-[9px] font-black uppercase tracking-[0.3em] mb-8 text-muted border-b border-border pb-2">Distribution</h3>
                        <div className="flex flex-col gap-6">
                            <button className="text-[10px] font-black uppercase tracking-[0.2em] text-fg hover:text-red text-left transition-colors">Bleeter</button>
                            <button className="text-[10px] font-black uppercase tracking-[0.2em] text-fg hover:text-red text-left transition-colors">Lifeinvader</button>
                            <button className="text-[10px] font-black uppercase tracking-[0.2em] text-fg hover:text-red text-left transition-colors">Copy Link</button>
                        </div>
                    </div>
                </aside>
            </div>

            {relatedArticles.length > 0 && (
                <section className="mt-24 pt-16 border-t-2 border-fg">
                    <SectionHeader title={`Related to ${article.category}`} href={`/category/${article.category}`} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {relatedArticles.map((rel: any) => (
                            <NewsCard key={rel.slug} article={rel} />
                        ))}
                    </div>
                </section>
            )}
        </article>
    );
}
