import { NewsArticle } from '@/lib/mockNews';
import Link from 'next/link';

interface NewsCardProps {
    article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
    return (
        <Link href={`/news/${article.slug}`} className="group flex flex-col h-full bg-white border-b border-gray-100 pb-4 md:border-none md:pb-0">
            <div className="relative aspect-video overflow-hidden mb-3">
                <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0">
                    <span className="bg-black text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-tighter">
                        {article.category}
                    </span>
                </div>
            </div>

            <div className="flex flex-col flex-1">
                <h3 className="text-lg md:text-xl font-header font-black leading-tight mb-2 group-hover:text-weazel-yellow transition-colors line-clamp-2">
                    {article.title}
                </h3>
                <p className="text-gray-600 text-xs line-clamp-2 mb-3 leading-relaxed">
                    {article.excerpt}
                </p>
                <div className="mt-auto text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    {new Date(article.publishedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • {article.author}
                </div>
            </div>
        </Link>
    );
}
