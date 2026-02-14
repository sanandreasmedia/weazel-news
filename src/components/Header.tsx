'use client';

import Link from 'next/link';
import { useState } from 'react';
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
    const router = useRouter();

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
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> LIVE
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
                <div className="flex items-center gap-8">
                    <Link href="/">
                        <Logo />
                    </Link>

                    <nav className="hidden md:flex gap-6">
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
                    <form onSubmit={handleSearch} className="relative group hidden sm:block">
                        <input
                            type="text"
                            placeholder="Search news..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-surface-light border-none rounded-sm px-3 py-1.5 text-xs focus:ring-2 focus:ring-weazel-yellow transition-all w-32 focus:w-48 outline-none text-black"
                        />
                        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-black" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </button>
                    </form>
                    <button className="md:hidden text-black" aria-label="Menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
