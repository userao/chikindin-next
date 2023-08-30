import HomeCarousel from "@/components/HomeCarousel";
import TextSpinner from "@/components/TextSpinner";
import * as path from 'path';
import fs from 'fs/promises';
import routes from "@/utils/routes";
import paths from '@/utils/paths';
import getFolderContent from "@/utils/getFolderContent";
import getRandomProjectImagePath from "@/utils/getRandomProjectImagePath";


export default async function Home() {
  const req = await fetch(routes.getProjects());
  const projects = await req.json();

  const cards = await Promise.all(projects.map(async (project) => {
    const randomProjectImagePath = await getRandomProjectImagePath(project.id);
    const sliceFrom = randomProjectImagePath.indexOf('images');
    const pathForImgSrc = randomProjectImagePath.slice(sliceFrom);
    
    return {
      imagePath: pathForImgSrc,
      projectName: project.name,
    }
  }));

  return (
    <section className="h-screen-no-scroll">
      <TextSpinner text={'chikindin design'} radius={150} />
      <HomeCarousel cards={cards}/>
    </section>
  );
}
