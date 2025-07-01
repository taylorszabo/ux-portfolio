// Pages/About.tsx
import AppLayout from '@/Layouts/AppLayout';

export default function About() {
    return (
        <AppLayout>
            <section className="container mx-auto py-24 max-w-3xl prose dark:prose-invert">
                <h1>About me</h1>
                <p>
                    I’m Taylor Szabo, a UX-first full-stack developer & designer based in Ontario.
                    I blend Laravel backends with React frontends to craft performant,
                    human-centric experiences&hellip;
                </p>
                {/* Add timeline, skills grid, etc. */}
            </section>
        </AppLayout>
    );
}
