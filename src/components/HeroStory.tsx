import { NewsArticle } from '@/lib/mockNews';
import Link from 'next/link';
import Image from 'next/image';

interface HeroStoryProps {
    article: NewsArticle;
}

export default function HeroStory({ article }: HeroStoryProps) {
    return (
        <Link
            href={`/news/${article.slug}`}
            className="group flex flex-col gap-6"
        >
            <div className="relative aspect-[16/10] overflow-hidden bg-muted/10">
                <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full grayscale-[0.2] transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red">
                        {article.category}
                    </span>
                    {article.isBreaking && (
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 border border-red text-red">
                            Breaking
                        </span>
                    )}
                </div>

                <h1 className="editorial-headline text-4xl md:text-5xl lg:text-6xl text-fg group-hover:text-red transition-colors">
                    {article.title}
                </h1>

                <p className="text-muted text-lg leading-relaxed max-w-2xl font-serif">
                    {article.excerpt}
                </p>

                <div className="flex items-center gap-4 text-[10px] font-bold text-muted uppercase tracking-widest mt-2">
                    <span>By {article.author}</span>
                    <span className="w-1 h-1 bg-border rounded-full" />
                    <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
            </div>
        </Link>
    );
}
