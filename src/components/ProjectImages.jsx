"use client";

import Image from "next/image";
import ImageModal from "./ImageModal";
import { useEffect, useState } from "react";

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default function ProjectImages({ images }) {
  const [modalImage, setModalImage] = useState(null);
  const [activePage, setActivePage] = useState(0);
  const [shownImages, setShownImages] = useState(null);

  useEffect(() => {
    if (modalImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalImage]);

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
          shownImages.map(({ src }, i) => {
            const filepath = src.replace('public', '').replaceAll('\\', '/');
            return (
              <div key={filepath} className="relative h-[20rem] cursor-pointer">
                <Image
                  onClick={() => setModalImage({ filepath })}
                  alt={`Project image #${i + 1}`}
                  src={filepath}
                  fill={true}
                  sizes="100%"
                  quality={10}
                  placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
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
