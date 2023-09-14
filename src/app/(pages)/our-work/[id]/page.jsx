import ProjectCard from "@/components/ProjectCard";
import ProjectImages from "@/components/ProjectImages";
import routes from "@/utils/routes";
import paths from "@/utils/paths";
import getImages from "@/utils/getImages";
import projects from '@/projects.json';

export default async function Page({ params }) {
  const { id } = params;

  const project = projects.find(p => p.id === Number(id));

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

