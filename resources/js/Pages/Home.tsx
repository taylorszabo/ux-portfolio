import AppLayout from '@/Layouts/AppLayout';
import Hero from '@/Components/Hero';
import ProjectCard, { Project } from '@/Components/ProjectCard';

interface Props {
    projects: Project[];
}

export default function Home({ projects }: Props) {
    return (
        <AppLayout>
            <Hero />

            <section className="container mx-auto py-20">
                <h2 className="text-3xl font-bold mb-8">Featured work</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            </section>
        </AppLayout>
    );
}
