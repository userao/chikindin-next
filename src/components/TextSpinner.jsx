"use client";

import { useEffect, useRef } from "react";
import cn from "classnames";

export default function TextSpinner({ text, radius, color }) {
  const spinner = useRef(null);

  const charStepAngle = 10;
  const textAngleSize = text.length * charStepAngle;
  let numberOfTextRepetitions = Math.floor(360 / textAngleSize) - 1;
  if (numberOfTextRepetitions === 1) {
    numberOfTextRepetitions += 1;
  }
  const spaceBetweenTextBlocksAngle =
    (360 - textAngleSize * numberOfTextRepetitions) / numberOfTextRepetitions;

  let allText = "";

  for (let i = 0; i < numberOfTextRepetitions; i += 1) {
    allText += `${text}`;
  }

  const charElements = [];

  for (let i = 0; i < numberOfTextRepetitions; i += 1) {
    const startAngle = i * (textAngleSize + spaceBetweenTextBlocksAngle);
    text.split("").forEach((ch, j) => {
      const charClasses = cn("absolute", "origin-bottom", "w-5");
      const element = (
        <p
          key={ch + i + j}
          className={charClasses}
          style={{
            height: radius,
            transform: `rotate(${j * charStepAngle + startAngle}deg)`,
          }}
        >
          {ch}
        </p>
      );
      charElements.push(element);
    });
  }

  return (
    <div
      className="z-50 pointer-events-none fixed flex justify-center items-center top-5 right-3 animate-[spin_40s_linear_infinite]"
      style={{ width: radius * 2, aspectRatio: "1/1" }}
    >
      <div
        className='text-center text-sm'
        style={{
          color: `var(--clr-${color})`,
          width: radius * 2,
          aspectRatio: "1/1",
          transform: "translateX(47%)",
        }}
        ref={spinner}
      >
        {charElements}
      </div>
    </div>
  );
}
