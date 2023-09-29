import Image from "next/image";
import { useState } from "react";

export default function ImageModal({ image, handleClose }) {
  if (image === null) return null;

  const [imageSize, setImageSize] = useState(null);

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 w-screen h-screen flex items-center justify-center z-10 bg-card-hover overflow-y-hidden"
    >
      <button class="absolute top-[1rem] end-[3rem] z-30 text-white text-[5rem] leading-none">&times;</button>
      <div
        className="relative flex z-20 w-full h-full max-w-[90vw] max-h-[90vh]"
      >
        <Image
          alt={`Project image`}
          src={image.src}
          fill
          sizes="100vw"
          placeholder={image.base64}
          className="object-scale-down"
        />
      </div>
    </div>
  );
}
