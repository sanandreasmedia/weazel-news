import { client } from '@/sanity/lib/client';
import { searchArticlesQuery } from '@/sanity/lib/queries';
import NewsCard from '@/components/NewsCard';
import SectionHeader from '@/components/SectionHeader';
import { Suspense } from 'react';

interface SearchPageProps {
    searchParams: Promise<{ q?: string }>;
}

async function SearchResults({ query }: { query: string }) {
    let results = [];
    if (query) {
        try {
            results = await client.fetch<any[]>(searchArticlesQuery, { query });
        } catch (e) {
            console.error('Sanity search error:', e);
        }
    }

    return (
        <div className="container-weazel py-10 md:py-16 min-h-[60vh]">
            <div className="mb-16 border-b-2 border-fg pb-12">
                <h1 className="headline-lg text-fg mb-10">
                    Search Results
                </h1>
                <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-muted">
                    <div className="flex items-center gap-3">
                        <span>Query</span>
                        <span className="text-fg bg-fg/5 px-3 py-1.5 border border-border">"{query || 'NONE'}"</span>
                    </div>
                    <span className="w-1.5 h-1.5 bg-border rounded-full" />
                    <span>{results.length} Records Found</span>
                </div>
            </div>

            <div>
                {query ? (
                    results.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                            {results.map((article: any) => (
                                <NewsCard key={article.slug} article={article} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 border border-border">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4">No Matches Found</h3>
                            <p className="text-muted text-xs uppercase tracking-widest font-bold">Try another frequency or keyword.</p>
                        </div>
                    )
                ) : (
                    <div className="text-center py-24 border border-border">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4">Awaiting Input</h3>
                        <p className="text-muted text-xs uppercase tracking-widest font-bold">Enter a term to scan the Weazel archives.</p>
                    </div>
                )}
            </div>

            {/* Suggested Topics */}
            <div className="mt-24">
                <SectionHeader title="Popular Keywords" />
                <div className="flex flex-wrap gap-4">
                    {['LSPD', 'Vinewood', 'Bank Robbery', 'Diamond Casino', 'Politics'].map(tag => (
                        <a
                            key={tag}
                            href={`/search?q=${encodeURIComponent(tag)}`}
                            className="text-[10px] font-black uppercase tracking-[0.3em] border border-border px-8 py-4 hover:bg-fg hover:text-white transition-all"
                        >
                            {tag}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
    const { q } = await searchParams;
    const query = q || '';

    return (
        <Suspense fallback={
            <div className="container-weazel py-20 text-center">
                <div className="text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">Scanning Archives...</div>
            </div>
        }>
            <SearchResults query={query} />
        </Suspense>
    );
}
