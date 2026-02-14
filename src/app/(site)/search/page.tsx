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
        <div className="container mx-auto px-4 py-12 min-h-[60vh]">
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-header font-black uppercase italic mb-4">
                    Search Results
                </h1>
                <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs text-gray-400">
                    <span>Search query:</span>
                    <span className="text-black bg-weazel-yellow px-2 py-0.5">"{query}"</span>
                    <span className="mx-2">•</span>
                    <span>{results.length} Matches found</span>
                </div>
            </div>

            <div className="border-t-4 border-black pt-12">
                {query ? (
                    results.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                            {results.map((article) => (
                                <NewsCard key={article.slug} article={article} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 bg-surface-light border-2 border-dashed border-gray-200">
                            <svg
                                className="w-16 h-16 mx-auto mb-6 text-gray-300"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                            </svg>
                            <h3 className="text-2xl font-header font-black mb-2 uppercase">No Lead found</h3>
                            <p className="text-gray-400 max-w-sm mx-auto">We couldn't find any news matches for your search. Try another keyword or check for typos.</p>
                        </div>
                    )
                ) : (
                    <div className="text-center py-24 bg-surface-light">
                        <h3 className="text-2xl font-header font-black mb-2 uppercase italic">Type something to search...</h3>
                        <p className="text-gray-400">The city's secrets are waiting for you.</p>
                    </div>
                )}
            </div>

            {/* Suggested Topics */}
            <div className="mt-20">
                <SectionHeader title="Popular Searches" />
                <div className="flex flex-wrap gap-3">
                    {['LSPD', 'Vinewood', 'Bank Robbery', 'Diamond Casino', 'San Andreas Politics'].map(tag => (
                        <a
                            key={tag}
                            href={`/search?q=${encodeURIComponent(tag)}`}
                            className="bg-black text-white px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-weazel-yellow hover:text-black transition-all"
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
        <Suspense fallback={<div className="container mx-auto px-4 py-20 text-center font-header font-black uppercase animate-pulse">Scanning the streets...</div>}>
            <SearchResults />
        </Suspense>
    );
}
