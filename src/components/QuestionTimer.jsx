import { useState, useEffect } from "react";

// const QUESTION_TIMER = 15 * 1000;
function QuestionTimer({ timeout, onTimeout, mode }) {
  const [timeRemaining, setTimeRemaining] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevState) => prevState - 10);
    }, 10);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <progress
      id="question-time"
      max={timeout}
      value={timeRemaining}
      className={mode}
    />
  );
}

export default QuestionTimer;
