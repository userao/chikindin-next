import ProjectCard from "@/components/ProjectCard";
import ProjectImages from "@/components/ProjectImages";
import routes from "@/utils/routes";
import paths from "@/utils/paths";
import getImages from "@/utils/getImages";

export default async function Page({ params }) {
  const { id } = params;
  const req = await fetch(routes.getProjectById(id), { cache: "no-store" });
  const project = await req.json();

  const pathToImages = paths.getProjectImagesPathById(project.id);
  const pattern = `${pathToImages}/*/*.jpg`;
  const images = await getImages(pattern);

  const card = { ...project, image: images[0] };

  return (
    <section>
      <ProjectCard card={card} />
      <ProjectImages images={images} />
    </section>
  );
}

export const dynamic = 'force-dynamic';
