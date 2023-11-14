import React from "react";
import AnswerVariantsTypeQuestion from "./AnswerVariantsTypeQuestion";
import InputTypeQuestion from "./InputTypeQuestion";

const Question = ({ question }) => {
  const { type } = question;

  if (type === 'input') {
    return <InputTypeQuestion question={question} />
  }

  return <AnswerVariantsTypeQuestion question={question} />;
};

export default Question;
