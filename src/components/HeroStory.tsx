import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';

interface HeroStoryProps {
    article: any;
}

export default function HeroStory({ article }: HeroStoryProps) {
    const imageUrl = article.heroImage ? urlForImage(article.heroImage).url() : article.image;

    return (
        <Link href={`/news/${article.slug}`} className="group block">
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-stretch lg:min-h-[500px] border border-border overflow-hidden bg-white">
                {/* Image Section */}
                <div className="relative overflow-hidden order-1 lg:order-2 bg-fg">
                    <img
                        src={imageUrl}
                        alt={article.title}
                        className="object-cover w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>

                    {article.isBreaking && (
                        <div className="absolute top-6 right-6 bg-red text-white text-[9px] font-black px-4 py-1.5 uppercase tracking-[0.3em] flex items-center gap-2">
                            Breaking
                        </div>
                    )}
                </div>

                {/* Text Section */}
                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 order-2 lg:order-1">
                    <div className="mb-8">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red border-l-2 border-red pl-3">
                            {article.category}
                        </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-[1.1] tracking-tighter text-fg mb-10 group-hover:text-red transition-colors">
                        {article.title}
                    </h2>

                    <p className="text-muted text-sm md:text-base leading-relaxed opacity-70 mb-10 max-w-lg">
                        {article.excerpt}
                    </p>

                    <div className="mt-auto flex items-center gap-4 text-[10px] font-bold text-muted uppercase tracking-[0.2em]">
                        <span>By {article.author}</span>
                        <span className="w-1 h-1 bg-border rounded-full"></span>
                        <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
