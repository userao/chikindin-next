import projects from "@/projects.json";
import Project from '@/components/Project';

export default function Page({ params }) {
  const { id } = params;

  const project = projects.find((p) => p.id === Number(id));

  return (
    <section>
      <Project project={project} />
    </section>
  );
}
