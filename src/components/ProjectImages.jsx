"use client";

import Image from "next/image";
import ImageModal from "./ImageModal";
import { useEffect, useState } from "react";

export default function ProjectImages({ images }) {
  const [modalImage, setModalImage] = useState(null);
  const [activePage, setActivePage] = useState(0);
  const [shownImages, setShownImages] = useState(null);

  useEffect(() => {
    function renderGalleryImages() {
      const startImageIndex = activePage * imagesPerPage;
      const currentImages = [...images].splice(startImageIndex, imagesPerPage);
      setShownImages(currentImages);
    }

    renderGalleryImages();
  }, [activePage, images]);

  const imagesPerPage = 12;
  const numberOfPages = Math.ceil(images.length / imagesPerPage);

  const pagesLinksElements = [];

  for (let i = 0; i < numberOfPages; i += 1) {
    const pageLinkElement = (
      <li
        key={i}
        className={`cursor-pointer hover:text-brand-primary-400 duration-300 ${
          i === activePage ? "text-brand-primary-400" : null
        }`}
        onClick={() => setActivePage(i)}
      >
        <a>{i + 1}</a>
      </li>
    );
    pagesLinksElements.push(pageLinkElement);
  }

  function handleClose(e) {
    setModalImage(null);
  }

  return (
    <>
      <ImageModal image={modalImage} handleClose={handleClose} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-2">
        {shownImages &&
          shownImages.map(({ src, base64 }, i) => {
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
      <ul className="flex gap-5 p-5 mx-auto w-fit text-lg">
        {pagesLinksElements}
      </ul>
    </>
  );
}
