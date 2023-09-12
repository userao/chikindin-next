"use client";

import React from "react";
import { Formik, Form } from "formik";
import Question from "./Question";

const QuestionsList = ({ questions }) => {
  const formInitialValues = {};

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={(values) => handleSubmit(values)}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Form className="question-list">
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
        <button
          className="px-3 py-2 lowercase rounded-lg mt-8
          text-neutral-400 border-4 border-brand-primary-400
          hover:bg-brand-primary-400 hover:text-white duration-500"
          type="submit"
        >
          Отправить
        </button>
      </Form>
    </Formik>
  );
};

export default QuestionsList;
