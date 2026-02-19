'use client';

import { mockNews } from '@/lib/mockNews';
import Link from 'next/link';

export default function BreakingTicker() {
    const breakingNews = mockNews.filter(n => n.isBreaking);

    if (breakingNews.length === 0) return null;

    return (
        <div className="bg-fg text-white py-1.5 overflow-hidden flex items-center relative z-40 border-b border-border-dark">
            <div className="px-6 font-black uppercase tracking-[0.2em] text-[9px] flex-shrink-0 flex items-center gap-2 bg-fg z-10 text-red">
                <span className="w-1.5 h-1.5 bg-red rounded-full animate-pulse"></span>
                Breaking
            </div>
            <div className="flex gap-12 animate-ticker whitespace-nowrap">
                {breakingNews.concat(breakingNews).map((news, i) => (
                    <Link
                        key={`${news.slug}-${i}`}
                        href={`/news/${news.slug}`}
                        className="text-[10px] font-bold uppercase tracking-[0.1em] hover:text-red transition-colors"
                    >
                        {news.title}
                    </Link>
                ))}
            </div>
            <style jsx global>{`
                @keyframes ticker-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-ticker {
                    animation: ticker-scroll 60s linear infinite;
                }
            `}</style>
        </div>
    );
}
