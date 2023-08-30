export default function Project({ project }) {
  const {
    id,
    imagesPath,
    projectName,
    projectDescription,
    location,
    year,
    use,
  } = project;

  return (
    <div>
      <div className="h-screen relative">
        <img
          src={`../../${imagesPath}/1/1.jpg`}
          alt={projectName}
          className="h-full object-cover w-full"
        />
        <div className="h-full w-full bg-card-hover absolute start-0 top-0 text-white flex flex-col justify-center ps-[10%]">
          <h2 className="text-[3rem] uppercase">{projectName}</h2>
          <p>локация: {location}</p>
          <p>назначение: {use}</p>
          <p>год: {year}</p>
        </div>
      </div>
    </div>
  );
}
