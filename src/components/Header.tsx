'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Logo from './Logo';

const categories = [
    { name: 'Crime', slug: 'crime' },
    { name: 'Politics', slug: 'politics' },
    { name: 'Business', slug: 'business' },
    { name: 'Culture', slug: 'culture' },
    { name: 'Sports', slug: 'sports' },
];

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [time, setTime] = useState('');
    const router = useRouter();

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
        };
        updateClock();
        const timer = setInterval(updateClock, 1000 * 60);
        return () => clearInterval(timer);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-border">
            {/* Top Bar */}
            <div className="bg-fg text-white py-1">
                <div className="container-weazel flex justify-between items-center text-[9px] font-black uppercase tracking-[0.4em]">
                    <Link href="/" className="hover:text-red transition-all flex items-center gap-3">
                        <span className="text-white">WEAZEL NEWS NETWORK</span>
                        <span className="opacity-20">|</span>
                        <span className="text-white/40">LOS SANTOS</span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-red rounded-full"></span>
                            <span className="text-red">LIVE STREAM</span>
                            <span className="ml-1 text-white/50">{time || '--:--'}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="bg-white border-b border-border">
                <div className="container-weazel flex flex-col md:flex-row items-center justify-between py-4 gap-6">
                    <nav className="flex items-center gap-8 md:gap-10 flex-wrap justify-center font-black text-[11px] uppercase tracking-[0.2em]">
                        <Link href="/" className="hover:text-red transition-colors border-b-2 border-transparent hover:border-red pb-1">Home</Link>
                        {categories.map((cat) => (
                            <Link
                                key={cat.name}
                                href={`/category/${cat.slug}`}
                                className="hover:text-red transition-colors border-b-2 border-transparent hover:border-red pb-1"
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-6">
                        <Link
                            href="/submit"
                            className="bg-red text-white text-[9px] font-black uppercase tracking-[0.3em] px-5 py-2 hover:bg-fg transition-all"
                        >
                            SUBMIT TIP
                        </Link>

                        <form onSubmit={handleSearch} className="relative group">
                            <input
                                type="text"
                                placeholder="SEARCH ARCHIVE"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent border-b border-border px-1 py-1 text-[10px] font-black focus:ring-0 focus:border-red transition-all w-24 lg:w-32 focus:w-40 outline-none text-fg placeholder:text-muted/30 uppercase tracking-[0.2em]"
                            />
                            <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-fg hover:text-red" aria-label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}
