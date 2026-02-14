'use client';

import { mockNews } from '@/lib/mockNews';
import Link from 'next/link';

export default function BreakingTicker() {
    const breakingNews = mockNews.filter(n => n.isBreaking);

    if (breakingNews.length === 0) return null;

    return (
        <div className="bg-breaking text-white py-2 overflow-hidden flex items-center border-y border-white/10">
            <div className="px-4 font-black italic uppercase tracking-widest text-sm flex-shrink-0 flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                Breaking News
            </div>
            <div className="flex gap-8 animate-marquee whitespace-nowrap">
                {breakingNews.map((news, i) => (
                    <Link
                        key={news.slug}
                        href={`/news/${news.slug}`}
                        className="text-sm font-semibold hover:underline"
                    >
                        +++ {news.title} +++
                    </Link>
                ))}
                {/* Duplicate for seamless loop */}
                {breakingNews.map((news, i) => (
                    <Link
                        key={`${news.slug}-dup`}
                        href={`/news/${news.slug}`}
                        className="text-sm font-semibold hover:underline"
                    >
                        +++ {news.title} +++
                    </Link>
                ))}
            </div>
            <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
}
