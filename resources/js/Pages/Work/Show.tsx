import AppLayout from '@/Layouts/AppLayout';
import { Project } from '@/Components/ProjectCard';
import { marked } from 'marked';

interface Props {
    project: Project & { body: string };
}

export default function WorkShow({ project }: Props) {
    return (
        <AppLayout>
            <article className="container mx-auto py-24 prose dark:prose-invert">
                <h1 className="mb-6">{project.title}</h1>
                <img
                    src={project.cover_image}
                    alt={project.title}
                    className="rounded-xl mb-10"
                />
                <div dangerouslySetInnerHTML={{ __html: marked(project.body) }} />
            </article>
        </AppLayout>
    );
}
