import getProjectImagesPaths from "@/utils/getProjectImagesPaths";
import ProjectImages from "./ProjectImages";
import ProjectCard from "./ProjectCard";
import getBase64BlurPlaceholder from "@/utils/getBase64BlurPlaceholder";

export default async function Project({ project }) {
  const projectImagesPaths = await getProjectImagesPaths(project.id);

  const cardImagePlaceholder = await getBase64BlurPlaceholder(projectImagesPaths[0]);
  const projectCard = {
    ...project,
    src: projectImagesPaths[0],
    placeholder: cardImagePlaceholder,
  };

  return (
    <>
      <ProjectCard card={projectCard} />
      <ProjectImages images={projectImagesPaths} />
    </>
  );
}
