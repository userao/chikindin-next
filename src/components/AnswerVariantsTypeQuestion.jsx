"use client";

import React from "react";
import { Field, useFormikContext } from "formik";

const AnswerVariantsTypeQuestion = ({ question, customHandleChange = null }) => {
  const { variants, type, title, required } = question;
  const { handleChange, touched, errors, isValid, submitCount } = useFormikContext();

  function checkIfAnswered(value) {
    let error;
    const answerRequired = "Это обязательный вопрос";

    if (!value) {
      error = answerRequired;
    }

    return error;
  }

  return (
    <div className="py-4 animate-fadeIn">
      <p className="pb-1 font-bold text-lg">{question.title}</p>
      {variants &&
        variants.map((variant) => {
          return (
            <div className="py-1" key={variant}>
              <Field
                type={type}
                id={variant}
                name={title}
                value={variant}
                onChange={(e) => {
                  if (customHandleChange) customHandleChange(e);
                  handleChange(e);
                }}
                validate={required ? (value) => checkIfAnswered(value) : null}
              />
              <label htmlFor={variant} className="ps-1">
                {variant}
              </label>
            </div>
          );
        })}
      {((touched[title] && errors[title]) || (!isValid && submitCount > 0)) && (
        <div className="absolute text-sm text-red-500">{errors[title]}</div>
      )}
    </div>
  );
};

export default AnswerVariantsTypeQuestion;
