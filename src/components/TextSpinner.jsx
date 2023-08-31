import cn from "classnames";

export default function TextSpinner({ text, radius, color }) {
  const charStepAngle = 7;
  const textAngleSize = text.length * charStepAngle;
  const numberOfTextRepetitions = Math.floor(360 / textAngleSize);
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

  const containerClasses = cn(
    "fixed",
    "top-5",
    "right-[8rem]",
    "text-center",
    "text-sm",
    "z-50",
    'hidden',
    'md:block',
  );

  return (
    <div
      className={containerClasses}
      style={{
        color: `var(--clr-${color})`,
      }}
    >
      {charElements}
    </div>
  );
}
