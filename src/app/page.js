import HomeCarousel from "@/components/HomeCarousel";
import TextSpinner from "@/components/TextSpinner";
import AboutUs from "@/components/AboutUs";
import ReduxProvider from "@/components/ReduxProvider";
import PageLoadedCheck from "@/components/PageLoadedCheck";
import getBackendRoute from "@/utils/getBackendRoute";
import getProjects from "@/utils/getProjects";
import getBase64ShimmerPlaceholder from "@/utils/getBase64ShimmerPlaceholder";


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
    const imageSrc = `${backendRoute}/api/photos/${filename}`;
    const shimmer = await getBase64ShimmerPlaceholder(imageSrc);

    return { src: imageSrc, shimmer };
  }));

  return (
    <main>
      <section className="h-screen-no-scroll mb-5">
        <TextSpinner text={"chikindin design"} radius={150} color={"white"} />
        {/* <HomeCarousel images={carouselImages} /> */}
        <ReduxProvider>
          <PageLoadedCheck />
        </ReduxProvider>
      </section>
      <hr className="mx-8"></hr>
      <AboutUs />
    </main>
  );
}
