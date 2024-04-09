import HomeCarousel from "@/components/HomeCarousel";
import TextSpinner from "@/components/TextSpinner";
import projects from "@/projects.json";
import ReduxProvider from "@/components/ReduxProvider";
import PageLoadedCheck from "@/components/PageLoadedCheck";
import getProjectImagesPaths from "@/utils/getProjectImagesPaths";
import getBase64BlurPlaceholder from "@/utils/getBase64BlurPlaceholder";

export default async function Home() {
  const projectImagesPathsArr = await Promise.all(projects.map(async (project) => await getProjectImagesPaths(project.id)));
  const randomProjectImagesPaths = projectImagesPathsArr.map((pathsArr) => {
    const randomImageIndex = Math.round(Math.random() * pathsArr.length - 1);
    return pathsArr[randomImageIndex];
  });

  const carouselImages = await Promise.all(randomProjectImagesPaths.map(async (filepath) => {
    if (!filepath) return [];
    const base64 = await getBase64BlurPlaceholder(filepath);
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
