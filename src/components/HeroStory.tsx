import { NewsArticle } from '@/lib/mockNews';
import Link from 'next/link';
import Image from 'next/image';

interface HeroStoryProps {
    article: NewsArticle;
}

export default function HeroStory({ article }: HeroStoryProps) {
    return (
        <Link href={`/news/${article.slug}`} className="group flex flex-col">
            <div className="flex flex-col mb-8 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red border-b-2 border-red">
                        {article.category}
                    </span>
                    <span className="w-1.5 h-1.5 bg-border rounded-full"></span>
                    <span className="text-[10px] font-bold text-muted uppercase tracking-widest">
                        {new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    {article.isBreaking && (
                        <div className="ml-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-red">
                            <span className="w-2 h-2 bg-red rounded-full animate-pulse"></span>
                            Breaking
                        </div>
                    )}
                </div>

                <h2 className="headline-xl group-hover:text-red transition-colors mb-6">
                    {article.title}
                </h2>

                <p className="article-content text-muted opacity-80 mb-0">
                    {article.excerpt}
                </p>
            </div>

            <div className="aspect-[16/9] relative overflow-hidden mb-8 order-1 lg:order-2 bg-muted/10">
                <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
            </div>
        </Link>
    );
}
