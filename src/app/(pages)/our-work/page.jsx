import ProjectsCarousel from "@/components/ProjectsCarousel";
import TextSpinner from "@/components/TextSpinner";
import paths from "@/utils/paths";
import routes from "@/utils/routes";
import getImages from "@/utils/getImages";
import projects from "@/projects.json";

export default async function OurWork() {
  const projectsNormalized = await Promise.all(
    projects.map(async (project) => {
      const pathToImages = paths.getProjectImagesPathById(project.id);
      const pattern = `${pathToImages}/1/1.jpg`;
      const [image] = await getImages(pattern);
      image.img.src = '/' + image.img.src.split('\\').join('/');
      return { ...project, ...image };
    })
  );

  return (
    <section className="h-screen-no-scroll">
      <TextSpinner
        text={"наши работы"}
        radius={150}
        color={"brand-primary-400"}
      />
      <ProjectsCarousel projects={projectsNormalized} />
    </section>
  );
}
