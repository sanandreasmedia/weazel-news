import { mockNews } from '@/lib/mockNews';
import Link from 'next/link';

export default function LatestList() {
    const latestNews = mockNews.slice(0, 5);

    return (
        <div className="flex flex-col">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-fg mb-6 flex items-center gap-3">
                Latest Updates
                <span className="flex-grow h-px bg-fg"></span>
            </h3>
            <div className="flex flex-col">
                {latestNews.map((news) => (
                    <Link
                        key={news.slug}
                        href={`/news/${news.slug}`}
                        className="group flex items-baseline justify-between py-4 border-b border-border last:border-0"
                    >
                        <h4 className="text-xs font-bold leading-snug group-hover:text-red transition-colors flex-grow pr-4">
                            {news.title}
                        </h4>
                        <span className="text-[10px] font-bold text-muted tabular-nums uppercase">
                            {new Date(news.publishedAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
                        </span>
                    </Link>
                ))}
            </div>
            <Link
                href="/latest"
                className="mt-8 text-[9px] font-black uppercase tracking-[0.2em] text-muted hover:text-red transition-colors inline-flex items-center gap-2"
            >
                View Full Briefing
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
            </Link>
        </div>
    );
}
