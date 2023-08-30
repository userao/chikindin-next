import ProjectsCarousel from "@/components/ProjectsCarousel";
import TextSpinner from "@/components/TextSpinner";
import routes from "@/utils/routes";

// todo:
// -сделать не уебищно
export default async function OurWork() {
  const req = await fetch(routes.getProjects());
  const projects = await req.json();

  return (
    <section className="h-screen-no-scroll">
      <ProjectsCarousel projects={projects} />
    </section>
  );
};
