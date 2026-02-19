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
            <div className="bg-fg text-white py-1.5 border-b border-border">
                <div className="max-container flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                    <Link href="/" className="hover:text-red transition-colors">
                        Weazel News <span className="mx-2 opacity-30 text-white">|</span> Los Santos
                    </Link>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-red rounded-full animate-pulse"></span>
                            <span className="text-red">Live</span>
                            <span className="ml-1 text-white opacity-80">{time || '--:--'}</span>
                        </div>
                        <span className="hidden sm:inline opacity-60">
                            {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="bg-white">
                <div className="max-container flex flex-col md:flex-row items-center justify-between py-4 gap-4">
                    <nav className="flex items-center gap-6 md:gap-8 flex-wrap justify-center">
                        <Link href="/" className="text-xs font-bold uppercase tracking-widest hover:text-red transition-colors">Home</Link>
                        {categories.map((cat) => (
                            <Link
                                key={cat.name}
                                href={`/category/${cat.slug}`}
                                className="text-xs font-bold uppercase tracking-widest hover:text-red transition-colors"
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-6">
                        <Link
                            href="/submit"
                            className="text-[10px] font-bold uppercase tracking-widest hover:text-red transition-colors border-b border-transparent hover:border-red"
                        >
                            Submit a Tip
                        </Link>

                        <form onSubmit={handleSearch} className="relative group">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent border-b border-border px-1 py-1 text-xs focus:ring-0 focus:border-red transition-all w-20 lg:w-28 focus:w-40 outline-none text-fg"
                            />
                            <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-fg hover:text-red" aria-label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}
