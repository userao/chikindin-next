import Project from "@/components/Project";
import routes from "@/routes";

export default async function Page({ params }) {
  const { id } = params;
  const req = await fetch(routes.getProjectById(id));
  const project = await req.json();

  return (
    <section>
      <Project project={project} />
    </section>
  );
}
