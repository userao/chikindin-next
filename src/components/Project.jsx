import ProjectImages from "./ProjectImages";
import ProjectCard from "./ProjectCard";

import getYDImages from "@/utils/getYDImages";
import getProjectImages from "@/utils/getProjectImages";
import getBase64PlaceholderUrl from "@/utils/getBase64PlaceholderUrl";
import routes from "@/utils/routes";

export default async function Project({ project }) {
  const allYdImages = await getYDImages();
  const projectYdImages = getProjectImages(project.id, allYdImages);

  const plaiceholdersPromises = projectYdImages.map(async (image) =>
    getBase64PlaceholderUrl(image.preview)
  );

  const plaiceholders = await Promise.all(plaiceholdersPromises);

  const imagesWithBlur = projectYdImages.map((image, i) => ({
    src: image.file,
    base64: plaiceholders[i],
  }));

  return (
    <>
      <ProjectCard card={{ ...project, image: imagesWithBlur[0] }} />
      <ProjectImages images={imagesWithBlur} />
    </>
  );
}
