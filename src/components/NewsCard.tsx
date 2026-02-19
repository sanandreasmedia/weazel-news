import { NewsArticle } from '@/lib/mockNews';
import Link from 'next/link';

interface NewsCardProps {
    article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
    return (
        <Link href={`/news/${article.slug}`} className="group flex flex-col">
            <div className="aspect-[16/9] relative overflow-hidden mb-4 bg-muted/10">
                <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {article.isBreaking && (
                        <div className="bg-red text-white text-[8px] font-black px-2 py-1 uppercase tracking-[0.2em]">
                            Breaking
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-fg">
                        {article.category}
                    </span>
                    <span className="w-1 h-1 bg-border rounded-full"></span>
                    <span className="text-[9px] font-bold text-muted uppercase tracking-wider">
                        {new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                </div>

                <h3 className="text-base md:text-lg font-extrabold leading-tight group-hover:text-red transition-all mb-3 text-fg">
                    {article.title}
                </h3>

                <p className="text-muted text-[11px] leading-relaxed line-clamp-2 opacity-70">
                    {article.excerpt}
                </p>
            </div>
        </Link>
    );
}
