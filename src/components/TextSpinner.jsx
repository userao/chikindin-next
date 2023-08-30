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
      const classes = cn("absolute", "origin-bottom", "w-5");
      const element = (
        <p
          className={classes}
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
      className='fixed top-10 right-10 text-center text-sm flex justify-center z-50  opacity-0 lg:opacity-100'
      style={{ width: radius * 2, height: radius * 2 }}
    >
      {charElements}
    </div>
  );
}
