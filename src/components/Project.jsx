import ProjectImages from "./ProjectImages";
import ProjectCard from "./ProjectCard";
import getBackendRoute from "@/utils/getBackendRoute";
import getBase64ShimmerPlaceholder from "@/utils/getBase64ShimmerPlaceholder";

export default async function Project({ project }) {
  const backendRoute = getBackendRoute();
  const projectImages = project.photos;
  const projectImagesPaths = projectImages.map((image) => `${backendRoute}/api/photos/${image.filename}`);
  const cardImagePlaceholder = await getBase64ShimmerPlaceholder();
  const projectCard = {
    ...project,
    src: `${backendRoute}/api/photos/${projectImages[0].filename}`,
    placeholder: cardImagePlaceholder,
  };

  return (
    <>
      <ProjectCard card={projectCard} />
      <ProjectImages images={projectImagesPaths} />
    </>
  );
}
