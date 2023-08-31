import ProjectsCarousel from "@/components/ProjectsCarousel";
import TextSpinner from "@/components/TextSpinner";
import getRandomProjectImagePath from "@/utils/getRandomProjectImagePath";
import routes from "@/utils/routes";

export default async function OurWork() {
  const req = await fetch(routes.getProjects());
  const projects = await req.json();

  const cards = await Promise.all(projects.map(async (project) => {
    const { id, name, description } = project;

    const imagePath = await getRandomProjectImagePath(id);
    const sliceFrom = imagePath.indexOf('image');
    const imageSrcPath = imagePath.slice(sliceFrom);

    return { id, name, description, imagePath: imageSrcPath }
  }));

  return (
    <section className="h-screen-no-scroll">
      <TextSpinner text={'наши работы'} radius={150} color={'brand-primary-400'} />
      <ProjectsCarousel cards={cards} />
    </section>
  );
};
