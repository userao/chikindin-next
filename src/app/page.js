import HomeCarousel from "@/components/HomeCarousel";
import TextSpinner from "@/components/TextSpinner";
import projects from "@/projects.json";
import getProjectImages from "@/utils/getProjectImages";
import getYDImages from "@/utils/getYDImages";
import getBase64PlaceholderUrl from "@/utils/getBase64PlaceholderUrl";
import ReduxProvider from "@/components/ReduxProvider";
import PageLoadedCheck from "@/components/PageLoadedCheck";
import getFilepaths from "@/utils/getFilepaths";

import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";
import path from "node:path";

export default async function Home() {
  // const allYdImages = await getYDImages();

  // const randomYdImages = projects.map((project) => {
  //   const projectYdImages = getProjectImages(project.id, allYdImages);
  //   const randomIndex = Math.floor(Math.random() * projectYdImages.length);

  //   return projectYdImages[randomIndex];
  // });

  // const plaiceholdersPromises = randomYdImages.map((image) =>
  //   getBase64PlaceholderUrl(image.file)
  // );

  // const plaiceholders = await Promise.all(plaiceholdersPromises);

  // const carouselImages = randomYdImages.map((image, i) => ({
  //   src: image.file,
  //   base64: plaiceholders[i],
  // }));

  const imagesFilepaths = await getFilepaths('public/images/homepage/');
  const carouselImages = await Promise.all(imagesFilepaths.map(async (filepath) => {
    const file = await fs.readFile(filepath);
    const { base64 } = await getPlaiceholder(file);
    return { src: filepath, base64 };
  }));

  return (
    <section className="h-screen-no-scroll">
      <TextSpinner text={"chikindin design"} radius={150} color={"white"} />
      <HomeCarousel images={carouselImages} />
      <ReduxProvider>
        <PageLoadedCheck />
      </ReduxProvider>
    </section>
  );
}
