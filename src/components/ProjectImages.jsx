import Image from "next/image";

export default function ProjectImages({ imagesPaths }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {imagesPaths.map((path, i) => {
        return (
          <div key={path} className="relative h-[20rem]">
            <Image
              alt={`Project image #${i + 1}`}
              src={`/${path}`}
              fill={true}
              quality={20}
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
