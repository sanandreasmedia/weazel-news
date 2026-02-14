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
        <header className="sticky top-0 z-50 bg-white border-b-4 border-weazel-yellow shadow-md">
            {/* Top Bar */}
            <div className="bg-black text-white text-[10px] uppercase tracking-tighter py-1 px-4 flex justify-between items-center font-bold">
                <div className="flex gap-4">
                    <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span> LIVE BROADCAST
                    </span>
                    <span>Los Santos, san andreas</span>
                </div>
                <div className="flex gap-4">
                    <span>72°F</span>
                    <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4">
                        <Link href="/">
                            <Logo />
                        </Link>

                        <div className="hidden lg:flex items-center gap-3 pl-4 border-l border-gray-200">
                            <div className="flex items-center gap-1.5 px-2 py-1 bg-red-600 text-white rounded-sm animate-pulse-subtle">
                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                <span className="text-[10px] font-black tracking-widest uppercase italic">Live</span>
                            </div>
                            <span className="font-header font-black text-lg tabular-nums tracking-tighter">{time || '--:--'}</span>
                        </div>
                    </div>

                    <nav className="hidden xl:flex gap-6">
                        {categories.map((cat) => (
                            <Link
                                key={cat.name}
                                href={`/category/${cat.slug}`}
                                className="font-header font-bold text-sm uppercase tracking-tight hover:text-weazel-yellow transition-colors"
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="/submit"
                        className="hidden sm:flex items-center gap-2 bg-black text-weazel-yellow px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-weazel-yellow hover:text-black transition-all border border-black"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                        Submit a Tip
                    </Link>

                    <form onSubmit={handleSearch} className="relative group hidden md:block">
                        <input
                            type="text"
                            placeholder="Search news..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-surface-light border-none rounded-sm px-3 py-1.5 text-xs focus:ring-2 focus:ring-weazel-yellow transition-all w-24 lg:w-32 focus:w-48 outline-none text-black"
                        />
                        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-black" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </button>
                    </form>
                    <button className="xl:hidden text-black" aria-label="Menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
