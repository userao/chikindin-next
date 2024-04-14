"use client";

import Image from "next/image";
import ImageModal from "./ImageModal";
import { useEffect, useState } from "react";
import getBase64ShimmerPlaceholder from "@/utils/getBase64ShimmerPlaceholder";

export default function ProjectImages({ images }) {
  const [modalImage, setModalImage] = useState(null);
  const [activePage, setActivePage] = useState(0);
  const [shownImages, setShownImages] = useState(null);
  const imagesPerPage = 12;

  useEffect(() => {
    if (modalImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalImage]);

  useEffect(() => {
    const startImageIndex = activePage * imagesPerPage;
    const currentImages = [...images].splice(startImageIndex, imagesPerPage);
    setShownImages(currentImages);
  }, [activePage, images]);

  function getPageLinkElements(imagesPerPage, images) {
    const numberOfPages = Math.ceil(images.length / imagesPerPage);
    const pagesLinksElements = [];
    for (let i = 0; i < numberOfPages; i += 1) {
      const pageLinkElement = (
        <li
          key={i}
          className={`cursor-pointer hover:text-brand-primary-400 duration-300 ${
            i === activePage ? "text-brand-primary-400" : null
          }`}
          onClick={() => setActivePage(i)}>
          <a>{i + 1}</a>
        </li>
      );
      pagesLinksElements.push(pageLinkElement);
    }

    return pagesLinksElements;
  }

  function handleClose(e) {
    setModalImage(null);
  }

  return (
    <>
      <ImageModal image={modalImage} handleClose={handleClose} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-2">
        {shownImages &&
          shownImages.map((src, i) => {
            const filepath = src.replace("public", "").replaceAll("\\", "/");
            return (
              <div key={filepath} className="relative h-[20rem] cursor-pointer">
                <Image
                  onClick={() => setModalImage({ filepath })}
                  alt={`Project image #${i + 1}`}
                  src={filepath}
                  fill={true}
                  sizes="100%"
                  quality={5}
                  placeholder={getBase64ShimmerPlaceholder()}
                  className="object-cover"
                />
              </div>
            );
          })}
      </div>
      <ul className="flex gap-5 p-5 mx-auto w-fit text-lg">
        {getPageLinkElements(imagesPerPage, images)}
      </ul>
    </>
  );
}
