import React, { useEffect, useState } from "react";
import { Field, useFormikContext } from "formik";

const InputTypeQuestion = ({ question }) => {
  const { id, title, required } = question;
  const { setFieldValue, touched, errors } = useFormikContext();
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(errors[title] ?? "");

  function handleChange(e) {
    setInputValue(e.target.value);
    setFieldValue(title, e.target.value);
  }

  const inputClasses =
    "block pt-2.5 pb-1 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-primary-400 peer";
  const labelClasses =
    "absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-primary-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-6";

  function checkIfEmpty(value) {
    let error;
    const fieldRequiredMsg = "Поле обязательно для заполнения";

    if (!value) {
      error = fieldRequiredMsg;
      setErrorMessage(fieldRequiredMsg);
    } else {
      setErrorMessage("");
    }

    return error;
  }

  return (
    <div className="py-4">
      <div className="relative">
        <Field
          className={inputClasses}
          name={title}
          type="text"
          id={`question-${id}`}
          value={inputValue}
          onChange={handleChange}
          placeholder=" "
          validate={required ? (value) => checkIfEmpty(value) : null}
        ></Field>
        <label htmlFor={`question-${id}`} className={labelClasses}>
          {title}
        </label>
      </div>
      <div className="absolute text-sm text-red-500">{errorMessage}</div>
    </div>
  );
};

export default InputTypeQuestion;
