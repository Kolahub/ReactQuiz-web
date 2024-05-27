import React from "react";
import { useState, useCallback, useRef } from "react";
import Question from "./Question.jsx";
import QUESTION from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";


function Quiz() {

    const [answerState, setAnswerState] = useState('')
    const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
  const isQuizComplete = activeQuestionIndex === QUESTION.length;

 const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswers) {
    setAnswerState('answered')
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswers];
    });

    setTimeout(() => {
        if(selectedAnswers === QUESTION[activeQuestionIndex].answers[0]) {
            setAnswerState('correct')
        } else {
            setAnswerState('wrong')
        }
        setTimeout(() => {
            setAnswerState('')
        }, 1000)
    }, 1000)
  }, [activeQuestionIndex])

  const handleSkipQuestion = useCallback(() => {
    return handleSelectAnswer(null)
  }, [handleSelectAnswer])

  if (isQuizComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="trophy icon" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <div id="question">
        <Question 
        key={activeQuestionIndex}
        questionText={QUESTION[activeQuestionIndex].text}
        answers={QUESTION[activeQuestionIndex].answers}
        selectedAnswers={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        handleSelectAnswer={handleSelectAnswer}
        handleSkipQuestion={handleSkipQuestion}
        />
      </div>
    </div>
  );
}

export default Quiz;
