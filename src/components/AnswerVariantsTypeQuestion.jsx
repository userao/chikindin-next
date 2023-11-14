import React from "react";
import { useSelector } from "react-redux";
import { Field } from "formik";

const AnswerVariantsTypeQuestion = ({ question }) => {
  const { variants } = question;

  return (
    <div className="py-4">
      <p className="pb-1">{question.title}</p>
      {variants.map((variant) => {

        return (
          <div className="py-1" key={variant}>
            <Field
              type={question.type}
              id={variant}
              name={question.title}
              value={variant}
            />
            <label htmlFor={variant} className="ps-1">{variant}</label>
          </div>
        );
      })}
    </div>
  );
};

export default AnswerVariantsTypeQuestion;
