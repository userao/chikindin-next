import ProjectsCarousel from "@/components/ProjectsCarousel";
import TextSpinner from "@/components/TextSpinner";
import paths from "@/utils/paths";
import routes from "@/utils/routes";
import getImages from "@/utils/getImages";

export default async function OurWork() {
  const req = await fetch(routes.getProjects(), { cache: "no-store" });
  const projects = await req.json();

  const projectsNormalized = await Promise.all(
    projects.map(async (project) => {
      const pathToImages = paths.getProjectImagesPathById(project.id);
      const pattern = `${pathToImages}/1/1.jpg`;
      const [image] = await getImages(pattern);
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
