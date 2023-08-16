import React from "react";
import { useSelector } from "react-redux";
import { answersSelectors } from "../features/answers/answersSlice";
import { Field } from "formik";

const AnswerVariantsTypeQuestion = ({ question }) => {
  const questionId = question.id;
  const answers = useSelector(answersSelectors.selectAll);
  const questionAnswers = answers.filter((answer) => answer.questionId === questionId);

  return (
    <div className="question">
      <p className="question__title">{question.title}</p>
      {question.additiveInfo && <p className="question__additive-info">{question.additiveInfo}</p>}
      {questionAnswers.map((answer) => {
        const { id: answerId, title: answerTitle } = answer;

        return (
          <div className="question__input-container" key={answerId}>
            <Field
              type={question.type}
              id={`${questionId}-${answerId}`}
              name={question.title}
              value={answerTitle}
            />
            <label htmlFor={`${questionId}-${answerId}`}>{answerTitle}</label>
          </div>
        );
      })}
    </div>
  );
};

export default AnswerVariantsTypeQuestion;
