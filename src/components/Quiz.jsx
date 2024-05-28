import React from "react";
import { useState, useCallback } from "react";
import Question from "./Question.jsx";
import QUESTION from "../questions.js";
import Summary from "./Summary.jsx";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const isQuizComplete = activeQuestionIndex === QUESTION.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswers
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswers];
    });
  },
  []);

  const handleSkipQuestion = useCallback(() => {
    return handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (isQuizComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <div id="question">
        <Question
          key={activeQuestionIndex}
          index={activeQuestionIndex}
          onSelectAnswer={handleSelectAnswer}
          handleSkipQuestion={handleSkipQuestion}
        />
      </div>
    </div>
  );
}

export default Quiz;
