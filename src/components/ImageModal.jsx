import Image from "next/image";
import getBase64ShimmerPlaceholder from "@/utils/getBase64ShimmerPlaceholder";

export default function ImageModal({ image, handleClose }) {
  if (image === null) return null;

  const shimmer = getBase64ShimmerPlaceholder();

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 w-screen h-screen flex items-center justify-center z-10 bg-card-hover overflow-y-hidden backdrop-blur">
      <button className="absolute top-[1rem] start-[3rem] z-30 text-white text-[5rem] leading-none hover:text-brand-primary-400 duration-300">
        &times;
      </button>
      <div className="relative flex z-20 w-full h-full max-w-[70vw] max-h-[90vh]">
        <Image
          alt={`Project image`}
          src={image.src}
          placeholder={shimmer}
          fill
          sizes="100vw"
          className="object-scale-down"
        />
      </div>
    </div>
  );
}
