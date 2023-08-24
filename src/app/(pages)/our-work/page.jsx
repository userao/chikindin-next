import ProjectsCarousel from "@/components/ProjectsCarousel";
import routes from "@/routes";

// todo:
// -сделать не уебищно
export default async function OurWork() {
  const req = await fetch(routes.getProjects());
  const projects = await req.json();
  console.log(projects)
  return (
    <section className="h-screen-no-scroll">
      <ProjectsCarousel projects={projects} />
    </section>
  );
};
