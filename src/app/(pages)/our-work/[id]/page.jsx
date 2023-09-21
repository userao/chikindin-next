import ProjectCard from "@/components/ProjectCard";
import ProjectImages from "@/components/ProjectImages";
import projects from '@/projects.json';
import getYDImages from "@/utils/getYDImages";
import getProjectImages from "@/utils/getProjectImages";
import getImage from "@/utils/getImage";

export default async function Page({ params }) {
  const { id } = params;

  const project = projects.find(p => p.id === Number(id));

  const allYdImages = await getYDImages();
  const projectYdImages = getProjectImages(project.id, allYdImages);

  const cardImage = await getImage(projectYdImages[0].file);
  const card = { ...project, image: cardImage };

  const projectImages = await Promise.all(projectYdImages.map(async (ydi) => {
    return getImage(ydi.file);
  }))

  return (
    <section>
      <ProjectCard card={card} />
      <ProjectImages images={projectImages} />
    </section>
  );
}

