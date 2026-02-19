'use client';

import { mockNews } from '@/lib/mockNews';
import Link from 'next/link';

export default function BreakingTicker() {
    const breakingNews = mockNews.filter(n => n.isBreaking);

    if (breakingNews.length === 0) return null;

    return (
        <div className="bg-red text-white py-1.5 overflow-hidden flex items-center relative z-40">
            <div className="px-6 font-bold uppercase tracking-[0.2em] text-[10px] flex-shrink-0 flex items-center gap-2 border-r border-white/20 mr-4 bg-red z-10">
                Breaking
            </div>
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
                {breakingNews.map((news) => (
                    <Link
                        key={news.slug}
                        href={`/news/${news.slug}`}
                        className="text-[11px] font-bold uppercase tracking-wider hover:underline"
                    >
                        {news.title}
                    </Link>
                ))}
                {/* Duplicate for seamless loop */}
                {breakingNews.map((news) => (
                    <Link
                        key={`${news.slug}-dup`}
                        href={`/news/${news.slug}`}
                        className="text-[11px] font-bold uppercase tracking-wider hover:underline"
                    >
                        {news.title}
                    </Link>
                ))}
            </div>
            <style jsx>{`
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
}
