import ProjectCard from "@/components/ProjectCard";
import ProjectImages from "@/components/ProjectImages";
import getAllProjectImagesPaths from "@/utils/getAllProjectImagesPaths";
import getRandomProjectImagePath from "@/utils/getRandomProjectImagePath";
import routes from "@/utils/routes";

export default async function Page({ params }) {
  const { id } = params;
  const req = await fetch(routes.getProjectById(id));
  const project = await req.json();

  const allImagesPaths = await getAllProjectImagesPaths(project.id);

  const card = { ...project, imageSrc: allImagesPaths[0] };

  return (
    <section>
      <ProjectCard card={card} />
      <ProjectImages imagesPaths={allImagesPaths} />
    </section>
  );
}
