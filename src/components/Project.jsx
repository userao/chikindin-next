import ProjectImages from "./ProjectImages";
import ProjectCard from "./ProjectCard";
import getBase64BlurPlaceholder from "@/utils/getBase64BlurPlaceholder";
import getBackendRoute from "@/utils/getBackendRoute";

export default async function Project({ project }) {
  const backendRoute = getBackendRoute();
  const projectImages = project.photos;
  const projectImagesPaths = projectImages.map((image) => `${backendRoute}/${image.filename}`);
  const cardImagePlaceholder = await getBase64BlurPlaceholder(projectImages[0].filename);
  const projectCard = {
    ...project,
    src: `${backendRoute}/${projectImages[0].filename}`,
    placeholder: cardImagePlaceholder,
  };

  return (
    <>
      <ProjectCard card={projectCard} />
      <ProjectImages images={projectImagesPaths} />
    </>
  );
}
