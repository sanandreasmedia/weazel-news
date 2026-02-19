import { mockNews } from '@/lib/mockNews';
import Link from 'next/link';

export default function LatestList() {
    const latestNews = [...mockNews].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, 6);

    return (
        <div className="flex flex-col gap-0 border-t border-fg pt-2">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-fg/40">
                Latest Updates
            </h2>

            <div className="flex flex-col">
                {latestNews.map((news) => (
                    <Link
                        key={news.slug}
                        href={`/news/${news.slug}`}
                        className="group flex flex-col py-3 border-b border-border last:border-0"
                    >
                        <h4 className="text-sm font-bold leading-snug group-hover:text-red transition-colors mb-1 font-sans">
                            {news.title}
                        </h4>
                        <div className="text-[10px] text-muted font-bold uppercase tracking-wider">
                            {new Date(news.publishedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                    </Link>
                ))}
            </div>

            <Link href="/" className="block mt-4 text-[10px] font-bold uppercase tracking-widest text-fg hover:text-red transition-colors">
                See all news →
            </Link>
        </div>
    );
}
