'use client';

import { useSearchParams } from 'next/navigation';
import { mockNews } from '@/lib/mockNews';
import NewsCard from '@/components/NewsCard';
import SectionHeader from '@/components/SectionHeader';
import { Suspense } from 'react';

function SearchResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';

    const results = mockNews.filter(n =>
        n.title.toLowerCase().includes(query.toLowerCase()) ||
        n.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        n.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
    );

    return (
        <div className="max-container py-12 min-h-[60vh]">
            <div className="mb-16 border-b border-fg pb-12">
                <h1 className="editorial-headline text-5xl md:text-8xl text-fg mb-6">
                    Search Results
                </h1>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                    <span>Query:</span>
                    <span className="text-fg border border-border px-2 py-1">"{query}"</span>
                    <span className="w-1 h-1 bg-border rounded-full" />
                    <span>{results.length} Matches Found</span>
                </div>
            </div>

            <div>
                {query ? (
                    results.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                            {results.map((article) => (
                                <NewsCard key={article.slug} article={article} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 border border-border">
                            <h3 className="text-lg font-bold uppercase tracking-widest mb-2">No results found</h3>
                            <p className="text-muted font-serif">We couldn't find any matches for "{query}". Try another keyword.</p>
                        </div>
                    )
                ) : (
                    <div className="text-center py-24 border border-border">
                        <h3 className="text-lg font-bold uppercase tracking-widest mb-2">Enter a search term</h3>
                        <p className="text-muted font-serif">The archives of Los Santos are at your disposal.</p>
                    </div>
                )}
            </div>

            {/* Suggested Topics */}
            <div className="mt-24">
                <SectionHeader title="Popular Searches" />
                <div className="flex flex-wrap gap-4">
                    {['LSPD', 'Vinewood', 'Bank Robbery', 'Diamond Casino', 'Politics'].map(tag => (
                        <a
                            key={tag}
                            href={`/search?q=${encodeURIComponent(tag)}`}
                            className="text-[10px] font-bold uppercase tracking-[0.2em] border border-border px-6 py-3 hover:bg-fg hover:text-white transition-all"
                        >
                            {tag}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="max-container py-20 text-center font-bold uppercase tracking-widest animate-pulse">Scanning archives...</div>}>
            <SearchResults />
        </Suspense>
    );
}
