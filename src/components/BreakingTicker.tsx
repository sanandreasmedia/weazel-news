'use client';

import { mockNews } from '@/lib/mockNews';
import Link from 'next/link';

export default function BreakingTicker() {
    const breakingNews = mockNews.filter(n => n.isBreaking);

    if (breakingNews.length === 0) return null;

    const mainBreaking = breakingNews[0];

    return (
        <div className="bg-fg text-white py-1.5 flex items-center relative z-40 border-b border-white/5">
            <div className="container-weazel flex items-center gap-6">
                <div className="flex-shrink-0 bg-red text-white text-[9px] font-black px-4 py-1.5 uppercase tracking-[0.3em]">
                    Breaking
                </div>

                <Link
                    href={`/news/${mainBreaking.slug}`}
                    className="flex-grow text-[11px] font-black uppercase tracking-[0.15em] hover:text-red transition-colors line-clamp-1"
                >
                    {mainBreaking.title}
                </Link>

                <div className="hidden md:flex items-center gap-3 text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">
                    <span className="w-1.5 h-1.5 bg-red rounded-full"></span>
                    Broadcast Intelligence Active
                </div>
            </div>
        </div>
    );
}
