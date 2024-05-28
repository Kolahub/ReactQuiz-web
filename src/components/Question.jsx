import {useState} from "react";
import Answer from "./Answer.jsx";
import QUESTION from "../questions.js";
import QuestionTimer from "./QuestionTimer.jsx";
function Question({index, onSelectAnswer, handleSkipQuestion}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  })

  let timer = 10000
  if (answer.selectedAnswer) {
    timer = 1000
  }

  if (answer.isCorrect !== null) {
    timer = 2000
  }

  function handleSelectAnswer (answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null
    })

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTION[index].answers[0] === answer
      })

      setTimeout(() => {
        onSelectAnswer(answer)
      }, 2000)
    }, 1000)
  }

  let answerState  = ''
  if(answer.selectedAnswer  && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong'
  } else if (answer.selectedAnswer) {
    answerState = 'answered'
  }

  return (
    <>
      <QuestionTimer
      key={timer}
        timeout={timer}
        onTimeout={ answer.selectedAnswer === '' ? handleSkipQuestion : null}
        mode={answerState}
      />
      <h2>{QUESTION[index].text}</h2>
      <Answer
        answers={QUESTION[index].answers}
        selectedAnswers={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </>
  );
}

export default Question;
