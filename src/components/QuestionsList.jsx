"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { Formik, Form, useFormikContext } from "formik";
import * as cn from "classnames";
import Question from "./Question";
import Loading from "./Loading";
import { setLoadingState } from "@/store/loadingStateSlice";
import getBackendRoute from "@/utils/getBackendRoute";

const QuestionsList = ({ questions }) => {
  const backendHost = getBackendRoute();
  const formInitialValues = {};
  const [submitState, setSubmitState] = useState("not submitted");
  const [projectType, setProjectType] = useState(null);
  const [questionsToRender, setQuestionsToRender] = useState([]);
  const dispatch = useDispatch();

  const firstQuestion = {
    type: "radio",
    title: "Тип интерьера",
    options: [{ title: "Жилой" }, { title: "Общественный" }],
    required: true,
  };

  useEffect(() => {
    if (!projectType) return;
    const questionsByProjectType = questions.filter((q) => {
      return q.projectType === "all" || q.projectType === projectType;
    });
    setQuestionsToRender(questionsByProjectType);
  }, [projectType]);

  function handleChange(e) {
    const projectType = e.target.value === "Жилой" ? "living" : "civic";
    setProjectType(projectType);
  }

  function handleSubmit(values) {
    setSubmitState("fetching");
    fetch(`${backendHost}/api/polls`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then(() => {
        setSubmitState("success");
      })
      .catch(() => {
        setSubmitState("error");
      });
  }

  function handleClick() {
    dispatch(setLoadingState("loading"));
  }

  return (
    <>
      {(submitState === "not submitted" || submitState === "error") && (
        <Formik initialValues={formInitialValues} onSubmit={(values) => handleSubmit(values)}>
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
                {questionsToRender &&
                  questionsToRender.map((question) => (
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
      {submitState === "fetching" && <Loading />}
      {submitState === "success" && (
        <div className="h-screen-no-scroll items-center justify-center">
          <p className="pb-5">
            Спасибо, что заполнили анкету! Мы обязательно свяжемся с вами в ближайшее время.
          </p>
          <Link href="/" onClick={handleClick}>
            <button
              className="border-[3px] border-brand-primary-400
                rounded-xl p-4 text-neutral-400 w-full
                hover:bg-brand-primary-400 hover:text-white duration-500">
              Вернуться на главную
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default QuestionsList;
