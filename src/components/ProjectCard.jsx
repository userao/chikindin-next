import Image from "next/image";

export default function ProjectCard({ card }) {

  return (
    <div>
      <div className="h-screen relative">
        <Image
          src={`/${card.imageSrc}`}
          alt={card.name}
          fill={true}
          className="object-cover"
        />
        <div className="h-full w-full bg-card-hover absolute start-0 top-0 text-white flex flex-col justify-center ps-[10%]">
          <h2 className="text-[3rem] uppercase">{card.name}</h2>
          <p>локация: {card.location}</p>
          <p>назначение: {card.use}</p>
          <p>год: {card.year}</p>
        </div>
      </div>
    </div>
  );
}
