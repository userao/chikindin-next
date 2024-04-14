import React from "react";
import AnswerVariantsTypeQuestion from "./AnswerVariantsTypeQuestion";
import InputTypeQuestion from "./InputTypeQuestion";

const Question = (props) => {
  const { type } = props.question;

  if (type === "input") {
    return <InputTypeQuestion {...props} />;
  }

  return <AnswerVariantsTypeQuestion {...props} />;
};

export default Question;
