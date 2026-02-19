import Link from 'next/link';

interface SectionHeaderProps {
    title: string;
    href?: string;
}

export default function SectionHeader({ title, href }: SectionHeaderProps) {
    return (
        <div className="flex items-end justify-between border-b border-border mb-8 pb-3">
            <h2 className="text-xl font-bold uppercase tracking-widest text-fg">
                {title}
            </h2>
            {href && (
                <Link
                    href={href}
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted hover:text-red transition-colors"
                >
                    View All →
                </Link>
            )}
        </div>
    );
}
