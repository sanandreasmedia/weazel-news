import Link from 'next/link';

interface SectionHeaderProps {
    title: string;
    href?: string;
}

export default function SectionHeader({ title, href }: SectionHeaderProps) {
    return (
        <div className="flex items-center gap-6 mb-8 group">
            <h2 className="headline-sm whitespace-nowrap">
                {title}
            </h2>
            <div className="flex-grow h-px bg-fg group-hover:bg-red transition-colors"></div>
            {href && (
                <Link
                    href={href}
                    className="text-[9px] font-black uppercase tracking-[0.2em] text-muted hover:text-red transition-colors whitespace-nowrap"
                >
                    View All
                </Link>
            )}
        </div>
    );
}
