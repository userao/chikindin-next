import Project from "@/components/Project";
import TextSpinner from "@/components/TextSpinner";
import ReduxProvider from "@/components/ReduxProvider";
import PageLoadedCheck from "@/components/PageLoadedCheck";
import getProject from "@/utils/getProject";

export async function generateMetadata({ params }) {
  const { id } = params;
  const project = await getProject(id);
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function Page({ params }) {
  const { id } = params;

  const project = await getProject(id);

  return (
    <section>
      <TextSpinner color={"brand-primary-400"} text={project.name} radius={150} />
      <Project project={project} />
      <ReduxProvider>
        <PageLoadedCheck />
      </ReduxProvider>
    </section>
  );
}
