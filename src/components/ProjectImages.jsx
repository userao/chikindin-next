import Image from "next/image";

export default function ProjectImages({ images }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {images.map(({ src, base64 }, i) => {
        return (
          <div key={src} className="relative h-[20rem]">
            <Image
              alt={`Project image #${i + 1}`}
              src={src}
              fill={true}
              sizes="100%"
              quality={20}
              blurDataURL={base64}
              placeholder="blur"
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
