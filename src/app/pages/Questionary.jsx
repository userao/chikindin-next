import React from "react";
import { useSelector } from "react-redux";

import { questionsSelectors } from "../features/questions/questionsSlice";

import QuestionList from "../components/QuestionList";

const Questionary = () => {
  const questions = useSelector(questionsSelectors.selectAll);

  return (
    <>
      {questions.length && (
        <div className="question-list__container">
          <QuestionList questions={questions} />
        </div>
      )}
    </>
  );
};

export default Questionary;
