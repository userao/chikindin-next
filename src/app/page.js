import HomeCarousel from "@/components/HomeCarousel";
import TextSpinner from "@/components/TextSpinner";
import routes from "@/utils/routes";
import getRandomProjectImagePath from "@/utils/getRandomProjectImagePath";
import getImages from "@/utils/getImages";


export default async function Home() {
  const req = await fetch('http://127.0.0.1:3000', { cache: "no-store" });
  const projects = await req.json();

  const images = await Promise.all(projects.map(async (project) => {
    const randomProjectImagePath = await getRandomProjectImagePath(project.id);
    const [image] = await getImages(randomProjectImagePath);

    return image;
  }));

  return (
    <section className="h-screen-no-scroll">
      <TextSpinner text={'chikindin design'} radius={150} color={'white'} />
      <HomeCarousel images={images}/>
    </section>
  );
}
