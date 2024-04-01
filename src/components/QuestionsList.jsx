"use client";
// сделать бота для отправки анкет
import React, { useState } from "react";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as cn from "classnames";
import Question from "./Question";
import { useDispatch } from "react-redux";
import { setLoadingState } from "@/store/loadingStateSlice";
import { useEffect } from "react";

const QuestionsList = ({ questions }) => {
  const formInitialValues = {};
  const [submitState, setSubmitState] = useState("not submitted");
  const [projectType, setProjectType] = useState(null);
  const [questionsToRender, setQuestionsToRender] = useState([]);
  const dispatch = useDispatch();

  const firstQuestion = {
    "type": "radio",
    "title": "Тип интерьера",
    "variants": ["Жилой", "Общественный"],
    "required": true,
  }
  
  useEffect(() => {
    if (!projectType) return;
    const questionsByProjectType = questions.filter(q => {
      return q.projectType === 'all' || q.projectType === projectType;
    });
    setQuestionsToRender(questionsByProjectType);
  }, [projectType])

  function handleChange(e) {
    const projectType = e.target.value === 'Жилой' ? 'living' : 'civic';
    setProjectType(projectType); 
  }

  function handleSubmit(values) {
    setSubmitState("fetching");
    const messageText = stringifyFormData(values);
    fetch(
      `http://localhost:5000/api/polls`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values)
      }
    )
      .then(() => {
        setSubmitState("success");
      })
      .catch(() => {
        setSubmitState("error");
      });
  }

  function handleClick() {
    dispatch(setLoadingState('loading'))
  }

  function stringifyFormData(formData) {
    return Object.entries(formData).reduce((acc, [key, val]) => {
      let valueString = val;

      if (Array.isArray(val)) {
        valueString = val.join(", ");
      }

      return `${acc}${key}: ${valueString}\n`;
    }, "Новая анкета:\n\n");
  }

  return (
    <>
      {(submitState === "not submitted" || submitState === "error") && (
        <Formik
          initialValues={formInitialValues}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ isValid }) => {
            const buttonClasses = cn(
              "px-3",
              "py-2",
              "lowercase",
              "rounded-lg",
              "mt-8",
              "text-neutral-400",
              "border-4",
              "w-full",
              {
                "border-brand-primary-400": isValid,
                "hover:bg-brand-primary-400": isValid,
                "hover:text-white": isValid,
                "duration-500": isValid,
              }
            );

            return (
              <Form className="question-list">
                <Question question={firstQuestion} customHandleChange={handleChange} />
                {questionsToRender && questionsToRender.map((question) => (
                  <Question key={question.id} question={question} />
                ))}
                <button className={buttonClasses} type="submit">
                  {isValid ? "Отправить" : "Ответьте на обязательные вопросы"}
                </button>
              </Form>
            );
          }}
        </Formik>
      )}
      {submitState === "fetching" && (
        <div className="h-screen-no-scroll flex items-center justify-center">
          <div className="w-9 h-9 border-4 border-brand-primary-400 border-s-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {submitState === "success" && (
        <div className="h-screen-no-scroll items-center justify-center">
          <p className="pb-5">
            Спасибо, что заполнили анкету! Мы обязательно свяжемся с вами в
            ближайшее время.
          </p>
          <Link href="/" onClick={handleClick}>
            <button
              className="border-[3px] border-brand-primary-400
                rounded-xl p-4 text-neutral-400 w-full
                hover:bg-brand-primary-400 hover:text-white duration-500"
            >
              Вернуться на главную
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default QuestionsList;
