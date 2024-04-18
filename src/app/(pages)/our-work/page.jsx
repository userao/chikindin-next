import ProjectsCarousel from "@/components/ProjectsCarousel";
import TextSpinner from "@/components/TextSpinner";
import ReduxProvider from "@/components/ReduxProvider";
import PageLoadedCheck from "@/components/PageLoadedCheck";
import getBase64BlurPlaceholder from "@/utils/getBase64BlurPlaceholder";
import getProjects from "@/utils/getProjects";
import getBackendRoute from "@/utils/getBackendRoute";

export const metadata = {
  title: "Chikindin-design: Наши работы",
  description: "Реализованные нами дизайн-проекты для жилых и общественных помещений.",
};

export default async function OurWork() {
  const backendRoute = getBackendRoute();
  const projects = await getProjects();
  
  const carouselImages = await Promise.all(
    projects.map(async (project) => {
      const firstImageFilename = project.photos[0].filename;
      const base64 = await getBase64BlurPlaceholder(firstImageFilename);
      return { src: `${backendRoute}/${firstImageFilename}`, base64 };
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
