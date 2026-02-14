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
            className={`relative block group overflow-hidden bg-black aspect-[16/9] md:aspect-[16/8] transition-all duration-300 ${article.isBreaking ? 'border-t-8 border-breaking shadow-[0_0_30px_rgba(204,0,0,0.2)]' : ''}`}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <img
                src={article.image}
                alt={article.title}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80"
            />

            <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20 w-full lg:w-3/4">
                <div className="flex gap-2 mb-3">
                    <span className="bg-weazel-yellow text-black text-[10px] font-bold px-2 py-0.5 uppercase">
                        {article.category}
                    </span>
                    {article.isBreaking && (
                        <span className="bg-breaking text-white text-[10px] font-bold px-2 py-0.5 uppercase animate-pulse">
                            Breaking
                        </span>
                    )}
                </div>

                <h1 className="text-3xl md:text-5xl text-white font-header font-black leading-tight mb-4 drop-shadow-xl group-hover:text-weazel-yellow transition-colors">
                    {article.title}
                </h1>

                <p className="text-white/80 text-sm md:text-base line-clamp-2 md:line-clamp-none mb-4 max-w-2xl font-medium">
                    {article.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs font-bold text-white/60 uppercase">
                    <span>By {article.author}</span>
                    <span>•</span>
                    <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
            </div>
        </Link>
    );
}
