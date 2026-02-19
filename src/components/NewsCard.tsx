import { NewsArticle } from '@/lib/mockNews';
import Link from 'next/link';

interface NewsCardProps {
    article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
    return (
        <Link href={`/news/${article.slug}`} className="group flex flex-col h-full bg-white">
            <div className="relative aspect-video overflow-hidden mb-4 bg-muted/10">
                <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full grayscale-[0.2] transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red">
                        {article.category}
                    </span>
                    <span className="w-1 h-1 bg-border rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
                        {new Date(article.publishedAt).toLocaleDateString()}
                    </span>
                </div>

                <h3 className="text-xl font-bold leading-tight mb-2 group-hover:text-red transition-colors line-clamp-2">
                    {article.title}
                </h3>

                <p className="text-muted text-sm line-clamp-2 mb-4 leading-relaxed font-serif">
                    {article.excerpt}
                </p>
            </div>
        </Link>
    );
}
