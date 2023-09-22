import ProjectsCarousel from "@/components/ProjectsCarousel";
import TextSpinner from "@/components/TextSpinner";
import projects from "@/projects.json";
import getProjectImages from "@/utils/getProjectImages";
import getYDImages from "@/utils/getYDImages";
import getBase64PlaceholderUrl from "@/utils/getBase64PlaceholderUrl";

export default async function OurWork() {
  const allYdImages = await getYDImages();

  const carouselImages = projects.map((project) => {
    const projectImages = getProjectImages(project.id, allYdImages);
    const [firstImage] = projectImages;
    return firstImage;
  });

  const plaiceholdersPromises = carouselImages.map((image) => getBase64PlaceholderUrl(image.preview));

  const plaiceholders = await Promise.all(plaiceholdersPromises);

  const carouselData = projects.map((project, i) => ({
    ...project,
    src: carouselImages[i].file,
    base64: plaiceholders[i]
  }))

  return (
    <section className="h-screen-no-scroll">
      <TextSpinner
        text={"наши работы"}
        radius={150}
        color={"brand-primary-400"}
      />
      <ProjectsCarousel carouselData={carouselData} />
    </section>
  );
}
