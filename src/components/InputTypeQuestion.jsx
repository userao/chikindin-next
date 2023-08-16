import React from "react";
import { Field, useFormikContext } from "formik";

const InputTypeQuestion = ({ question }) => {
  const { id, title, additiveInfo } = question;
  const { values, setFieldValue, errors } = useFormikContext();
  const initialValue = values[title] ?? "";
  const [inputValue, setInputValue] = React.useState(initialValue);
  const questionError = errors[title];

  function handleChange(e) {
    setInputValue(e.target.value);
    setFieldValue(title, e.target.value);
  }

  return (
    <div className="question">
      <label>
        <p className="question__title">{title}</p>
        {additiveInfo && <p className="question__additive-info">{additiveInfo}</p>}
        <div className="question__input-container">
          <Field
            id={`question-${id}`}
            name={title}
            type="text"
            onChange={handleChange}
            value={inputValue}
          />
        </div>
        {questionError ? <div className="question__error-feedback">{questionError}</div> : null}
      </label>
    </div>
  );
};

export default InputTypeQuestion;
