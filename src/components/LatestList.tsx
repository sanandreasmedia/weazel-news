import Link from 'next/link';

interface LatestListProps {
    articles?: any[];
}

export default function LatestList({ articles }: LatestListProps) {
    const listArticles = articles?.slice(0, 6) || [];

    return (
        <div className="flex flex-col bg-white">
            <div className="flex items-center gap-4 mb-10">
                <span className="bg-red text-white text-[9px] font-black px-3 py-1 uppercase tracking-[0.3em]">
                    Latest Updates
                </span>
                <span className="flex-grow h-px bg-border"></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                {listArticles.map((news) => (
                    <Link
                        key={news.slug}
                        href={`/news/${news.slug}`}
                        className="group flex flex-col items-start gap-3"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black text-red tabular-nums uppercase tracking-[0.2em]">
                                {new Date(news.publishedAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
                            </span>
                            <span className="w-1 h-1 bg-border rounded-full"></span>
                            <span className="text-[9px] font-bold text-muted uppercase tracking-[0.2em]">
                                {news.category}
                            </span>
                        </div>
                        <h4 className="text-sm md:text-base font-extrabold leading-tight group-hover:text-red transition-all text-fg">
                            {news.title}
                        </h4>
                    </Link>
                ))}
            </div>

            <Link
                href="/latest"
                className="mt-12 text-[9px] font-black uppercase tracking-[0.4em] text-fg hover:text-red transition-all inline-flex items-center gap-3"
            >
                Connect to Live Stream
                <span className="w-6 h-px bg-fg group-hover:bg-red transition-all"></span>
            </Link>
        </div>
    );
}
