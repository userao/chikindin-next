import React from "react";

const CheckboxTypeQuestion = ({ question }) => {
  const answerVariants = question.getAnswerVariants();

  return (
    <div className="question">
      <p className="question__title">{question.getTitle()}</p>
      {answerVariants.map((answerVariant) => {
        const answerVariantId = answerVariant.getId();

        return (
          <div className="question__input-container" key={answerVariantId}>
            <input
              id={`${question.getId()}-${answerVariantId}`}
              type="radio"
              checked={answerVariant.isChecked()}
            />
            <label htmlFor={`${question.getId()}-${answerVariantId}`}>
              {answerVariant.getDescription()}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckboxTypeQuestion;
