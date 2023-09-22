import Image from "next/image";
import getBase64PlaceholderUrl from "@/utils/getBase64PlaceholderUrl";

export default function ProjectImages({ images }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {images.map(async ({ src, base64 }, i) => {
        return (
          <div key={src} className="relative h-[20rem]">
            <Image
              alt={`Project image #${i + 1}`}
              src={src}
              fill={true}
              sizes="100%"
              quality={20}
              placeholder={base64}
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
