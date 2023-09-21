import ProjectsCarousel from "@/components/ProjectsCarousel";
import TextSpinner from "@/components/TextSpinner";
import projects from "@/projects.json";
import getProjectImages from "@/utils/getProjectImages";
import getYDImages from "@/utils/getYDImages";
import getImage from "@/utils/getImage";

export default async function OurWork() {
  const allYdImages = await getYDImages();
  const projectsNormalized = await Promise.all(projects.map(async (p) => {
    const projectYDImages = await getProjectImages(p.id, allYdImages);
    const image = await getImage(projectYDImages[0].file);
    return { ...p, ...image }
  }))

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
