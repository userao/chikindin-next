import React from "react";
import AnswerVariantsTypeQuestion from "./AnswerVariantsTypeQuestion";
import InputTypeQuestion from "./InputTypeQuestion";

const Question = ({ question }) => {
  switch(question.type) {
    case 'input':
      return <InputTypeQuestion question={question} />;
    case 'checkbox':
    case 'radio':
      return <AnswerVariantsTypeQuestion question={question} />;
    default:
      throw new Error(`Unknown question type: ${question.type} at question id ${question.id}`);
  }
};

export default Question;
