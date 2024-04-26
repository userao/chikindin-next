"use client";

import React from "react";
import { Field, useFormikContext } from "formik";

const AnswerVariantsTypeQuestion = ({ question }) => {
  const { options, type, title, required } = question;
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
      {options &&
        options.map((option, i) => {
          return (
            <div className="py-1" key={i}>
              <Field
                type={type}
                id={i}
                name={title}
                value={option.title}
                onChange={handleChange}
                validate={required ? (value) => checkIfAnswered(value) : null}
              />
              <label htmlFor={i} className="ps-1">
                {option.title}
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
