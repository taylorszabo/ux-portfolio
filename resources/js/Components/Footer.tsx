export default function Footer() {
    return (
        <footer className="py-10 border-t border-white/10 text-center text-sm">
            <p>
                © {new Date().getFullYear()} Taylor&nbsp;Szabo · Built with Laravel, Inertia &
                React
            </p>
        </footer>
    );
}
