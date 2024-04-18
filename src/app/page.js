import HomeCarousel from "@/components/HomeCarousel";
import TextSpinner from "@/components/TextSpinner";
import ReduxProvider from "@/components/ReduxProvider";
import PageLoadedCheck from "@/components/PageLoadedCheck";
import getBase64BlurPlaceholder from "@/utils/getBase64BlurPlaceholder";
import getBackendRoute from "@/utils/getBackendRoute";
import getProjects from "@/utils/getProjects";

export default async function Home() {
  const backendRoute = getBackendRoute();
  const projects = await getProjects();
  const randomProjectImagesFilenames = projects.map((project) => {
    if (!project) return '';
    
    const randomImageIndex = Math.round(Math.random() * project.photos.length - 1);
    return project.photos[randomImageIndex].filename;
  });

  const carouselImages = await Promise.all(randomProjectImagesFilenames.map(async (filename) => {
    if (!filename) return [];
    const base64 = await getBase64BlurPlaceholder(filename);

    return { src: `${backendRoute}/${filename}`, base64 };
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
