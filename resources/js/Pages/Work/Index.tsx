import AppLayout from '@/Layouts/AppLayout';
import ProjectCard, { Project } from '@/Components/ProjectCard';
import Pagination, { LinkObject } from '@/Components/Pagination';

interface Props {
    projects: {
        data: Project[];
        links: LinkObject[];
    };
}

export default function WorkIndex({ projects }: Props) {
    return (
        <AppLayout>
            <section className="container mx-auto py-24">
                <h1 className="text-4xl font-bold mb-10">All projects</h1>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.data.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>

                <Pagination className="mt-16" links={projects.links} />
            </section>
        </AppLayout>
    );
}
