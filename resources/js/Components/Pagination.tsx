import {Link} from "@inertiajs/react";


export interface LinkObject {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props {
    links: LinkObject[];
    className?: string;
}

export default function Pagination({ links, className = '' }: Props) {
    if (links.length <= 3) return null; // no pagination needed

    return (
        <nav
            className={`flex items-center justify-center gap-1 text-sm ${className}`}
            aria-label="Pagination"
        >
            {links.map((link, i) => {
                const label = link.label.replace(/&laquo;|&raquo;|&nbsp;/g, '').trim() || '…';

                const common =
                    'px-3 py-2 rounded-md hover:bg-gray-200/60 dark:hover:bg-white/10 transition';

                return link.url ? (
                    <Link
                        key={i}
                        href={link.url}
                        preserveScroll
                        preserveState
                        className={`${common} ${
                            link.active ? 'bg-brand-accent text-white' : ''
                        }`}
                    >
                        {label}
                    </Link>
                ) : (
                    <span
                        key={i}
                        className={`${common} opacity-40 cursor-not-allowed select-none`}
                    >
            {label}
          </span>
                );
            })}
        </nav>
    );
}
