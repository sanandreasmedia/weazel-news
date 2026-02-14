import { mockNews } from '@/lib/mockNews';
import Link from 'next/link';

export default function LatestList() {
    const latestNews = [...mockNews].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, 5);

    return (
        <div className="bg-surface-light p-5 border-t-2 border-black">
            <h2 className="text-xl font-header font-black mb-4 flex items-center justify-between">
                <span>Latest</span>
                <span className="w-8 h-1 bg-weazel-yellow"></span>
            </h2>

            <div className="flex flex-col gap-5">
                {latestNews.map((news) => (
                    <Link key={news.slug} href={`/news/${news.slug}`} className="group block">
                        <div className="text-[10px] text-weazel-yellow-dark font-black uppercase mb-1">
                            {news.category}
                        </div>
                        <h4 className="text-sm font-bold leading-tight group-hover:underline group-hover:text-black transition-colors mb-2">
                            {news.title}
                        </h4>
                        <div className="text-[9px] text-gray-500 font-medium">
                            {new Date(news.publishedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                    </Link>
                ))}
            </div>

            <Link href="/latest" className="block mt-6 text-center text-[10px] font-black uppercase border border-black py-2 hover:bg-black hover:text-white transition-all tracking-widest">
                View All Updates
            </Link>
        </div>
    );
}
