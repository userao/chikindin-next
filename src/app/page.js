import HomeCarousel from "@/components/HomeCarousel";
import TextSpinner from "@/components/TextSpinner";
import projects from "@/projects.json";
import getProjectImages from "@/utils/getProjectImages";
import getYDImages from "@/utils/getYDImages";
import getBase64PlaceholderUrl from "@/utils/getBase64PlaceholderUrl";

export default async function Home() {
  const allYdImages = await getYDImages();

  const randomYdImages = projects.map((project) => {
    const projectYdImages = getProjectImages(project.id, allYdImages);
    const randomIndex = Math.floor(Math.random() * projectYdImages.length);

    return projectYdImages[randomIndex];
  });

  const plaiceholdersPromises = randomYdImages.map((image) =>
    getBase64PlaceholderUrl(image.file)
  );

  const plaiceholders = await Promise.all(plaiceholdersPromises);

  const carouselImages = randomYdImages.map((image, i) => ({
    src: image.file,
    base64: plaiceholders[i],
  }));

  return (
    <section className="h-screen-no-scroll">
      <TextSpinner text={"chikindin design"} radius={150} color={"white"} />
      <HomeCarousel images={carouselImages} />
    </section>
  );
}
