import React from "react";
import Answer from "./Answer.jsx";
import QuestionTimer from "./QuestionTimer.jsx";
function Question({questionText, answers, selectedAnswers, answerState, handleSelectAnswer, handleSkipQuestion}) {
  return (
    <>
      <QuestionTimer
        timeout={10000}
        onTimeout={handleSkipQuestion}
      />
      <h2>{questionText}</h2>
      <Answer
        answers={answers}
        selectedAnswers={selectedAnswers}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </>
  );
}

export default Question;
