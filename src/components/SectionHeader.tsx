import Link from 'next/link';

interface SectionHeaderProps {
    title: string;
    href?: string;
}

export default function SectionHeader({ title, href }: SectionHeaderProps) {
    return (
        <div className="flex items-end justify-between border-b-2 border-black mb-6 pb-2">
            <h2 className="text-2xl font-header font-black leading-none">
                {title}
            </h2>
            {href && (
                <Link
                    href={href}
                    className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-weazel-yellow transition-colors"
                >
                    More {title} →
                </Link>
            )}
        </div>
    );
}
