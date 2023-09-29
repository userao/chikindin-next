'use client'

import Image from "next/image";
import ImageModal from "./ImageModal";
import { useState } from "react";

export default function ProjectImages({ images }) {
  const [modalImage, setModalImage] = useState(null);

  function handleClose(e) {
    setModalImage(null);
  }

  return (
    <>
      <ImageModal image={modalImage} handleClose={handleClose} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {images.map(({ src, base64 }, i) => {
          return (
            <div key={src} className="relative h-[20rem] cursor-pointer">
              <Image
                onClick={() => setModalImage({ src, base64 })}
                alt={`Project image #${i + 1}`}
                src={src}
                fill={true}
                sizes="100%"
                quality={10}
                placeholder={base64}
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
