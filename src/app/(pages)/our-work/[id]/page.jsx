import projects from "@/projects.json";
import Project from '@/components/Project';
import TextSpinner from "@/components/TextSpinner";
import ReduxProvider from "@/components/ReduxProvider";
import PageLoadedCheck from "@/components/PageLoadedCheck";

export default function Page({ params }) {
  const { id } = params;

  const project = projects.find((p) => p.id === Number(id));

  return (
    <section>
      <TextSpinner color={'brand-primary-400'} text={project.name} radius={150}/>
      <Project project={project} />
      <ReduxProvider>
        <PageLoadedCheck />
      </ReduxProvider>
    </section>
  );
}
