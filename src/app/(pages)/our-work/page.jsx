import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import TextSpinner from "@/components/TextSpinner";
import projects from "@/projects.json";
import ReduxProvider from "@/components/ReduxProvider";
import PageLoadedCheck from "@/components/PageLoadedCheck";
import getProjectImagesPaths from "@/utils/getProjectImagesPaths";

export default async function OurWork() {
  const projectImagesPathsArr = await Promise.all(
    projects.map((project) => getProjectImagesPaths(project.id))
  );
  const carouselImages = await Promise.all(
    projectImagesPathsArr.map(async (pathsArr) => {
      const [firstImagePath] = pathsArr;
      const file = await fs.readFile(firstImagePath);
      const { base64 } = await getPlaiceholder(file);
      return { src: firstImagePath, base64 };
    })
  );
  const carouselData = carouselImages.map((image, i) => ({
    ...projects[i],
    ...image,
  }));

  return (
    <section className="h-screen-no-scroll">
      <TextSpinner text={"наши работы"} radius={150} color={"brand-primary-400"} />
      <ReduxProvider>
        <ProjectsCarousel carouselData={carouselData} />
        <PageLoadedCheck />
      </ReduxProvider>
    </section>
  );
}
