import HomeCarousel from "@/components/HomeCarousel";
import TextSpinner from "@/components/TextSpinner";
import getImage from "@/utils/getImage";
import projects from '@/projects.json';
import getProjectImages from "@/utils/getProjectImages";
import getYDImages from '@/utils/getYDImages'


export default async function Home() {
  const allYdImages = await getYDImages();

  const randomYdImages = projects.map((project) => {
    const projectYdImages = getProjectImages(project.id, allYdImages);
    const randomIndex = Math.floor(Math.random() * projectYdImages.length);

    return projectYdImages[randomIndex];
  });
  
  const carouselImages = await Promise.all(randomYdImages.map(async (ydi) => {
    const { file } = ydi;

    return getImage(file)
  }))

  return (
    <section className="h-screen-no-scroll">
      <TextSpinner text={'chikindin design'} radius={150} color={'white'} />
      <HomeCarousel images={carouselImages} />
    </section>
  );
}

