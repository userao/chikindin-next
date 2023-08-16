import React from "react";
import { Formik, Form } from "formik";
import Question from "./Question";
import getQuestionFormValidationSchema from "../utils/getQuestionFormValidationSchema";

const QuestionList = ({ questions }) => {
  const formInitialValues = {};
  const validationSchema = getQuestionFormValidationSchema(questions);

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={(values) => handleSubmit(values)}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}>
      <Form className="question-list">
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};

export default QuestionList;
