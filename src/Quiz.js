// Quiz.js
import React, { useState } from 'react';

const Quiz = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz">
      {showResult ? (
        <div className="result-section">
          <h2>Your Score: {score} / {quizData.length}</h2>
          <p>Thanks for taking the quiz!</p>
        </div>
      ) : (
        <>
          <div className="question-section">
            <h2>Question {currentQuestion + 1}</h2>
            <p>{quizData[currentQuestion].question}</p>
          </div>
          <div className="options-section">
            {quizData[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
