import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";
import getProjectImagesPaths from "@/utils/getProjectImagesPaths";
import ProjectImages from "./ProjectImages";
import ProjectCard from "./ProjectCard";

export default async function Project({ project }) {
  const projectImagesPaths = await getProjectImagesPaths(project.id);
  const projectImages = await Promise.all(
    projectImagesPaths.map(async (path) => {
      // const file = await fs.readFile(path);
      // const { base64 } = await getPlaiceholder(file);
      return { src: path };
    })
  );
  const projectCard = { ...project, ...projectImages[0] };

  return (
    <>
      <ProjectCard card={projectCard} />
      <ProjectImages images={projectImages} />
    </>
  );
}
