"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ProjectCard({ card }) {
  const fadeBlockRef = useRef(null);

  useEffect(() => {
    if (!fadeBlockRef.current) return;

    const viewportHeight = window.visualViewport.height;

    function setOpacity() {
      const scrolledBy = window.scrollY;
      const opacityValue = (scrolledBy / viewportHeight) * 1.5;
      fadeBlockRef.current.style.setProperty(
        "opacity",
        Math.min(opacityValue, 1)
      );
    }

    window.addEventListener("scroll", setOpacity);

    return () => window.removeEventListener("scroll", setOpacity);
  }, [fadeBlockRef]);

  return (
    <div>
      <div className="h-screen relative mb-4">
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
        <div
          ref={fadeBlockRef}
          className="absolute bottom-0 w-full h-full bg-gradient-to-t from-white to-transparent"
          style={{
            opacity: 0,
          }}
        />
      </div>
      <div className="h-[500px]">Планировка сюда</div>
    </div>
  );
}
