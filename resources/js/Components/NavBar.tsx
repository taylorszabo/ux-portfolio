import {Link, usePage} from "@inertiajs/react";


export default function NavBar() {
    const { url } = usePage();

    const link = (href: string, label: string) => (
        <Link
            href={href}
            className={`px-3 py-2 font-medium hover:text-brand-accent ${
                url.startsWith(href) ? 'text-brand-accent' : ''
            }`}
        >
            {label}
        </Link>
    );

    return (
        <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10">
            <nav className="container mx-auto flex items-center justify-between py-3">
                <Link href="/" className="font-black text-xl tracking-tight">
                    Taylor&nbsp;•&nbsp;UX
                </Link>

                <div className="space-x-4">
                    {link('/', 'Home')}
                    {link('/work', 'Work')}
                    {link('/about', 'About')}
                    {link('/contact', 'Contact')}
                </div>
            </nav>
        </header>
    );
}
