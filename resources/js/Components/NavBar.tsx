
import {Link, usePage} from "@inertiajs/react";

export default function NavBar() {
    const { url } = usePage();
    const pathname = url.split('?')[0];

    const isActive = (href: string) =>
        href === '/'
            ? pathname === '/'
            : pathname.startsWith(href);

    const links = [
        { href: '/',        label: 'Home'   },
        { href: '/work',    label: 'Work'   },
        { href: '/about',   label: 'About'  },
        { href: '/contact', label: 'Contact'},
    ];

    return (
        <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10">
            <nav className="container mx-auto flex items-center justify-between py-3">
                <Link href="/" className="font-black text-xl tracking-tight">
                    Taylor&nbsp;•&nbsp;UX
                </Link>

                <div className="space-x-4">
                    {links.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`px-3 py-2 font-medium transition
                 hover:text-brand-accent ${
                                isActive(href) ? 'text-brand-accent' : ''
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
